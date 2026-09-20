import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as createSelector } from "../_libs/@reduxjs/toolkit+[...].mjs";
import { C as openMobileFilters, I as totalMonthlyCost, K as usePreferences, N as setSearchTerm, R as useAppDispatch, h as cn, o as Input, t as Button, x as openCreatePost, z as useAppSelector } from "./postApi-DBq9pe7E.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Map, I as House, N as Languages, b as Plus, d as Sun, h as Search, p as SlidersHorizontal, w as Moon } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Header-Ca_PrxeN.js
var import_jsx_runtime = require_jsx_runtime();
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
	const { locale, theme, toggleLocale, toggleTheme, t } = usePreferences();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-bg-elevated/70 backdrop-blur-xl supports-[backdrop-filter]:bg-bg-elevated/60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex min-h-16 max-w-[1440px] flex-wrap items-center gap-2 px-3 py-2 sm:h-16 sm:flex-nowrap sm:gap-3 sm:px-6 sm:py-0 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "icon",
						className: "relative shrink-0 rounded-xl lg:hidden",
						"aria-label": t("openFilters"),
						onClick: () => dispatch(openMobileFilters()),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {}), activeFilters > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute top-1.5 right-1.5 flex size-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-primary" })]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						"aria-label": "Thikana home",
						className: "min-w-0 shrink rounded-lg transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative mx-auto hidden min-w-0 max-w-xl flex-1 sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle transition-colors group-focus-within:text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: searchTerm,
							onChange: (e) => dispatch(setSearchTerm(e.target.value)),
							placeholder: t("searchPlaceholder"),
							className: "h-10 rounded-full border-border/70 bg-bg-elevated/60 pr-4 pl-10 shadow-sm transition-all focus-visible:border-primary/60 focus-visible:bg-bg-elevated focus-visible:shadow-md",
							"aria-label": t("searchPlaceholder")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "order-3 flex w-full shrink-0 items-center justify-end gap-1 sm:order-none sm:ml-auto sm:w-auto sm:gap-1.5",
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, { className: "size-4" }), t("map")]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "sm",
									className: "rounded-full px-3 text-subtle hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/my-houses",
										activeProps: { className: "bg-primary/10 text-primary" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), t("myHouses")]
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
									"aria-label": t("map"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/live-house-listing",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, {})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "icon",
									className: "rounded-xl",
									"aria-label": t("myHouses"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/my-houses",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {})
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "inline-flex rounded-full px-3",
								"aria-label": t("languageLabel"),
								title: t("languageLabel"),
								onClick: toggleLocale,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: locale === "en" ? t("switchToBangla") : t("switchToEnglish")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "rounded-xl",
								"aria-label": theme === "light" ? t("switchToDark") : t("switchToLight"),
								title: theme === "light" ? t("switchToDark") : t("switchToLight"),
								onClick: toggleTheme,
								children: theme === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "h-8 px-3 gap-1.5 rounded-full bg-gradient-to-r from-accent to-indigo-900 hover:from-blue-900 hover:to-indigo-700 text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-95",
								onClick: () => dispatch(openCreatePost()),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline text-xs font-medium",
										children: t("postListing")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sm:hidden text-xs font-medium",
										children: t("post")
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
						placeholder: t("searchPlaceholder"),
						className: "h-10 rounded-full border-border/70 pr-4 pl-10 focus-visible:border-primary/60",
						"aria-label": t("searchPlaceholder")
					})]
				})
			})
		]
	});
}
//#endregion
export { selectActiveFilterCount as n, Header as t };
