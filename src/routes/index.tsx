import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Toaster } from "sonner";
import { CreatePostModal } from "@/components/CreatePostModal";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Header } from "@/components/Header";
import { MobileFilters } from "@/components/MobileFilters";
import { PostCard } from "@/components/PostCard";
import { PostDetailsModal } from "@/components/PostDetailsModal";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { resetFilters } from "@/lib/redux/filterSlice";
import { selectActiveFilterCount } from "@/lib/redux/selectors";
import { useGetFindByAllHouseListQuery } from "@/lib/redux/features/postApi";
import ErrorPage from "@/components/ErrorPage/ErrorPage";

export const Route = createFileRoute("/")({ component: Home });

/* -------------------------------------------------------------------------- */
/*  Config                                                                    */
/* -------------------------------------------------------------------------- */

const PAGE_SIZE = 12;
const DEBOUNCE_MS = 400;

// These must match the defaults in your filterSlice. When a range is left at
// its default we do NOT send it, so listings outside the range still show up.
const DEFAULT_MIN_COST = 0;
const DEFAULT_MAX_COST = 150000;

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

type QueryParams = Record<string, string | number>;

/**
 * A filter "has a value" only when it is a real selection.
 * null, undefined, "", "all", "null" and "undefined" are all treated as unset.
 */
const hasValue = (value: unknown): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") {
    const v = value.trim().toLowerCase();
    return v !== "" && v !== "all" && v !== "null" && v !== "undefined";
  }
  return true;
};

/** Returns `value` after it has stopped changing for `delay` ms. */
function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

/** e.g. [1, "gap", 4, 5, 6, "gap", 20] — keeps the pager short on many pages. */
function getPageItems(current: number, total: number): Array<number | "gap"> {
  const wanted = [1, total, current - 1, current, current + 1].filter(
    (p) => p >= 1 && p <= total,
  );
  const sorted = Array.from(new Set(wanted)).sort((a, b) => a - b);

  const items: Array<number | "gap"> = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) items.push("gap");
    items.push(p);
  });
  return items;
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

