import { FilterSidebar } from "@/components/FilterSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { closeMobileFilters } from "@/lib/redux/uiSlice";

export function MobileFilters() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.mobileFiltersOpen);

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        if (!next) dispatch(closeMobileFilters());
      }}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <FilterSidebar className="px-5 py-5" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
