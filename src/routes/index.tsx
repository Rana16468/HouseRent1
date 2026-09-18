import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import { selectActiveFilterCount, selectFilteredPosts } from "@/lib/redux/selectors";
import { useGetFindByAllHouseListQuery } from "@/lib/redux/features/postApi";
import ErrorPage from "@/components/ErrorPage/ErrorPage";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectFilteredPosts);

  const total = useAppSelector((s) => s.posts.posts.length);
  const active = useAppSelector(selectActiveFilterCount);
  // const filters = useAppSelector((state) => state.filters);
  // console.log("filter", filters)

  const [page, setPage] = useState(1);

  const { data, isLoading, error, isError, isSuccess } = useGetFindByAllHouseListQuery({ page });
  const allPostData = data?.data?.data || [];
  const metaData = data?.data?.meta;

  if (error && isError) {
    return <ErrorPage error={error} />;
  }

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
            <p className="text-sm tabular-nums text-muted">
              {posts.length} of {total} listings
              {active > 0 ? ` · ${active} filters` : ""}
            </p>
          </div>

          {!isLoading &&
            isSuccess &&
            (metaData?.total === 0 ? (
              <EmptyState onReset={() => dispatch(resetFilters())} />
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {allPostData.map((post: any) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ))}

          {!isLoading && isSuccess && metaData && metaData.totalPage > 1 && (
            <nav className="mt-8 flex items-center justify-center gap-1.5">
              <Button
                variant="outline"
                size="icon"
                disabled={metaData.page <= 1}
                onClick={() => setPage((p) => p - 1)}
                aria-label="Previous page"
              >
                <ChevronLeft />
              </Button>

              {Array.from({ length: metaData.totalPage }, (_, i) => i + 1).map((p) => (
                <Button
                  key={p}
                  variant={p === metaData.page ? "default" : "outline"}
                  size="icon"
                  onClick={() => setPage(p)}
                >
                  {p}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                disabled={metaData.page >= metaData.totalPage}
                onClick={() => setPage((p) => p + 1)}
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
