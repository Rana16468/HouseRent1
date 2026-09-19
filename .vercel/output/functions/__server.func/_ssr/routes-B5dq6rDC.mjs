import { o as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime, n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { $ as Car, A as ListOrdered, B as EyeOff, C as Navigation, D as MapPin, F as ImagePlus, H as Eraser, I as House, L as Heading2, P as Italic, Q as Check, R as Heading1, S as PenLine, T as MessageCircle, V as ExternalLink, W as Clock, X as ChevronLeft, Y as ChevronRight, et as CalendarDays, f as Strikethrough, i as Video, it as ArrowLeft, j as Link2, k as List, m as Send, nt as Bold, o as Undo2, r as X, rt as ArrowRight, s as Underline, v as Redo2, y as Quote, z as Eye } from "../_libs/lucide-react.mjs";
import { C as addPost, S as setThana, _ as setDateTo, a as closeDetails, c as openDetails, d as resetFilters, f as setArea, g as setDateFrom, h as setCostRange, i as closeCreatePost, m as setCategory, n as usePreferences, o as closeMobileFilters, p as setAvailableDayRange, u as COST_MAX, v as setDistrict, w as selectPost, x as setTenantType, y as setDivision } from "./router-C6kdH8BV.mjs";
import { C as useGetSpecificHouseListQuery, _ as useAppDispatch, a as Header, b as useGetFindByAllHouseListQuery, c as TENANT_LABEL, d as digitsPhone, f as formatBdt, g as totalMonthlyCost, h as selectActiveFilterCount, l as Textarea, m as formatLongDate, n as CATEGORY_LABEL, o as Input, p as formatDayOrdinal, s as NativeSelect, t as Button, u as cn, v as useAppSelector, w as useHouseListingMutation } from "./Header-D6vzvvj0.mjs";
import { t as ErrorPage } from "./ErrorPage-BTML1tIj.mjs";
import { a as DIVISIONS, c as findThana, i as CostBreakdown, l as getDeviceVisitorId, n as ChannelDots, o as findDistrict, r as ContactActions, s as findDivision, t as Badge, u as locationLabel } from "./badge-BdiAyqMW.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as require_dist } from "../_libs/device-detector-js.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root$1 } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B5dq6rDC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_dist = /* @__PURE__ */ __toESM(require_dist());
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
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-xs font-medium tracking-wide text-muted", className),
		...props
	});
}
var PARKING_LABEL = {
	none: "No parking",
	car: "Car parking",
	bike: "Bike / motorcycle parking",
	car_and_bike: "Car & bike parking",
	garage: "Private garage",
	street: "Street parking",
	not_available: "Not available"
};
var EMPTY_UTILITIES = {
	baseRent: 15e3,
	gas: 800,
	gasType: "line",
	electricity: 1500,
	electricityType: "prepaid",
	water: 400,
	serviceCharge: 500
};
var MAX_IMAGES = 5;
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
	utilities: EMPTY_UTILITIES,
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
/** Minimum length required for the secret PIN. Any character type is allowed. */
var MIN_PIN_LENGTH = 6;
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
	const [houseListing] = useHouseListingMutation();
	const liveUtilities = (0, import_react.useMemo)(() => {
		const next = { ...form.utilities };
		if (next.gasType === "included") next.gas = 0;
		if (next.electricityType === "included") next.electricity = 0;
		return next;
	}, [form.utilities]);
	const imagePreviews = (0, import_react.useMemo)(() => form.images.map((file) => URL.createObjectURL(file)), [form.images]);
	(0, import_react.useEffect)(() => {
		return () => {
			imagePreviews.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [imagePreviews]);
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
		const remaining = MAX_IMAGES - form.images.length;
		if (remaining <= 0) return;
		const picked = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, remaining);
		patch({ images: [...form.images, ...picked] });
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
			if (form.pin.length < MIN_PIN_LENGTH) return `PIN must be at least ${MIN_PIN_LENGTH} characters.`;
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
	/**
	* Runs only after a confirmed successful create response. Committing the
	* new post, wiping the wizard's form state, and closing the dialog happen
	* together here as one unit — there's no path where the form is cleared
	* without the modal closing, or vice versa, and this is never reached on
	* a failed/soft-failed submit.
	*/
	function finalizeSuccessfulSubmit(newPost, message) {
		dispatch(addPost(newPost));
		resetWizard();
		close();
		toast.success(message);
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
			const deviceId = await getDeviceVisitorId();
			const postPayload = {
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
				contact,
				availableFrom: form.availableFrom,
				pin: form.pin,
				source: "user",
				os,
				browser,
				device,
				ipAddress,
				deviceId
			};
			const formData = new FormData();
			formData.append("data", JSON.stringify(postPayload));
			form.images.forEach((file) => {
				formData.append("photo", file, file.name);
			});
			console.log("New listing submitted:", postPayload, form.images);
			const response = await houseListing(formData).unwrap();
			if (!response?.status) {
				setError(response?.message || "Something went wrong while posting.");
				return;
			}
			finalizeSuccessfulSubmit({
				...postPayload,
				id: response.data?.id,
				createdAt: response.data?.createdAt,
				images: imagePreviews
			}, response.message || "Listing posted. It is live on the board.");
		} catch (err) {
			console.error("Failed to submit listing:", err);
			const message = err?.data?.message || err?.error || err?.message || "Something went wrong while posting. Please try again.";
			setError(message);
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
								className: "flex h-20 items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-bg-elevated text-sm text-muted transition-colors " + (form.images.length >= MAX_IMAGES ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-secondary"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-4" }),
									form.images.length >= MAX_IMAGES ? `Maximum ${MAX_IMAGES} photos` : "Add photos",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										multiple: true,
										disabled: form.images.length >= MAX_IMAGES,
										className: "sr-only",
										onChange: (e) => {
											onFiles(e.target.files);
											e.target.value = "";
										}
									})
								]
							}), form.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-5 gap-2",
								children: form.images.map((file, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-square overflow-hidden rounded-md bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: imagePreviews[index],
										alt: "",
										className: "size-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "absolute top-1 right-1 inline-flex size-6 items-center justify-center rounded-full bg-fg/70 text-primary-foreground",
										onClick: () => patch({ images: form.images.filter((_, i) => i !== index) }),
										"aria-label": "Remove photo",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
									})]
								}, `${file.name}-${file.lastModified}-${index}`))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									"Optional — you can skip this step. Up to ",
									MAX_IMAGES,
									" photos."
								]
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: `Secret PIN (min ${MIN_PIN_LENGTH} characters)`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										type: "password",
										minLength: MIN_PIN_LENGTH,
										autoComplete: "new-password",
										placeholder: "Letters, numbers, symbols — anything works",
										value: form.pin,
										onChange: (e) => patch({ pin: e.target.value })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[11px] text-muted",
										children: [
											"You'll need this PIN later to edit or remove this listing. Use at least ",
											MIN_PIN_LENGTH,
											" characters — any mix of letters, numbers, or symbols is fine."
										]
									})]
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
	const { t } = usePreferences();
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
							children: t("location")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							size: "sm",
							className: "h-auto px-0",
							onClick: () => dispatch(resetFilters()),
							children: t("reset")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: t("cascadingFilter")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: t("division"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: filters.division ?? "",
							onChange: (e) => dispatch(setDivision(e.target.value || null)),
							"aria-label": t("division"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("allDivisions")
							}), DIVISIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: d.name,
								children: d.name
							}, d.name))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: t("district"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: filters.district ?? "",
							onChange: (e) => dispatch(setDistrict(e.target.value || null)),
							disabled: !division,
							"aria-label": t("district"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("allDistricts")
							}), division?.districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: d.name,
								children: d.name
							}, d.name))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: t("thana"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: filters.thana ?? "",
							onChange: (e) => dispatch(setThana(e.target.value || null)),
							disabled: !district,
							"aria-label": t("thana"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("allThanas")
							}), district?.thanas.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t.name,
								children: t.name
							}, t.name))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: t("area"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: filters.area ?? "",
							onChange: (e) => dispatch(setArea(e.target.value || null)),
							disabled: !thana,
							"aria-label": t("area"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("allAreas")
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
					children: t("category")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: CATEGORIES.map((cat) => {
						const active = filters.category === cat;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => dispatch(setCategory(cat)),
							className: cn("inline-flex items-center justify-center h-9 rounded-full px-4 text-xs font-medium transition-all duration-200 ease-in-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", active ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]" : "bg-secondary/60 text-secondary-foreground hover:bg-secondary hover:text-foreground active:scale-[0.98]"),
							children: cat === "all" ? t("all") : t({
								house_flat: "houseFlat",
								sublet_room: "subletRoom",
								mess: "mess",
								office: "office"
							}[cat])
						}, cat);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium tracking-tight",
					children: t("tenant")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: TENANTS.map((tenant) => {
						const active = filters.tenantType === tenant;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => dispatch(setTenantType(tenant)),
							className: cn("h-11 rounded-full px-3.5 text-xs font-medium transition-colors", active ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"),
							children: tenant === "all" ? t("any") : t({
								family: "family",
								bachelor_male: "bachelorMale",
								bachelor_female: "bachelorFemale",
								office: "office"
							}[tenant])
						}, tenant);
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
							children: t("monthlyTotal")
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
						children: t("baseRentUtilities")
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
							children: t("moveInWindow")
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
						children: t("availableDay")
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
						children: t("availableDates")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: t("from"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							className: "field",
							value: filters.dateFrom ?? "",
							onChange: (e) => dispatch(setDateFrom(e.target.value || null))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: t("to"),
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
function PostCard({ post }) {
	const dispatch = useAppDispatch();
	const cover = post.images[0];
	const total = totalMonthlyCost(post.utilities);
	const { t } = usePreferences();
	const digits = digitsPhone(post.contact.phone || "");
	digits.startsWith("880") ? `${digits}` : post.contact.phone;
	function open() {
		dispatch(selectPost(post.id));
		dispatch(openDetails());
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-[var(--shadow-border)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: open,
			className: "relative aspect-[4/3] overflow-hidden bg-secondary text-left",
			"aria-label": `View ${post.title}`,
			children: [
				cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cover,
					alt: "",
					className: "size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFallback, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/70 via-fg/10 to-transparent opacity-90" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 flex flex-wrap gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "default",
						className: "shadow-sm backdrop-blur-sm",
						children: CATEGORY_LABEL[post.category]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-transparent bg-surface/90 shadow-sm backdrop-blur-sm",
						children: TENANT_LABEL[post.tenantType]
					})]
				}),
				post.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "muted",
					className: "absolute top-3 right-3 bg-amber-400/95 text-amber-950 shadow-sm backdrop-blur-sm",
					children: "⭐ Featured"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-3 bottom-3 flex items-center gap-1.5 text-xs font-medium text-white/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 shrink-0 drop-shadow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate drop-shadow",
						children: locationLabel({
							area: post.location.area,
							thana: post.location.thana,
							district: post.location.district
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg leading-snug font-semibold tracking-tight text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: open,
								className: "text-left transition-colors hover:text-primary",
								children: post.title
							})
						}),
						post.address ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-fg/70",
									children: t("address")
								}),
								" ",
								post.address
							]
						}) : null,
						post?.liveLocationUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: post.liveLocationUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: (e) => e.stopPropagation(),
							className: "inline-flex w-fit items-center gap-1 text-xs font-medium text-primary underline-offset-2 hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), t("liveLocation")]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-secondary/40 p-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl font-semibold tracking-tight tabular-nums text-primary",
						children: [formatBdt(total), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 font-sans text-xs font-medium text-muted",
							children: t("month")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBreakdown, {
						utilities: post.utilities,
						compact: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center justify-between gap-2 pt-1 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-2.5 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
							className: "font-medium text-fg",
							children: [
								t("availableFrom"),
								" ",
								formatLongDate(post.availableFrom)
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelDots, { contact: post.contact })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 bg-green-500 gap-2 pt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: open,
						className: "w-full",
						children: t("details")
					})
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
function formatDateTime(value) {
	if (!value) return "—";
	try {
		return new Date(value).toLocaleString(void 0, {
			dateStyle: "medium",
			timeStyle: "short"
		});
	} catch {
		return value;
	}
}
function capitalize(value) {
	if (!value) return "—";
	return value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, " ");
}
/**
* Masks a phone number like a password field.
* Keeps the first 3 and last 2 characters visible so the user
* still gets a hint of which number it is.
* e.g. "01712345678" -> "017••••••78"
*/
function maskPhone(phone) {
	if (!phone) return "—";
	const trimmed = phone.trim();
	if (trimmed.length <= 5) return "•".repeat(trimmed.length);
	const head = trimmed.slice(0, 3);
	const tail = trimmed.slice(-2);
	return `${head}${"•".repeat(trimmed.length - 5)}${tail}`;
}
function PostDetailsModal() {
	const dispatch = useAppDispatch();
	const open = useAppSelector((s) => s.ui.detailsOpen);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [pin, setPin] = (0, import_react.useState)("");
	const [pinError, setPinError] = (0, import_react.useState)(null);
	const [phoneVisible, setPhoneVisible] = (0, import_react.useState)(false);
	const selectedPostId = useAppSelector((state) => state.posts.selectedPostId);
	const { data, isLoading, isError, error } = useGetSpecificHouseListQuery(selectedPostId ? selectedPostId : "6aabcf985b4575c82f5d92be", { skip: !open });
	const listing = data?.data;
	(0, import_react.useEffect)(() => {
		setPhoneVisible(false);
	}, [selectedPostId, open]);
	function close() {
		dispatch(closeDetails());
		dispatch(selectPost(null));
		setIndex(0);
		setPin("");
		setPinError(null);
		setPhoneVisible(false);
	}
	const images = listing?.images ?? [];
	const current = images[index] ?? images[0];
	const total = listing ? totalMonthlyCost(listing.utilities) : 0;
	function step(delta) {
		if (images.length === 0) return;
		setIndex((i) => (i + delta + images.length) % images.length);
	}
	function openLiveLocation() {
		if (!listing?.liveLocationUrl) return;
		window.open(listing.liveLocationUrl, "_blank", "noopener,noreferrer");
	}
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorPage, { error });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "flex max-h-[min(92vh,920px)] max-w-4xl flex-col gap-0 overflow-hidden p-0",
			children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center p-16 text-sm text-muted",
				children: "Loading listing…"
			}) : isError || !listing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-8 text-sm text-muted",
				children: "Listing not found."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
											children: CATEGORY_LABEL[listing.category] ?? capitalize(listing.category)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "muted",
											children: TENANT_LABEL[listing.tenantType] ?? capitalize(listing.tenantType)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: listing.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
										className: "flex items-start gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-3.5 shrink-0" }),
											locationLabel({
												area: listing.location.area,
												thana: listing.location.thana,
												district: listing.location.district
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: ["· ", listing.location.division]
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
									formatLongDate(listing.availableFrom)
								]
							})] }),
							listing.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-fg",
								dangerouslySetInnerHTML: { __html: listing.description }
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBreakdown, { utilities: listing.utilities }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "-mt-3 flex flex-wrap gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "muted",
									children: ["Electricity: ", capitalize(listing.utilities.electricityType)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "muted",
									children: ["Gas: ", capitalize(listing.utilities.gasType)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "grid grid-cols-2 gap-3 rounded-lg border border-border bg-bg-elevated p-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted",
											children: "Parking"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-fg",
											children: capitalize(listing.parking)
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted",
											children: "Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-fg",
											children: listing.address || "—"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted",
											children: "Posted"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-fg",
											children: formatDateTime(listing.createdAt)
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted",
											children: "Last updated"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-fg",
											children: formatDateTime(listing.updatedAt)
										})] })]
									})
								]
							}),
							listing.liveLocationUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								className: "gap-2",
								onClick: openLiveLocation,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
									"View live location",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-base font-medium",
										children: "Contact landlord"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3 rounded-lg border border-border bg-bg-elevated px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: cn("font-medium tabular-nums text-fg", !phoneVisible && "tracking-[0.18em] select-none"),
											"aria-label": phoneVisible ? "Phone number" : "Phone number hidden",
											children: phoneVisible ? listing.contact.phone : maskPhone(listing.contact.phone)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "ghost",
											size: "sm",
											className: "gap-1.5 shrink-0",
											onClick: () => setPhoneVisible((v) => !v),
											"aria-pressed": phoneVisible,
											"aria-label": phoneVisible ? "Hide phone number" : "Show phone number",
											children: phoneVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }), "Hide"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), "Show number"] })
										})]
									}),
									phoneVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactActions, { contact: {
										...listing.contact,
										telegramHandle: listing.contact.telegramHandle ?? void 0,
										teamsLink: listing.contact.teamsLink ?? void 0
									} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: "Tap “Show number” to reveal the contact details."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-1.5",
										children: [
											listing.contact.whatsapp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "muted",
												children: "WhatsApp"
											}) : null,
											listing.contact.telegram ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "muted",
												className: "inline-flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3" }),
													"Telegram",
													phoneVisible && listing.contact.telegramHandle ? ` · ${listing.contact.telegramHandle}` : ""
												]
											}) : null,
											listing.contact.imo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "muted",
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-3" }), "imo"]
											}) : null,
											listing.contact.teams ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "muted",
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "size-3" }), "Teams"]
											}) : null
										]
									}),
									phoneVisible && listing.contact.teams && listing.contact.teamsLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: listing.contact.teamsLink,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex w-fit items-center gap-1.5 text-sm text-primary underline underline-offset-2",
										children: ["Join Teams meeting", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 rounded-lg border border-border/50 bg-primary/5 p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-xs italic text-muted-foreground",
									children: "\"বাসা তো কেবল চারটে দেয়াল নয়, বাসা হলো দিনের শেষে ফিরে আসার এক নিরাপদ আশ্রয়।\""
								})
							}),
							pinError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-destructive",
								children: pinError
							}) : null
						]
					})
				})]
			})
		})
	});
}
var PAGE_SIZE = 12;
var DEBOUNCE_MS = 400;
var DEFAULT_MIN_COST = 0;
var DEFAULT_MAX_COST = 15e4;
/**
* A filter "has a value" only when it is a real selection.
* null, undefined, "", "all", "null" and "undefined" are all treated as unset.
*/
var hasValue = (value) => {
	if (value === null || value === void 0) return false;
	if (typeof value === "string") {
		const v = value.trim().toLowerCase();
		return v !== "" && v !== "all" && v !== "null" && v !== "undefined";
	}
	return true;
};
/** Returns `value` after it has stopped changing for `delay` ms. */
function useDebouncedValue(value, delay) {
	const [debounced, setDebounced] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		const id = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(id);
	}, [value, delay]);
	return debounced;
}
/** e.g. [1, "gap", 4, 5, 6, "gap", 20] — keeps the pager short on many pages. */
function getPageItems(current, total) {
	const wanted = [
		1,
		total,
		current - 1,
		current,
		current + 1
	].filter((p) => p >= 1 && p <= total);
	const sorted = Array.from(new Set(wanted)).sort((a, b) => a - b);
	const items = [];
	sorted.forEach((p, i) => {
		if (i > 0 && p - sorted[i - 1] > 1) items.push("gap");
		items.push(p);
	});
	return items;
}
function Home() {
	const dispatch = useAppDispatch();
	const active = useAppSelector(selectActiveFilterCount);
	const filters = useAppSelector((state) => state.filters);
	const { t } = usePreferences();
	const debouncedParams = useDebouncedValue((0, import_react.useMemo)(() => {
		const raw = {
			searchTerm: typeof filters.searchTerm === "string" ? filters.searchTerm.trim() : void 0,
			division: filters.division,
			district: filters.district,
			thana: filters.thana,
			area: filters.area,
			category: filters.category,
			tenantType: filters.tenantType,
			minRent: filters.minCost > DEFAULT_MIN_COST ? filters.minCost : void 0,
			maxRent: filters.maxCost < DEFAULT_MAX_COST ? filters.maxCost : void 0,
			fromDate: filters.dateFrom,
			toDate: filters.dateTo
		};
		return Object.fromEntries(Object.entries(raw).filter(([, v]) => hasValue(v)));
	}, [filters]), DEBOUNCE_MS);
	const filterKey = (0, import_react.useMemo)(() => JSON.stringify(debouncedParams), [debouncedParams]);
	const [pageState, setPageState] = (0, import_react.useState)({
		key: filterKey,
		page: 1
	});
	const page = pageState.key === filterKey ? pageState.page : 1;
	const goToPage = (nextPage) => {
		setPageState({
			key: filterKey,
			page: nextPage
		});
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const { data, isLoading, isFetching, isError, error, isSuccess } = useGetFindByAllHouseListQuery({
		page,
		limit: PAGE_SIZE,
		...debouncedParams
	});
	const allPostData = data?.data?.data ?? [];
	const metaData = data?.data?.meta;
	if (isError && error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorPage, { error });
	const total = metaData?.total ?? 0;
	const rangeStart = total === 0 || !metaData ? 0 : (metaData.page - 1) * metaData.limit + 1;
	const rangeEnd = rangeStart === 0 ? 0 : rangeStart + allPostData.length - 1;
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
									children: t("bangladeshRentals")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1 font-display text-3xl font-medium tracking-tight sm:text-4xl",
									children: t("roomsFlatsOffices")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
									children: t("homeDescription")
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm tabular-nums text-muted",
								"aria-live": "polite",
								children: [isLoading ? t("loadingListings") : total === 0 ? `0 ${t("listings")}` : `${rangeStart}–${rangeEnd} of ${total} ${t("listings")}`, active > 0 ? ` · ${active} ${t("filters")}` : ""]
							})]
						}),
						isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingSkeletons, { count: 6 }),
						!isLoading && isSuccess && (total === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onReset: () => dispatch(resetFilters()) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-busy": isFetching,
							className: `grid grid-cols-1 gap-5 transition-opacity md:grid-cols-2 lg:grid-cols-3 ${isFetching ? "opacity-60" : "opacity-100"}`,
							children: allPostData.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { post }, post.id))
						})),
						!isLoading && isSuccess && metaData && metaData.totalPage > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-1.5",
							"aria-label": "Pagination",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									disabled: metaData.page <= 1 || isFetching,
									onClick: () => goToPage(metaData.page - 1),
									"aria-label": "Previous page",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
								}),
								getPageItems(metaData.page, metaData.totalPage).map((item, index) => item === "gap" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-1 text-sm text-muted select-none",
									"aria-hidden": "true",
									children: "…"
								}, `gap-${index}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: item === metaData.page ? "default" : "outline",
									size: "icon",
									disabled: isFetching && item !== metaData.page,
									"aria-label": `Page ${item}`,
									"aria-current": item === metaData.page ? "page" : void 0,
									onClick: () => goToPage(item),
									children: item
								}, item)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									disabled: metaData.page >= metaData.totalPage || isFetching,
									onClick: () => goToPage(metaData.page + 1),
									"aria-label": "Next page",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border px-4 py-8 text-center text-xs text-muted",
				children: t("footerDescription")
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
function ListingSkeletons({ count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
		"aria-busy": "true",
		"aria-label": "Loading listings",
		children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 animate-pulse rounded-xl border border-border bg-surface motion-reduce:animate-none" }, i))
	});
}
function EmptyState({ onReset }) {
	const { t } = usePreferences();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-start gap-4 rounded-xl border border-dashed border-border bg-surface px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: t("noListings")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm leading-relaxed text-muted",
				children: t("homeDescription")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: onReset,
				children: t("clearFilters")
			})
		]
	});
}
//#endregion
export { Home as component };
