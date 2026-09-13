import { Plus, Search, SlidersHorizontal } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setSearchTerm } from "@/lib/redux/filterSlice";
import { selectActiveFilterCount } from "@/lib/redux/selectors";
import { openCreatePost, openMobileFilters } from "@/lib/redux/uiSlice";

export function Header() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((s) => s.filters.searchTerm);
  const activeFilters = useAppSelector(selectActiveFilterCount);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-elevated/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="relative lg:hidden"
          aria-label="Open filters"
          onClick={() => dispatch(openMobileFilters())}
        >
          <SlidersHorizontal />
          {activeFilters > 0 ? (
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
          ) : null}
        </Button>

        <a href="/" className="shrink-0" aria-label="Thikana home">
          <Logo />
        </a>

        <div className="relative mx-auto hidden min-w-0 flex-1 max-w-xl sm:block">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
          <Input
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search area, thana, or title"
            className="pl-10"
            aria-label="Search listings"
          />
        </div>

        <Button
          className="ml-auto shrink-0"
          onClick={() => dispatch(openCreatePost())}
        >
          <Plus />
          <span className="hidden sm:inline">Post listing</span>
          <span className="sm:hidden">Post</span>
        </Button>
      </div>

      <div className="border-t border-border px-4 py-2 sm:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
          <Input
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search area, thana, or title"
            className="pl-10"
            aria-label="Search listings"
          />
        </div>
      </div>
    </header>
  );
}
