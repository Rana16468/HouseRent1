import {
  ELECTRICITY_LABEL,
  GAS_LABEL,
  totalMonthlyCost,
  type UtilityBreakdown,
} from "@/types/rental";
import { cn, formatBdt } from "@/lib/utils";

export function CostBreakdown({
  utilities,
  compact = false,
}: {
  utilities: UtilityBreakdown;
  compact?: boolean;
}) {
  const total = totalMonthlyCost(utilities);
  const rows = [
    { label: "Base rent", value: utilities.baseRent },
    {
      label: `Gas · ${GAS_LABEL[utilities.gasType]}`,
      value: utilities.gasType === "included" ? 0 : utilities.gas,
    },
    {
      label: `Electricity · ${ELECTRICITY_LABEL[utilities.electricityType]}`,
      value:
        utilities.electricityType === "included" ? 0 : utilities.electricity,
    },
    { label: "Water", value: utilities.water },
    { label: "Service charge", value: utilities.serviceCharge },
  ];

  if (compact) {
    return (
      <p className="text-xs leading-5 text-muted">
        {formatBdt(utilities.baseRent)} rent
        {utilities.gasType !== "included" && utilities.gas > 0
          ? ` · ${formatBdt(utilities.gas)} gas`
          : ""}
        {utilities.electricityType !== "included" && utilities.electricity > 0
          ? ` · ${formatBdt(utilities.electricity)} power`
          : ""}
      </p>
    );
  }

  return (
    <dl className="divide-y divide-border rounded-lg border border-border bg-bg-elevated">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm"
        >
          <dt className="text-muted">{row.label}</dt>
          <dd className="tabular-nums text-fg">
            {row.value === 0 ? "Included" : formatBdt(row.value)}
          </dd>
        </div>
      ))}
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <dt className="text-sm font-medium text-fg">Estimated monthly total</dt>
        <dd
          className={cn(
            "font-display text-xl font-medium tabular-nums tracking-tight text-primary",
          )}
        >
          {formatBdt(total)}
        </dd>
      </div>
    </dl>
  );
}
