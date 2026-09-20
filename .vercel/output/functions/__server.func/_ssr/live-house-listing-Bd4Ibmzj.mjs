import { o as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { H as useGetLiveHouseListringTrackingQuery } from "./postApi-DBq9pe7E.mjs";
import { D as MapPin, G as CircleCheck, M as Layers, U as Earth, Y as ChevronRight, Z as ChevronDown, _ as RefreshCw, g as RotateCcw, h as Search, l as TrendingUp, n as ZoomOut, t as ZoomIn, tt as Building2 } from "../_libs/lucide-react.mjs";
import { t as Header } from "./Header-Ca_PrxeN.mjs";
import { t as ErrorPage } from "./ErrorPage-BTML1tIj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-house-listing-Bd4Ibmzj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CANVAS_W = 820;
var CANVAS_H = 620;
var CX = CANVAS_W / 2;
var CY = CANVAS_H / 2;
var PAD = 46;
var clamp = (v, min, max) => Math.max(min, Math.min(max, v));
/** পোস্ট সংখ্যার অনুপাতে ব্যাসার্ধ (area-proportional) */
var radiusFor = (count, max, min, span) => {
	if (max <= 0) return min;
	return min + span * Math.sqrt(Math.max(count, 0) / max);
};
/** ভলিউম অনুযায়ী কালার টোন */
var toneFor = (count, max) => {
	const ratio = max > 0 ? count / max : 0;
	if (count <= 0) return {
		fill: "#1e293b",
		stroke: "#334155",
		label: "None"
	};
	if (ratio < .2) return {
		fill: "rgba(16,185,129,0.22)",
		stroke: "#34d39977",
		label: "Low"
	};
	if (ratio < .55) return {
		fill: "rgba(16,185,129,0.45)",
		stroke: "#34d399aa",
		label: "Medium"
	};
	if (ratio < .85) return {
		fill: "rgba(16,185,129,0.70)",
		stroke: "#6ee7b7",
		label: "High"
	};
	return {
		fill: "#10b981",
		stroke: "#a7f3d0",
		label: "Max"
	};
};
function buildMarkers(divisions, selectedDivision, selectedDistrict) {
	const markers = [];
	const n = divisions.length;
	if (n === 0) return markers;
	const divMax = Math.max(...divisions.map((d) => d.totalPosts || 0), 1);
	const ordered = [...divisions].sort((a, b) => b.totalPosts - a.totalPosts);
	const rx = n === 1 ? 0 : CANVAS_W * .3;
	const ry = n === 1 ? 0 : CANVAS_H * .29;
	ordered.forEach((div, i) => {
		const angle = i / n * Math.PI * 2 - Math.PI / 2;
		const dx = clamp(CX + rx * Math.cos(angle), 76, 744);
		const dy = clamp(CY + ry * Math.sin(angle), 76, 544);
		const isActive = selectedDivision === div.division;
		markers.push({
			id: `div:${div.division}`,
			label: div.division,
			count: div.totalPosts || 0,
			x: dx,
			y: dy,
			r: radiusFor(div.totalPosts || 0, divMax, 20, 30),
			level: "division",
			px: CX,
			py: CY,
			divisionName: div.division,
			dimmed: !!selectedDivision && !isActive
		});
		if (!isActive) return;
		const dists = div.districts || [];
		const dMax = Math.max(...dists.map((d) => d.totalPosts || 0), 1);
		const dRing = clamp(78 + dists.length * 7, 90, 155);
		dists.forEach((dist, j) => {
			const a = j / Math.max(dists.length, 1) * Math.PI * 2 - Math.PI / 2;
			const x = clamp(dx + dRing * Math.cos(a), PAD, 774);
			const y = clamp(dy + dRing * .78 * Math.sin(a), PAD, 574);
			const distActive = selectedDistrict === dist.district;
			markers.push({
				id: `dist:${div.division}:${dist.district}`,
				label: dist.district,
				count: dist.totalPosts || 0,
				x,
				y,
				r: radiusFor(dist.totalPosts || 0, dMax, 13, 17),
				level: "district",
				px: dx,
				py: dy,
				divisionName: div.division,
				districtName: dist.district,
				dimmed: !!selectedDistrict && !distActive
			});
			if (!distActive) return;
			const thanas = dist.thanas || [];
			const tMax = Math.max(...thanas.map((t) => t.totalPosts || 0), 1);
			const tRing = clamp(44 + thanas.length * 3, 46, 78);
			thanas.forEach((th, k) => {
				const ta = k / Math.max(thanas.length, 1) * Math.PI * 2 - Math.PI / 2;
				markers.push({
					id: `thana:${dist.district}:${th.thana}:${k}`,
					label: th.thana,
					count: th.totalPosts || 0,
					x: clamp(x + tRing * Math.cos(ta), PAD, 774),
					y: clamp(y + tRing * .82 * Math.sin(ta), PAD, 574),
					r: radiusFor(th.totalPosts || 0, tMax, 8, 10),
					level: "thana",
					px: x,
					py: y,
					divisionName: div.division,
					districtName: dist.district,
					dimmed: false
				});
			});
		});
	});
	return markers;
}
var HouseListingTrack = () => {
	const { data, isLoading, isError, error, refetch } = useGetLiveHouseListringTrackingQuery({});
	const [selectedDivision, setSelectedDivision] = (0, import_react.useState)(null);
	const [selectedDistrict, setSelectedDistrict] = (0, import_react.useState)(null);
	const [expandedDivisions, setExpandedDivisions] = (0, import_react.useState)({});
	const [expandedDistricts, setExpandedDistricts] = (0, import_react.useState)({});
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [hovered, setHovered] = (0, import_react.useState)(null);
	const [zoom, setZoom] = (0, import_react.useState)(1);
	const rawData = data?.data || [];
	const grandTotalPosts = rawData.reduce((acc, curr) => acc + (curr.totalPosts || 0), 0);
	const toggleDivision = (divName) => setExpandedDivisions((prev) => ({
		...prev,
		[divName]: !prev[divName]
	}));
	const toggleDistrict = (distName) => setExpandedDistricts((prev) => ({
		...prev,
		[distName]: !prev[distName]
	}));
	const filteredData = (0, import_react.useMemo)(() => {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return rawData;
		return rawData.map((div) => {
			const matchesDiv = div.division.toLowerCase().includes(q);
			const districts = (div.districts || []).map((dist) => {
				const matchesDist = dist.district.toLowerCase().includes(q);
				const thanas = (dist.thanas || []).filter((th) => th.thana.toLowerCase().includes(q));
				if (matchesDist) return dist;
				if (thanas.length > 0) return {
					...dist,
					thanas
				};
				return null;
			}).filter((d) => d !== null);
			if (matchesDiv) return div;
			if (districts.length > 0) return {
				...div,
				districts
			};
			return null;
		}).filter((d) => d !== null);
	}, [rawData, searchQuery]);
	const markers = (0, import_react.useMemo)(() => buildMarkers(filteredData, selectedDivision, selectedDistrict), [
		filteredData,
		selectedDivision,
		selectedDistrict
	]);
	const activeDivisionData = filteredData.find((d) => d.division === selectedDivision);
	const activeDistrictData = activeDivisionData?.districts?.find((d) => d.district === selectedDistrict);
	const divisionMax = Math.max(...filteredData.map((d) => d.totalPosts || 0), 1);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-border bg-surface p-8 text-fg shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mb-4 h-10 w-10 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-muted",
			children: "লাইভ হাউজিং ডাটা লোড হচ্ছে..."
		})]
	});
	if (isError && error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorPage, { error });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grid min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1440px] space-y-6 px-4 py-6 text-fg sm:px-6 lg:px-8 lg:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-4 border-b border-border pb-6 lg:flex-row lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex items-center gap-2 text-xs font-semibold tracking-wider text-primary uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
						}), "Realtime Live API Mapping"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-3 text-2xl font-bold text-fg sm:text-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-8 w-8 text-primary" }), "বাংলাদেশ হাউজিং লিস্টিং ম্যাপ"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-2xl border border-border bg-surface p-3.5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-6 h-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-muted",
							children: "সক্রিয় পোস্ট সংখ্যা"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-2xl font-extrabold text-fg",
							children: [
								grandTotalPosts,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-normal text-muted",
									children: "টি"
								})
							]
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full sm:w-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "বিভাগ, জেলা বা থানা দিয়ে খুঁজুন...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-xl border border-input bg-surface py-2.5 pr-4 pl-10 text-sm text-fg placeholder:text-muted focus:border-primary focus:outline-none transition-all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => refetch(),
						className: "flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-all hover:bg-secondary sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 text-primary" }), "ডাটা রিফ্রেশ করুন"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 rounded-2xl border border-border bg-surface/80 p-4 shadow-[var(--shadow-border)] sm:p-5 lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "flex items-center gap-2 text-base font-semibold text-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-primary" }), "লিস্টিং বিতরণ ম্যাপ"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary",
									children: [filteredData.length, " টি বিভাগ সক্রিয়"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-2xl border border-border bg-bg/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-3 top-3 z-10 flex flex-col gap-1.5",
										children: [
											{
												icon: ZoomIn,
												action: () => setZoom((z) => clamp(z + .2, .6, 2.2)),
												label: "জুম ইন"
											},
											{
												icon: ZoomOut,
												action: () => setZoom((z) => clamp(z - .2, .6, 2.2)),
												label: "জুম আউট"
											},
											{
												icon: RotateCcw,
												action: () => {
													setZoom(1);
													setSelectedDivision(null);
													setSelectedDistrict(null);
												},
												label: "রিসেট"
											}
										].map(({ icon: Icon, action, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: action,
											"aria-label": label,
											className: "grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface/90 text-muted transition-colors hover:border-primary/40 hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3.5 h-3.5" })
										}, label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-3 right-3 z-10 rounded-lg border border-border bg-surface/90 px-2 py-1 text-[11px] text-muted",
										children: grandTotalPosts > 0 && filteredData.length > 0 ? `${Math.round(divisionMax / grandTotalPosts * 100)}% সর্বোচ্চ` : "০%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: `0 0 ${CANVAS_W} ${CANVAS_H}`,
										className: "w-full h-auto block",
										role: "img",
										"aria-label": "বিভাগ, জেলা ও থানা অনুযায়ী পোস্ট বিতরণ",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
												id: "grid",
												width: "48",
												height: "48",
												patternUnits: "userSpaceOnUse",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M48 0H0V48",
													fill: "none",
													stroke: "#1e293b",
													strokeWidth: "1"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
												id: "glow",
												cx: "50%",
												cy: "50%",
												r: "50%",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "0%",
													stopColor: "#10b981",
													stopOpacity: "0.16"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "100%",
													stopColor: "#10b981",
													stopOpacity: "0"
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
												width: CANVAS_W,
												height: CANVAS_H,
												fill: "url(#grid)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: CX,
												cy: CY,
												r: 250,
												fill: "url(#glow)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
												transform: `translate(${CX - CX * zoom} ${CY - CY * zoom}) scale(${zoom})`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														cx: CX,
														cy: CY,
														r: 5,
														fill: "#10b981",
														opacity: .5
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
														x: CX,
														y: 330,
														textAnchor: "middle",
														className: "fill-muted",
														fontSize: "11",
														letterSpacing: "3",
														children: "BANGLADESH"
													}),
													markers.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
														x1: m.px,
														y1: m.py,
														x2: m.x,
														y2: m.y,
														stroke: m.level === "division" ? "#1e293b" : "#065f46",
														strokeWidth: m.level === "thana" ? .8 : 1.2,
														strokeDasharray: m.level === "division" ? "4 5" : "0",
														opacity: m.dimmed ? .15 : .7
													}, `line-${m.id}`)),
													markers.map((m) => {
														const max = m.level === "division" ? divisionMax : m.level === "district" ? Math.max(...(activeDivisionData?.districts || []).map((d) => d.totalPosts), 1) : Math.max(...(activeDistrictData?.thanas || []).map((t) => t.totalPosts), 1);
														const tone = toneFor(m.count, max);
														const isSelected = m.level === "division" && m.label === selectedDivision || m.level === "district" && m.label === selectedDistrict;
														return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
															opacity: m.dimmed ? .3 : 1,
															className: "cursor-pointer",
															onMouseEnter: () => setHovered(m),
															onMouseLeave: () => setHovered(null),
															onClick: () => {
																if (m.level === "division") {
																	setSelectedDivision((prev) => prev === m.label ? null : m.label);
																	setSelectedDistrict(null);
																} else if (m.level === "district") setSelectedDistrict((prev) => prev === m.label ? null : m.label);
															},
															children: [
																isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																	cx: m.x,
																	cy: m.y,
																	r: m.r + 10,
																	fill: "none",
																	stroke: "#34d399",
																	strokeWidth: "1.5",
																	opacity: "0.5"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																	cx: m.x,
																	cy: m.y,
																	r: m.r,
																	fill: tone.fill,
																	stroke: tone.stroke,
																	strokeWidth: isSelected ? 2.5 : 1.5
																}),
																m.r >= 13 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
																	x: m.x,
																	y: m.y + 4,
																	textAnchor: "middle",
																	fontSize: m.level === "division" ? 13 : 11,
																	fontWeight: "700",
																	fill: "#ecfdf5",
																	children: m.count
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
																	x: m.x,
																	y: m.y + m.r + 13,
																	textAnchor: "middle",
																	fontSize: m.level === "division" ? 12 : 10,
																	fontWeight: m.level === "division" ? 600 : 400,
																	fill: m.level === "division" ? "#e2e8f0" : "#94a3b8",
																	children: m.label
																})
															]
														}, m.id);
													})
												]
											}),
											filteredData.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
												x: CX,
												y: CY,
												textAnchor: "middle",
												fill: "#64748b",
												fontSize: "14",
												children: "এই সার্চে ম্যাপে দেখানোর মতো কোনো ডাটা নেই।"
											})
										]
									}),
									hovered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 rounded-xl border border-primary/30 bg-surface px-3 py-2 text-xs shadow-[var(--shadow-lift)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-fg",
												children: hovered.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted",
												children: [
													" ",
													"· ",
													hovered.level === "division" ? "বিভাগ" : hovered.level === "district" ? "জেলা" : "থানা"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-primary",
												children: [
													" · ",
													hovered.count,
													" পোস্ট"
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-3 border-t border-border bg-surface/60 px-4 py-2.5 text-[11px] text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-fg",
												children: "ভলিউম:"
											}),
											[
												{
													c: "#1e293b",
													t: "None"
												},
												{
													c: "rgba(16,185,129,0.22)",
													t: "Low"
												},
												{
													c: "rgba(16,185,129,0.45)",
													t: "Medium"
												},
												{
													c: "rgba(16,185,129,0.70)",
													t: "High"
												},
												{
													c: "#10b981",
													t: "Max"
												}
											].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "h-2.5 w-2.5 rounded-full border border-border",
													style: { background: l.c }
												}), l.t]
											}, l.t)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-auto",
												children: "বৃত্তের আকার = পোস্ট সংখ্যা · ক্লিক করলে জেলা ও থানা খুলবে"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "মার্কারের অবস্থান শুধু API-এর বিভাগ → জেলা → থানা কাঠামো থেকেই হিসাব হয়। কোনো latitude/longitude বা ডেমো ডাটা ব্যবহার করা হয়নি, তাই API বদলালে ম্যাপও নিজে থেকেই বদলাবে।" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 space-y-4",
						children: [activeDivisionData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 rounded-2xl border border-primary/30 bg-surface/80 p-5 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-fg",
										children: activeDivisionData.division
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setSelectedDivision(null);
											setSelectedDistrict(null);
										},
										className: "text-sm text-muted hover:text-fg",
										children: "✕"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [
										{
											v: activeDivisionData.totalPosts,
											l: "মোট পোস্ট"
										},
										{
											v: activeDivisionData.districts?.length || 0,
											l: "জেলা"
										},
										{
											v: (activeDivisionData.districts || []).reduce((a, d) => a + (d.thanas?.length || 0), 0),
											l: "থানা"
										},
										{
											v: grandTotalPosts > 0 ? `${Math.round(activeDivisionData.totalPosts / grandTotalPosts * 100)}%` : "০%",
											l: "সারাদেশের অংশ"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-bg/70 px-3 py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xl font-bold text-fg",
											children: s.v
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted",
											children: s.l
										})]
									}, s.l))
								}),
								activeDistrictData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mb-2 text-xs font-semibold text-primary",
										children: [activeDistrictData.district, " জেলার থানা ভাগ"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-1 max-h-40 overflow-y-auto pr-1",
										children: activeDistrictData.thanas?.map((th, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-lg border border-border bg-bg/60 px-2.5 py-1.5 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-fg/80",
												children: th.thana
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary",
												children: th.totalPosts
											})]
										}, `${th.thana}-${i}`))
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-surface/80 p-4 shadow-[var(--shadow-border)] sm:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-4 flex items-center gap-2 border-b border-border pb-3 text-base font-semibold text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4 text-primary" }), "বিভাগ, জেলা ও থানার ট্রি ভিউ"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3 max-h-[460px] overflow-y-auto pr-1",
								children: filteredData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "py-12 text-center text-sm text-muted",
									children: "কোনো সম্পর্কিত ফলাফল পাওয়া যায়নি।"
								}) : filteredData.map((divData) => {
									const isDivExpanded = expandedDivisions[divData.division];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "overflow-hidden rounded-xl border border-border bg-bg/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											onClick: () => toggleDivision(divData.division),
											className: "flex cursor-pointer items-center justify-between p-3.5 transition-colors hover:bg-secondary/60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [isDivExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-sm font-semibold text-fg",
													children: [divData.division, " বিভাগ"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary",
												children: [divData.totalPosts, " টি পোস্ট"]
											})]
										}), isDivExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-2 border-t border-border bg-bg/60 p-3 pl-6",
											children: divData.districts?.map((distData) => {
												const isDistExpanded = expandedDistricts[distData.district];
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "overflow-hidden rounded-lg border border-border bg-surface/70",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														onClick: () => toggleDistrict(distData.district),
														className: "flex cursor-pointer items-center justify-between p-2.5 transition-colors hover:bg-secondary/60",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [isDistExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-xs font-medium text-fg",
																children: [distData.district, " জেলা"]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-fg/80",
															children: distData.totalPosts
														})]
													}), isDistExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "space-y-1 border-t border-border bg-bg/70 p-2 pl-6",
														children: distData.thanas?.map((thanaData, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between rounded-md px-2 py-1.5 text-xs transition-colors hover:bg-secondary/60",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2 text-fg/80",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: thanaData.thana })]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-bold text-primary",
																children: [thanaData.totalPosts, " পোস্ট"]
															})]
														}, `${thanaData.thana}-${idx}`))
													})]
												}, distData.district);
											})
										})]
									}, divData.division);
								})
							})]
						})]
					})]
				})
			]
		})]
	});
};
var SplitComponent = HouseListingTrack;
//#endregion
export { SplitComponent as component };