function Home() {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectActiveFilterCount);
  const filters = useAppSelector((state) => state.filters);

  const queryParams = useMemo(() => {
    const raw: Record<string, unknown> = {
      searchTerm: typeof filters.searchTerm === "string" ? filters.searchTerm.trim() : undefined,
      division: filters.division,
      district: filters.district,
      thana: filters.thana,
      area: filters.area,
      category: filters.category,
      tenantType: filters.tenantType,
      minRent: filters.minCost > DEFAULT_MIN_COST ? filters.minCost : undefined,
      maxRent: filters.maxCost < DEFAULT_MAX_COST ? filters.maxCost : undefined,
      fromDate: filters.dateFrom,
      toDate: filters.dateTo,
    };

    return Object.fromEntries(Object.entries(raw).filter(([, v]) => hasValue(v))) as QueryParams;
  }, [filters]);

  // 2. Debounce so typing in search / dragging a slider doesn't fire a request per change.
  const debouncedParams = useDebouncedValue(queryParams, DEBOUNCE_MS);
  const filterKey = useMemo(() => JSON.stringify(debouncedParams), [debouncedParams]);

  // 3. Page belongs to a filter set. When the filters change, the page falls back to 1
  //    without needing an effect (which would cause an extra request).
  const [pageState, setPageState] = useState({ key: filterKey, page: 1 });
  const page = pageState.key === filterKey ? pageState.page : 1;

  const goToPage = (nextPage: number) => {
    setPageState({ key: filterKey, page: nextPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 4. Fetch.
  const { data, isLoading, isFetching, isError, error, isSuccess } = useGetFindByAllHouseListQuery({
    page,
    limit: PAGE_SIZE,
    ...debouncedParams,
  });

  const allPostData = data?.data?.data ?? [];
  const metaData = data?.data?.meta;

  if (isError && error) {
    return <ErrorPage error={error} />;
  }

  const total = metaData?.total ?? 0;
  const rangeStart = total === 0 || !metaData ? 0 : (metaData.page - 1) * metaData.limit + 1;
  const rangeEnd = rangeStart === 0 ? 0 : rangeStart + allPostData.length - 1;

  return (
    <div className="paper-grid min-h-dvh">
      <Header />
      <div className="mx-auto flex max-w-[1440px] gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <aside className="sticky top-24 hidden h-[calc(100dvh-7rem)] w-72 shrink-0 overflow-y-auto pr-2 lg:block">
          <FilterSidebar />
        </aside>

        <main className="min-w-0 flex-1">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                Bangladesh rentals
              </p>
              <h1 className="mt-1 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                Rooms, flats, and offices
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                Filter by division, thana, tenant type, and the real monthly total — rent plus gas,
                power, water, and service charge.
              </p>
            </div>
            <p className="text-sm tabular-nums text-muted" aria-live="polite">
              {isLoading
                ? "Loading listings…"
                : total === 0
                  ? "0 listings"
                  : `${rangeStart}–${rangeEnd} of ${total} listings`}
              {active > 0 ? ` · ${active} filters` : ""}
            </p>
          </div>

          {isLoading && <ListingSkeletons count={6} />}

          {!isLoading &&
            isSuccess &&
            (total === 0 ? (
              <EmptyState onReset={() => dispatch(resetFilters())} />
            ) : (
              <div
                aria-busy={isFetching}
                className={`grid grid-cols-1 gap-5 transition-opacity md:grid-cols-2 lg:grid-cols-3 ${
                  isFetching ? "opacity-60" : "opacity-100"
                }`}
              >
                {allPostData.map((post: any) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ))}

          {!isLoading && isSuccess && metaData && metaData.totalPage > 1 && (
            <nav
              className="mt-8 flex flex-wrap items-center justify-center gap-1.5"
              aria-label="Pagination"
            >
              <Button
                variant="outline"
                size="icon"
                disabled={metaData.page <= 1 || isFetching}
                onClick={() => goToPage(metaData.page - 1)}
                aria-label="Previous page"
              >
                <ChevronLeft />
              </Button>

              {getPageItems(metaData.page, metaData.totalPage).map((item, index) =>
                item === "gap" ? (
                  <span
                    key={`gap-${index}`}
                    className="px-1 text-sm text-muted select-none"
                    aria-hidden="true"
                  >
                    …
                  </span>
                ) : (
                  <Button
                    key={item}
                    variant={item === metaData.page ? "default" : "outline"}
                    size="icon"
                    disabled={isFetching && item !== metaData.page}
                    aria-label={`Page ${item}`}
                    aria-current={item === metaData.page ? "page" : undefined}
                    onClick={() => goToPage(item)}
                  >
                    {item}
                  </Button>
                ),
              )}

              <Button
                variant="outline"
                size="icon"
                disabled={metaData.page >= metaData.totalPage || isFetching}
                onClick={() => goToPage(metaData.page + 1)}
                aria-label="Next page"
              >
                <ChevronRight />
              </Button>
            </nav>
          )}
        </main>
      </div>

      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted">
        Thikana is a frontend listing board for Bangladesh. Contact landlords directly — no booking
        fees.
      </footer>

      <MobileFilters />
      <CreatePostModal />
      <PostDetailsModal />
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "bg-surface text-fg border-border font-sans shadow-[var(--shadow-border)]",
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Small components                                                          */
/* -------------------------------------------------------------------------- */

function ListingSkeletons({ count }: { count: number }) {
  return (
    <div
      className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      aria-busy="true"
      aria-label="Loading listings"
    >
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="h-72 animate-pulse rounded-xl border border-border bg-surface motion-reduce:animate-none"
        />
      ))}
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-xl border border-dashed border-border bg-surface px-6 py-16">
      <p className="font-display text-2xl font-medium tracking-tight">No listings in this slice</p>
      <p className="max-w-md text-sm leading-relaxed text-muted">
        Try a wider thana, raise the cost ceiling, or clear the move-in window. New posts appear at
        the top of the board.
      </p>
      <Button variant="outline" onClick={onReset}>
        Clear filters
      </Button>
    </div>
  );
}