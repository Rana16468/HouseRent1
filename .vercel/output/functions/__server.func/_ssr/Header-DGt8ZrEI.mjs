import { d as Slot, m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as House, f as SlidersHorizontal, m as Search, w as Map, y as Plus } from "../_libs/lucide-react.mjs";
import { a as createSelector, c as useSelector, s as useDispatch } from "../_libs/@reduxjs/toolkit+[...].mjs";
import { c as openMobileFilters, n as baseApi, o as openCreatePost, y as setSearchTerm } from "./router-DvaOeulu.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Header-DGt8ZrEI.js
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
var useAppDispatch = useDispatch.withTypes();
var useAppSelector = useSelector.withTypes();
var { useHouseListingMutation, useGetFindByAllHouseListQuery, useGetSpecificHouseListQuery, useDeleteHouseListingMutation, useGetMyHouseListingQuery, useGetLiveHouseListringTrackingQuery } = baseApi.injectEndpoints({ endpoints: (builder) => ({
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
	}),
	getLiveHouseListringTracking: builder.query({
		query: () => {
			return {
				url: "/house_list/live_reasigon_requiring_attention",
				method: "GET"
			};
		},
		providesTags: ["post"]
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
		className: "sticky top-0 z-40 border-b border-border/70 bg-bg-elevated/70 backdrop-blur-xl supports-[backdrop-filter]:bg-bg-elevated/60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "icon",
						className: "relative shrink-0 rounded-xl lg:hidden",
						"aria-label": "Open filters",
						onClick: () => dispatch(openMobileFilters()),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {}), activeFilters > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute top-1.5 right-1.5 flex size-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-primary" })]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						"aria-label": "Thikana home",
						className: "shrink-0 rounded-lg transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative mx-auto hidden min-w-0 max-w-xl flex-1 sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle transition-colors group-focus-within:text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: searchTerm,
							onChange: (e) => dispatch(setSearchTerm(e.target.value)),
							placeholder: "Search area, thana, or title",
							className: "h-10 rounded-full border-border/70 bg-bg-elevated/60 pr-4 pl-10 shadow-sm transition-all focus-visible:border-primary/60 focus-visible:bg-bg-elevated focus-visible:shadow-md",
							"aria-label": "Search listings"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "ml-auto flex shrink-0 items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden items-center gap-1 rounded-full border border-border/70 bg-bg-elevated/50 p-1 md:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "sm",
									className: "rounded-full px-3 text-subtle hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/live-house-listing",
										activeProps: { className: "bg-primary/10 text-primary" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, { className: "size-4" }), "Map"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "sm",
									className: "rounded-full px-3 text-subtle hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/my-houses",
										activeProps: { className: "bg-primary/10 text-primary" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), "My Houses"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 md:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "icon",
									className: "rounded-xl",
									"aria-label": "Map",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/live-house-listing",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, {})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "icon",
									className: "rounded-xl",
									"aria-label": "My houses",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/my-houses",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {})
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "rounded-full shadow-sm transition-shadow hover:shadow-md",
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
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border/70 px-4 pt-2 pb-3 sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle transition-colors group-focus-within:text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: searchTerm,
						onChange: (e) => dispatch(setSearchTerm(e.target.value)),
						placeholder: "Search area, thana, or title",
						className: "h-10 rounded-full border-border/70 pr-4 pl-10 focus-visible:border-primary/60",
						"aria-label": "Search listings"
					})]
				})
			})
		]
	});
}
//#endregion
export { useGetSpecificHouseListQuery as C, useGetMyHouseListingQuery as S, useAppDispatch as _, Header as a, useGetFindByAllHouseListQuery as b, TENANT_LABEL as c, digitsPhone as d, formatBdt as f, totalMonthlyCost as g, selectActiveFilterCount as h, GAS_LABEL as i, Textarea as l, formatLongDate as m, CATEGORY_LABEL as n, Input as o, formatDayOrdinal as p, ELECTRICITY_LABEL as r, NativeSelect as s, Button as t, cn as u, useAppSelector as v, useHouseListingMutation as w, useGetLiveHouseListringTrackingQuery as x, useDeleteHouseListingMutation as y };
