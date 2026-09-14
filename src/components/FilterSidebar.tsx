import {
  CATEGORY_LABEL,
  TENANT_LABEL,
  type RentalCategory,
  type TenantType,
} from "@/types/rental";
import { findDistrict, findDivision, findThana, DIVISIONS } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  COST_MAX,
  COST_MIN,
  resetFilters,
  setArea,
  setAvailableDayRange,
  setCategory,
  setCostRange,
  setDateFrom,
  setDateTo,
  setDistrict,
  setDivision,
  setTenantType,
  setThana,
} from "@/lib/redux/filterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { cn, formatBdt, formatDayOrdinal } from "@/lib/utils";

const CATEGORIES: Array<RentalCategory | "all"> = [
  "all",
  "house_flat",
  "sublet_room",
  "mess",
  "office",
];

const TENANTS: Array<TenantType | "all"> = [
  "all",
  "family",
  "bachelor_male",
  "bachelor_female",
  "office"
];

export function FilterSidebar({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((s) => s.filters);

  const division = findDivision(filters.division);
  const district = findDistrict(filters.division, filters.district);
  const thana = findThana(filters.division, filters.district, filters.thana);

  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <section className="flex flex-col gap-3">
        <div className="flex items-end justify-between gap-2">
          <h2 className="font-display text-lg font-medium tracking-tight">
            Location
          </h2>
          <Button
            variant="link"
            size="sm"
            className="h-auto px-0"
            onClick={() => dispatch(resetFilters())}
          >
            Reset
          </Button>
        </div>
        <p className="text-xs text-muted">Bangladesh · cascading thana filter</p>

        <FieldGroup label="Division">
          <NativeSelect
            value={filters.division ?? ""}
            onChange={(e) => dispatch(setDivision(e.target.value || null))}
            aria-label="Division"
          >
            <option value="">All divisions</option>
            {DIVISIONS.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </NativeSelect>
        </FieldGroup>

        <FieldGroup label="District">
          <NativeSelect
            value={filters.district ?? ""}
            onChange={(e) => dispatch(setDistrict(e.target.value || null))}
            disabled={!division}
            aria-label="District"
          >
            <option value="">All districts</option>
            {division?.districts.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </NativeSelect>
        </FieldGroup>

        <FieldGroup label="Thana / Upazila">
          <NativeSelect
            value={filters.thana ?? ""}
            onChange={(e) => dispatch(setThana(e.target.value || null))}
            disabled={!district}
            aria-label="Thana"
          >
            <option value="">All thanas</option>
            {district?.thanas.map((t) => (
              <option key={t.name} value={t.name}>
                {t.name}
              </option>
            ))}
          </NativeSelect>
        </FieldGroup>

        <FieldGroup label="Area">
          <NativeSelect
            value={filters.area ?? ""}
            onChange={(e) => dispatch(setArea(e.target.value || null))}
            disabled={!thana}
            aria-label="Area"
          >
            <option value="">All areas</option>
            {thana?.areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </NativeSelect>
        </FieldGroup>
      </section>
<section className="flex flex-col gap-3.5">
  <h2 className="font-display text-sm font-semibold tracking-wide text-muted-foreground uppercase">
    Category
  </h2>
  <div className="flex flex-wrap gap-2">
    {CATEGORIES.map((cat) => {
      const active = filters.category === cat;
      return (
        <button
          key={cat}
          type="button"
          onClick={() => dispatch(setCategory(cat))}
          className={cn(
            "inline-flex items-center justify-center h-9 rounded-full px-4 text-xs font-medium transition-all duration-200 ease-in-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            active
              ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]"
              : "bg-secondary/60 text-secondary-foreground hover:bg-secondary hover:text-foreground active:scale-[0.98]"
          )}
        >
          {cat === "all" ? "All" : CATEGORY_LABEL[cat]}
        </button>
      );
    })}
  </div>
</section>

      <section className="flex flex-col gap-3">
        <h2 className="font-display text-lg font-medium tracking-tight">
          Tenant
        </h2>
        <div className="flex flex-wrap gap-2">
          {TENANTS.map((t) => {
            const active = filters.tenantType === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => dispatch(setTenantType(t))}
                className={cn(
                  "h-11 rounded-full px-3.5 text-xs font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                {t === "all" ? "Any" : TENANT_LABEL[t]}
              </button>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-2">
          <h2 className="font-display text-lg font-medium tracking-tight">
            Monthly total
          </h2>
          <p className="text-xs tabular-nums text-muted">
            {formatBdt(filters.minCost)} – {formatBdt(filters.maxCost)}
          </p>
        </div>
        <p className="text-xs text-muted">Base rent plus utilities</p>
        <Slider
          min={COST_MIN}
          max={COST_MAX}
          step={500}
          value={[filters.minCost, filters.maxCost]}
          onValueChange={([min, max]) =>
            dispatch(setCostRange({ min: min ?? COST_MIN, max: max ?? COST_MAX }))
          }
          aria-label="Monthly cost range"
        />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-2">
          <h2 className="font-display text-lg font-medium tracking-tight">
            Move-in window
          </h2>
          <p className="text-xs text-muted">
            {formatDayOrdinal(filters.availableDayStart)}–
            {formatDayOrdinal(filters.availableDayEnd)}
          </p>
        </div>
        <p className="text-xs text-muted">
          Day of the month the listing becomes available
        </p>
        <Slider
          min={1}
          max={31}
          step={1}
          value={[filters.availableDayStart, filters.availableDayEnd]}
          onValueChange={([start, end]) =>
            dispatch(
              setAvailableDayRange({ start: start ?? 1, end: end ?? 31 }),
            )
          }
          aria-label="Available day of month"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-display text-lg font-medium tracking-tight">
          Available dates
        </h2>
        <FieldGroup label="From">
          <input
            type="date"
            className="field"
            value={filters.dateFrom ?? ""}
            onChange={(e) => dispatch(setDateFrom(e.target.value || null))}
          />
        </FieldGroup>
        <FieldGroup label="To">
          <input
            type="date"
            className="field"
            value={filters.dateTo ?? ""}
            onChange={(e) => dispatch(setDateTo(e.target.value || null))}
          />
        </FieldGroup>
      </section>
    </div>
  );
}

function FieldGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
