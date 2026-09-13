import { i as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime, n as CheckboxIndicator, t as Checkbox$1, u as Slot } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as CalendarDays, a as Trash2, c as Search, d as MessageCircle, f as MapPin, g as Check, h as ChevronLeft, l as Plus, m as ChevronRight, n as Video, o as SlidersHorizontal, p as ImagePlus, r as Users, s as Send, t as X, u as Phone } from "../_libs/lucide-react.mjs";
import { n as useDispatch, r as useSelector } from "../_libs/react-redux+[...].mjs";
import { r as createSelector } from "../_libs/@reduxjs/toolkit+[...].mjs";
import { C as selectPost, S as removePost, _ as setDivision, a as openCreatePost, b as setThana, c as COST_MAX, d as setAvailableDayRange, f as setCategory, g as setDistrict, h as setDateTo, i as closeMobileFilters, l as resetFilters, m as setDateFrom, n as closeCreatePost, o as openDetails, p as setCostRange, r as closeDetails, s as openMobileFilters, u as setArea, v as setSearchTerm, x as addPost, y as setTenantType } from "./router-wO6urz5G.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root$1 } from "../_libs/radix-ui__react-scroll-area.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DRSkp7pi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
	bachelor_female: "Bachelor (Female)"
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
			size,
			className
		})),
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
var DIVISIONS = [
	{
		name: "Dhaka",
		districts: [
			{
				name: "Dhaka",
				thanas: [
					{
						name: "Dhanmondi",
						areas: [
							"Road 2",
							"Road 7",
							"Road 15",
							"Kalabagan",
							"Jigatola"
						]
					},
					{
						name: "Gulshan",
						areas: [
							"Gulshan 1",
							"Gulshan 2",
							"Gulshan North",
							"Gulshan Avenue"
						]
					},
					{
						name: "Banani",
						areas: [
							"Banani 11",
							"Kamal Ataturk",
							"Banani DOHS"
						]
					},
					{
						name: "Mirpur",
						areas: [
							"Mirpur 1",
							"Mirpur 10",
							"Mirpur 11",
							"Pallabi",
							"Kazipara"
						]
					},
					{
						name: "Mohammadpur",
						areas: [
							"Shyamoli",
							"Town Hall",
							"Pc Culture",
							"Kaderabad"
						]
					},
					{
						name: "Uttara",
						areas: [
							"Sector 3",
							"Sector 7",
							"Sector 10",
							"Sector 13",
							"Diabari"
						]
					},
					{
						name: "Motijheel",
						areas: [
							"Shapla Chattar",
							"Dilkusha",
							"Fakirapool",
							"Arambagh"
						]
					},
					{
						name: "Badda",
						areas: [
							"Middle Badda",
							"North Badda",
							"Merul Badda",
							"Rampura"
						]
					}
				]
			},
			{
				name: "Gazipur",
				thanas: [{
					name: "Gazipur Sadar",
					areas: [
						"Joydebpur",
						"Board Bazar",
						"Chandana"
					]
				}, {
					name: "Tongi",
					areas: [
						"Tongi Bazar",
						"Ershad Nagar",
						"Millgate"
					]
				}]
			},
			{
				name: "Narayanganj",
				thanas: [{
					name: "Narayanganj Sadar",
					areas: [
						"Chashara",
						"Fatullah",
						"Siddhirganj"
					]
				}]
			}
		]
	},
	{
		name: "Chattogram",
		districts: [{
			name: "Chattogram",
			thanas: [
				{
					name: "Panchlaish",
					areas: [
						"O.R. Nizam Road",
						"Khulshi Adjacent",
						"Nasirabad"
					]
				},
				{
					name: "Khulshi",
					areas: [
						"Khulshi Hills",
						"Lalkhan Bazar",
						"Probortak"
					]
				},
				{
					name: "Double Mooring",
					areas: [
						"Agrabad",
						"Port Connecting Road",
						"CDA Avenue"
					]
				},
				{
					name: "Halishahar",
					areas: [
						"Block A",
						"Block G",
						"Navy Colony"
					]
				}
			]
		}, {
			name: "Cox's Bazar",
			thanas: [{
				name: "Cox's Bazar Sadar",
				areas: [
					"Kolatoli",
					"Laboni",
					"Hotel Motel Zone"
				]
			}]
		}]
	},
	{
		name: "Rangpur",
		districts: [
			{
				name: "Thakurgaon",
				thanas: [
					{
						name: "Thakurgaon Sadar",
						areas: [
							"Boropalash",
							"Akcha",
							"Rahimanpur",
							"Gogor",
							"Jadurani"
						]
					},
					{
						name: "Pirganj",
						areas: [
							"Pirganj Bazar",
							"Bairchuna",
							"Khangaon"
						]
					},
					{
						name: "Baliadangi",
						areas: [
							"Baliadangi Bazar",
							"Duwasu",
							"Paria"
						]
					},
					{
						name: "Haripur",
						areas: ["Haripur Bazar", "Amgaon"]
					},
					{
						name: "Ranisankail",
						areas: ["Ranisankail Bazar", "Dharmagarh"]
					}
				]
			},
			{
				name: "Rangpur",
				thanas: [
					{
						name: "Rangpur Sadar",
						areas: [
							"Modern More",
							"Medical College",
							"Shapla Chattar",
							"Jahaj Company"
						]
					},
					{
						name: "Mithapukur",
						areas: ["Mithapukur Bazar", "Pairaband"]
					},
					{
						name: "Badarganj",
						areas: ["Badarganj Bazar", "Lohani Para"]
					}
				]
			},
			{
				name: "Dinajpur",
				thanas: [{
					name: "Dinajpur Sadar",
					areas: [
						"Balubari",
						"Chawk Bazar",
						"New Town"
					]
				}]
			}
		]
	},
	{
		name: "Sylhet",
		districts: [{
			name: "Sylhet",
			thanas: [
				{
					name: "Sylhet Sadar",
					areas: [
						"Zindabazar",
						"Amberkhana",
						"Chowhatta",
						"Bandar Bazar"
					]
				},
				{
					name: "Jalalabad",
					areas: [
						"Subid Bazar",
						"Tilagor",
						"Shahjalal Upashahar"
					]
				},
				{
					name: "South Surma",
					areas: ["Shahporan", "Khadimnagar"]
				}
			]
		}, {
			name: "Moulvibazar",
			thanas: [{
				name: "Moulvibazar Sadar",
				areas: ["Court Road", "Kusumbag"]
			}]
		}]
	},
	{
		name: "Khulna",
		districts: [{
			name: "Khulna",
			thanas: [{
				name: "Khulna Sadar",
				areas: [
					"Khalishpur",
					"Sonadanga",
					"Boyra"
				]
			}, {
				name: "Sonadanga",
				areas: [
					"Nirala",
					"Moylapota",
					"Gollamari"
				]
			}]
		}]
	},
	{
		name: "Rajshahi",
		districts: [{
			name: "Rajshahi",
			thanas: [{
				name: "Boalia",
				areas: [
					"Shaheb Bazar",
					"Laxmipur",
					"New Market"
				]
			}, {
				name: "Motihar",
				areas: [
					"RU Campus",
					"Binodpur",
					"Kazla"
				]
			}]
		}]
	},
	{
		name: "Barishal",
		districts: [{
			name: "Barishal",
			thanas: [{
				name: "Barishal Sadar",
				areas: [
					"Nathullabad",
					"Kawnia",
					"Rupatoli"
				]
			}]
		}]
	},
	{
		name: "Mymensingh",
		districts: [{
			name: "Mymensingh",
			thanas: [{
				name: "Mymensingh Sadar",
				areas: [
					"Ganginarpar",
					"CK Ghosh Road",
					"Town Hall"
				]
			}]
		}]
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
var INITIAL = {
	division: "",
	district: "",
	thana: "",
	area: "",
	title: "",
	description: "",
	category: "house_flat",
	tenantType: "family",
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
function CreatePostModal() {
	const dispatch = useAppDispatch();
	const open = useAppSelector((s) => s.ui.createPostOpen);
	const [form, setForm] = (0, import_react.useState)(INITIAL);
	const [error, setError] = (0, import_react.useState)(null);
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
	function close() {
		dispatch(closeCreatePost());
	}
	async function onFiles(files) {
		if (!files) return;
		const remaining = 5 - form.images.length;
		const picked = Array.from(files).slice(0, remaining);
		const encoded = await Promise.all(picked.map(readAsDataUrl));
		patch({ images: [...form.images, ...encoded] });
	}
	function onSubmit(event) {
		event.preventDefault();
		if (!form.title.trim()) return setError("Add a title.");
		if (!form.division || !form.district || !form.thana) return setError("Select division, district, and thana.");
		if (!form.phone.trim()) return setError("Add a phone number.");
		if (!/^\d{4}$/.test(form.pin)) return setError("PIN must be exactly 4 digits.");
		if (!form.availableFrom) return setError("Set an available-from date.");
		const contact = {
			phone: form.phone.trim(),
			whatsapp: form.whatsapp,
			telegram: form.telegram,
			teams: form.teams,
			imo: form.imo,
			telegramHandle: form.telegramHandle.trim() || void 0,
			teamsLink: form.teamsLink.trim() || void 0
		};
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
			utilities: liveUtilities,
			images: form.images,
			contact,
			availableFrom: form.availableFrom,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			pin: form.pin,
			source: "user"
		};
		dispatch(addPost(post));
		setForm(INITIAL);
		setError(null);
		close();
		toast.success("Listing posted. It is live on the board.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[min(92vh,880px)] max-w-3xl flex-col gap-0 p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b border-border px-5 py-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Post a listing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Totals update as you type. Images stay on this device." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						id: "create-post-form",
						onSubmit,
						className: "flex flex-col gap-8 px-5 py-5 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Location" }),
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
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Listing" }),
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
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											maxLength: 600,
											value: form.description,
											onChange: (e) => patch({ description: e.target.value }),
											placeholder: "Access, nearby landmarks, house rules."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Category",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
												value: form.category,
												onChange: (e) => patch({ category: e.target.value }),
												children: Object.keys(CATEGORY_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: key,
													children: CATEGORY_LABEL[key]
												}, key))
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Tenant type",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
												value: form.tenantType,
												onChange: (e) => patch({ tenantType: e.target.value }),
												children: Object.keys(TENANT_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: key,
													children: TENANT_LABEL[key]
												}, key))
											})
										})]
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Monthly costs (BDT)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Base rent",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													min: 0,
													step: 100,
													value: form.utilities.baseRent,
													onChange: (e) => patchUtilities({ baseRent: Number(e.target.value) || 0 })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Gas type",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
													value: form.utilities.gasType,
													onChange: (e) => patchUtilities({ gasType: e.target.value }),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "line",
															children: "Line gas"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "lpg",
															children: "LPG cylinder"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "included",
															children: "Included"
														})
													]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Gas bill",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													min: 0,
													disabled: form.utilities.gasType === "included",
													value: form.utilities.gas,
													onChange: (e) => patchUtilities({ gas: Number(e.target.value) || 0 })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Electricity",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
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
												label: "Electricity bill",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													min: 0,
													disabled: form.utilities.electricityType === "included",
													value: form.utilities.electricity,
													onChange: (e) => patchUtilities({ electricity: Number(e.target.value) || 0 })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Water",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													min: 0,
													value: form.utilities.water,
													onChange: (e) => patchUtilities({ water: Number(e.target.value) || 0 })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Service charge",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													min: 0,
													value: form.utilities.serviceCharge,
													onChange: (e) => patchUtilities({ serviceCharge: Number(e.target.value) || 0 })
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBreakdown, { utilities: liveUtilities })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Photos (up to 5)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex h-24 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-bg-elevated text-sm text-muted transition-colors hover:bg-secondary",
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
									}),
									form.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-5 gap-2",
										children: form.images.map((src, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-square overflow-hidden rounded-md bg-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src,
												alt: "",
												className: "size-full object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "absolute top-1 right-1 inline-flex size-7 items-center justify-center rounded-full bg-fg/70 text-primary-foreground",
												onClick: () => patch({ images: form.images.filter((_, i) => i !== index) }),
												"aria-label": "Remove photo",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
											})]
										}, src.slice(0, 32) + index))
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Contact" }),
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
										className: "grid gap-3 sm:grid-cols-2",
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
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-destructive",
								role: "alert",
								children: error
							}) : null
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-2 border-t border-border bg-bg-elevated px-5 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						onClick: close,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						form: "create-post-form",
						children: "Publish listing"
					})]
				})
			]
		})
	});
}
function SectionTitle({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "col-span-full font-display text-base font-medium tracking-tight",
		children
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
		}), children]
	});
}
function CheckRow({ id, label, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "flex min-h-11 items-center gap-3 rounded-md border border-border bg-surface px-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
			id,
			checked,
			onCheckedChange: (v) => onCheckedChange(v === true)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: label
		})]
	});
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
	"bachelor_female"
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
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium tracking-tight",
					children: "Category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: CATEGORIES.map((cat) => {
						const active = filters.category === cat;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => dispatch(setCategory(cat)),
							className: cn("h-11 rounded-full px-3.5 text-xs font-medium transition-colors", active ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"),
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
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFallback, { category: post.category }),
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
function ImageFallback({ category }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex size-full items-center justify-center bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-sm text-muted",
			children: CATEGORY_LABEL[category]
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
				className: "grid min-h-0 flex-1 lg:grid-cols-[1.15fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-fg",
					children: [current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current,
						alt: "",
						className: "h-56 w-full object-cover sm:h-72 lg:h-full"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-56 items-center justify-center bg-secondary sm:h-72 lg:h-full",
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
								className: "p-0",
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
						className: "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
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
