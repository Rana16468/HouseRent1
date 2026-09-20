import { o as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { B as useDeleteHouseListingMutation, I as totalMonthlyCost, U as useGetMyHouseListingQuery, b as formatLongDate, h as cn, l as TENANT_LABEL, n as CATEGORY_LABEL, t as Button, v as formatBdt } from "./postApi-DBq9pe7E.mjs";
import { $ as Car, B as EyeOff, D as MapPin, I as House, J as ChevronsLeft, K as CircleAlert, O as LoaderCircle, T as MessageCircle, V as ExternalLink, W as Clock, X as ChevronLeft, Y as ChevronRight, _ as RefreshCw, et as CalendarDays, i as Video, m as Send, q as ChevronsRight, u as Trash2, z as Eye } from "../_libs/lucide-react.mjs";
import { t as Header } from "./Header-Ca_PrxeN.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { m as CostBreakdown, n as getDeviceVisitorId, s as locationLabel } from "./router-CAcutqM_.mjs";
import { r as ContactActions, t as Badge } from "./badge-CVjl9mpH.mjs";
import { t as Swal } from "../_libs/sweetalert2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-houses-BLvzvshv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE_OPTIONS = [
	6,
	10,
	20,
	50
];
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
* Keeps the first 3 and last 2 characters visible as a hint.
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
/** Builds a compact page-number list with ellipses, e.g. 1 … 4 5 [6] 7 8 … 12 */
function buildPageWindow(current, totalPage) {
	if (totalPage <= 7) return Array.from({ length: totalPage }, (_, i) => i + 1);
	const sorted = [.../* @__PURE__ */ new Set([
		1,
		totalPage,
		current,
		current - 1,
		current + 1
	])].filter((p) => p >= 1 && p <= totalPage).sort((a, b) => a - b);
	const result = [];
	sorted.forEach((p, i) => {
		if (i > 0 && p - sorted[i - 1] > 1) result.push("…");
		result.push(p);
	});
	return result;
}
function MyHouseList() {
	const [deviceId, setDeviceId] = (0, import_react.useState)(null);
	const [page, setPage] = (0, import_react.useState)(1);
	const [limit, setLimit] = (0, import_react.useState)(10);
	(0, import_react.useEffect)(() => {
		async function fetchDeviceId() {
			try {
				const id = await getDeviceVisitorId();
				setDeviceId(id);
			} catch (err) {
				console.error("Error getting device ID:", err);
			}
		}
		fetchDeviceId();
	}, []);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [deviceId, limit]);
	const { data, isLoading, isFetching, isError, error, refetch } = useGetMyHouseListingQuery({
		deviceId: deviceId ?? "",
		page,
		limit
	}, { skip: !deviceId });
	const meta = data?.data?.meta;
	const listings = data?.data?.data ?? [];
	const showInitialLoading = isLoading || !deviceId;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-4xl flex-col gap-6 p-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-bold text-fg",
				children: "My House List"
			}), deviceId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 text-xs text-muted" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "Resolving device…"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "page-size",
						className: "text-xs text-muted",
						children: "Rows per page"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "page-size",
						value: limit,
						onChange: (e) => setLimit(Number(e.target.value)),
						className: "h-9 rounded-md border border-border bg-bg-elevated px-2 text-sm text-fg",
						children: PAGE_SIZE_OPTIONS.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: size,
							children: size
						}, size))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						onClick: () => refetch(),
						"aria-label": "Refresh",
						disabled: !deviceId || isFetching,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-4", isFetching && "animate-spin") })
					})
				]
			})]
		}), showInitialLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center gap-2 rounded-lg border border-border bg-bg-elevated p-16 text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Loading your listings…"]
		}) : isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-6 text-destructive" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-destructive",
					children: [
						"Couldn't load your listings",
						error && "status" in error ? ` (${error.status})` : "",
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => refetch(),
					children: "Try again"
				})
			]
		}) : listings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-2 rounded-lg border border-dashed border-border p-16 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-6 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "You haven't posted any listings yet."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("flex flex-col gap-8", isFetching && "opacity-60 transition-opacity"),
			children: listings.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, {
				listing,
				deviceId
			}, listing.id))
		}), meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationBar, {
			meta,
			page,
			onPageChange: setPage
		}) : null] })]
	})] });
}
function ListingCard({ listing, deviceId }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [phoneVisible, setPhoneVisible] = (0, import_react.useState)(false);
	const [deleteListing, { isLoading: isDeleting }] = useDeleteHouseListingMutation();
	const images = listing.images ?? [];
	const current = images[index] ?? images[0];
	const total = totalMonthlyCost(listing.utilities);
	const contactForActions = {
		...listing.contact,
		telegramHandle: listing.contact.telegramHandle ?? void 0,
		teamsLink: listing.contact.teamsLink ?? void 0
	};
	(0, import_react.useEffect)(() => {
		setPhoneVisible(false);
	}, [listing.id]);
	function step(delta) {
		if (images.length === 0) return;
		setIndex((i) => (i + delta + images.length) % images.length);
	}
	function openLiveLocation() {
		if (!listing.liveLocationUrl) return;
		window.open(listing.liveLocationUrl, "_blank", "noopener,noreferrer");
	}
	async function onDelete() {
		if (!deviceId) return;
		if (!(await Swal.fire({
			title: "Delete this listing?",
			html: `<b>${listing.title}</b> will be permanently removed. This can't be undone.`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, delete it",
			cancelButtonText: "Cancel",
			confirmButtonColor: "#dc2626",
			cancelButtonColor: "#6b7280",
			reverseButtons: true,
			focusCancel: true
		})).isConfirmed) return;
		try {
			await deleteListing({
				id: listing.id,
				deviceId
			}).unwrap();
			toast.success("Listing removed.");
			Swal.fire({
				title: "Deleted",
				text: "Your listing has been removed.",
				icon: "success",
				timer: 1800,
				showConfirmButton: false
			});
		} catch {
			toast.error("Couldn't delete the listing. Please try again.");
			Swal.fire({
				title: "Delete failed",
				text: "Couldn't delete the listing. Please try again.",
				icon: "error"
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex max-h-[min(92vh,920px)] flex-col gap-0 overflow-hidden rounded-lg border border-border bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[min(70vh,720px)] overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 px-5 py-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg leading-none font-semibold tracking-tight text-fg",
									children: listing.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 flex items-start gap-1.5 text-sm text-muted-foreground",
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
										className: "shrink-0 gap-1.5",
										onClick: () => setPhoneVisible((v) => !v),
										"aria-pressed": phoneVisible,
										"aria-label": phoneVisible ? "Hide phone number" : "Show phone number",
										children: phoneVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }), "Hide"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), "Show number"] })
									})]
								}),
								phoneVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactActions, { contact: contactForActions }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
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
								className: "text-center text-xs text-muted-foreground italic",
								children: "\"বাসা তো কেবল চারটে দেয়াল নয়, বাসা হলো দিনের শেষে ফিরে আসার এক নিরাপদ আশ্রয়।\""
							})
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
									children: "Remove this listing from your list. This can't be undone."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "destructive",
									type: "button",
									className: "mt-3 gap-2",
									onClick: onDelete,
									disabled: isDeleting,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), isDeleting ? "Deleting…" : "Delete listing"]
								})
							]
						})
					]
				})
			})]
		})
	});
}
function PaginationBar({ meta, page, onPageChange }) {
	const { total, totalPage, limit } = meta;
	if (totalPage <= 1) return null;
	const from = total === 0 ? 0 : (page - 1) * limit + 1;
	const to = Math.min(page * limit, total);
	const pages = buildPageWindow(page, totalPage);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Pagination",
		className: "flex flex-col items-center gap-4 rounded-lg border border-border bg-bg-elevated p-4 sm:flex-row sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: [
				"Showing ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-fg",
					children: from
				}),
				"–",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-fg",
					children: to
				}),
				" of",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-fg",
					children: total
				}),
				" listings"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-9 rounded-full",
					disabled: page <= 1,
					onClick: () => onPageChange(1),
					"aria-label": "First page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeft, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-9 rounded-full",
					disabled: page <= 1,
					onClick: () => onPageChange(page - 1),
					"aria-label": "Previous page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-1 sm:flex",
					children: pages.map((p, i) => p === "…" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-1 text-sm text-muted",
						children: "…"
					}, `ellipsis-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onPageChange(p),
						"aria-current": p === page ? "page" : void 0,
						className: cn("flex size-9 items-center justify-center rounded-full text-sm font-medium tabular-nums transition-all", p === page ? "bg-primary text-primary-foreground shadow-md scale-105" : "text-fg hover:bg-secondary"),
						children: p
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "px-2 text-sm font-medium tabular-nums text-fg sm:hidden",
					children: [
						"Page ",
						page,
						" of ",
						totalPage
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-9 rounded-full",
					disabled: page >= totalPage,
					onClick: () => onPageChange(page + 1),
					"aria-label": "Next page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-9 rounded-full",
					disabled: page >= totalPage,
					onClick: () => onPageChange(totalPage),
					"aria-label": "Last page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsRight, { className: "size-4" })
				})
			]
		})]
	});
}
var SplitComponent = MyHouseList;
//#endregion
export { SplitComponent as component };
