import { o as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime, n as CheckboxIndicator, t as Checkbox$1, u as Slot } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { A as Check, C as Italic, D as Eraser, E as Heading1, M as Bold, N as ArrowRight, O as ChevronRight, P as ArrowLeft, S as Link2, T as Heading2, _ as Navigation, a as Underline, b as List, c as Strikethrough, d as Search, f as Redo2, g as PenLine, h as Phone, i as Undo2, j as CalendarDays, k as ChevronLeft, l as SlidersHorizontal, m as Plus, n as Video, p as Quote, r as Users, s as Trash2, t as X, u as Send, v as MessageCircle, w as ImagePlus, x as ListOrdered, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as useDispatch, r as useSelector } from "../_libs/react-redux+[...].mjs";
import { r as createSelector } from "../_libs/@reduxjs/toolkit+[...].mjs";
import { C as selectPost, S as removePost, _ as setDivision, a as openCreatePost, b as setThana, c as COST_MAX, d as setAvailableDayRange, f as setCategory, g as setDistrict, h as setDateTo, i as closeMobileFilters, l as resetFilters, m as setDateFrom, n as closeCreatePost, o as openDetails, p as setCostRange, r as closeDetails, s as openMobileFilters, u as setArea, v as setSearchTerm, x as addPost, y as setTenantType } from "./router-C8eJpNZm.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as require_dist } from "../_libs/device-detector-js.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root$1 } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CYJuyEcy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_dist = /* @__PURE__ */ __toESM(require_dist());
var CATEGORY_LABEL = {
	house_flat: "House / Flat",
	sublet_room: "Sublet / Single room",
	mess: "Mess",
	office: "Office / Commercial"
};
var TENANT_LABEL = {
	family: "Family",
	bachelor_male: "Bachelor (Male)",
	bachelor_female: "Bachelor (Female)",
	office: "office"
};
var GAS_LABEL = {
	line: "Line gas",
	lpg: "LPG cylinder",
	included: "Included"
};
var ELECTRICITY_LABEL = {
	prepaid: "Prepaid",
	postpaid: "Postpaid",
	included: "Included"
};
function totalMonthlyCost(utilities) {
	const gas = utilities.gasType === "included" ? 0 : utilities.gas;
	const electricity = utilities.electricityType === "included" ? 0 : utilities.electricity;
	return utilities.baseRent + gas + electricity + utilities.water + utilities.serviceCharge;
}
function digitsPhone(phone) {
	return phone.replace(/\D/g, "");
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatBdt(amount) {
	return `৳${Math.round(amount).toLocaleString("en-IN")}`;
}
function formatDayOrdinal(day) {
	const n = Math.max(1, Math.min(31, day));
	const j = n % 10;
	const k = n % 100;
	if (k >= 11 && k <= 13) return `${n}th`;
	if (j === 1) return `${n}st`;
	if (j === 2) return `${n}nd`;
	if (j === 3) return `${n}rd`;
	return `${n}th`;
}
function formatLongDate(iso) {
	const date = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
	if (Number.isNaN(date.getTime())) return iso;
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function CostBreakdown({ utilities, compact = false }) {
	const total = totalMonthlyCost(utilities);
	const rows = [
		{
			label: "Base rent",
			value: utilities.baseRent
		},
		{
			label: `Gas · ${GAS_LABEL[utilities.gasType]}`,
			value: utilities.gasType === "included" ? 0 : utilities.gas
		},
		{
			label: `Electricity · ${ELECTRICITY_LABEL[utilities.electricityType]}`,
			value: utilities.electricityType === "included" ? 0 : utilities.electricity
		},
		{
			label: "Water",
			value: utilities.water
		},
		{
			label: "Service charge",
			value: utilities.serviceCharge
		}
	];
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-xs leading-5 text-muted",
		children: [
			formatBdt(utilities.baseRent),
			" rent",
			utilities.gasType !== "included" && utilities.gas > 0 ? ` · ${formatBdt(utilities.gas)} gas` : "",
			utilities.electricityType !== "included" && utilities.electricity > 0 ? ` · ${formatBdt(utilities.electricity)} power` : ""
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
		className: "divide-y divide-border rounded-lg border border-border bg-bg-elevated",
		children: [rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4 px-4 py-2.5 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-muted",
				children: row.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "tabular-nums text-fg",
				children: row.value === 0 ? "Included" : formatBdt(row.value)
			})]
		}, row.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4 px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-sm font-medium text-fg",
				children: "Estimated monthly total"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: cn("font-display text-xl font-medium tabular-nums tracking-tight text-primary"),
				children: formatBdt(total)
			})]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-accent",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			outline: "border border-border bg-surface text-fg hover:bg-secondary",
			ghost: "text-fg hover:bg-secondary",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		className: cn("peer size-5 shrink-0 rounded-xs border border-border bg-surface shadow-[var(--shadow-border)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
			className: "flex items-center justify-center text-current",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-1.5rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 gap-4 overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-lift)] outline-none sm:p-6", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:bg-secondary hover:text-fg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 pr-10", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium tracking-tight text-fg", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm leading-relaxed text-muted", className),
		...props
	});
}
function Input({ className, type = "text", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("field", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("field min-h-28 resize-y py-2.5 leading-relaxed", className),
		...props
	});
}
function NativeSelect({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("field appearance-none pr-8", className),
		...props,
		children
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-xs font-medium tracking-wide text-muted", className),
		...props
	});
}
var DIVISIONS = [
	{
		"name": "Dhaka",
		"districts": [
			{
				"name": "Dhaka City",
				"thanas": [
					{
						"name": "Adabor",
						"areas": [
							"Adabor Sadar Bazar",
							"Adabor Model Town",
							"Adabor North"
						]
					},
					{
						"name": "Airport",
						"areas": [
							"Airport Sadar Bazar",
							"Airport Model Town",
							"Airport North"
						]
					},
					{
						"name": "Ati Bazar",
						"areas": [
							"Ati Bazar Sadar Bazar",
							"Ati Bazar Model Town",
							"Ati Bazar North"
						]
					},
					{
						"name": "Azompur",
						"areas": [
							"Azompur Sadar Bazar",
							"Azompur Model Town",
							"Azompur North"
						]
					},
					{
						"name": "Badda",
						"areas": [
							"Badda Sadar Bazar",
							"Badda Model Town",
							"Badda North"
						]
					},
					{
						"name": "Banani",
						"areas": [
							"Banani Sadar Bazar",
							"Banani Model Town",
							"Banani North"
						]
					},
					{
						"name": "Bangshal",
						"areas": [
							"Bangshal Sadar Bazar",
							"Bangshal Model Town",
							"Bangshal North"
						]
					},
					{
						"name": "Bashundhara R/A",
						"areas": [
							"Bashundhara R/A Sadar Bazar",
							"Bashundhara R/A Model Town",
							"Bashundhara R/A North"
						]
					},
					{
						"name": "Bhashantek",
						"areas": [
							"Bhashantek Sadar Bazar",
							"Bhashantek Model Town",
							"Bhashantek North"
						]
					},
					{
						"name": "Cantonment",
						"areas": [
							"Cantonment Sadar Bazar",
							"Cantonment Model Town",
							"Cantonment North"
						]
					},
					{
						"name": "Chalkbazar",
						"areas": [
							"Chalkbazar Sadar Bazar",
							"Chalkbazar Model Town",
							"Chalkbazar North"
						]
					},
					{
						"name": "Dakshin Khan",
						"areas": [
							"Dakshin Khan Sadar Bazar",
							"Dakshin Khan Model Town",
							"Dakshin Khan North"
						]
					},
					{
						"name": "Darus Salam",
						"areas": [
							"Darus Salam Sadar Bazar",
							"Darus Salam Model Town",
							"Darus Salam North"
						]
					},
					{
						"name": "Demra",
						"areas": [
							"Demra Sadar Bazar",
							"Demra Model Town",
							"Demra North"
						]
					},
					{
						"name": "Dhanmondi",
						"areas": [
							"Dhanmondi Sadar Bazar",
							"Dhanmondi Model Town",
							"Dhanmondi North"
						]
					},
					{
						"name": "Gandaria",
						"areas": [
							"Gandaria Sadar Bazar",
							"Gandaria Model Town",
							"Gandaria North"
						]
					},
					{
						"name": "Khilgaon",
						"areas": [
							"Khilgaon Sadar Bazar",
							"Khilgaon Model Town",
							"Khilgaon North"
						]
					},
					{
						"name": "Khilkhet",
						"areas": [
							"Khilkhet Sadar Bazar",
							"Khilkhet Model Town",
							"Khilkhet North"
						]
					},
					{
						"name": "Kotwali",
						"areas": [
							"Kotwali Sadar Bazar",
							"Kotwali Model Town",
							"Kotwali North"
						]
					},
					{
						"name": "Lalbagh",
						"areas": [
							"Lalbagh Sadar Bazar",
							"Lalbagh Model Town",
							"Lalbagh North"
						]
					},
					{
						"name": "Mirpur",
						"areas": [
							"Mirpur Sadar Bazar",
							"Mirpur Model Town",
							"Mirpur North"
						]
					},
					{
						"name": "Mohammadpur",
						"areas": [
							"Mohammadpur Sadar Bazar",
							"Mohammadpur Model Town",
							"Mohammadpur North"
						]
					},
					{
						"name": "Motijheel",
						"areas": [
							"Motijheel Sadar Bazar",
							"Motijheel Model Town",
							"Motijheel North"
						]
					},
					{
						"name": "Mugda",
						"areas": [
							"Mugda Sadar Bazar",
							"Mugda Model Town",
							"Mugda North"
						]
					},
					{
						"name": "New Market",
						"areas": [
							"New Market Sadar Bazar",
							"New Market Model Town",
							"New Market North"
						]
					},
					{
						"name": "Pallabi",
						"areas": [
							"Pallabi Sadar Bazar",
							"Pallabi Model Town",
							"Pallabi North"
						]
					},
					{
						"name": "Paltan",
						"areas": [
							"Paltan Sadar Bazar",
							"Paltan Model Town",
							"Paltan North"
						]
					},
					{
						"name": "Panthapath",
						"areas": [
							"Panthapath Sadar Bazar",
							"Panthapath Model Town",
							"Panthapath North"
						]
					},
					{
						"name": "Purbachal",
						"areas": [
							"Purbachal Sadar Bazar",
							"Purbachal Model Town",
							"Purbachal North"
						]
					},
					{
						"name": "Ramna",
						"areas": [
							"Ramna Sadar Bazar",
							"Ramna Model Town",
							"Ramna North"
						]
					},
					{
						"name": "Rampura",
						"areas": [
							"Rampura Sadar Bazar",
							"Rampura Model Town",
							"Rampura North"
						]
					},
					{
						"name": "Rupnagar",
						"areas": [
							"Rupnagar Sadar Bazar",
							"Rupnagar Model Town",
							"Rupnagar North"
						]
					},
					{
						"name": "Sabujbag",
						"areas": [
							"Sabujbag Sadar Bazar",
							"Sabujbag Model Town",
							"Sabujbag North"
						]
					},
					{
						"name": "Shah Ali",
						"areas": [
							"Shah Ali Sadar Bazar",
							"Shah Ali Model Town",
							"Shah Ali North"
						]
					},
					{
						"name": "Shah Ali Market",
						"areas": [
							"Shah Ali Market Sadar Bazar",
							"Shah Ali Market Model Town",
							"Shah Ali Market North"
						]
					},
					{
						"name": "Shahbag",
						"areas": [
							"Shahbag Sadar Bazar",
							"Shahbag Model Town",
							"Shahbag North"
						]
					},
					{
						"name": "Shahjahanpur",
						"areas": [
							"Shahjahanpur Sadar Bazar",
							"Shahjahanpur Model Town",
							"Shahjahanpur North"
						]
					},
					{
						"name": "Sher-e-Bangla Nagar",
						"areas": [
							"Sher-e-Bangla Nagar Sadar Bazar",
							"Sher-e-Bangla Nagar Model Town",
							"Sher-e-Bangla Nagar North"
						]
					},
					{
						"name": "Shyampur",
						"areas": [
							"Shyampur Sadar Bazar",
							"Shyampur Model Town",
							"Shyampur North"
						]
					},
					{
						"name": "Sutrapur",
						"areas": [
							"Sutrapur Sadar Bazar",
							"Sutrapur Model Town",
							"Sutrapur North"
						]
					},
					{
						"name": "Tejgaon",
						"areas": [
							"Tejgaon Sadar Bazar",
							"Tejgaon Model Town",
							"Tejgaon North"
						]
					},
					{
						"name": "Tejgaon Industrial Area",
						"areas": [
							"Tejgaon Industrial Area Sadar Bazar",
							"Tejgaon Industrial Area Model Town",
							"Tejgaon Industrial Area North"
						]
					},
					{
						"name": "Turag",
						"areas": [
							"Turag Sadar Bazar",
							"Turag Model Town",
							"Turag North"
						]
					},
					{
						"name": "Uttara",
						"areas": [
							"Uttara Sadar Bazar",
							"Uttara Model Town",
							"Uttara North"
						]
					},
					{
						"name": "Uttarkhan",
						"areas": [
							"Uttarkhan Sadar Bazar",
							"Uttarkhan Model Town",
							"Uttarkhan North"
						]
					},
					{
						"name": "Vasantek",
						"areas": [
							"Vasantek Sadar Bazar",
							"Vasantek Model Town",
							"Vasantek North"
						]
					},
					{
						"name": "Vatara",
						"areas": [
							"Vatara Sadar Bazar",
							"Vatara Model Town",
							"Vatara North"
						]
					},
					{
						"name": "Wari",
						"areas": [
							"Wari Sadar Bazar",
							"Wari Model Town",
							"Wari North"
						]
					}
				]
			},
			{
				"name": "Dhaka Sub-Urban",
				"thanas": [
					{
						"name": "Ashulia",
						"areas": [
							"Ashulia Sadar Bazar",
							"Ashulia Model Town",
							"Ashulia North"
						]
					},
					{
						"name": "Dhamrai",
						"areas": [
							"Dhamrai Sadar Bazar",
							"Dhamrai Model Town",
							"Dhamrai North"
						]
					},
					{
						"name": "Dohar",
						"areas": [
							"Dohar Sadar Bazar",
							"Dohar Model Town",
							"Dohar North"
						]
					},
					{
						"name": "Hemayetpur",
						"areas": [
							"Hemayetpur Sadar Bazar",
							"Hemayetpur Model Town",
							"Hemayetpur North"
						]
					},
					{
						"name": "Keraniganj Model",
						"areas": [
							"Keraniganj Model Sadar Bazar",
							"Keraniganj Model Model Town",
							"Keraniganj Model North"
						]
					},
					{
						"name": "South Kernaiganj",
						"areas": [
							"South Kernaiganj Sadar Bazar",
							"South Kernaiganj Model Town",
							"South Kernaiganj North"
						]
					},
					{
						"name": "Nawabganj",
						"areas": [
							"Nawabganj Sadar Bazar",
							"Nawabganj Model Town",
							"Nawabganj North"
						]
					},
					{
						"name": "Savar",
						"areas": [
							"Savar Sadar Bazar",
							"Savar Model Town",
							"Savar North"
						]
					}
				]
			},
			{
				"name": "Faridpur",
				"thanas": [
					{
						"name": "Alfadanga",
						"areas": [
							"Alfadanga Sadar Bazar",
							"Alfadanga Model Town",
							"Alfadanga North"
						]
					},
					{
						"name": "Bhanga",
						"areas": [
							"Bhanga Sadar Bazar",
							"Bhanga Model Town",
							"Bhanga North"
						]
					},
					{
						"name": "Boalmari",
						"areas": [
							"Boalmari Sadar Bazar",
							"Boalmari Model Town",
							"Boalmari North"
						]
					},
					{
						"name": "Charbhadrasan",
						"areas": [
							"Charbhadrasan Sadar Bazar",
							"Charbhadrasan Model Town",
							"Charbhadrasan North"
						]
					},
					{
						"name": "Faridpur Sadar",
						"areas": [
							"Faridpur Sadar Bazar",
							"Faridpur Sadar Model Town",
							"Faridpur Sadar North"
						]
					},
					{
						"name": "Madhukhali",
						"areas": [
							"Madhukhali Sadar Bazar",
							"Madhukhali Model Town",
							"Madhukhali North"
						]
					},
					{
						"name": "Nagarkandra",
						"areas": [
							"Nagarkandra Sadar Bazar",
							"Nagarkandra Model Town",
							"Nagarkandra North"
						]
					},
					{
						"name": "Sadarpur",
						"areas": [
							"Sadarpur Sadar Bazar",
							"Sadarpur Model Town",
							"Sadarpur North"
						]
					},
					{
						"name": "Shaltha",
						"areas": [
							"Shaltha Sadar Bazar",
							"Shaltha Model Town",
							"Shaltha North"
						]
					}
				]
			},
			{
				"name": "Gazipur",
				"thanas": [
					{
						"name": "Gazipur Sadar",
						"areas": [
							"Gazipur Sadar Bazar",
							"Gazipur Sadar Model Town",
							"Gazipur Sadar North"
						]
					},
					{
						"name": "Joydebpur",
						"areas": [
							"Joydebpur Sadar Bazar",
							"Joydebpur Model Town",
							"Joydebpur North"
						]
					},
					{
						"name": "Kaliakair",
						"areas": [
							"Kaliakair Sadar Bazar",
							"Kaliakair Model Town",
							"Kaliakair North"
						]
					},
					{
						"name": "Kaliakair Upazila",
						"areas": [
							"Kaliakair Upazila Sadar Bazar",
							"Kaliakair Upazila Model Town",
							"Kaliakair Upazila North"
						]
					},
					{
						"name": "Kaliganj Upazila",
						"areas": [
							"Kaliganj Upazila Sadar Bazar",
							"Kaliganj Upazila Model Town",
							"Kaliganj Upazila North"
						]
					},
					{
						"name": "Kapasia",
						"areas": [
							"Kapasia Sadar Bazar",
							"Kapasia Model Town",
							"Kapasia North"
						]
					},
					{
						"name": "Kashimpur",
						"areas": [
							"Kashimpur Sadar Bazar",
							"Kashimpur Model Town",
							"Kashimpur North"
						]
					},
					{
						"name": "Rajendrapur",
						"areas": [
							"Rajendrapur Sadar Bazar",
							"Rajendrapur Model Town",
							"Rajendrapur North"
						]
					},
					{
						"name": "Sreepur",
						"areas": [
							"Sreepur Sadar Bazar",
							"Sreepur Model Town",
							"Sreepur North"
						]
					},
					{
						"name": "Tongi",
						"areas": [
							"Tongi Sadar Bazar",
							"Tongi Model Town",
							"Tongi North"
						]
					}
				]
			},
			{
				"name": "Gopalganj",
				"thanas": [
					{
						"name": "Boultali",
						"areas": [
							"Boultali Sadar Bazar",
							"Boultali Model Town",
							"Boultali North"
						]
					},
					{
						"name": "Gopalganj Sadar",
						"areas": [
							"Gopalganj Sadar Bazar",
							"Gopalganj Sadar Model Town",
							"Gopalganj Sadar North"
						]
					},
					{
						"name": "Kasiani",
						"areas": [
							"Kasiani Sadar Bazar",
							"Kasiani Model Town",
							"Kasiani North"
						]
					},
					{
						"name": "Kotalipara",
						"areas": [
							"Kotalipara Sadar Bazar",
							"Kotalipara Model Town",
							"Kotalipara North"
						]
					},
					{
						"name": "Muksudpur",
						"areas": [
							"Muksudpur Sadar Bazar",
							"Muksudpur Model Town",
							"Muksudpur North"
						]
					},
					{
						"name": "Tungipara",
						"areas": [
							"Tungipara Sadar Bazar",
							"Tungipara Model Town",
							"Tungipara North"
						]
					}
				]
			},
			{
				"name": "Kishoreganj",
				"thanas": [
					{
						"name": "Austagram",
						"areas": [
							"Austagram Sadar Bazar",
							"Austagram Model Town",
							"Austagram North"
						]
					},
					{
						"name": "Bajitpur",
						"areas": [
							"Bajitpur Sadar Bazar",
							"Bajitpur Model Town",
							"Bajitpur North"
						]
					},
					{
						"name": "Bhairob",
						"areas": [
							"Bhairob Sadar Bazar",
							"Bhairob Model Town",
							"Bhairob North"
						]
					},
					{
						"name": "Hossainpur",
						"areas": [
							"Hossainpur Sadar Bazar",
							"Hossainpur Model Town",
							"Hossainpur North"
						]
					},
					{
						"name": "Itna",
						"areas": [
							"Itna Sadar Bazar",
							"Itna Model Town",
							"Itna North"
						]
					},
					{
						"name": "Karimganj",
						"areas": [
							"Karimganj Sadar Bazar",
							"Karimganj Model Town",
							"Karimganj North"
						]
					},
					{
						"name": "Katiadi",
						"areas": [
							"Katiadi Sadar Bazar",
							"Katiadi Model Town",
							"Katiadi North"
						]
					},
					{
						"name": "Kishoreganj Sadar",
						"areas": [
							"Kishoreganj Sadar Bazar",
							"Kishoreganj Sadar Model Town",
							"Kishoreganj Sadar North"
						]
					},
					{
						"name": "Kuliarchar",
						"areas": [
							"Kuliarchar Sadar Bazar",
							"Kuliarchar Model Town",
							"Kuliarchar North"
						]
					},
					{
						"name": "Mithamain",
						"areas": [
							"Mithamain Sadar Bazar",
							"Mithamain Model Town",
							"Mithamain North"
						]
					},
					{
						"name": "Nikli",
						"areas": [
							"Nikli Sadar Bazar",
							"Nikli Model Town",
							"Nikli North"
						]
					},
					{
						"name": "Pakundia",
						"areas": [
							"Pakundia Sadar Bazar",
							"Pakundia Model Town",
							"Pakundia North"
						]
					},
					{
						"name": "Tarail",
						"areas": [
							"Tarail Sadar Bazar",
							"Tarail Model Town",
							"Tarail North"
						]
					}
				]
			},
			{
				"name": "Madaripur",
				"thanas": [
					{
						"name": "Dasar",
						"areas": [
							"Dasar Sadar Bazar",
							"Dasar Model Town",
							"Dasar North"
						]
					},
					{
						"name": "Kalkini",
						"areas": [
							"Kalkini Sadar Bazar",
							"Kalkini Model Town",
							"Kalkini North"
						]
					},
					{
						"name": "Madaripur Sadar",
						"areas": [
							"Madaripur Sadar Bazar",
							"Madaripur Sadar Model Town",
							"Madaripur Sadar North"
						]
					},
					{
						"name": "Rajoir",
						"areas": [
							"Rajoir Sadar Bazar",
							"Rajoir Model Town",
							"Rajoir North"
						]
					},
					{
						"name": "Shibchar",
						"areas": [
							"Shibchar Sadar Bazar",
							"Shibchar Model Town",
							"Shibchar North"
						]
					}
				]
			},
			{
				"name": "Manikganj",
				"thanas": [
					{
						"name": "Boro Sorundi [Manikganj]",
						"areas": [
							"Boro Sorundi Sadar Bazar",
							"Boro Sorundi Model Town",
							"Boro Sorundi North"
						]
					},
					{
						"name": "Daulatpur Upazila",
						"areas": [
							"Daulatpur Upazila Sadar Bazar",
							"Daulatpur Upazila Model Town",
							"Daulatpur Upazila North"
						]
					},
					{
						"name": "Ghior",
						"areas": [
							"Ghior Sadar Bazar",
							"Ghior Model Town",
							"Ghior North"
						]
					},
					{
						"name": "Harirampur",
						"areas": [
							"Harirampur Sadar Bazar",
							"Harirampur Model Town",
							"Harirampur North"
						]
					},
					{
						"name": "Manikganj Sadar",
						"areas": [
							"Manikganj Sadar Bazar",
							"Manikganj Sadar Model Town",
							"Manikganj Sadar North"
						]
					},
					{
						"name": "Saturia",
						"areas": [
							"Saturia Sadar Bazar",
							"Saturia Model Town",
							"Saturia North"
						]
					},
					{
						"name": "Shivalaya",
						"areas": [
							"Shivalaya Sadar Bazar",
							"Shivalaya Model Town",
							"Shivalaya North"
						]
					},
					{
						"name": "Singair",
						"areas": [
							"Singair Sadar Bazar",
							"Singair Model Town",
							"Singair North"
						]
					}
				]
			},
			{
				"name": "Munshiganj",
				"thanas": [
					{
						"name": "Gazaria",
						"areas": [
							"Gazaria Sadar Bazar",
							"Gazaria Model Town",
							"Gazaria North"
						]
					},
					{
						"name": "Louhajang",
						"areas": [
							"Louhajang Sadar Bazar",
							"Louhajang Model Town",
							"Louhajang North"
						]
					},
					{
						"name": "Munshiganj Sadar",
						"areas": [
							"Munshiganj Sadar Bazar",
							"Munshiganj Sadar Model Town",
							"Munshiganj Sadar North"
						]
					},
					{
						"name": "Sirajdikhan",
						"areas": [
							"Sirajdikhan Sadar Bazar",
							"Sirajdikhan Model Town",
							"Sirajdikhan North"
						]
					},
					{
						"name": "Sreenagar",
						"areas": [
							"Sreenagar Sadar Bazar",
							"Sreenagar Model Town",
							"Sreenagar North"
						]
					},
					{
						"name": "Tongibari",
						"areas": [
							"Tongibari Sadar Bazar",
							"Tongibari Model Town",
							"Tongibari North"
						]
					}
				]
			},
			{
				"name": "Narayanganj",
				"thanas": [
					{
						"name": "Araihajar",
						"areas": [
							"Araihajar Sadar Bazar",
							"Araihajar Model Town",
							"Araihajar North"
						]
					},
					{
						"name": "Bandar",
						"areas": [
							"Bandar Sadar Bazar",
							"Bandar Model Town",
							"Bandar North"
						]
					},
					{
						"name": "Fatullah",
						"areas": [
							"Fatullah Sadar Bazar",
							"Fatullah Model Town",
							"Fatullah North"
						]
					},
					{
						"name": "Kanchpur Highway",
						"areas": [
							"Kanchpur Highway Sadar Bazar",
							"Kanchpur Highway Model Town",
							"Kanchpur Highway North"
						]
					},
					{
						"name": "Narayanganj Sadar",
						"areas": [
							"Narayanganj Sadar Bazar",
							"Narayanganj Sadar Model Town",
							"Narayanganj Sadar North"
						]
					},
					{
						"name": "Rupganj",
						"areas": [
							"Rupganj Sadar Bazar",
							"Rupganj Model Town",
							"Rupganj North"
						]
					},
					{
						"name": "Shiddhirganj",
						"areas": [
							"Shiddhirganj Sadar Bazar",
							"Shiddhirganj Model Town",
							"Shiddhirganj North"
						]
					},
					{
						"name": "Sonargaon",
						"areas": [
							"Sonargaon Sadar Bazar",
							"Sonargaon Model Town",
							"Sonargaon North"
						]
					}
				]
			},
			{
				"name": "Narshindi",
				"thanas": [
					{
						"name": "Belabo",
						"areas": [
							"Belabo Sadar Bazar",
							"Belabo Model Town",
							"Belabo North"
						]
					},
					{
						"name": "Ghorashal",
						"areas": [
							"Ghorashal Sadar Bazar",
							"Ghorashal Model Town",
							"Ghorashal North"
						]
					},
					{
						"name": "Madhobdi",
						"areas": [
							"Madhobdi Sadar Bazar",
							"Madhobdi Model Town",
							"Madhobdi North"
						]
					},
					{
						"name": "Manohardi",
						"areas": [
							"Manohardi Sadar Bazar",
							"Manohardi Model Town",
							"Manohardi North"
						]
					},
					{
						"name": "Narshindi Sadar",
						"areas": [
							"Narshindi Sadar Bazar",
							"Narshindi Sadar Model Town",
							"Narshindi Sadar North"
						]
					},
					{
						"name": "Palash",
						"areas": [
							"Palash Sadar Bazar",
							"Palash Model Town",
							"Palash North"
						]
					},
					{
						"name": "Raipura",
						"areas": [
							"Raipura Sadar Bazar",
							"Raipura Model Town",
							"Raipura North"
						]
					},
					{
						"name": "Shibpur",
						"areas": [
							"Shibpur Sadar Bazar",
							"Shibpur Model Town",
							"Shibpur North"
						]
					}
				]
			},
			{
				"name": "Rajbari",
				"thanas": [
					{
						"name": "Goalanda Mor, Rajbari Office",
						"areas": [
							"Goalanda Mor, Rajbari Office Sadar Bazar",
							"Goalanda Mor, Rajbari Office Model Town",
							"Goalanda Mor, Rajbari Office North"
						]
					},
					{
						"name": "Baliakandi",
						"areas": [
							"Baliakandi Sadar Bazar",
							"Baliakandi Model Town",
							"Baliakandi North"
						]
					},
					{
						"name": "Goalananda",
						"areas": [
							"Goalananda Sadar Bazar",
							"Goalananda Model Town",
							"Goalananda North"
						]
					},
					{
						"name": "Kalukhali",
						"areas": [
							"Kalukhali Sadar Bazar",
							"Kalukhali Model Town",
							"Kalukhali North"
						]
					},
					{
						"name": "Pangsha",
						"areas": [
							"Pangsha Sadar Bazar",
							"Pangsha Model Town",
							"Pangsha North"
						]
					},
					{
						"name": "Rajbari Sadar",
						"areas": [
							"Rajbari Sadar Bazar",
							"Rajbari Sadar Model Town",
							"Rajbari Sadar North"
						]
					}
				]
			},
			{
				"name": "Shariatpur",
				"thanas": [
					{
						"name": "Bhedarganj",
						"areas": [
							"Bhedarganj Sadar Bazar",
							"Bhedarganj Model Town",
							"Bhedarganj North"
						]
					},
					{
						"name": "Damudya",
						"areas": [
							"Damudya Sadar Bazar",
							"Damudya Model Town",
							"Damudya North"
						]
					},
					{
						"name": "Gosairhat",
						"areas": [
							"Gosairhat Sadar Bazar",
							"Gosairhat Model Town",
							"Gosairhat North"
						]
					},
					{
						"name": "Naria",
						"areas": [
							"Naria Sadar Bazar",
							"Naria Model Town",
							"Naria North"
						]
					},
					{
						"name": "Sakhipur Upazila",
						"areas": [
							"Sakhipur Upazila Sadar Bazar",
							"Sakhipur Upazila Model Town",
							"Sakhipur Upazila North"
						]
					},
					{
						"name": "Shariatpur Sadar",
						"areas": [
							"Shariatpur Sadar Bazar",
							"Shariatpur Sadar Model Town",
							"Shariatpur Sadar North"
						]
					},
					{
						"name": "Zajira",
						"areas": [
							"Zajira Sadar Bazar",
							"Zajira Model Town",
							"Zajira North"
						]
					}
				]
			},
			{
				"name": "Tangail",
				"thanas": [
					{
						"name": "Basail",
						"areas": [
							"Basail Sadar Bazar",
							"Basail Model Town",
							"Basail North"
						]
					},
					{
						"name": "Bhuapur",
						"areas": [
							"Bhuapur Sadar Bazar",
							"Bhuapur Model Town",
							"Bhuapur North"
						]
					},
					{
						"name": "Delduar",
						"areas": [
							"Delduar Sadar Bazar",
							"Delduar Model Town",
							"Delduar North"
						]
					},
					{
						"name": "Dhanbari",
						"areas": [
							"Dhanbari Sadar Bazar",
							"Dhanbari Model Town",
							"Dhanbari North"
						]
					},
					{
						"name": "Ghatail",
						"areas": [
							"Ghatail Sadar Bazar",
							"Ghatail Model Town",
							"Ghatail North"
						]
					},
					{
						"name": "Gopalpur",
						"areas": [
							"Gopalpur Sadar Bazar",
							"Gopalpur Model Town",
							"Gopalpur North"
						]
					},
					{
						"name": "Kalihati",
						"areas": [
							"Kalihati Sadar Bazar",
							"Kalihati Model Town",
							"Kalihati North"
						]
					},
					{
						"name": "Madhupur",
						"areas": [
							"Madhupur Sadar Bazar",
							"Madhupur Model Town",
							"Madhupur North"
						]
					},
					{
						"name": "Mirzapur",
						"areas": [
							"Mirzapur Sadar Bazar",
							"Mirzapur Model Town",
							"Mirzapur North"
						]
					},
					{
						"name": "Nagarpur",
						"areas": [
							"Nagarpur Sadar Bazar",
							"Nagarpur Model Town",
							"Nagarpur North"
						]
					},
					{
						"name": "Sakhipur",
						"areas": [
							"Sakhipur Sadar Bazar",
							"Sakhipur Model Town",
							"Sakhipur North"
						]
					},
					{
						"name": "Sokhipur",
						"areas": [
							"Sokhipur Sadar Bazar",
							"Sokhipur Model Town",
							"Sokhipur North"
						]
					},
					{
						"name": "Tangali Sadar",
						"areas": [
							"Tangali Sadar Bazar",
							"Tangali Sadar Model Town",
							"Tangali Sadar North"
						]
					}
				]
			}
		]
	},
	{
		"name": "Chattogram",
		"districts": [
			{
				"name": "Bandarban",
				"thanas": [
					{
						"name": "Ali kadam",
						"areas": [
							"Ali kadam Sadar Bazar",
							"Ali kadam Model Town",
							"Ali kadam North"
						]
					},
					{
						"name": "Bandarban Sadar",
						"areas": [
							"Bandarban Sadar Bazar",
							"Bandarban Sadar Model Town",
							"Bandarban Sadar North"
						]
					},
					{
						"name": "Lama",
						"areas": [
							"Lama Sadar Bazar",
							"Lama Model Town",
							"Lama North"
						]
					},
					{
						"name": "Naikhongchhari",
						"areas": [
							"Naikhongchhari Sadar Bazar",
							"Naikhongchhari Model Town",
							"Naikhongchhari North"
						]
					},
					{
						"name": "Rowangchhari",
						"areas": [
							"Rowangchhari Sadar Bazar",
							"Rowangchhari Model Town",
							"Rowangchhari North"
						]
					},
					{
						"name": "Ruma",
						"areas": [
							"Ruma Sadar Bazar",
							"Ruma Model Town",
							"Ruma North"
						]
					},
					{
						"name": "Thanchi",
						"areas": [
							"Thanchi Sadar Bazar",
							"Thanchi Model Town",
							"Thanchi North"
						]
					}
				]
			},
			{
				"name": "Brahmanbaria",
				"thanas": [
					{
						"name": "Akhaura",
						"areas": [
							"Akhaura Sadar Bazar",
							"Akhaura Model Town",
							"Akhaura North"
						]
					},
					{
						"name": "Ashuganj",
						"areas": [
							"Ashuganj Sadar Bazar",
							"Ashuganj Model Town",
							"Ashuganj North"
						]
					},
					{
						"name": "Bancharampur",
						"areas": [
							"Bancharampur Sadar Bazar",
							"Bancharampur Model Town",
							"Bancharampur North"
						]
					},
					{
						"name": "Bijoynagar",
						"areas": [
							"Bijoynagar Sadar Bazar",
							"Bijoynagar Model Town",
							"Bijoynagar North"
						]
					},
					{
						"name": "Brahmanbaria Sadar",
						"areas": [
							"Brahmanbaria Sadar Bazar",
							"Brahmanbaria Sadar Model Town",
							"Brahmanbaria Sadar North"
						]
					},
					{
						"name": "Kasba",
						"areas": [
							"Kasba Sadar Bazar",
							"Kasba Model Town",
							"Kasba North"
						]
					},
					{
						"name": "Nabinagar",
						"areas": [
							"Nabinagar Sadar Bazar",
							"Nabinagar Model Town",
							"Nabinagar North"
						]
					},
					{
						"name": "Nasirnagar",
						"areas": [
							"Nasirnagar Sadar Bazar",
							"Nasirnagar Model Town",
							"Nasirnagar North"
						]
					},
					{
						"name": "Radhika B. Baria",
						"areas": [
							"Radhika B. Baria Sadar Bazar",
							"Radhika B. Baria Model Town",
							"Radhika B. Baria North"
						]
					},
					{
						"name": "Sarail",
						"areas": [
							"Sarail Sadar Bazar",
							"Sarail Model Town",
							"Sarail North"
						]
					}
				]
			},
			{
				"name": "Chandpur",
				"thanas": [
					{
						"name": "Chandpur Sadar",
						"areas": [
							"Chandpur Sadar Bazar",
							"Chandpur Sadar Model Town",
							"Chandpur Sadar North"
						]
					},
					{
						"name": "Dhakirgaon",
						"areas": [
							"Dhakirgaon Sadar Bazar",
							"Dhakirgaon Model Town",
							"Dhakirgaon North"
						]
					},
					{
						"name": "Faridganj",
						"areas": [
							"Faridganj Sadar Bazar",
							"Faridganj Model Town",
							"Faridganj North"
						]
					},
					{
						"name": "Haimchar",
						"areas": [
							"Haimchar Sadar Bazar",
							"Haimchar Model Town",
							"Haimchar North"
						]
					},
					{
						"name": "Hajiganj",
						"areas": [
							"Hajiganj Sadar Bazar",
							"Hajiganj Model Town",
							"Hajiganj North"
						]
					},
					{
						"name": "Kachua",
						"areas": [
							"Kachua Sadar Bazar",
							"Kachua Model Town",
							"Kachua North"
						]
					},
					{
						"name": "Matlab Dakshin",
						"areas": [
							"Matlab Dakshin Sadar Bazar",
							"Matlab Dakshin Model Town",
							"Matlab Dakshin North"
						]
					},
					{
						"name": "Matlab Uttar",
						"areas": [
							"Matlab Uttar Sadar Bazar",
							"Matlab Uttar Model Town",
							"Matlab Uttar North"
						]
					},
					{
						"name": "Shahrasti",
						"areas": [
							"Shahrasti Sadar Bazar",
							"Shahrasti Model Town",
							"Shahrasti North"
						]
					}
				]
			},
			{
				"name": "Chittagong",
				"thanas": [
					{
						"name": "Akbar Shah",
						"areas": [
							"Akbar Shah Sadar Bazar",
							"Akbar Shah Model Town",
							"Akbar Shah North"
						]
					},
					{
						"name": "Anwara",
						"areas": [
							"Anwara Sadar Bazar",
							"Anwara Model Town",
							"Anwara North"
						]
					},
					{
						"name": "Bakolia",
						"areas": [
							"Bakolia Sadar Bazar",
							"Bakolia Model Town",
							"Bakolia North"
						]
					},
					{
						"name": "Bandar - CTG",
						"areas": [
							"Bandar Sadar Bazar",
							"Bandar Model Town",
							"Bandar North"
						]
					},
					{
						"name": "Banskhali",
						"areas": [
							"Banskhali Sadar Bazar",
							"Banskhali Model Town",
							"Banskhali North"
						]
					},
					{
						"name": "Bayazid Bostami",
						"areas": [
							"Bayazid Bostami Sadar Bazar",
							"Bayazid Bostami Model Town",
							"Bayazid Bostami North"
						]
					},
					{
						"name": "Bhujpur",
						"areas": [
							"Bhujpur Sadar Bazar",
							"Bhujpur Model Town",
							"Bhujpur North"
						]
					},
					{
						"name": "Boalkhali",
						"areas": [
							"Boalkhali Sadar Bazar",
							"Boalkhali Model Town",
							"Boalkhali North"
						]
					},
					{
						"name": "CEPZ",
						"areas": [
							"CEPZ Sadar Bazar",
							"CEPZ Model Town",
							"CEPZ North"
						]
					},
					{
						"name": "Chandanaish",
						"areas": [
							"Chandanaish Sadar Bazar",
							"Chandanaish Model Town",
							"Chandanaish North"
						]
					},
					{
						"name": "Chandgaon",
						"areas": [
							"Chandgaon Sadar Bazar",
							"Chandgaon Model Town",
							"Chandgaon North"
						]
					},
					{
						"name": "Chawk Bazar",
						"areas": [
							"Chawk Bazar Sadar Bazar",
							"Chawk Bazar Model Town",
							"Chawk Bazar North"
						]
					},
					{
						"name": "Chittagong Sadar",
						"areas": [
							"Chittagong Sadar Bazar",
							"Chittagong Sadar Model Town",
							"Chittagong Sadar North"
						]
					},
					{
						"name": "Doublemooring",
						"areas": [
							"Doublemooring Sadar Bazar",
							"Doublemooring Model Town",
							"Doublemooring North"
						]
					},
					{
						"name": "Fatikchori",
						"areas": [
							"Fatikchori Sadar Bazar",
							"Fatikchori Model Town",
							"Fatikchori North"
						]
					},
					{
						"name": "Halishahar",
						"areas": [
							"Halishahar Sadar Bazar",
							"Halishahar Model Town",
							"Halishahar North"
						]
					},
					{
						"name": "Hathazari",
						"areas": [
							"Hathazari Sadar Bazar",
							"Hathazari Model Town",
							"Hathazari North"
						]
					},
					{
						"name": "Karnaphuli",
						"areas": [
							"Karnaphuli Sadar Bazar",
							"Karnaphuli Model Town",
							"Karnaphuli North"
						]
					},
					{
						"name": "KeraniHat",
						"areas": [
							"KeraniHat Sadar Bazar",
							"KeraniHat Model Town",
							"KeraniHat North"
						]
					},
					{
						"name": "Khulshi",
						"areas": [
							"Khulshi Sadar Bazar",
							"Khulshi Model Town",
							"Khulshi North"
						]
					},
					{
						"name": "Kotwali - CTG",
						"areas": [
							"Kotwali Sadar Bazar",
							"Kotwali Model Town",
							"Kotwali North"
						]
					},
					{
						"name": "Lohagara",
						"areas": [
							"Lohagara Sadar Bazar",
							"Lohagara Model Town",
							"Lohagara North"
						]
					},
					{
						"name": "Mirsharai",
						"areas": [
							"Mirsharai Sadar Bazar",
							"Mirsharai Model Town",
							"Mirsharai North"
						]
					},
					{
						"name": "Pahartali",
						"areas": [
							"Pahartali Sadar Bazar",
							"Pahartali Model Town",
							"Pahartali North"
						]
					},
					{
						"name": "Panchlaish",
						"areas": [
							"Panchlaish Sadar Bazar",
							"Panchlaish Model Town",
							"Panchlaish North"
						]
					},
					{
						"name": "Patenga",
						"areas": [
							"Patenga Sadar Bazar",
							"Patenga Model Town",
							"Patenga North"
						]
					},
					{
						"name": "Patiya",
						"areas": [
							"Patiya Sadar Bazar",
							"Patiya Model Town",
							"Patiya North"
						]
					},
					{
						"name": "Rangunia",
						"areas": [
							"Rangunia Sadar Bazar",
							"Rangunia Model Town",
							"Rangunia North"
						]
					},
					{
						"name": "Raozan",
						"areas": [
							"Raozan Sadar Bazar",
							"Raozan Model Town",
							"Raozan North"
						]
					},
					{
						"name": "Sadarghat - CTG",
						"areas": [
							"Sadarghat Sadar Bazar",
							"Sadarghat Model Town",
							"Sadarghat North"
						]
					},
					{
						"name": "Sandwip",
						"areas": [
							"Sandwip Sadar Bazar",
							"Sandwip Model Town",
							"Sandwip North"
						]
					},
					{
						"name": "Satkania",
						"areas": [
							"Satkania Sadar Bazar",
							"Satkania Model Town",
							"Satkania North"
						]
					},
					{
						"name": "Shantirhat [Patiya]",
						"areas": [
							"Shantirhat Sadar Bazar",
							"Shantirhat Model Town",
							"Shantirhat North"
						]
					},
					{
						"name": "Shantirhat [Patiya] - CTG",
						"areas": [
							"Shantirhat Sadar Bazar",
							"Shantirhat Model Town",
							"Shantirhat North"
						]
					},
					{
						"name": "Sitakunda",
						"areas": [
							"Sitakunda Sadar Bazar",
							"Sitakunda Model Town",
							"Sitakunda North"
						]
					},
					{
						"name": "Sitakunda [Citygate]",
						"areas": [
							"Sitakunda Sadar Bazar",
							"Sitakunda Model Town",
							"Sitakunda North"
						]
					},
					{
						"name": "Zorarganj",
						"areas": [
							"Zorarganj Sadar Bazar",
							"Zorarganj Model Town",
							"Zorarganj North"
						]
					}
				]
			},
			{
				"name": "Cox's Bazar",
				"thanas": [
					{
						"name": "Chakaria",
						"areas": [
							"Chakaria Sadar Bazar",
							"Chakaria Model Town",
							"Chakaria North"
						]
					},
					{
						"name": "Cox's Bazar Sadar",
						"areas": [
							"Cox's Bazar Sadar Bazar",
							"Cox's Bazar Sadar Model Town",
							"Cox's Bazar Sadar North"
						]
					},
					{
						"name": "Eidgaon",
						"areas": [
							"Eidgaon Sadar Bazar",
							"Eidgaon Model Town",
							"Eidgaon North"
						]
					},
					{
						"name": "Kutubdia",
						"areas": [
							"Kutubdia Sadar Bazar",
							"Kutubdia Model Town",
							"Kutubdia North"
						]
					},
					{
						"name": "Moheshkhali",
						"areas": [
							"Moheshkhali Sadar Bazar",
							"Moheshkhali Model Town",
							"Moheshkhali North"
						]
					},
					{
						"name": "Pekua",
						"areas": [
							"Pekua Sadar Bazar",
							"Pekua Model Town",
							"Pekua North"
						]
					},
					{
						"name": "Ramu",
						"areas": [
							"Ramu Sadar Bazar",
							"Ramu Model Town",
							"Ramu North"
						]
					},
					{
						"name": "Teknaf",
						"areas": [
							"Teknaf Sadar Bazar",
							"Teknaf Model Town",
							"Teknaf North"
						]
					},
					{
						"name": "Ukhiya",
						"areas": [
							"Ukhiya Sadar Bazar",
							"Ukhiya Model Town",
							"Ukhiya North"
						]
					}
				]
			},
			{
				"name": "Cumilla",
				"thanas": [
					{
						"name": "Bangora - Bazar",
						"areas": [
							"Bangora - Bazar Sadar Bazar",
							"Bangora - Bazar Model Town",
							"Bangora - Bazar North"
						]
					},
					{
						"name": "Barura",
						"areas": [
							"Barura Sadar Bazar",
							"Barura Model Town",
							"Barura North"
						]
					},
					{
						"name": "Brahmanpara",
						"areas": [
							"Brahmanpara Sadar Bazar",
							"Brahmanpara Model Town",
							"Brahmanpara North"
						]
					},
					{
						"name": "Burichang",
						"areas": [
							"Burichang Sadar Bazar",
							"Burichang Model Town",
							"Burichang North"
						]
					},
					{
						"name": "Chandina",
						"areas": [
							"Chandina Sadar Bazar",
							"Chandina Model Town",
							"Chandina North"
						]
					},
					{
						"name": "Chauddagram",
						"areas": [
							"Chauddagram Sadar Bazar",
							"Chauddagram Model Town",
							"Chauddagram North"
						]
					},
					{
						"name": "Cumilla Sadar South Model",
						"areas": [
							"Cumilla Sadar South Model Sadar Bazar",
							"Cumilla Sadar South Model Model Town",
							"Cumilla Sadar South Model North"
						]
					},
					{
						"name": "Daudkandi",
						"areas": [
							"Daudkandi Sadar Bazar",
							"Daudkandi Model Town",
							"Daudkandi North"
						]
					},
					{
						"name": "Debidwar",
						"areas": [
							"Debidwar Sadar Bazar",
							"Debidwar Model Town",
							"Debidwar North"
						]
					},
					{
						"name": "Homna",
						"areas": [
							"Homna Sadar Bazar",
							"Homna Model Town",
							"Homna North"
						]
					},
					{
						"name": "Kandirpar",
						"areas": [
							"Kandirpar Sadar Bazar",
							"Kandirpar Model Town",
							"Kandirpar North"
						]
					},
					{
						"name": "Kotwali Model",
						"areas": [
							"Kotwali Model Sadar Bazar",
							"Kotwali Model Model Town",
							"Kotwali Model North"
						]
					},
					{
						"name": "Laksam",
						"areas": [
							"Laksam Sadar Bazar",
							"Laksam Model Town",
							"Laksam North"
						]
					},
					{
						"name": "Lalmai",
						"areas": [
							"Lalmai Sadar Bazar",
							"Lalmai Model Town",
							"Lalmai North"
						]
					},
					{
						"name": "Meghna",
						"areas": [
							"Meghna Sadar Bazar",
							"Meghna Model Town",
							"Meghna North"
						]
					},
					{
						"name": "Monoharganj",
						"areas": [
							"Monoharganj Sadar Bazar",
							"Monoharganj Model Town",
							"Monoharganj North"
						]
					}
				]
			},
			{
				"name": "Feni",
				"thanas": [
					{
						"name": "Chagalnaiya",
						"areas": [
							"Chagalnaiya Sadar Bazar",
							"Chagalnaiya Model Town",
							"Chagalnaiya North"
						]
					},
					{
						"name": "Dagunbhuiyan",
						"areas": [
							"Dagunbhuiyan Sadar Bazar",
							"Dagunbhuiyan Model Town",
							"Dagunbhuiyan North"
						]
					},
					{
						"name": "Feni Sadar",
						"areas": [
							"Feni Sadar Bazar",
							"Feni Sadar Model Town",
							"Feni Sadar North"
						]
					},
					{
						"name": "Fulgazi",
						"areas": [
							"Fulgazi Sadar Bazar",
							"Fulgazi Model Town",
							"Fulgazi North"
						]
					},
					{
						"name": "Mohipal",
						"areas": [
							"Mohipal Sadar Bazar",
							"Mohipal Model Town",
							"Mohipal North"
						]
					},
					{
						"name": "Parshuram",
						"areas": [
							"Parshuram Sadar Bazar",
							"Parshuram Model Town",
							"Parshuram North"
						]
					},
					{
						"name": "Sonagazi",
						"areas": [
							"Sonagazi Sadar Bazar",
							"Sonagazi Model Town",
							"Sonagazi North"
						]
					}
				]
			},
			{
				"name": "Khagrachori",
				"thanas": [
					{
						"name": "Dighinala",
						"areas": [
							"Dighinala Sadar Bazar",
							"Dighinala Model Town",
							"Dighinala North"
						]
					},
					{
						"name": "Guimara",
						"areas": [
							"Guimara Sadar Bazar",
							"Guimara Model Town",
							"Guimara North"
						]
					},
					{
						"name": "Khagrachari Sadar",
						"areas": [
							"Khagrachari Sadar Bazar",
							"Khagrachari Sadar Model Town",
							"Khagrachari Sadar North"
						]
					},
					{
						"name": "Laxmichari",
						"areas": [
							"Laxmichari Sadar Bazar",
							"Laxmichari Model Town",
							"Laxmichari North"
						]
					},
					{
						"name": "Mahalchari",
						"areas": [
							"Mahalchari Sadar Bazar",
							"Mahalchari Model Town",
							"Mahalchari North"
						]
					},
					{
						"name": "Manikchari",
						"areas": [
							"Manikchari Sadar Bazar",
							"Manikchari Model Town",
							"Manikchari North"
						]
					},
					{
						"name": "Matiranga",
						"areas": [
							"Matiranga Sadar Bazar",
							"Matiranga Model Town",
							"Matiranga North"
						]
					},
					{
						"name": "Panchari",
						"areas": [
							"Panchari Sadar Bazar",
							"Panchari Model Town",
							"Panchari North"
						]
					},
					{
						"name": "Ramgarh",
						"areas": [
							"Ramgarh Sadar Bazar",
							"Ramgarh Model Town",
							"Ramgarh North"
						]
					}
				]
			},
			{
				"name": "Laxmipur",
				"thanas": [
					{
						"name": "Chandraganj",
						"areas": [
							"Chandraganj Sadar Bazar",
							"Chandraganj Model Town",
							"Chandraganj North"
						]
					},
					{
						"name": "Kamalnagar",
						"areas": [
							"Kamalnagar Sadar Bazar",
							"Kamalnagar Model Town",
							"Kamalnagar North"
						]
					},
					{
						"name": "Laxmipur Sadar",
						"areas": [
							"Laxmipur Sadar Bazar",
							"Laxmipur Sadar Model Town",
							"Laxmipur Sadar North"
						]
					},
					{
						"name": "Raipur",
						"areas": [
							"Raipur Sadar Bazar",
							"Raipur Model Town",
							"Raipur North"
						]
					},
					{
						"name": "Ramganj",
						"areas": [
							"Ramganj Sadar Bazar",
							"Ramganj Model Town",
							"Ramganj North"
						]
					},
					{
						"name": "Ramgati",
						"areas": [
							"Ramgati Sadar Bazar",
							"Ramgati Model Town",
							"Ramgati North"
						]
					}
				]
			},
			{
				"name": "Noakhali",
				"thanas": [
					{
						"name": "Begamganj",
						"areas": [
							"Begamganj Sadar Bazar",
							"Begamganj Model Town",
							"Begamganj North"
						]
					},
					{
						"name": "Chatkhil",
						"areas": [
							"Chatkhil Sadar Bazar",
							"Chatkhil Model Town",
							"Chatkhil North"
						]
					},
					{
						"name": "Companyganj",
						"areas": [
							"Companyganj Sadar Bazar",
							"Companyganj Model Town",
							"Companyganj North"
						]
					},
					{
						"name": "Hatiya",
						"areas": [
							"Hatiya Sadar Bazar",
							"Hatiya Model Town",
							"Hatiya North"
						]
					},
					{
						"name": "Kabir Hat",
						"areas": [
							"Kabir Hat Sadar Bazar",
							"Kabir Hat Model Town",
							"Kabir Hat North"
						]
					},
					{
						"name": "Noakhali Sadar",
						"areas": [
							"Noakhali Sadar Bazar",
							"Noakhali Sadar Model Town",
							"Noakhali Sadar North"
						]
					},
					{
						"name": "Senbagh",
						"areas": [
							"Senbagh Sadar Bazar",
							"Senbagh Model Town",
							"Senbagh North"
						]
					},
					{
						"name": "Sonaimuri",
						"areas": [
							"Sonaimuri Sadar Bazar",
							"Sonaimuri Model Town",
							"Sonaimuri North"
						]
					},
					{
						"name": "Subarnachar",
						"areas": [
							"Subarnachar Sadar Bazar",
							"Subarnachar Model Town",
							"Subarnachar North"
						]
					}
				]
			},
			{
				"name": "Rangamati",
				"thanas": [
					{
						"name": "Bagaichhari",
						"areas": [
							"Bagaichhari Sadar Bazar",
							"Bagaichhari Model Town",
							"Bagaichhari North"
						]
					},
					{
						"name": "Barkal",
						"areas": [
							"Barkal Sadar Bazar",
							"Barkal Model Town",
							"Barkal North"
						]
					},
					{
						"name": "Belaichhari",
						"areas": [
							"Belaichhari Sadar Bazar",
							"Belaichhari Model Town",
							"Belaichhari North"
						]
					},
					{
						"name": "Juraichhari",
						"areas": [
							"Juraichhari Sadar Bazar",
							"Juraichhari Model Town",
							"Juraichhari North"
						]
					},
					{
						"name": "Kaptai",
						"areas": [
							"Kaptai Sadar Bazar",
							"Kaptai Model Town",
							"Kaptai North"
						]
					},
					{
						"name": "Kawkhali Upazila",
						"areas": [
							"Kawkhali Upazila Sadar Bazar",
							"Kawkhali Upazila Model Town",
							"Kawkhali Upazila North"
						]
					},
					{
						"name": "Langadu",
						"areas": [
							"Langadu Sadar Bazar",
							"Langadu Model Town",
							"Langadu North"
						]
					},
					{
						"name": "Naniarchar",
						"areas": [
							"Naniarchar Sadar Bazar",
							"Naniarchar Model Town",
							"Naniarchar North"
						]
					},
					{
						"name": "Rajasthali",
						"areas": [
							"Rajasthali Sadar Bazar",
							"Rajasthali Model Town",
							"Rajasthali North"
						]
					},
					{
						"name": "Rangamati Sadar",
						"areas": [
							"Rangamati Sadar Bazar",
							"Rangamati Sadar Model Town",
							"Rangamati Sadar North"
						]
					}
				]
			}
		]
	},
	{
		"name": "Rajshahi",
		"districts": [
			{
				"name": "Bogura",
				"thanas": [
					{
						"name": "Alamdighi",
						"areas": [
							"Alamdighi Sadar Bazar",
							"Alamdighi Model Town",
							"Alamdighi North"
						]
					},
					{
						"name": "Bogura Sadar",
						"areas": [
							"Bogura Sadar Bazar",
							"Bogura Sadar Model Town",
							"Bogura Sadar North"
						]
					},
					{
						"name": "Baropur",
						"areas": [
							"Baropur Sadar Bazar",
							"Baropur Model Town",
							"Baropur North"
						]
					},
					{
						"name": "Dhunat",
						"areas": [
							"Dhunat Sadar Bazar",
							"Dhunat Model Town",
							"Dhunat North"
						]
					},
					{
						"name": "Dhupchancia",
						"areas": [
							"Dhupchancia Sadar Bazar",
							"Dhupchancia Model Town",
							"Dhupchancia North"
						]
					},
					{
						"name": "Gabtoli",
						"areas": [
							"Gabtoli Sadar Bazar",
							"Gabtoli Model Town",
							"Gabtoli North"
						]
					},
					{
						"name": "Kahaloo",
						"areas": [
							"Kahaloo Sadar Bazar",
							"Kahaloo Model Town",
							"Kahaloo North"
						]
					},
					{
						"name": "Nandigram",
						"areas": [
							"Nandigram Sadar Bazar",
							"Nandigram Model Town",
							"Nandigram North"
						]
					},
					{
						"name": "Sariakandi",
						"areas": [
							"Sariakandi Sadar Bazar",
							"Sariakandi Model Town",
							"Sariakandi North"
						]
					},
					{
						"name": "Sherpur",
						"areas": [
							"Sherpur Sadar Bazar",
							"Sherpur Model Town",
							"Sherpur North"
						]
					},
					{
						"name": "Shibganj",
						"areas": [
							"Shibganj Sadar Bazar",
							"Shibganj Model Town",
							"Shibganj North"
						]
					},
					{
						"name": "Sonatola",
						"areas": [
							"Sonatola Sadar Bazar",
							"Sonatola Model Town",
							"Sonatola North"
						]
					},
					{
						"name": "Shahjahanpur",
						"areas": [
							"Shahjahanpur Sadar Bazar",
							"Shahjahanpur Model Town",
							"Shahjahanpur North"
						]
					}
				]
			},
			{
				"name": "Chapainawabganj",
				"thanas": [
					{
						"name": "Bholahat",
						"areas": [
							"Bholahat Sadar Bazar",
							"Bholahat Model Town",
							"Bholahat North"
						]
					},
					{
						"name": "Chapainawabganj Sadar",
						"areas": [
							"Chapainawabganj Sadar Bazar",
							"Chapainawabganj Sadar Model Town",
							"Chapainawabganj Sadar North"
						]
					},
					{
						"name": "Gomastapur",
						"areas": [
							"Gomastapur Sadar Bazar",
							"Gomastapur Model Town",
							"Gomastapur North"
						]
					},
					{
						"name": "Nachole",
						"areas": [
							"Nachole Sadar Bazar",
							"Nachole Model Town",
							"Nachole North"
						]
					},
					{
						"name": "Shibganj Sadar",
						"areas": [
							"Shibganj Sadar Bazar",
							"Shibganj Sadar Model Town",
							"Shibganj Sadar North"
						]
					}
				]
			},
			{
				"name": "Joypurhat",
				"thanas": [
					{
						"name": "Akkelpur",
						"areas": [
							"Akkelpur Sadar Bazar",
							"Akkelpur Model Town",
							"Akkelpur North"
						]
					},
					{
						"name": "Joypurhat Sadar",
						"areas": [
							"Joypurhat Sadar Bazar",
							"Joypurhat Sadar Model Town",
							"Joypurhat Sadar North"
						]
					},
					{
						"name": "Kalai",
						"areas": [
							"Kalai Sadar Bazar",
							"Kalai Model Town",
							"Kalai North"
						]
					},
					{
						"name": "Khetlal",
						"areas": [
							"Khetlal Sadar Bazar",
							"Khetlal Model Town",
							"Khetlal North"
						]
					},
					{
						"name": "Panchbibi",
						"areas": [
							"Panchbibi Sadar Bazar",
							"Panchbibi Model Town",
							"Panchbibi North"
						]
					}
				]
			},
			{
				"name": "Naogaon",
				"thanas": [
					{
						"name": "Atrai",
						"areas": [
							"Atrai Sadar Bazar",
							"Atrai Model Town",
							"Atrai North"
						]
					},
					{
						"name": "Badolgachi",
						"areas": [
							"Badolgachi Sadar Bazar",
							"Badolgachi Model Town",
							"Badolgachi North"
						]
					},
					{
						"name": "Dhamoirhat",
						"areas": [
							"Dhamoirhat Sadar Bazar",
							"Dhamoirhat Model Town",
							"Dhamoirhat North"
						]
					},
					{
						"name": "Manda",
						"areas": [
							"Manda Sadar Bazar",
							"Manda Model Town",
							"Manda North"
						]
					},
					{
						"name": "Mohadevpur",
						"areas": [
							"Mohadevpur Sadar Bazar",
							"Mohadevpur Model Town",
							"Mohadevpur North"
						]
					},
					{
						"name": "Naogaon Sadar",
						"areas": [
							"Naogaon Sadar Bazar",
							"Naogaon Sadar Model Town",
							"Naogaon Sadar North"
						]
					},
					{
						"name": "Niamatpur",
						"areas": [
							"Niamatpur Sadar Bazar",
							"Niamatpur Model Town",
							"Niamatpur North"
						]
					},
					{
						"name": "Patnitala",
						"areas": [
							"Patnitala Sadar Bazar",
							"Patnitala Model Town",
							"Patnitala North"
						]
					},
					{
						"name": "Porsha",
						"areas": [
							"Porsha Sadar Bazar",
							"Porsha Model Town",
							"Porsha North"
						]
					},
					{
						"name": "Raninagar",
						"areas": [
							"Raninagar Sadar Bazar",
							"Raninagar Model Town",
							"Raninagar North"
						]
					},
					{
						"name": "Sapahar",
						"areas": [
							"Sapahar Sadar Bazar",
							"Sapahar Model Town",
							"Sapahar North"
						]
					}
				]
			},
			{
				"name": "Natore",
				"thanas": [
					{
						"name": "Bagatipara",
						"areas": [
							"Bagatipara Sadar Bazar",
							"Bagatipara Model Town",
							"Bagatipara North"
						]
					},
					{
						"name": "Baraigram",
						"areas": [
							"Baraigram Sadar Bazar",
							"Baraigram Model Town",
							"Baraigram North"
						]
					},
					{
						"name": "Gopalpur Pourosova",
						"areas": [
							"Gopalpur Pourosova Sadar Bazar",
							"Gopalpur Pourosova Model Town",
							"Gopalpur Pourosova North"
						]
					},
					{
						"name": "Gurudaspur",
						"areas": [
							"Gurudaspur Sadar Bazar",
							"Gurudaspur Model Town",
							"Gurudaspur North"
						]
					},
					{
						"name": "Lalpur",
						"areas": [
							"Lalpur Sadar Bazar",
							"Lalpur Model Town",
							"Lalpur North"
						]
					},
					{
						"name": "Naldanga",
						"areas": [
							"Naldanga Sadar Bazar",
							"Naldanga Model Town",
							"Naldanga North"
						]
					},
					{
						"name": "Natore Sadar",
						"areas": [
							"Natore Sadar Bazar",
							"Natore Sadar Model Town",
							"Natore Sadar North"
						]
					},
					{
						"name": "Singra",
						"areas": [
							"Singra Sadar Bazar",
							"Singra Model Town",
							"Singra North"
						]
					}
				]
			},
			{
				"name": "Pabna",
				"thanas": [
					{
						"name": "Ataikula [Pabna]",
						"areas": [
							"Ataikula Sadar Bazar",
							"Ataikula Model Town",
							"Ataikula North"
						]
					},
					{
						"name": "Atgharia",
						"areas": [
							"Atgharia Sadar Bazar",
							"Atgharia Model Town",
							"Atgharia North"
						]
					},
					{
						"name": "Bera",
						"areas": [
							"Bera Sadar Bazar",
							"Bera Model Town",
							"Bera North"
						]
					},
					{
						"name": "Bhangura",
						"areas": [
							"Bhangura Sadar Bazar",
							"Bhangura Model Town",
							"Bhangura North"
						]
					},
					{
						"name": "Chatmohar",
						"areas": [
							"Chatmohar Sadar Bazar",
							"Chatmohar Model Town",
							"Chatmohar North"
						]
					},
					{
						"name": "Ishwardi",
						"areas": [
							"Ishwardi Sadar Bazar",
							"Ishwardi Model Town",
							"Ishwardi North"
						]
					},
					{
						"name": "Pabna Sadar",
						"areas": [
							"Pabna Sadar Bazar",
							"Pabna Sadar Model Town",
							"Pabna Sadar North"
						]
					},
					{
						"name": "Santhia",
						"areas": [
							"Santhia Sadar Bazar",
							"Santhia Model Town",
							"Santhia North"
						]
					},
					{
						"name": "Sujanagar",
						"areas": [
							"Sujanagar Sadar Bazar",
							"Sujanagar Model Town",
							"Sujanagar North"
						]
					}
				]
			},
			{
				"name": "Rajshahi",
				"thanas": [
					{
						"name": "Airport [Rajshahi]",
						"areas": [
							"Airport Sadar Bazar",
							"Airport Model Town",
							"Airport North"
						]
					},
					{
						"name": "Bagha",
						"areas": [
							"Bagha Sadar Bazar",
							"Bagha Model Town",
							"Bagha North"
						]
					},
					{
						"name": "Bagmara",
						"areas": [
							"Bagmara Sadar Bazar",
							"Bagmara Model Town",
							"Bagmara North"
						]
					},
					{
						"name": "Belpukur",
						"areas": [
							"Belpukur Sadar Bazar",
							"Belpukur Model Town",
							"Belpukur North"
						]
					},
					{
						"name": "Boalia",
						"areas": [
							"Boalia Sadar Bazar",
							"Boalia Model Town",
							"Boalia North"
						]
					},
					{
						"name": "Chandrima",
						"areas": [
							"Chandrima Sadar Bazar",
							"Chandrima Model Town",
							"Chandrima North"
						]
					},
					{
						"name": "Charghat",
						"areas": [
							"Charghat Sadar Bazar",
							"Charghat Model Town",
							"Charghat North"
						]
					},
					{
						"name": "Damkura",
						"areas": [
							"Damkura Sadar Bazar",
							"Damkura Model Town",
							"Damkura North"
						]
					},
					{
						"name": "Durgapur",
						"areas": [
							"Durgapur Sadar Bazar",
							"Durgapur Model Town",
							"Durgapur North"
						]
					},
					{
						"name": "Godagari",
						"areas": [
							"Godagari Sadar Bazar",
							"Godagari Model Town",
							"Godagari North"
						]
					},
					{
						"name": "Kashiadanga",
						"areas": [
							"Kashiadanga Sadar Bazar",
							"Kashiadanga Model Town",
							"Kashiadanga North"
						]
					},
					{
						"name": "Katakhali",
						"areas": [
							"Katakhali Sadar Bazar",
							"Katakhali Model Town",
							"Katakhali North"
						]
					},
					{
						"name": "Kornohar",
						"areas": [
							"Kornohar Sadar Bazar",
							"Kornohar Model Town",
							"Kornohar North"
						]
					},
					{
						"name": "Matihar",
						"areas": [
							"Matihar Sadar Bazar",
							"Matihar Model Town",
							"Matihar North"
						]
					},
					{
						"name": "Mahanpur",
						"areas": [
							"Mahanpur Sadar Bazar",
							"Mahanpur Model Town",
							"Mahanpur North"
						]
					},
					{
						"name": "Paba",
						"areas": [
							"Paba Sadar Bazar",
							"Paba Model Town",
							"Paba North"
						]
					},
					{
						"name": "Puthia",
						"areas": [
							"Puthia Sadar Bazar",
							"Puthia Model Town",
							"Puthia North"
						]
					},
					{
						"name": "Rajpara",
						"areas": [
							"Rajpara Sadar Bazar",
							"Rajpara Model Town",
							"Rajpara North"
						]
					},
					{
						"name": "Rajshahi Sadar",
						"areas": [
							"Rajshahi Sadar Bazar",
							"Rajshahi Sadar Model Town",
							"Rajshahi Sadar North"
						]
					},
					{
						"name": "Shah Makdam",
						"areas": [
							"Shah Makdam Sadar Bazar",
							"Shah Makdam Model Town",
							"Shah Makdam North"
						]
					},
					{
						"name": "Tanore",
						"areas": [
							"Tanore Sadar Bazar",
							"Tanore Model Town",
							"Tanore North"
						]
					}
				]
			},
			{
				"name": "Sirajganj",
				"thanas": [
					{
						"name": "Belkuchi",
						"areas": [
							"Belkuchi Sadar Bazar",
							"Belkuchi Model Town",
							"Belkuchi North"
						]
					},
					{
						"name": "Chowhali",
						"areas": [
							"Chowhali Sadar Bazar",
							"Chowhali Model Town",
							"Chowhali North"
						]
					},
					{
						"name": "Kamarkhanda",
						"areas": [
							"Kamarkhanda Sadar Bazar",
							"Kamarkhanda Model Town",
							"Kamarkhanda North"
						]
					},
					{
						"name": "Kazipur",
						"areas": [
							"Kazipur Sadar Bazar",
							"Kazipur Model Town",
							"Kazipur North"
						]
					},
					{
						"name": "Raiganj",
						"areas": [
							"Raiganj Sadar Bazar",
							"Raiganj Model Town",
							"Raiganj North"
						]
					},
					{
						"name": "Shahjadpur",
						"areas": [
							"Shahjadpur Sadar Bazar",
							"Shahjadpur Model Town",
							"Shahjadpur North"
						]
					},
					{
						"name": "Sirajganj Sadar",
						"areas": [
							"Sirajganj Sadar Bazar",
							"Sirajganj Sadar Model Town",
							"Sirajganj Sadar North"
						]
					},
					{
						"name": "Tarash",
						"areas": [
							"Tarash Sadar Bazar",
							"Tarash Model Town",
							"Tarash North"
						]
					},
					{
						"name": "Ullapara",
						"areas": [
							"Ullapara Sadar Bazar",
							"Ullapara Model Town",
							"Ullapara North"
						]
					}
				]
			}
		]
	},
	{
		"name": "Khulna",
		"districts": [
			{
				"name": "Bagerhat",
				"thanas": [
					{
						"name": "Bagerhat Sadar",
						"areas": [
							"Bagerhat Sadar Bazar",
							"Bagerhat Sadar Model Town",
							"Bagerhat Sadar North"
						]
					},
					{
						"name": "Chitalmari",
						"areas": [
							"Chitalmari Sadar Bazar",
							"Chitalmari Model Town",
							"Chitalmari North"
						]
					},
					{
						"name": "Fakirhat",
						"areas": [
							"Fakirhat Sadar Bazar",
							"Fakirhat Model Town",
							"Fakirhat North"
						]
					},
					{
						"name": "Kachua upazilla",
						"areas": [
							"Kachua upazilla Sadar Bazar",
							"Kachua upazilla Model Town",
							"Kachua upazilla North"
						]
					},
					{
						"name": "Mollahat",
						"areas": [
							"Mollahat Sadar Bazar",
							"Mollahat Model Town",
							"Mollahat North"
						]
					},
					{
						"name": "Mongla",
						"areas": [
							"Mongla Sadar Bazar",
							"Mongla Model Town",
							"Mongla North"
						]
					},
					{
						"name": "Morrelganj",
						"areas": [
							"Morrelganj Sadar Bazar",
							"Morrelganj Model Town",
							"Morrelganj North"
						]
					},
					{
						"name": "Rampal",
						"areas": [
							"Rampal Sadar Bazar",
							"Rampal Model Town",
							"Rampal North"
						]
					},
					{
						"name": "Sarankhola",
						"areas": [
							"Sarankhola Sadar Bazar",
							"Sarankhola Model Town",
							"Sarankhola North"
						]
					}
				]
			},
			{
				"name": "Chuadanga",
				"thanas": [
					{
						"name": "Alamdanga",
						"areas": [
							"Alamdanga Sadar Bazar",
							"Alamdanga Model Town",
							"Alamdanga North"
						]
					},
					{
						"name": "Chuadanga Sadar",
						"areas": [
							"Chuadanga Sadar Bazar",
							"Chuadanga Sadar Model Town",
							"Chuadanga Sadar North"
						]
					},
					{
						"name": "Damurhuda",
						"areas": [
							"Damurhuda Sadar Bazar",
							"Damurhuda Model Town",
							"Damurhuda North"
						]
					},
					{
						"name": "Darshana",
						"areas": [
							"Darshana Sadar Bazar",
							"Darshana Model Town",
							"Darshana North"
						]
					},
					{
						"name": "Jibannagar",
						"areas": [
							"Jibannagar Sadar Bazar",
							"Jibannagar Model Town",
							"Jibannagar North"
						]
					}
				]
			},
			{
				"name": "Jashore",
				"thanas": [
					{
						"name": "Abhaynagar",
						"areas": [
							"Abhaynagar Sadar Bazar",
							"Abhaynagar Model Town",
							"Abhaynagar North"
						]
					},
					{
						"name": "Bagharpara",
						"areas": [
							"Bagharpara Sadar Bazar",
							"Bagharpara Model Town",
							"Bagharpara North"
						]
					},
					{
						"name": "Chaugacha",
						"areas": [
							"Chaugacha Sadar Bazar",
							"Chaugacha Model Town",
							"Chaugacha North"
						]
					},
					{
						"name": "Jashore Sadar",
						"areas": [
							"Jashore Sadar Bazar",
							"Jashore Sadar Model Town",
							"Jashore Sadar North"
						]
					},
					{
						"name": "Jhikorgacha",
						"areas": [
							"Jhikorgacha Sadar Bazar",
							"Jhikorgacha Model Town",
							"Jhikorgacha North"
						]
					},
					{
						"name": "Keshobpur",
						"areas": [
							"Keshobpur Sadar Bazar",
							"Keshobpur Model Town",
							"Keshobpur North"
						]
					},
					{
						"name": "Manirampur",
						"areas": [
							"Manirampur Sadar Bazar",
							"Manirampur Model Town",
							"Manirampur North"
						]
					},
					{
						"name": "Sharsha",
						"areas": [
							"Sharsha Sadar Bazar",
							"Sharsha Model Town",
							"Sharsha North"
						]
					}
				]
			},
			{
				"name": "Jhenaidah",
				"thanas": [
					{
						"name": "Harinakunda",
						"areas": [
							"Harinakunda Sadar Bazar",
							"Harinakunda Model Town",
							"Harinakunda North"
						]
					},
					{
						"name": "Jhenaidah Sadar",
						"areas": [
							"Jhenaidah Sadar Bazar",
							"Jhenaidah Sadar Model Town",
							"Jhenaidah Sadar North"
						]
					},
					{
						"name": "Kaliganj",
						"areas": [
							"Kaliganj Sadar Bazar",
							"Kaliganj Model Town",
							"Kaliganj North"
						]
					},
					{
						"name": "Kotchandpur",
						"areas": [
							"Kotchandpur Sadar Bazar",
							"Kotchandpur Model Town",
							"Kotchandpur North"
						]
					},
					{
						"name": "Maheshpur",
						"areas": [
							"Maheshpur Sadar Bazar",
							"Maheshpur Model Town",
							"Maheshpur North"
						]
					},
					{
						"name": "Shailkupa",
						"areas": [
							"Shailkupa Sadar Bazar",
							"Shailkupa Model Town",
							"Shailkupa North"
						]
					}
				]
			},
			{
				"name": "Khulna",
				"thanas": [
					{
						"name": "Batiaghata",
						"areas": [
							"Batiaghata Sadar Bazar",
							"Batiaghata Model Town",
							"Batiaghata North"
						]
					},
					{
						"name": "Circuit House",
						"areas": [
							"Circuit House Sadar Bazar",
							"Circuit House Model Town",
							"Circuit House North"
						]
					},
					{
						"name": "Dacope",
						"areas": [
							"Dacope Sadar Bazar",
							"Dacope Model Town",
							"Dacope North"
						]
					},
					{
						"name": "Daulatpur [Khulna]",
						"areas": [
							"Daulatpur Sadar Bazar",
							"Daulatpur Model Town",
							"Daulatpur North"
						]
					},
					{
						"name": "Dighalia",
						"areas": [
							"Dighalia Sadar Bazar",
							"Dighalia Model Town",
							"Dighalia North"
						]
					},
					{
						"name": "Dumuria",
						"areas": [
							"Dumuria Sadar Bazar",
							"Dumuria Model Town",
							"Dumuria North"
						]
					},
					{
						"name": "Gollamari [Khulna]",
						"areas": [
							"Gollamari Sadar Bazar",
							"Gollamari Model Town",
							"Gollamari North"
						]
					},
					{
						"name": "Khulna Sadar",
						"areas": [
							"Khulna Sadar Bazar",
							"Khulna Sadar Model Town",
							"Khulna Sadar North"
						]
					},
					{
						"name": "Koyra",
						"areas": [
							"Koyra Sadar Bazar",
							"Koyra Model Town",
							"Koyra North"
						]
					},
					{
						"name": "Paikgacha",
						"areas": [
							"Paikgacha Sadar Bazar",
							"Paikgacha Model Town",
							"Paikgacha North"
						]
					},
					{
						"name": "Phultala",
						"areas": [
							"Phultala Sadar Bazar",
							"Phultala Model Town",
							"Phultala North"
						]
					},
					{
						"name": "Rupsha",
						"areas": [
							"Rupsha Sadar Bazar",
							"Rupsha Model Town",
							"Rupsha North"
						]
					},
					{
						"name": "Terokhada",
						"areas": [
							"Terokhada Sadar Bazar",
							"Terokhada Model Town",
							"Terokhada North"
						]
					}
				]
			},
			{
				"name": "Kustia",
				"thanas": [
					{
						"name": "Bheramara",
						"areas": [
							"Bheramara Sadar Bazar",
							"Bheramara Model Town",
							"Bheramara North"
						]
					},
					{
						"name": "Daulatpur",
						"areas": [
							"Daulatpur Sadar Bazar",
							"Daulatpur Model Town",
							"Daulatpur North"
						]
					},
					{
						"name": "Khoksa",
						"areas": [
							"Khoksa Sadar Bazar",
							"Khoksa Model Town",
							"Khoksa North"
						]
					},
					{
						"name": "Kumarkhali",
						"areas": [
							"Kumarkhali Sadar Bazar",
							"Kumarkhali Model Town",
							"Kumarkhali North"
						]
					},
					{
						"name": "Kushtia Sadar",
						"areas": [
							"Kushtia Sadar Bazar",
							"Kushtia Sadar Model Town",
							"Kushtia Sadar North"
						]
					},
					{
						"name": "Mirpur Upazila",
						"areas": [
							"Mirpur Upazila Sadar Bazar",
							"Mirpur Upazila Model Town",
							"Mirpur Upazila North"
						]
					}
				]
			},
			{
				"name": "Magura",
				"thanas": [
					{
						"name": "Magura Sadar",
						"areas": [
							"Magura Sadar Bazar",
							"Magura Sadar Model Town",
							"Magura Sadar North"
						]
					},
					{
						"name": "Mohammadpur Upazila",
						"areas": [
							"Mohammadpur Upazila Sadar Bazar",
							"Mohammadpur Upazila Model Town",
							"Mohammadpur Upazila North"
						]
					},
					{
						"name": "Shalikha",
						"areas": [
							"Shalikha Sadar Bazar",
							"Shalikha Model Town",
							"Shalikha North"
						]
					},
					{
						"name": "Sreepur Upazila",
						"areas": [
							"Sreepur Upazila Sadar Bazar",
							"Sreepur Upazila Model Town",
							"Sreepur Upazila North"
						]
					}
				]
			},
			{
				"name": "Meherpur",
				"thanas": [
					{
						"name": "Gangni",
						"areas": [
							"Gangni Sadar Bazar",
							"Gangni Model Town",
							"Gangni North"
						]
					},
					{
						"name": "Meherpur Sadar",
						"areas": [
							"Meherpur Sadar Bazar",
							"Meherpur Sadar Model Town",
							"Meherpur Sadar North"
						]
					},
					{
						"name": "Mujibnagar",
						"areas": [
							"Mujibnagar Sadar Bazar",
							"Mujibnagar Model Town",
							"Mujibnagar North"
						]
					}
				]
			},
			{
				"name": "Narail",
				"thanas": [
					{
						"name": "Kalia",
						"areas": [
							"Kalia Sadar Bazar",
							"Kalia Model Town",
							"Kalia North"
						]
					},
					{
						"name": "Lohagara",
						"areas": [
							"Lohagara Sadar Bazar",
							"Lohagara Model Town",
							"Lohagara North"
						]
					},
					{
						"name": "Naragati",
						"areas": [
							"Naragati Sadar Bazar",
							"Naragati Model Town",
							"Naragati North"
						]
					},
					{
						"name": "Narail Sadar",
						"areas": [
							"Narail Sadar Bazar",
							"Narail Sadar Model Town",
							"Narail Sadar North"
						]
					}
				]
			},
			{
				"name": "Shatkhira",
				"thanas": [
					{
						"name": "Assasuni",
						"areas": [
							"Assasuni Sadar Bazar",
							"Assasuni Model Town",
							"Assasuni North"
						]
					},
					{
						"name": "Debhata",
						"areas": [
							"Debhata Sadar Bazar",
							"Debhata Model Town",
							"Debhata North"
						]
					},
					{
						"name": "Kalaroa",
						"areas": [
							"Kalaroa Sadar Bazar",
							"Kalaroa Model Town",
							"Kalaroa North"
						]
					},
					{
						"name": "Kaliganj",
						"areas": [
							"Kaliganj Sadar Bazar",
							"Kaliganj Model Town",
							"Kaliganj North"
						]
					},
					{
						"name": "Patkelghata",
						"areas": [
							"Patkelghata Sadar Bazar",
							"Patkelghata Model Town",
							"Patkelghata North"
						]
					},
					{
						"name": "Shatkhira Sadar",
						"areas": [
							"Shatkhira Sadar Bazar",
							"Shatkhira Sadar Model Town",
							"Shatkhira Sadar North"
						]
					},
					{
						"name": "Shyamnagar",
						"areas": [
							"Shyamnagar Sadar Bazar",
							"Shyamnagar Model Town",
							"Shyamnagar North"
						]
					},
					{
						"name": "Tala",
						"areas": [
							"Tala Sadar Bazar",
							"Tala Model Town",
							"Tala North"
						]
					}
				]
			}
		]
	},
	{
		"name": "Barishal",
		"districts": [
			{
				"name": "Barguna",
				"thanas": [
					{
						"name": "Amtali",
						"areas": [
							"Amtali Sadar Bazar",
							"Amtali Model Town",
							"Amtali North"
						]
					},
					{
						"name": "Bamna",
						"areas": [
							"Bamna Sadar Bazar",
							"Bamna Model Town",
							"Bamna North"
						]
					},
					{
						"name": "Barguna Sadar",
						"areas": [
							"Barguna Sadar Bazar",
							"Barguna Sadar Model Town",
							"Barguna Sadar North"
						]
					},
					{
						"name": "Betagi",
						"areas": [
							"Betagi Sadar Bazar",
							"Betagi Model Town",
							"Betagi North"
						]
					},
					{
						"name": "Patharghata",
						"areas": [
							"Patharghata Sadar Bazar",
							"Patharghata Model Town",
							"Patharghata North"
						]
					},
					{
						"name": "Tatlali",
						"areas": [
							"Tatlali Sadar Bazar",
							"Tatlali Model Town",
							"Tatlali North"
						]
					}
				]
			},
			{
				"name": "Barishal",
				"thanas": [
					{
						"name": "Agailjhara",
						"areas": [
							"Agailjhara Sadar Bazar",
							"Agailjhara Model Town",
							"Agailjhara North"
						]
					},
					{
						"name": "Babuganj",
						"areas": [
							"Babuganj Sadar Bazar",
							"Babuganj Model Town",
							"Babuganj North"
						]
					},
					{
						"name": "Bakerganj",
						"areas": [
							"Bakerganj Sadar Bazar",
							"Bakerganj Model Town",
							"Bakerganj North"
						]
					},
					{
						"name": "Banaripara",
						"areas": [
							"Banaripara Sadar Bazar",
							"Banaripara Model Town",
							"Banaripara North"
						]
					},
					{
						"name": "Barishal Sadar",
						"areas": [
							"Barishal Sadar Bazar",
							"Barishal Sadar Model Town",
							"Barishal Sadar North"
						]
					},
					{
						"name": "Gouronadi",
						"areas": [
							"Gouronadi Sadar Bazar",
							"Gouronadi Model Town",
							"Gouronadi North"
						]
					},
					{
						"name": "Hizla",
						"areas": [
							"Hizla Sadar Bazar",
							"Hizla Model Town",
							"Hizla North"
						]
					},
					{
						"name": "Mehendiganj",
						"areas": [
							"Mehendiganj Sadar Bazar",
							"Mehendiganj Model Town",
							"Mehendiganj North"
						]
					},
					{
						"name": "Muladi",
						"areas": [
							"Muladi Sadar Bazar",
							"Muladi Model Town",
							"Muladi North"
						]
					},
					{
						"name": "Wazirpur",
						"areas": [
							"Wazirpur Sadar Bazar",
							"Wazirpur Model Town",
							"Wazirpur North"
						]
					}
				]
			},
			{
				"name": "Bhola",
				"thanas": [
					{
						"name": "Bhola Sadar",
						"areas": [
							"Bhola Sadar Bazar",
							"Bhola Sadar Model Town",
							"Bhola Sadar North"
						]
					},
					{
						"name": "Borhanuddin",
						"areas": [
							"Borhanuddin Sadar Bazar",
							"Borhanuddin Model Town",
							"Borhanuddin North"
						]
					},
					{
						"name": "Char Fasson",
						"areas": [
							"Char Fasson Sadar Bazar",
							"Char Fasson Model Town",
							"Char Fasson North"
						]
					},
					{
						"name": "Daulatkhan",
						"areas": [
							"Daulatkhan Sadar Bazar",
							"Daulatkhan Model Town",
							"Daulatkhan North"
						]
					},
					{
						"name": "Lalmohan",
						"areas": [
							"Lalmohan Sadar Bazar",
							"Lalmohan Model Town",
							"Lalmohan North"
						]
					},
					{
						"name": "Manpura",
						"areas": [
							"Manpura Sadar Bazar",
							"Manpura Model Town",
							"Manpura North"
						]
					},
					{
						"name": "Tazumuddin",
						"areas": [
							"Tazumuddin Sadar Bazar",
							"Tazumuddin Model Town",
							"Tazumuddin North"
						]
					}
				]
			},
			{
				"name": "Jhalokati",
				"thanas": [
					{
						"name": "Jhalokati Sadar",
						"areas": [
							"Jhalokati Sadar Bazar",
							"Jhalokati Sadar Model Town",
							"Jhalokati Sadar North"
						]
					},
					{
						"name": "Kathalia",
						"areas": [
							"Kathalia Sadar Bazar",
							"Kathalia Model Town",
							"Kathalia North"
						]
					},
					{
						"name": "Nalchity",
						"areas": [
							"Nalchity Sadar Bazar",
							"Nalchity Model Town",
							"Nalchity North"
						]
					},
					{
						"name": "Rajapur",
						"areas": [
							"Rajapur Sadar Bazar",
							"Rajapur Model Town",
							"Rajapur North"
						]
					}
				]
			},
			{
				"name": "Patuakhali",
				"thanas": [
					{
						"name": "Bauphal",
						"areas": [
							"Bauphal Sadar Bazar",
							"Bauphal Model Town",
							"Bauphal North"
						]
					},
					{
						"name": "Dashmina",
						"areas": [
							"Dashmina Sadar Bazar",
							"Dashmina Model Town",
							"Dashmina North"
						]
					},
					{
						"name": "Dumki",
						"areas": [
							"Dumki Sadar Bazar",
							"Dumki Model Town",
							"Dumki North"
						]
					},
					{
						"name": "Galachipa",
						"areas": [
							"Galachipa Sadar Bazar",
							"Galachipa Model Town",
							"Galachipa North"
						]
					},
					{
						"name": "Kalapara",
						"areas": [
							"Kalapara Sadar Bazar",
							"Kalapara Model Town",
							"Kalapara North"
						]
					},
					{
						"name": "Mirzaganj",
						"areas": [
							"Mirzaganj Sadar Bazar",
							"Mirzaganj Model Town",
							"Mirzaganj North"
						]
					},
					{
						"name": "Patuakhali Sadar",
						"areas": [
							"Patuakhali Sadar Bazar",
							"Patuakhali Sadar Model Town",
							"Patuakhali Sadar North"
						]
					},
					{
						"name": "Rangabali",
						"areas": [
							"Rangabali Sadar Bazar",
							"Rangabali Model Town",
							"Rangabali North"
						]
					}
				]
			},
			{
				"name": "Pirojpur",
				"thanas": [
					{
						"name": "Bhandaria",
						"areas": [
							"Bhandaria Sadar Bazar",
							"Bhandaria Model Town",
							"Bhandaria North"
						]
					},
					{
						"name": "Indurkani",
						"areas": [
							"Indurkani Sadar Bazar",
							"Indurkani Model Town",
							"Indurkani North"
						]
					},
					{
						"name": "Kawkhali",
						"areas": [
							"Kawkhali Sadar Bazar",
							"Kawkhali Model Town",
							"Kawkhali North"
						]
					},
					{
						"name": "Mathbaria",
						"areas": [
							"Mathbaria Sadar Bazar",
							"Mathbaria Model Town",
							"Mathbaria North"
						]
					},
					{
						"name": "Nazirpur",
						"areas": [
							"Nazirpur Sadar Bazar",
							"Nazirpur Model Town",
							"Nazirpur North"
						]
					},
					{
						"name": "Nesarabad",
						"areas": [
							"Nesarabad Sadar Bazar",
							"Nesarabad Model Town",
							"Nesarabad North"
						]
					},
					{
						"name": "Pirojpur Sadar",
						"areas": [
							"Pirojpur Sadar Bazar",
							"Pirojpur Sadar Model Town",
							"Pirojpur Sadar North"
						]
					},
					{
						"name": "Swarupkati",
						"areas": [
							"Swarupkati Sadar Bazar",
							"Swarupkati Model Town",
							"Swarupkati North"
						]
					}
				]
			}
		]
	},
	{
		"name": "Sylhet",
		"districts": [
			{
				"name": "Habiganj",
				"thanas": [
					{
						"name": "Ajmiriganj",
						"areas": [
							"Ajmiriganj Sadar Bazar",
							"Ajmiriganj Model Town",
							"Ajmiriganj North"
						]
					},
					{
						"name": "Bahubal",
						"areas": [
							"Bahubal Sadar Bazar",
							"Bahubal Model Town",
							"Bahubal North"
						]
					},
					{
						"name": "Baniachong",
						"areas": [
							"Baniachong Sadar Bazar",
							"Baniachong Model Town",
							"Baniachong North"
						]
					},
					{
						"name": "Chunarughat",
						"areas": [
							"Chunarughat Sadar Bazar",
							"Chunarughat Model Town",
							"Chunarughat North"
						]
					},
					{
						"name": "Habiganj Sadar",
						"areas": [
							"Habiganj Sadar Bazar",
							"Habiganj Sadar Model Town",
							"Habiganj Sadar North"
						]
					},
					{
						"name": "Lakhai",
						"areas": [
							"Lakhai Sadar Bazar",
							"Lakhai Model Town",
							"Lakhai North"
						]
					},
					{
						"name": "Madhobpur",
						"areas": [
							"Madhobpur Sadar Bazar",
							"Madhobpur Model Town",
							"Madhobpur North"
						]
					},
					{
						"name": "Nabiganj",
						"areas": [
							"Nabiganj Sadar Bazar",
							"Nabiganj Model Town",
							"Nabiganj North"
						]
					},
					{
						"name": "Shayestaganj",
						"areas": [
							"Shayestaganj Sadar Bazar",
							"Shayestaganj Model Town",
							"Shayestaganj North"
						]
					}
				]
			},
			{
				"name": "Moulvibazar",
				"thanas": [
					{
						"name": "Barlekha",
						"areas": [
							"Barlekha Sadar Bazar",
							"Barlekha Model Town",
							"Barlekha North"
						]
					},
					{
						"name": "Bariekha [Moulvibazar]",
						"areas": [
							"Bariekha Sadar Bazar",
							"Bariekha Model Town",
							"Bariekha North"
						]
					},
					{
						"name": "Juri",
						"areas": [
							"Juri Sadar Bazar",
							"Juri Model Town",
							"Juri North"
						]
					},
					{
						"name": "Karmalganj",
						"areas": [
							"Karmalganj Sadar Bazar",
							"Karmalganj Model Town",
							"Karmalganj North"
						]
					},
					{
						"name": "Karmolganj",
						"areas": [
							"Karmolganj Sadar Bazar",
							"Karmolganj Model Town",
							"Karmolganj North"
						]
					},
					{
						"name": "Kulaura",
						"areas": [
							"Kulaura Sadar Bazar",
							"Kulaura Model Town",
							"Kulaura North"
						]
					},
					{
						"name": "Moulvibazar Sadar",
						"areas": [
							"Moulvibazar Sadar Bazar",
							"Moulvibazar Sadar Model Town",
							"Moulvibazar Sadar North"
						]
					},
					{
						"name": "Rajnagar",
						"areas": [
							"Rajnagar Sadar Bazar",
							"Rajnagar Model Town",
							"Rajnagar North"
						]
					},
					{
						"name": "Rajnagor",
						"areas": [
							"Rajnagor Sadar Bazar",
							"Rajnagor Model Town",
							"Rajnagor North"
						]
					},
					{
						"name": "Sherpur [Moulvibazar]",
						"areas": [
							"Sherpur Sadar Bazar",
							"Sherpur Model Town",
							"Sherpur North"
						]
					},
					{
						"name": "Sreemangal",
						"areas": [
							"Sreemangal Sadar Bazar",
							"Sreemangal Model Town",
							"Sreemangal North"
						]
					}
				]
			},
			{
				"name": "Sunamganj",
				"thanas": [
					{
						"name": "Bishwamvapur",
						"areas": [
							"Bishwamvapur Sadar Bazar",
							"Bishwamvapur Model Town",
							"Bishwamvapur North"
						]
					},
					{
						"name": "Chhatak",
						"areas": [
							"Chhatak Sadar Bazar",
							"Chhatak Model Town",
							"Chhatak North"
						]
					},
					{
						"name": "Derai",
						"areas": [
							"Derai Sadar Bazar",
							"Derai Model Town",
							"Derai North"
						]
					},
					{
						"name": "Dharmapasha",
						"areas": [
							"Dharmapasha Sadar Bazar",
							"Dharmapasha Model Town",
							"Dharmapasha North"
						]
					},
					{
						"name": "Dowarabazar",
						"areas": [
							"Dowarabazar Sadar Bazar",
							"Dowarabazar Model Town",
							"Dowarabazar North"
						]
					},
					{
						"name": "Jagannathpur",
						"areas": [
							"Jagannathpur Sadar Bazar",
							"Jagannathpur Model Town",
							"Jagannathpur North"
						]
					},
					{
						"name": "Jamalganj",
						"areas": [
							"Jamalganj Sadar Bazar",
							"Jamalganj Model Town",
							"Jamalganj North"
						]
					},
					{
						"name": "Moddonagar",
						"areas": [
							"Moddonagar Sadar Bazar",
							"Moddonagar Model Town",
							"Moddonagar North"
						]
					},
					{
						"name": "Raniganj",
						"areas": [
							"Raniganj Sadar Bazar",
							"Raniganj Model Town",
							"Raniganj North"
						]
					},
					{
						"name": "Shantiganj",
						"areas": [
							"Shantiganj Sadar Bazar",
							"Shantiganj Model Town",
							"Shantiganj North"
						]
					},
					{
						"name": "Sullah",
						"areas": [
							"Sullah Sadar Bazar",
							"Sullah Model Town",
							"Sullah North"
						]
					},
					{
						"name": "Sunamganj Sadar",
						"areas": [
							"Sunamganj Sadar Bazar",
							"Sunamganj Sadar Model Town",
							"Sunamganj Sadar North"
						]
					},
					{
						"name": "Tahirpur",
						"areas": [
							"Tahirpur Sadar Bazar",
							"Tahirpur Model Town",
							"Tahirpur North"
						]
					}
				]
			},
			{
				"name": "Sylhet",
				"thanas": [
					{
						"name": "Balaganj",
						"areas": [
							"Balaganj Sadar Bazar",
							"Balaganj Model Town",
							"Balaganj North"
						]
					},
					{
						"name": "Beanibazar",
						"areas": [
							"Beanibazar Sadar Bazar",
							"Beanibazar Model Town",
							"Beanibazar North"
						]
					},
					{
						"name": "Bishanath",
						"areas": [
							"Bishanath Sadar Bazar",
							"Bishanath Model Town",
							"Bishanath North"
						]
					},
					{
						"name": "Companyganj Upazila",
						"areas": [
							"Companyganj Upazila Sadar Bazar",
							"Companyganj Upazila Model Town",
							"Companyganj Upazila North"
						]
					},
					{
						"name": "Fenchuganj",
						"areas": [
							"Fenchuganj Sadar Bazar",
							"Fenchuganj Model Town",
							"Fenchuganj North"
						]
					},
					{
						"name": "Gobindaganj",
						"areas": [
							"Gobindaganj Sadar Bazar",
							"Gobindaganj Model Town",
							"Gobindaganj North"
						]
					},
					{
						"name": "Golapganj",
						"areas": [
							"Golapganj Sadar Bazar",
							"Golapganj Model Town",
							"Golapganj North"
						]
					},
					{
						"name": "Gowainghat",
						"areas": [
							"Gowainghat Sadar Bazar",
							"Gowainghat Model Town",
							"Gowainghat North"
						]
					},
					{
						"name": "Jalalabad",
						"areas": [
							"Jalalabad Sadar Bazar",
							"Jalalabad Model Town",
							"Jalalabad North"
						]
					},
					{
						"name": "Jalalabad Cantonment",
						"areas": [
							"Jalalabad Cantonment Sadar Bazar",
							"Jalalabad Cantonment Model Town",
							"Jalalabad Cantonment North"
						]
					},
					{
						"name": "Jintiapur",
						"areas": [
							"Jintiapur Sadar Bazar",
							"Jintiapur Model Town",
							"Jintiapur North"
						]
					},
					{
						"name": "Kanaighat",
						"areas": [
							"Kanaighat Sadar Bazar",
							"Kanaighat Model Town",
							"Kanaighat North"
						]
					},
					{
						"name": "Osmaninagar",
						"areas": [
							"Osmaninagar Sadar Bazar",
							"Osmaninagar Model Town",
							"Osmaninagar North"
						]
					},
					{
						"name": "Shahporan",
						"areas": [
							"Shahporan Sadar Bazar",
							"Shahporan Model Town",
							"Shahporan North"
						]
					},
					{
						"name": "South Surma",
						"areas": [
							"South Surma Sadar Bazar",
							"South Surma Model Town",
							"South Surma North"
						]
					},
					{
						"name": "Sylhet Sadar",
						"areas": [
							"Sylhet Sadar Bazar",
							"Sylhet Sadar Model Town",
							"Sylhet Sadar North"
						]
					},
					{
						"name": "Zaki",
						"areas": [
							"Zaki Sadar Bazar",
							"Zaki Model Town",
							"Zaki North"
						]
					}
				]
			}
		]
	},
	{
		"name": "Rangpur",
		"districts": [
			{
				"name": "Dinajpur",
				"thanas": [
					{
						"name": "Birol",
						"areas": [
							"Birol Sadar Bazar",
							"Birol Model Town",
							"Birol North"
						]
					},
					{
						"name": "Birampur",
						"areas": [
							"Birampur Sadar Bazar",
							"Birampur Model Town",
							"Birampur North"
						]
					},
					{
						"name": "Birganj",
						"areas": [
							"Birganj Sadar Bazar",
							"Birganj Model Town",
							"Birganj North"
						]
					},
					{
						"name": "Bochaganj",
						"areas": [
							"Bochaganj Sadar Bazar",
							"Bochaganj Model Town",
							"Bochaganj North"
						]
					},
					{
						"name": "Chirirbandar",
						"areas": [
							"Chirirbandar Sadar Bazar",
							"Chirirbandar Model Town",
							"Chirirbandar North"
						]
					},
					{
						"name": "Dinajpur Sadar",
						"areas": [
							"Dinajpur Sadar Bazar",
							"Dinajpur Sadar Model Town",
							"Dinajpur Sadar North"
						]
					},
					{
						"name": "Fulbari",
						"areas": [
							"Fulbari Sadar Bazar",
							"Fulbari Model Town",
							"Fulbari North"
						]
					},
					{
						"name": "Ghoraghat",
						"areas": [
							"Ghoraghat Sadar Bazar",
							"Ghoraghat Model Town",
							"Ghoraghat North"
						]
					},
					{
						"name": "Hakimpur",
						"areas": [
							"Hakimpur Sadar Bazar",
							"Hakimpur Model Town",
							"Hakimpur North"
						]
					},
					{
						"name": "Kaharole",
						"areas": [
							"Kaharole Sadar Bazar",
							"Kaharole Model Town",
							"Kaharole North"
						]
					},
					{
						"name": "Khansama",
						"areas": [
							"Khansama Sadar Bazar",
							"Khansama Model Town",
							"Khansama North"
						]
					},
					{
						"name": "Khulahati",
						"areas": [
							"Khulahati Sadar Bazar",
							"Khulahati Model Town",
							"Khulahati North"
						]
					},
					{
						"name": "Nawabganj",
						"areas": [
							"Nawabganj Sadar Bazar",
							"Nawabganj Model Town",
							"Nawabganj North"
						]
					},
					{
						"name": "Parbatipur",
						"areas": [
							"Parbatipur Sadar Bazar",
							"Parbatipur Model Town",
							"Parbatipur North"
						]
					}
				]
			},
			{
				"name": "Gaibandha",
				"thanas": [
					{
						"name": "Fulchari",
						"areas": [
							"Fulchari Sadar Bazar",
							"Fulchari Model Town",
							"Fulchari North"
						]
					},
					{
						"name": "Gabindaganj",
						"areas": [
							"Gabindaganj Sadar Bazar",
							"Gabindaganj Model Town",
							"Gabindaganj North"
						]
					},
					{
						"name": "Gaibandha Sadar",
						"areas": [
							"Gaibandha Sadar Bazar",
							"Gaibandha Sadar Model Town",
							"Gaibandha Sadar North"
						]
					},
					{
						"name": "Palashbari",
						"areas": [
							"Palashbari Sadar Bazar",
							"Palashbari Model Town",
							"Palashbari North"
						]
					},
					{
						"name": "Sadullapur",
						"areas": [
							"Sadullapur Sadar Bazar",
							"Sadullapur Model Town",
							"Sadullapur North"
						]
					},
					{
						"name": "Saghata",
						"areas": [
							"Saghata Sadar Bazar",
							"Saghata Model Town",
							"Saghata North"
						]
					},
					{
						"name": "Sundarganj",
						"areas": [
							"Sundarganj Sadar Bazar",
							"Sundarganj Model Town",
							"Sundarganj North"
						]
					}
				]
			},
			{
				"name": "Kurigram",
				"thanas": [
					{
						"name": "Bhurungamari",
						"areas": [
							"Bhurungamari Sadar Bazar",
							"Bhurungamari Model Town",
							"Bhurungamari North"
						]
					},
					{
						"name": "Char Rajibpur",
						"areas": [
							"Char Rajibpur Sadar Bazar",
							"Char Rajibpur Model Town",
							"Char Rajibpur North"
						]
					},
					{
						"name": "Chilmari",
						"areas": [
							"Chilmari Sadar Bazar",
							"Chilmari Model Town",
							"Chilmari North"
						]
					},
					{
						"name": "Fulbari",
						"areas": [
							"Fulbari Sadar Bazar",
							"Fulbari Model Town",
							"Fulbari North"
						]
					},
					{
						"name": "Kurigram Sadar",
						"areas": [
							"Kurigram Sadar Bazar",
							"Kurigram Sadar Model Town",
							"Kurigram Sadar North"
						]
					},
					{
						"name": "Nageshwari",
						"areas": [
							"Nageshwari Sadar Bazar",
							"Nageshwari Model Town",
							"Nageshwari North"
						]
					},
					{
						"name": "Phulbari",
						"areas": [
							"Phulbari Sadar Bazar",
							"Phulbari Model Town",
							"Phulbari North"
						]
					},
					{
						"name": "Rajarhat",
						"areas": [
							"Rajarhat Sadar Bazar",
							"Rajarhat Model Town",
							"Rajarhat North"
						]
					},
					{
						"name": "Raomari",
						"areas": [
							"Raomari Sadar Bazar",
							"Raomari Model Town",
							"Raomari North"
						]
					},
					{
						"name": "Ulipur",
						"areas": [
							"Ulipur Sadar Bazar",
							"Ulipur Model Town",
							"Ulipur North"
						]
					}
				]
			},
			{
				"name": "Lalmonirhat",
				"thanas": [
					{
						"name": "Aditmari",
						"areas": [
							"Aditmari Sadar Bazar",
							"Aditmari Model Town",
							"Aditmari North"
						]
					},
					{
						"name": "Hatibandha",
						"areas": [
							"Hatibandha Sadar Bazar",
							"Hatibandha Model Town",
							"Hatibandha North"
						]
					},
					{
						"name": "Kaliganj Sadar",
						"areas": [
							"Kaliganj Sadar Bazar",
							"Kaliganj Sadar Model Town",
							"Kaliganj Sadar North"
						]
					},
					{
						"name": "Lalmonirhat Sadar",
						"areas": [
							"Lalmonirhat Sadar Bazar",
							"Lalmonirhat Sadar Model Town",
							"Lalmonirhat Sadar North"
						]
					},
					{
						"name": "Patgram",
						"areas": [
							"Patgram Sadar Bazar",
							"Patgram Model Town",
							"Patgram North"
						]
					}
				]
			},
			{
				"name": "Nilphamari",
				"thanas": [
					{
						"name": "Dimla",
						"areas": [
							"Dimla Sadar Bazar",
							"Dimla Model Town",
							"Dimla North"
						]
					},
					{
						"name": "Domar",
						"areas": [
							"Domar Sadar Bazar",
							"Domar Model Town",
							"Domar North"
						]
					},
					{
						"name": "Jaldhaka",
						"areas": [
							"Jaldhaka Sadar Bazar",
							"Jaldhaka Model Town",
							"Jaldhaka North"
						]
					},
					{
						"name": "Kishoreganj",
						"areas": [
							"Kishoreganj Sadar Bazar",
							"Kishoreganj Model Town",
							"Kishoreganj North"
						]
					},
					{
						"name": "Nilphamari Sadar",
						"areas": [
							"Nilphamari Sadar Bazar",
							"Nilphamari Sadar Model Town",
							"Nilphamari Sadar North"
						]
					},
					{
						"name": "Saidpur",
						"areas": [
							"Saidpur Sadar Bazar",
							"Saidpur Model Town",
							"Saidpur North"
						]
					}
				]
			},
			{
				"name": "Panchgarh",
				"thanas": [
					{
						"name": "Atwari",
						"areas": [
							"Atwari Sadar Bazar",
							"Atwari Model Town",
							"Atwari North"
						]
					},
					{
						"name": "Boda",
						"areas": [
							"Boda Sadar Bazar",
							"Boda Model Town",
							"Boda North"
						]
					},
					{
						"name": "Debiganj",
						"areas": [
							"Debiganj Sadar Bazar",
							"Debiganj Model Town",
							"Debiganj North"
						]
					},
					{
						"name": "Panchgarh Sadar",
						"areas": [
							"Panchgarh Sadar Bazar",
							"Panchgarh Sadar Model Town",
							"Panchgarh Sadar North"
						]
					},
					{
						"name": "Tetulia",
						"areas": [
							"Tetulia Sadar Bazar",
							"Tetulia Model Town",
							"Tetulia North"
						]
					}
				]
			},
			{
				"name": "Rangpur",
				"thanas": [
					{
						"name": "Badarganj",
						"areas": [
							"Badarganj Sadar Bazar",
							"Badarganj Model Town",
							"Badarganj North"
						]
					},
					{
						"name": "Gangachara",
						"areas": [
							"Gangachara Sadar Bazar",
							"Gangachara Model Town",
							"Gangachara North"
						]
					},
					{
						"name": "Kaunia",
						"areas": [
							"Kaunia Sadar Bazar",
							"Kaunia Model Town",
							"Kaunia North"
						]
					},
					{
						"name": "Mitapukur",
						"areas": [
							"Mitapukur Sadar Bazar",
							"Mitapukur Model Town",
							"Mitapukur North"
						]
					},
					{
						"name": "Pirgacha",
						"areas": [
							"Pirgacha Sadar Bazar",
							"Pirgacha Model Town",
							"Pirgacha North"
						]
					},
					{
						"name": "Pirganj",
						"areas": [
							"Pirganj Sadar Bazar",
							"Pirganj Model Town",
							"Pirganj North"
						]
					},
					{
						"name": "Rangpur Sadar",
						"areas": [
							"Rangpur Sadar Bazar",
							"Rangpur Sadar Model Town",
							"Rangpur Sadar North"
						]
					},
					{
						"name": "Shatibari",
						"areas": [
							"Shatibari Sadar Bazar",
							"Shatibari Model Town",
							"Shatibari North"
						]
					},
					{
						"name": "Taraganj",
						"areas": [
							"Taraganj Sadar Bazar",
							"Taraganj Model Town",
							"Taraganj North"
						]
					}
				]
			},
			{
				"name": "Thakurgaon",
				"thanas": [
					{
						"name": "Baliadangi",
						"areas": [
							"Baliadangi Sadar Bazar",
							"Baliadangi Model Town",
							"Baliadangi North"
						]
					},
					{
						"name": "Haripur",
						"areas": [
							"Haripur Sadar Bazar",
							"Haripur Model Town",
							"Haripur North"
						]
					},
					{
						"name": "Pirganj Upazila",
						"areas": [
							"Pirganj Upazila Sadar Bazar",
							"Pirganj Upazila Model Town",
							"Pirganj Upazila North"
						]
					},
					{
						"name": "Ranisankail",
						"areas": [
							"Ranisankail Sadar Bazar",
							"Ranisankail Model Town",
							"Ranisankail North"
						]
					},
					{
						"name": "Thakurgaon Sadar",
						"areas": [
							"Thakurgaon Sadar Bazar",
							"Thakurgaon Sadar Model Town",
							"Thakurgaon Sadar North"
						]
					}
				]
			}
		]
	},
	{
		"name": "Mymensingh",
		"districts": [
			{
				"name": "Jamalpur",
				"thanas": [
					{
						"name": "Baksiganj",
						"areas": [
							"Baksiganj Sadar Bazar",
							"Baksiganj Model Town",
							"Baksiganj North"
						]
					},
					{
						"name": "Dewanganj",
						"areas": [
							"Dewanganj Sadar Bazar",
							"Dewanganj Model Town",
							"Dewanganj North"
						]
					},
					{
						"name": "Islampur",
						"areas": [
							"Islampur Sadar Bazar",
							"Islampur Model Town",
							"Islampur North"
						]
					},
					{
						"name": "Jamalpur Sadar",
						"areas": [
							"Jamalpur Sadar Bazar",
							"Jamalpur Sadar Model Town",
							"Jamalpur Sadar North"
						]
					},
					{
						"name": "Madarganj",
						"areas": [
							"Madarganj Sadar Bazar",
							"Madarganj Model Town",
							"Madarganj North"
						]
					},
					{
						"name": "Melandaha",
						"areas": [
							"Melandaha Sadar Bazar",
							"Melandaha Model Town",
							"Melandaha North"
						]
					},
					{
						"name": "Nandina",
						"areas": [
							"Nandina Sadar Bazar",
							"Nandina Model Town",
							"Nandina North"
						]
					},
					{
						"name": "Sarishabari",
						"areas": [
							"Sarishabari Sadar Bazar",
							"Sarishabari Model Town",
							"Sarishabari North"
						]
					}
				]
			},
			{
				"name": "Mymensingh",
				"thanas": [
					{
						"name": "Bhaluka",
						"areas": [
							"Bhaluka Sadar Bazar",
							"Bhaluka Model Town",
							"Bhaluka North"
						]
					},
					{
						"name": "Dhobaura",
						"areas": [
							"Dhobaura Sadar Bazar",
							"Dhobaura Model Town",
							"Dhobaura North"
						]
					},
					{
						"name": "Fulbaria",
						"areas": [
							"Fulbaria Sadar Bazar",
							"Fulbaria Model Town",
							"Fulbaria North"
						]
					},
					{
						"name": "Gafargaon",
						"areas": [
							"Gafargaon Sadar Bazar",
							"Gafargaon Model Town",
							"Gafargaon North"
						]
					},
					{
						"name": "Gouripur",
						"areas": [
							"Gouripur Sadar Bazar",
							"Gouripur Model Town",
							"Gouripur North"
						]
					},
					{
						"name": "Haluaghat",
						"areas": [
							"Haluaghat Sadar Bazar",
							"Haluaghat Model Town",
							"Haluaghat North"
						]
					},
					{
						"name": "Ishwarganj",
						"areas": [
							"Ishwarganj Sadar Bazar",
							"Ishwarganj Model Town",
							"Ishwarganj North"
						]
					},
					{
						"name": "Muktagacha",
						"areas": [
							"Muktagacha Sadar Bazar",
							"Muktagacha Model Town",
							"Muktagacha North"
						]
					},
					{
						"name": "Mymensingh Sadar",
						"areas": [
							"Mymensingh Sadar Bazar",
							"Mymensingh Sadar Model Town",
							"Mymensingh Sadar North"
						]
					},
					{
						"name": "Nandail",
						"areas": [
							"Nandail Sadar Bazar",
							"Nandail Model Town",
							"Nandail North"
						]
					},
					{
						"name": "Pagla",
						"areas": [
							"Pagla Sadar Bazar",
							"Pagla Model Town",
							"Pagla North"
						]
					},
					{
						"name": "Phulpur",
						"areas": [
							"Phulpur Sadar Bazar",
							"Phulpur Model Town",
							"Phulpur North"
						]
					},
					{
						"name": "Shambhuganj",
						"areas": [
							"Shambhuganj Sadar Bazar",
							"Shambhuganj Model Town",
							"Shambhuganj North"
						]
					},
					{
						"name": "Tarakanda",
						"areas": [
							"Tarakanda Sadar Bazar",
							"Tarakanda Model Town",
							"Tarakanda North"
						]
					},
					{
						"name": "Trishal",
						"areas": [
							"Trishal Sadar Bazar",
							"Trishal Model Town",
							"Trishal North"
						]
					}
				]
			},
			{
				"name": "Netrokona",
				"thanas": [
					{
						"name": "Atpara",
						"areas": [
							"Atpara Sadar Bazar",
							"Atpara Model Town",
							"Atpara North"
						]
					},
					{
						"name": "Barhatta",
						"areas": [
							"Barhatta Sadar Bazar",
							"Barhatta Model Town",
							"Barhatta North"
						]
					},
					{
						"name": "Durgapur",
						"areas": [
							"Durgapur Sadar Bazar",
							"Durgapur Model Town",
							"Durgapur North"
						]
					},
					{
						"name": "Kalmakanda",
						"areas": [
							"Kalmakanda Sadar Bazar",
							"Kalmakanda Model Town",
							"Kalmakanda North"
						]
					},
					{
						"name": "Kendua",
						"areas": [
							"Kendua Sadar Bazar",
							"Kendua Model Town",
							"Kendua North"
						]
					},
					{
						"name": "Khaliajuri",
						"areas": [
							"Khaliajuri Sadar Bazar",
							"Khaliajuri Model Town",
							"Khaliajuri North"
						]
					},
					{
						"name": "Madan",
						"areas": [
							"Madan Sadar Bazar",
							"Madan Model Town",
							"Madan North"
						]
					},
					{
						"name": "Mohanganj",
						"areas": [
							"Mohanganj Sadar Bazar",
							"Mohanganj Model Town",
							"Mohanganj North"
						]
					},
					{
						"name": "Netrokona Sadar",
						"areas": [
							"Netrokona Sadar Bazar",
							"Netrokona Sadar Model Town",
							"Netrokona Sadar North"
						]
					},
					{
						"name": "Parbadhala",
						"areas": [
							"Parbadhala Sadar Bazar",
							"Parbadhala Model Town",
							"Parbadhala North"
						]
					}
				]
			},
			{
				"name": "Sherpur",
				"thanas": [
					{
						"name": "Jhenaigati",
						"areas": [
							"Jhenaigati Sadar Bazar",
							"Jhenaigati Model Town",
							"Jhenaigati North"
						]
					},
					{
						"name": "Nakla",
						"areas": [
							"Nakla Sadar Bazar",
							"Nakla Model Town",
							"Nakla North"
						]
					},
					{
						"name": "Nalitabari",
						"areas": [
							"Nalitabari Sadar Bazar",
							"Nalitabari Model Town",
							"Nalitabari North"
						]
					},
					{
						"name": "Sherpur Sadar",
						"areas": [
							"Sherpur Sadar Bazar",
							"Sherpur Sadar Model Town",
							"Sherpur Sadar North"
						]
					},
					{
						"name": "Sreebardi",
						"areas": [
							"Sreebardi Sadar Bazar",
							"Sreebardi Model Town",
							"Sreebardi North"
						]
					}
				]
			}
		]
	}
];
function findDivision(name) {
	if (!name) return void 0;
	return DIVISIONS.find((d) => d.name === name);
}
function findDistrict(division, district) {
	if (!district) return void 0;
	return findDivision(division)?.districts.find((d) => d.name === district);
}
function findThana(division, district, thana) {
	if (!thana) return void 0;
	return findDistrict(division, district)?.thanas.find((t) => t.name === thana);
}
function locationLabel(parts) {
	return [
		parts.area,
		parts.thana,
		parts.district
	].filter(Boolean).join(", ");
}
var useAppDispatch = useDispatch.withTypes();
var useAppSelector = useSelector.withTypes();
var PARKING_LABEL = {
	none: "No parking",
	car: "Car parking",
	bike: "Bike / motorcycle parking",
	car_and_bike: "Car & bike parking",
	garage: "Private garage",
	street: "Street parking",
	not_available: "Not available"
};
var INITIAL = {
	division: "",
	district: "",
	thana: "",
	area: "",
	useLiveLocation: false,
	address: "",
	liveLocationUrl: "",
	title: "",
	description: "",
	category: "house_flat",
	tenantType: "family",
	parking: "none",
	utilities: {
		baseRent: 15e3,
		gas: 800,
		gasType: "line",
		electricity: 1500,
		electricityType: "prepaid",
		water: 400,
		serviceCharge: 500
	},
	images: [],
	phone: "",
	whatsapp: true,
	telegram: false,
	teams: false,
	imo: true,
	telegramHandle: "",
	teamsLink: "",
	availableFrom: "",
	pin: ""
};
var STEPS = [
	{
		key: "location",
		label: "Location"
	},
	{
		key: "listing",
		label: "Listing"
	},
	{
		key: "costs",
		label: "Costs"
	},
	{
		key: "photos",
		label: "Photos"
	},
	{
		key: "contact",
		label: "Contact"
	}
];
var UNKNOWN_META = {
	os: "Unknown",
	browser: "Unknown",
	device: "Unknown",
	ipAddress: "0.0.0.0"
};
function CreatePostModal() {
	const dispatch = useAppDispatch();
	const open = useAppSelector((s) => s.ui.createPostOpen);
	const [form, setForm] = (0, import_react.useState)(INITIAL);
	const [error, setError] = (0, import_react.useState)(null);
	const [formVersion, setFormVersion] = (0, import_react.useState)(0);
	const [stepIndex, setStepIndex] = (0, import_react.useState)(0);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const step = STEPS[stepIndex].key;
	const isFirstStep = stepIndex === 0;
	const isLastStep = stepIndex === STEPS.length - 1;
	const division = findDivision(form.division || null);
	const district = findDistrict(form.division || null, form.district || null);
	const thana = findThana(form.division || null, form.district || null, form.thana || null);
	const liveUtilities = (0, import_react.useMemo)(() => {
		const next = { ...form.utilities };
		if (next.gasType === "included") next.gas = 0;
		if (next.electricityType === "included") next.electricity = 0;
		return next;
	}, [form.utilities]);
	function patch(partial) {
		setForm((prev) => ({
			...prev,
			...partial
		}));
	}
	function patchUtilities(partial) {
		setForm((prev) => ({
			...prev,
			utilities: {
				...prev.utilities,
				...partial
			}
		}));
	}
	function resetWizard() {
		setForm(INITIAL);
		setFormVersion((v) => v + 1);
		setError(null);
		setStepIndex(0);
	}
	function close() {
		dispatch(closeCreatePost());
	}
	/**
	* Synchronous, never-throwing. Any failure inside DeviceDetector (e.g. an
	* unusual/unparseable user agent string) falls back to "Unknown" fields
	* instead of aborting the caller.
	*/
	function getDeviceInfo() {
		try {
			const detector = new import_dist.default();
			const userAgent = navigator.userAgent;
			const result = detector.parse(userAgent);
			const os = result.os?.name ?? "Unknown";
			const browser = result.client?.name ?? "Unknown";
			const rawType = result.device?.type ?? "desktop";
			return {
				os,
				browser,
				device: rawType.charAt(0).toUpperCase() + rawType.slice(1)
			};
		} catch (err) {
			console.error("Device detection failed, using fallback values:", err);
			return {
				os: UNKNOWN_META.os,
				browser: UNKNOWN_META.browser,
				device: UNKNOWN_META.device
			};
		}
	}
	/**
	* Never-throwing. Applies a timeout so a slow/blocked network call can't
	* hang form submission indefinitely, and always resolves with a usable
	* fallback string on any failure.
	*/
	async function getPublicIP() {
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 4e3);
		try {
			const res = await fetch("https://api.ipify.org?format=json", { signal: controller.signal });
			if (!res.ok) throw new Error(`ipify responded with ${res.status}`);
			const ipData = await res.json();
			return typeof ipData?.ip === "string" ? ipData.ip : UNKNOWN_META.ipAddress;
		} catch (err) {
			console.error("Public IP lookup failed, using fallback value:", err);
			return UNKNOWN_META.ipAddress;
		} finally {
			clearTimeout(timeout);
		}
	}
	/** Combines both lookups with a shared safety net. */
	async function collectSubmissionMeta() {
		try {
			const deviceInfo = getDeviceInfo();
			const ipAddress = await getPublicIP();
			return {
				...deviceInfo,
				ipAddress
			};
		} catch (err) {
			console.error("Unexpected error collecting submission metadata:", err);
			return UNKNOWN_META;
		}
	}
	async function onFiles(files) {
		if (!files) return;
		const remaining = 5 - form.images.length;
		const picked = Array.from(files).slice(0, remaining);
		const encoded = await Promise.all(picked.map(readAsDataUrl));
		patch({ images: [...form.images, ...encoded] });
	}
	function validateStep(key) {
		if (key === "location") {
			if (!form.division || !form.district || !form.thana) return "Select division, district, and thana.";
			if (form.useLiveLocation) {
				if (!form.liveLocationUrl.trim()) return "Add a live location link.";
			} else if (!form.address.trim()) return "Add the full address.";
			return null;
		}
		if (key === "listing") {
			if (!form.title.trim()) return "Add a title.";
			if (!form.availableFrom) return "Set an available-from date.";
			return null;
		}
		if (key === "costs") {
			if (!form.utilities.baseRent || form.utilities.baseRent <= 0) return "Base rent is required.";
			if (!form.utilities.gasType) return "Select a gas type.";
			if (!form.utilities.electricityType) return "Select an electricity type.";
			return null;
		}
		if (key === "photos") return null;
		if (key === "contact") {
			if (!form.phone.trim()) return "Add a phone number.";
			if (form.pin.length !== 6) return "PIN must be exactly 6 characters.";
			return null;
		}
		return null;
	}
	function goNext() {
		const message = validateStep(step);
		if (message) {
			setError(message);
			return;
		}
		setError(null);
		setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
	}
	function goBack() {
		setError(null);
		setStepIndex((i) => Math.max(i - 1, 0));
	}
	function jumpToStep(index) {
		if (index <= stepIndex) {
			setError(null);
			setStepIndex(index);
		}
	}
	async function onSubmit(event) {
		event.preventDefault();
		for (const s of STEPS) {
			const message = validateStep(s.key);
			if (message) {
				const idx = STEPS.findIndex((x) => x.key === s.key);
				setStepIndex(idx);
				setError(message);
				return;
			}
		}
		setSubmitting(true);
		setError(null);
		try {
			const contact = {
				phone: form.phone.trim(),
				whatsapp: form.whatsapp,
				telegram: form.telegram,
				teams: form.teams,
				imo: form.imo,
				telegramHandle: form.telegramHandle.trim() || void 0,
				teamsLink: form.teamsLink.trim() || void 0
			};
			const { os, browser, device, ipAddress } = await collectSubmissionMeta();
			const post = {
				id: `post-${crypto.randomUUID()}`,
				title: form.title.trim(),
				description: form.description.trim(),
				category: form.category,
				tenantType: form.tenantType,
				location: {
					division: form.division,
					district: form.district,
					thana: form.thana,
					area: form.area || form.thana
				},
				address: form.useLiveLocation ? void 0 : form.address.trim(),
				liveLocationUrl: form.useLiveLocation ? form.liveLocationUrl.trim() : void 0,
				parking: form.parking,
				utilities: liveUtilities,
				images: form.images,
				contact,
				availableFrom: form.availableFrom,
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				pin: form.pin,
				source: "user",
				os,
				browser,
				device,
				ipAddress
			};
			console.log("New listing submitted:", post);
			dispatch(addPost(post));
			resetWizard();
			close();
			toast.success("Listing posted. It is live on the board.");
		} catch (err) {
			console.error("Failed to submit listing:", err);
			setError("Something went wrong while posting. Please try again.");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-w-lg flex-col gap-0 p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b border-border px-4 py-3 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-base",
						children: "Post a listing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "text-xs",
						children: [
							"Step ",
							stepIndex + 1,
							" of ",
							STEPS.length
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 border-b border-border bg-bg-elevated px-4 py-2 sm:px-5",
					children: STEPS.map((s, i) => {
						const isDone = i < stepIndex;
						const isActive = i === stepIndex;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => jumpToStep(i),
							disabled: i > stepIndex,
							title: s.label,
							className: "flex flex-1 flex-col items-center gap-1 disabled:cursor-not-allowed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-6 items-center justify-center rounded-full text-[11px] font-medium transition-colors " + (isActive ? "bg-primary text-primary-foreground" : isDone ? "bg-primary/20 text-primary" : "bg-secondary text-muted"),
								children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-[10px] sm:block " + (isActive ? "font-medium text-fg" : "text-muted"),
								children: s.label
							})]
						}, s.key);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					id: "create-post-form",
					onSubmit,
					className: "flex max-h-[65vh] flex-col gap-4 overflow-y-auto px-4 py-4 sm:px-5",
					children: [
						step === "location" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid gap-2.5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Division",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
										required: true,
										value: form.division,
										onChange: (e) => patch({
											division: e.target.value,
											district: "",
											thana: "",
											area: ""
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select division"
										}), DIVISIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: d.name,
											children: d.name
										}, d.name))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "District",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
										required: true,
										disabled: !division,
										value: form.district,
										onChange: (e) => patch({
											district: e.target.value,
											thana: "",
											area: ""
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select district"
										}), division?.districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: d.name,
											children: d.name
										}, d.name))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Thana / Upazila",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
										required: true,
										disabled: !district,
										value: form.thana,
										onChange: (e) => patch({
											thana: e.target.value,
											area: ""
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select thana"
										}), district?.thanas.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: t.name,
											children: t.name
										}, t.name))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Area",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
										disabled: !thana,
										value: form.area,
										onChange: (e) => patch({ area: e.target.value }),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select area"
										}), thana?.areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: a,
											children: a
										}, a))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-full flex items-center gap-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										id: "use-live-location",
										checked: form.useLiveLocation,
										onCheckedChange: (v) => patch({ useLiveLocation: v === true })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "use-live-location",
										className: "text-xs",
										children: "Share a live location link instead of typing an address"
									})]
								}),
								form.useLiveLocation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Live location URL",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												required: true,
												type: "url",
												className: "pl-9",
												placeholder: "https://maps.google.com/...",
												value: form.liveLocationUrl,
												onChange: (e) => patch({ liveLocationUrl: e.target.value })
											})]
										})
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full address",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "pointer-events-none absolute top-3 left-3 size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												required: true,
												className: "min-h-16 pl-9",
												placeholder: "House/road/block, landmark, city",
												value: form.address,
												onChange: (e) => patch({ address: e.target.value })
											})]
										})
									})
								})
							]
						}) : null,
						step === "listing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "flex flex-col gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Title",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										maxLength: 90,
										value: form.title,
										onChange: (e) => patch({ title: e.target.value }),
										placeholder: "e.g. 2-bed family flat near Medical College"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Description",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionEditor, {
										value: form.description,
										onChange: (html) => patch({ description: html })
									}, formVersion)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2.5 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Category",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
												value: form.category,
												onChange: (e) => patch({ category: e.target.value }),
												children: Object.keys(CATEGORY_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: key,
													children: CATEGORY_LABEL[key]
												}, key))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Tenant type",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
												value: form.tenantType,
												onChange: (e) => patch({ tenantType: e.target.value }),
												children: Object.keys(TENANT_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: key,
													children: TENANT_LABEL[key]
												}, key))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Parking space",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
												value: form.parking,
												onChange: (e) => patch({ parking: e.target.value }),
												children: Object.keys(PARKING_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: key,
													children: PARKING_LABEL[key]
												}, key))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Available from",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												required: true,
												className: "field",
												value: form.availableFrom,
												onChange: (e) => patch({ availableFrom: e.target.value })
											})
										})
									]
								})
							]
						}) : null,
						step === "costs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "flex flex-col gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2.5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Base rent (required)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											required: true,
											type: "number",
											min: 1,
											step: 100,
											value: form.utilities.baseRent,
											onChange: (e) => patchUtilities({ baseRent: Number(e.target.value) || 0 })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Gas type (required)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
											required: true,
											value: form.utilities.gasType,
											onChange: (e) => patchUtilities({ gasType: e.target.value }),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "line",
													children: "Line gas"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "lpg",
													children: "Cylinder (LPG)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "included",
													children: "Included"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Gas bill (optional)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											disabled: form.utilities.gasType === "included",
											value: form.utilities.gas,
											onChange: (e) => patchUtilities({ gas: Number(e.target.value) || 0 })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Electricity type (required)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
											required: true,
											value: form.utilities.electricityType,
											onChange: (e) => patchUtilities({ electricityType: e.target.value }),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "prepaid",
													children: "Prepaid"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "postpaid",
													children: "Postpaid"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "included",
													children: "Included"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Electricity bill (optional)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											disabled: form.utilities.electricityType === "included",
											value: form.utilities.electricity,
											onChange: (e) => patchUtilities({ electricity: Number(e.target.value) || 0 })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Water bill (optional)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											value: form.utilities.water,
											onChange: (e) => patchUtilities({ water: Number(e.target.value) || 0 })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Service charge (optional)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											value: form.utilities.serviceCharge,
											onChange: (e) => patchUtilities({ serviceCharge: Number(e.target.value) || 0 })
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-bg-elevated p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBreakdown, { utilities: liveUtilities }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 flex items-center justify-between border-t border-border pt-2 text-xs text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total monthly cost" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-medium tabular-nums text-primary",
										children: formatBdt(totalMonthlyCost(liveUtilities))
									})]
								})]
							})]
						}) : null,
						step === "photos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "flex flex-col gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex h-20 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-bg-elevated text-sm text-muted transition-colors hover:bg-secondary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-4" }),
									"Add photos",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										multiple: true,
										className: "sr-only",
										onChange: (e) => {
											onFiles(e.target.files);
											e.target.value = "";
										}
									})
								]
							}), form.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-5 gap-2",
								children: form.images.map((src, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-square overflow-hidden rounded-md bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src,
										alt: "",
										className: "size-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "absolute top-1 right-1 inline-flex size-6 items-center justify-center rounded-full bg-fg/70 text-primary-foreground",
										onClick: () => patch({ images: form.images.filter((_, i) => i !== index) }),
										"aria-label": "Remove photo",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
									})]
								}, src.slice(0, 32) + index))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Optional — you can skip this step."
							})]
						}) : null,
						step === "contact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "flex flex-col gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										inputMode: "tel",
										placeholder: "+88017XXXXXXXX",
										value: form.phone,
										onChange: (e) => patch({ phone: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
											id: "ch-wa",
											label: "WhatsApp",
											checked: form.whatsapp,
											onCheckedChange: (v) => patch({ whatsapp: v })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
											id: "ch-tg",
											label: "Telegram",
											checked: form.telegram,
											onCheckedChange: (v) => patch({ telegram: v })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
											id: "ch-imo",
											label: "IMO",
											checked: form.imo,
											onCheckedChange: (v) => patch({ imo: v })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
											id: "ch-teams",
											label: "Microsoft Teams",
											checked: form.teams,
											onCheckedChange: (v) => patch({ teams: v })
										})
									]
								}),
								form.telegram ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Telegram handle (optional)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "@username",
										value: form.telegramHandle,
										onChange: (e) => patch({ telegramHandle: e.target.value })
									})
								}) : null,
								form.teams ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Teams link (optional)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "https://teams.microsoft.com/...",
										value: form.teamsLink,
										onChange: (e) => patch({ teamsLink: e.target.value })
									})
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Secret 4-digit PIN",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										inputMode: "numeric",
										maxLength: 4,
										pattern: "\\d{4}",
										placeholder: "For later edits",
										value: form.pin,
										onChange: (e) => patch({ pin: e.target.value.replace(/\D/g, "").slice(0, 4) })
									})
								})
							]
						}) : null,
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-destructive",
							role: "alert",
							children: error
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border bg-bg-elevated px-4 py-2.5 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						onClick: isFirstStep ? close : goBack,
						disabled: submitting,
						children: isFirstStep ? "Cancel" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"] })
					}), isLastStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						form: "create-post-form",
						size: "sm",
						disabled: submitting,
						children: submitting ? "Posting..." : "Publish listing"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						onClick: goNext,
						children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})
			]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs",
				children: label
			})
		}), children]
	});
}
function CheckRow({ id, label, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "flex min-h-10 items-center gap-2.5 rounded-md border border-border bg-surface px-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
			id,
			checked,
			onCheckedChange: (v) => onCheckedChange(v === true)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs",
			children: label
		})]
	});
}
function DescriptionEditor({ value, onChange }) {
	const editorRef = (0, import_react.useRef)(null);
	const [mode, setMode] = (0, import_react.useState)("editing");
	(0, import_react.useEffect)(() => {
		if (editorRef.current) editorRef.current.innerHTML = value;
	}, []);
	function syncValue() {
		if (editorRef.current) onChange(editorRef.current.innerHTML);
	}
	function exec(command, arg) {
		editorRef.current?.focus();
		document.execCommand(command, false, arg);
		syncValue();
	}
	function insertLink() {
		const url = window.prompt("Enter URL");
		if (url) exec("createLink", url);
	}
	if (mode === "collapsed") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2 rounded-lg border border-border bg-surface p-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "prose prose-sm max-w-none text-xs [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-3 [&_blockquote]:italic [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5",
			dangerouslySetInnerHTML: { __html: value || "<p class='text-muted'>No description yet.</p>" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "ghost",
			size: "sm",
			className: "w-fit",
			onClick: () => setMode("editing"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" }), " Edit description"]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col overflow-hidden rounded-lg border border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-0.5 border-b border-border bg-bg-elevated px-1.5 py-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Bold,
					label: "Bold",
					onClick: () => exec("bold")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Italic,
					label: "Italic",
					onClick: () => exec("italic")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Underline,
					label: "Underline",
					onClick: () => exec("underline")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Strikethrough,
					label: "Strikethrough",
					onClick: () => exec("strikeThrough")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Heading1,
					label: "Heading 1",
					onClick: () => exec("formatBlock", "H1")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Heading2,
					label: "Heading 2",
					onClick: () => exec("formatBlock", "H2")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Quote,
					label: "Quote",
					onClick: () => exec("formatBlock", "BLOCKQUOTE")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: List,
					label: "Bulleted list",
					onClick: () => exec("insertUnorderedList")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: ListOrdered,
					label: "Numbered list",
					onClick: () => exec("insertOrderedList")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Link2,
					label: "Link",
					onClick: insertLink
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Undo2,
					label: "Undo",
					onClick: () => exec("undo")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Redo2,
					label: "Redo",
					onClick: () => exec("redo")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Eraser,
					label: "Clear formatting",
					onClick: () => exec("removeFormat")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						onClick: () => {
							syncValue();
							setMode("collapsed");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }), " Exit editor"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: editorRef,
			contentEditable: true,
			suppressContentEditableWarning: true,
			onInput: syncValue,
			onBlur: syncValue,
			className: "min-h-24 max-h-48 overflow-y-auto px-3 py-2 text-sm outline-none [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-3 [&_blockquote]:italic [&_h1]:text-lg [&_h1]:font-semibold [&_h2]:text-base [&_h2]:font-semibold [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5",
			"data-placeholder": "Access, nearby landmarks, house rules."
		})]
	});
}
function ToolbarBtn({ icon: Icon, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		title: label,
		"aria-label": label,
		onClick,
		className: "inline-flex size-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-secondary hover:text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" })
	});
}
function Divider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 h-5 w-px bg-border" });
}
function readAsDataUrl(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result));
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(file);
	});
}
function Slider({ className, ...props }) {
	const thumbs = props.value?.length ?? props.defaultValue?.length ?? 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex w-full touch-none items-center select-none", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
		}), Array.from({ length: thumbs }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full border border-border bg-surface shadow-[var(--shadow-border)] ring-offset-bg transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none" }, i))]
	});
}
var CATEGORIES = [
	"all",
	"house_flat",
	"sublet_room",
	"mess",
	"office"
];
var TENANTS = [
	"all",
	"family",
	"bachelor_male",
	"bachelor_female",
	"office"
];
function FilterSidebar({ className }) {
	const dispatch = useAppDispatch();
	const filters = useAppSelector((s) => s.filters);
	const division = findDivision(filters.division);
	const district = findDistrict(filters.division, filters.district);
	const thana = findThana(filters.division, filters.district, filters.thana);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-7", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-medium tracking-tight",
							children: "Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							size: "sm",
							className: "h-auto px-0",
							onClick: () => dispatch(resetFilters()),
							children: "Reset"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Bangladesh · cascading thana filter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "Division",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: filters.division ?? "",
							onChange: (e) => dispatch(setDivision(e.target.value || null)),
							"aria-label": "Division",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All divisions"
							}), DIVISIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: d.name,
								children: d.name
							}, d.name))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "District",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: filters.district ?? "",
							onChange: (e) => dispatch(setDistrict(e.target.value || null)),
							disabled: !division,
							"aria-label": "District",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All districts"
							}), division?.districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: d.name,
								children: d.name
							}, d.name))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "Thana / Upazila",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: filters.thana ?? "",
							onChange: (e) => dispatch(setThana(e.target.value || null)),
							disabled: !district,
							"aria-label": "Thana",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All thanas"
							}), district?.thanas.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t.name,
								children: t.name
							}, t.name))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "Area",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: filters.area ?? "",
							onChange: (e) => dispatch(setArea(e.target.value || null)),
							disabled: !thana,
							"aria-label": "Area",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All areas"
							}), thana?.areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: a,
								children: a
							}, a))]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold tracking-wide text-muted-foreground uppercase",
					children: "Category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: CATEGORIES.map((cat) => {
						const active = filters.category === cat;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => dispatch(setCategory(cat)),
							className: cn("inline-flex items-center justify-center h-9 rounded-full px-4 text-xs font-medium transition-all duration-200 ease-in-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", active ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]" : "bg-secondary/60 text-secondary-foreground hover:bg-secondary hover:text-foreground active:scale-[0.98]"),
							children: cat === "all" ? "All" : CATEGORY_LABEL[cat]
						}, cat);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium tracking-tight",
					children: "Tenant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: TENANTS.map((t) => {
						const active = filters.tenantType === t;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => dispatch(setTenantType(t)),
							className: cn("h-11 rounded-full px-3.5 text-xs font-medium transition-colors", active ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"),
							children: t === "all" ? "Any" : TENANT_LABEL[t]
						}, t);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-medium tracking-tight",
							children: "Monthly total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tabular-nums text-muted",
							children: [
								formatBdt(filters.minCost),
								" – ",
								formatBdt(filters.maxCost)
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Base rent plus utilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 0,
						max: COST_MAX,
						step: 500,
						value: [filters.minCost, filters.maxCost],
						onValueChange: ([min, max]) => dispatch(setCostRange({
							min: min ?? 0,
							max: max ?? 15e4
						})),
						"aria-label": "Monthly cost range"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-medium tracking-tight",
							children: "Move-in window"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								formatDayOrdinal(filters.availableDayStart),
								"–",
								formatDayOrdinal(filters.availableDayEnd)
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Day of the month the listing becomes available"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 1,
						max: 31,
						step: 1,
						value: [filters.availableDayStart, filters.availableDayEnd],
						onValueChange: ([start, end]) => dispatch(setAvailableDayRange({
							start: start ?? 1,
							end: end ?? 31
						})),
						"aria-label": "Available day of month"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-medium tracking-tight",
						children: "Available dates"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "From",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							className: "field",
							value: filters.dateFrom ?? "",
							onChange: (e) => dispatch(setDateFrom(e.target.value || null))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "To",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							className: "field",
							value: filters.dateTo ?? "",
							onChange: (e) => dispatch(setDateTo(e.target.value || null))
						})
					})
				]
			})
		]
	});
}
function FieldGroup({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: "size-8 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "32",
					height: "32",
					rx: "8",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 18.5 16 11l8 7.5V24a1 1 0 0 1-1 1h-4.5v-5h-5v5H9a1 1 0 0 1-1-1z",
					className: "fill-primary-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M11 11.5h3.2V9.2H11z",
					className: "fill-primary-foreground"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg font-medium tracking-tight text-fg",
				children: "Thikana"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 text-[10px] tracking-[0.18em] text-muted uppercase",
				children: "ঠিকানা"
			})]
		})]
	});
}
function dayOfMonth(iso) {
	const date = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
	return Number.isNaN(date.getTime()) ? 1 : date.getDate();
}
function matchesSearch(post, term) {
	if (!term.trim()) return true;
	return [
		post.title,
		post.description,
		post.location.area,
		post.location.thana,
		post.location.district,
		post.location.division
	].join(" ").toLowerCase().includes(term.trim().toLowerCase());
}
var selectFilteredPosts = createSelector([(state) => state.posts.posts, (state) => state.filters], (posts, filters) => {
	return posts.filter((post) => {
		if (!matchesSearch(post, filters.searchTerm)) return false;
		if (filters.division && post.location.division !== filters.division) return false;
		if (filters.district && post.location.district !== filters.district) return false;
		if (filters.thana && post.location.thana !== filters.thana) return false;
		if (filters.area && post.location.area !== filters.area) return false;
		if (filters.category !== "all" && post.category !== filters.category) return false;
		if (filters.tenantType !== "all" && post.tenantType !== filters.tenantType) return false;
		const total = totalMonthlyCost(post.utilities);
		if (total < filters.minCost || total > filters.maxCost) return false;
		const available = post.availableFrom;
		if (filters.dateFrom && available < filters.dateFrom) return false;
		if (filters.dateTo && available > filters.dateTo) return false;
		const day = dayOfMonth(available);
		if (day < filters.availableDayStart || day > filters.availableDayEnd) return false;
		return true;
	});
});
var selectSelectedPost = createSelector([(state) => state.posts.posts, (state) => state.posts.selectedPostId], (posts, id) => posts.find((p) => p.id === id) ?? null);
var selectActiveFilterCount = createSelector([(state) => state.filters], (filters) => {
	let count = 0;
	if (filters.searchTerm.trim()) count += 1;
	if (filters.division) count += 1;
	if (filters.district) count += 1;
	if (filters.thana) count += 1;
	if (filters.area) count += 1;
	if (filters.category !== "all") count += 1;
	if (filters.tenantType !== "all") count += 1;
	if (filters.minCost > 0 || filters.maxCost < 15e4) count += 1;
	if (filters.dateFrom || filters.dateTo) count += 1;
	if (filters.availableDayStart > 1 || filters.availableDayEnd < 31) count += 1;
	return count;
});
function Header() {
	const dispatch = useAppDispatch();
	const searchTerm = useAppSelector((s) => s.filters.searchTerm);
	const activeFilters = useAppSelector(selectActiveFilterCount);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg-elevated/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "icon",
					className: "relative lg:hidden",
					"aria-label": "Open filters",
					onClick: () => dispatch(openMobileFilters()),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {}), activeFilters > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" }) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "shrink-0",
					"aria-label": "Thikana home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto hidden min-w-0 flex-1 max-w-xl sm:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: searchTerm,
						onChange: (e) => dispatch(setSearchTerm(e.target.value)),
						placeholder: "Search area, thana, or title",
						className: "pl-10",
						"aria-label": "Search listings"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "ml-auto shrink-0",
					onClick: () => dispatch(openCreatePost()),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Post listing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "Post"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border px-4 py-2 sm:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: searchTerm,
					onChange: (e) => dispatch(setSearchTerm(e.target.value)),
					placeholder: "Search area, thana, or title",
					className: "pl-10",
					"aria-label": "Search listings"
				})]
			})
		})]
	});
}
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$1, {
		className: cn("relative overflow-hidden", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
			orientation: "vertical",
			className: "flex w-2.5 touch-none p-0.5 select-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border" })
		})]
	});
}
var Sheet = Dialog$1;
function SheetContent({ className, children, side = "left", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, { className: "fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed z-50 flex h-full w-[min(22rem,100%)] flex-col bg-bg-elevated shadow-[var(--shadow-lift)] outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300", side === "left" ? "inset-y-0 left-0 border-r border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left" : "inset-y-0 right-0 border-l border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-fg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close filters"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("border-b border-border px-5 py-4 pr-14", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-lg font-medium text-fg", className),
		...props
	});
}
function MobileFilters() {
	const dispatch = useAppDispatch();
	const open = useAppSelector((s) => s.ui.mobileFiltersOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange: (next) => {
			if (!next) dispatch(closeMobileFilters());
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Filters" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
			className: "flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSidebar, { className: "px-5 py-5" })
		})] })
	});
}
function ContactActions({ contact, size = "default" }) {
	const digits = digitsPhone(contact.phone);
	const wa = digits.startsWith("880") ? digits : digits.replace(/^0/, "880");
	const tel = digits.startsWith("880") ? `+${digits}` : contact.phone;
	const telegramHref = contact.telegramHandle ? `https://t.me/${contact.telegramHandle.replace(/^@/, "")}` : `https://t.me/+${wa}`;
	const actions = [
		{
			key: "call",
			label: "Call",
			href: `tel:${tel}`,
			icon: Phone,
			show: true
		},
		{
			key: "whatsapp",
			label: "WhatsApp",
			href: `https://wa.me/${wa}`,
			icon: MessageCircle,
			show: contact.whatsapp
		},
		{
			key: "telegram",
			label: "Telegram",
			href: telegramHref,
			icon: Send,
			show: contact.telegram
		},
		{
			key: "imo",
			label: "IMO",
			href: `tel:${tel}`,
			icon: Video,
			show: contact.imo
		},
		{
			key: "teams",
			label: "Teams",
			href: contact.teamsLink ?? "https://teams.microsoft.com/",
			icon: Users,
			show: contact.teams
		}
	].filter((a) => a.show);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: actions.map((action) => {
			const Icon = action.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size,
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: action.href,
					target: action.key === "call" || action.key === "imo" ? void 0 : "_blank",
					rel: "noreferrer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), action.label]
				})
			}, action.key);
		})
	});
}
function ChannelDots({ contact }) {
	const channels = [
		contact.whatsapp && "WhatsApp",
		contact.telegram && "Telegram",
		contact.imo && "IMO",
		contact.teams && "Teams"
	].filter(Boolean);
	if (channels.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs text-muted",
		children: "Call only"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex flex-wrap gap-1",
		children: channels.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium tracking-wide text-secondary-foreground uppercase",
			children: name
		}, name))
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground",
		outline: "border-border bg-surface text-fg",
		muted: "border-transparent bg-secondary text-secondary-foreground",
		accent: "border-transparent bg-accent/15 text-primary"
	} },
	defaultVariants: { variant: "muted" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function PostCard({ post }) {
	const dispatch = useAppDispatch();
	const cover = post.images[0];
	const total = totalMonthlyCost(post.utilities);
	function open() {
		dispatch(selectPost(post.id));
		dispatch(openDetails());
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[var(--shadow-border-hover)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: open,
			className: "relative aspect-[4/3] overflow-hidden bg-secondary text-left",
			"aria-label": `View ${post.title}`,
			children: [
				cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cover,
					alt: "",
					className: "size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFallback, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-fg/55 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 flex flex-wrap gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "default",
						children: CATEGORY_LABEL[post.category]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-transparent bg-surface/90",
						children: TENANT_LABEL[post.tenantType]
					})]
				}),
				post.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "muted",
					className: "absolute top-3 right-3 bg-surface/90",
					children: "Featured"
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg leading-snug font-medium tracking-tight text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: open,
							className: "text-left",
							children: post.title
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-start gap-1.5 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locationLabel({
							area: post.location.area,
							thana: post.location.thana,
							district: post.location.district
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl font-medium tracking-tight tabular-nums text-primary",
					children: [formatBdt(total), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1 font-sans text-xs font-medium text-muted",
						children: "/ month"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBreakdown, {
					utilities: post.utilities,
					compact: true
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center justify-between gap-2 pt-1 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5" }),
							"From ",
							formatLongDate(post.availableFrom)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelDots, { contact: post.contact })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: open,
						children: "Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: open,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Contact"]
					})]
				})
			]
		})]
	});
}
function ImageFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative flex size-full items-center justify-center bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 160 120",
			className: "h-3/5 w-3/5 text-primary/25",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 72 80 28l60 44v32a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M64 28h16v-10H64z",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "68",
					y: "78",
					width: "24",
					height: "30",
					fill: "var(--color-secondary)"
				})
			]
		})
	});
}
function PostDetailsModal() {
	const dispatch = useAppDispatch();
	const open = useAppSelector((s) => s.ui.detailsOpen);
	const post = useAppSelector(selectSelectedPost);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [pin, setPin] = (0, import_react.useState)("");
	const [pinError, setPinError] = (0, import_react.useState)(null);
	function close() {
		dispatch(closeDetails());
		dispatch(selectPost(null));
		setIndex(0);
		setPin("");
		setPinError(null);
	}
	const images = post?.images ?? [];
	const current = images[index] ?? images[0];
	const total = post ? totalMonthlyCost(post.utilities) : 0;
	function step(delta) {
		if (images.length === 0) return;
		setIndex((i) => (i + delta + images.length) % images.length);
	}
	function onRemove() {
		if (!post) return;
		if (pin !== post.pin) {
			setPinError("PIN does not match.");
			return;
		}
		dispatch(removePost({
			id: post.id,
			pin
		}));
		toast.success("Listing removed.");
		close();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "flex max-h-[min(92vh,920px)] max-w-4xl flex-col gap-0 overflow-hidden p-0",
			children: post ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-56 bg-fg sm:h-80 lg:h-full lg:min-h-[28rem]",
					children: [current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current,
						alt: "",
						className: "absolute inset-0 size-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-full items-center justify-center bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: "No photos"
						})
					}), images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "icon",
							className: "absolute top-1/2 left-3 -translate-y-1/2",
							onClick: () => step(-1),
							"aria-label": "Previous photo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "icon",
							className: "absolute top-1/2 right-3 -translate-y-1/2",
							onClick: () => step(1),
							"aria-label": "Next photo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-3 flex justify-center gap-1.5",
							children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Photo ${i + 1}`,
								onClick: () => setIndex(i),
								className: cn("h-1.5 rounded-full transition-all", i === index ? "w-6 bg-primary-foreground" : "w-1.5 bg-primary-foreground/45")
							}, src + i))
						})
					] }) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "max-h-[min(70vh,720px)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 px-5 py-5 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
								className: "p-0 pr-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-2 flex flex-wrap gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "default",
											children: CATEGORY_LABEL[post.category]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "muted",
											children: TENANT_LABEL[post.tenantType]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: post.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
										className: "flex items-start gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-3.5 shrink-0" }),
											locationLabel({
												area: post.location.area,
												thana: post.location.thana,
												district: post.location.district
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: ["· ", post.location.division]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-3xl font-medium tracking-tight tabular-nums text-primary",
								children: [formatBdt(total), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 font-sans text-sm font-medium text-muted",
									children: "/ month"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 inline-flex items-center gap-1.5 text-sm text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5" }),
									"Available ",
									formatLongDate(post.availableFrom)
								]
							})] }),
							post.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-fg",
								children: post.description
							}) : null,
							images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-5 gap-1.5",
								children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIndex(i),
									className: cn("aspect-square overflow-hidden rounded-sm", i === index ? "ring-2 ring-primary" : "opacity-80"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src,
										alt: "",
										className: "size-full object-cover"
									})
								}, src + i))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBreakdown, { utilities: post.utilities }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-base font-medium",
										children: "Contact landlord"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium tabular-nums text-fg",
										children: post.contact.phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactActions, { contact: post.contact })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-lg border border-border bg-bg-elevated p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "flex items-center gap-2 text-sm font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Manage listing"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: "Enter the 4-digit PIN to remove this post from the board."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											inputMode: "numeric",
											maxLength: 4,
											placeholder: "PIN",
											value: pin,
											onChange: (e) => {
												setPin(e.target.value.replace(/\D/g, "").slice(0, 4));
												setPinError(null);
											}
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "destructive",
											type: "button",
											onClick: onRemove,
											children: "Remove"
										})]
									}),
									pinError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-destructive",
										children: pinError
									}) : null
								]
							})
						]
					})
				})]
			}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-8 text-sm text-muted",
				children: "Listing not found."
			})
		})
	});
}
function Home() {
	const dispatch = useAppDispatch();
	const posts = useAppSelector(selectFilteredPosts);
	const total = useAppSelector((s) => s.posts.posts.length);
	const active = useAppSelector(selectActiveFilterCount);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grid min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1440px] gap-8 px-4 py-6 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "sticky top-24 hidden h-[calc(100dvh-7rem)] w-72 shrink-0 overflow-y-auto pr-2 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSidebar, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
								children: "Bangladesh rentals"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl font-medium tracking-tight sm:text-4xl",
								children: "Rooms, flats, and offices"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
								children: "Filter by division, thana, tenant type, and the real monthly total — rent plus gas, power, water, and service charge."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm tabular-nums text-muted",
							children: [
								posts.length,
								" of ",
								total,
								" listings",
								active > 0 ? ` · ${active} filters` : ""
							]
						})]
					}), posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onReset: () => dispatch(resetFilters()) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { post }, post.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border px-4 py-8 text-center text-xs text-muted",
				children: "Thikana is a frontend listing board for Bangladesh. Contact landlords directly — no booking fees."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileFilters, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePostModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostDetailsModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-right",
				toastOptions: { className: "bg-surface text-fg border-border font-sans shadow-[var(--shadow-border)]" }
			})
		]
	});
}
function EmptyState({ onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-start gap-4 rounded-xl border border-dashed border-border bg-surface px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "No listings in this slice"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm leading-relaxed text-muted",
				children: "Try a wider thana, raise the cost ceiling, or clear the move-in window. New posts appear at the top of the board."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: onReset,
				children: "Clear filters"
			})
		]
	});
}
//#endregion
export { Home as component };
