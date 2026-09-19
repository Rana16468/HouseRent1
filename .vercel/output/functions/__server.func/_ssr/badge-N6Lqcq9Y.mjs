import { d as Slot, m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Search, g as Phone, h as Plus, l as SlidersHorizontal, n as Video, r as Users, u as Send, y as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as createSelector, c as useSelector, s as useDispatch } from "../_libs/@reduxjs/toolkit+[...].mjs";
import { c as openMobileFilters, n as baseApi, o as openCreatePost, y as setSearchTerm } from "./router-B-y1O4jl.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as index } from "../_libs/fingerprintjs__fingerprintjs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-N6Lqcq9Y.js
var import_jsx_runtime = require_jsx_runtime();
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
var getDeviceVisitorId = async () => {
	return (await (await index.load()).get()).visitorId;
};
var { useHouseListingMutation, useGetFindByAllHouseListQuery, useGetSpecificHouseListQuery, useDeleteHouseListingMutation, useGetMyHouseListingQuery } = baseApi.injectEndpoints({ endpoints: (builder) => ({
	houseListing: builder.mutation({
		query: (userInfo) => ({
			url: "/house_list/",
			method: "POST",
			body: userInfo
		}),
		invalidatesTags: ["post"]
	}),
	getFindByAllHouseList: builder.query({
		query: (data) => {
			return {
				url: "/house_list/find_by_house_list",
				method: "GET",
				params: data
			};
		},
		providesTags: ["post"]
	}),
	getSpecificHouseList: builder.query({
		query: (id) => {
			return {
				url: `/house_list/${id}`,
				method: "GET"
			};
		},
		providesTags: ["post"]
	}),
	getMyHouseListing: builder.query({
		query: ({ deviceId, page, limit }) => {
			return {
				url: `/house_list/my_house_listing/${deviceId}`,
				method: "GET",
				params: {
					page,
					limit
				}
			};
		},
		providesTags: ["post"]
	}),
	deleteHouseListing: builder.mutation({
		query: ({ id, deviceId }) => {
			return {
				url: `/house_list/delete_my_house_listing/${id}/${deviceId}`,
				method: "DELETE"
			};
		},
		invalidatesTags: ["post"]
	})
}) });
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
createSelector([(state) => state.posts.posts, (state) => state.filters], (posts, filters) => {
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
createSelector([(state) => state.posts.posts, (state) => state.posts.selectedPostId], (posts, id) => posts.find((p) => p.id === id) ?? null);
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "ml-auto shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/my-houses",
						children: "My House List"
					})
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
function ContactActions({ contact, size = "default", className }) {
	const digits = digitsPhone(contact.phone || "");
	const wa = digits.startsWith("880") ? digits : digits.replace(/^0/, "880");
	const tel = digits.startsWith("880") ? `+${digits}` : contact.phone;
	const telegramHref = contact.telegramHandle ? `https://t.me/${contact.telegramHandle.replace(/^@/, "")}` : `https://t.me/+${wa}`;
	const actions = [
		{
			key: "call",
			label: "Call",
			href: `tel:${tel}`,
			icon: Phone,
			show: Boolean(contact.phone),
			external: false
		},
		{
			key: "whatsapp",
			label: "WhatsApp",
			href: `https://wa.me/${wa}`,
			icon: MessageCircle,
			show: Boolean(contact.whatsapp),
			external: true
		},
		{
			key: "telegram",
			label: "Telegram",
			href: telegramHref,
			icon: Send,
			show: Boolean(contact.telegram),
			external: true
		},
		{
			key: "imo",
			label: "IMO",
			href: `tel:${tel}`,
			icon: Video,
			show: Boolean(contact.imo),
			external: false
		},
		{
			key: "teams",
			label: "Teams",
			href: contact.teamsLink || "https://teams.microsoft.com/",
			icon: Users,
			show: Boolean(contact.teams),
			external: true
		}
	].filter((a) => a.show);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex flex-wrap gap-2 ${className ?? ""}`,
		children: actions.map((action) => {
			const Icon = action.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size,
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: action.href,
					target: action.external ? "_blank" : void 0,
					rel: action.external ? "noopener noreferrer" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: action.label })]
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
		className: "text-xs text-muted-foreground",
		children: "Call only"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap items-center gap-1",
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
//#endregion
export { useGetSpecificHouseListQuery as A, selectActiveFilterCount as C, useDeleteHouseListingMutation as D, useAppSelector as E, useGetFindByAllHouseListQuery as O, locationLabel as S, useAppDispatch as T, findThana as _, ContactActions as a, formatLongDate as b, Header as c, TENANT_LABEL as d, Textarea as f, findDivision as g, findDistrict as h, ChannelDots as i, useHouseListingMutation as j, useGetMyHouseListingQuery as k, Input as l, digitsPhone as m, Button as n, CostBreakdown as o, cn as p, CATEGORY_LABEL as r, DIVISIONS as s, Badge as t, NativeSelect as u, formatBdt as v, totalMonthlyCost as w, getDeviceVisitorId as x, formatDayOrdinal as y };
