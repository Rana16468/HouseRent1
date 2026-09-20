import { o as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime, n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { i as createSlice, o as Provider_default, r as configureStore } from "../_libs/@reduxjs/toolkit+[...].mjs";
import { G as useHouseListingMutation, I as totalMonthlyCost, K as usePreferences, L as uiSlice_default, R as useAppDispatch, _ as filterSlice_default, a as GAS_LABEL, c as PreferencesProvider, d as baseApi, f as closeCreatePost, h as cn, i as ELECTRICITY_LABEL, l as TENANT_LABEL, o as Input, s as NativeSelect, t as Button, u as Textarea, v as formatBdt, z as useAppSelector } from "./postApi-DBq9pe7E.mjs";
import { f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ListOrdered, C as Navigation, D as MapPin, F as ImagePlus, H as Eraser, L as Heading2, P as Italic, Q as Check, R as Heading1, S as PenLine, c as TriangleAlert, f as Strikethrough, it as ArrowLeft, j as Link2, k as List, nt as Bold, o as Undo2, r as X, rt as ArrowRight, s as Underline, v as Redo2, y as Quote } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as require_dist } from "../_libs/device-detector-js.mjs";
import { t as index } from "../_libs/fingerprintjs__fingerprintjs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CAcutqM_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_dist = /* @__PURE__ */ __toESM(require_dist());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var postSlice = createSlice({
	name: "posts",
	initialState: {
		posts: [
			{
				id: "post-dhanmondi-lake",
				title: "Sunny 3-bed family flat beside Dhanmondi Lake",
				description: "Corner unit on Road 7 with lake-facing balcony, two baths, and a live-in kitchen. Generator and lift in the building. Walking distance to Rabindra Sarobar and the 27 number bus stand. Family tenants preferred; school-age children welcome.",
				category: "house_flat",
				tenantType: "family",
				location: {
					division: "Dhaka",
					district: "Dhaka",
					thana: "Dhanmondi",
					area: "Road 7"
				},
				utilities: {
					baseRent: 42e3,
					gas: 900,
					gasType: "line",
					electricity: 3500,
					electricityType: "prepaid",
					water: 600,
					serviceCharge: 2500
				},
				images: [
					"/listings/dhanmondi-living.jpg",
					"/listings/gulshan-apt.jpg",
					"/listings/rangpur-flat.jpg",
					"/listings/uttara-building.jpg"
				],
				contact: {
					phone: "+8801712345601",
					whatsapp: true,
					telegram: false,
					teams: false,
					imo: true
				},
				availableFrom: "2026-10-01",
				createdAt: "2026-09-02T08:00:00.000Z",
				pin: "4821",
				source: "mock",
				featured: true
			},
			{
				id: "post-gulshan-exec",
				title: "Gulshan 2 executive 2BHK with generator backup",
				description: "Quiet 1,150 sft flat on Gulshan Avenue, two bedrooms, maid's bath, and covered parking. Full-time security and backup generator. Suitable for a small family or a couple relocating for embassy or NGO work.",
				category: "house_flat",
				tenantType: "family",
				location: {
					division: "Dhaka",
					district: "Dhaka",
					thana: "Gulshan",
					area: "Gulshan 2"
				},
				utilities: {
					baseRent: 65e3,
					gas: 0,
					gasType: "included",
					electricity: 4500,
					electricityType: "postpaid",
					water: 800,
					serviceCharge: 4e3
				},
				images: [
					"/listings/gulshan-apt.jpg",
					"/listings/dhanmondi-living.jpg",
					"/listings/uttara-building.jpg",
					"/listings/rangpur-flat.jpg",
					"/listings/motijheel-office.jpg"
				],
				contact: {
					phone: "+8801812345602",
					whatsapp: true,
					telegram: true,
					teams: true,
					imo: false,
					telegramHandle: "gulshan_lets",
					teamsLink: "https://teams.microsoft.com/"
				},
				availableFrom: "2026-09-15",
				createdAt: "2026-08-28T11:20:00.000Z",
				pin: "1904",
				source: "mock",
				featured: true
			},
			{
				id: "post-mirpur-mess",
				title: "Mirpur-10 bachelor mess, 4-seat, near metro",
				description: "Four-seat mess on the 5th floor, attached bath, and a shared kitchen. Two minutes from Mirpur 10 metro. Wi-Fi included in service charge. Seats available from the 1st. Male bachelors only.",
				category: "mess",
				tenantType: "bachelor_male",
				location: {
					division: "Dhaka",
					district: "Dhaka",
					thana: "Mirpur",
					area: "Mirpur 10"
				},
				utilities: {
					baseRent: 5500,
					gas: 400,
					gasType: "lpg",
					electricity: 800,
					electricityType: "prepaid",
					water: 150,
					serviceCharge: 300
				},
				images: [
					"/listings/mirpur-mess.jpg",
					"/listings/sylhet-room.jpg",
					"/listings/mohammadpur-room.jpg"
				],
				contact: {
					phone: "+8801912345603",
					whatsapp: true,
					telegram: false,
					teams: false,
					imo: true
				},
				availableFrom: "2026-10-01",
				createdAt: "2026-09-05T06:40:00.000Z",
				pin: "7730",
				source: "mock"
			},
			{
				id: "post-thakurgaon-bari",
				title: "Thakurgaon Sadar paka bari with courtyard",
				description: "Two-storey paka house in Boropalash with a brick courtyard, three bedrooms, and a tube-well. Mango tree in the yard. Ten minutes from Thakurgaon courthouse. Ideal for a family posted to the district.",
				category: "house_flat",
				tenantType: "family",
				location: {
					division: "Rangpur",
					district: "Thakurgaon",
					thana: "Thakurgaon Sadar",
					area: "Boropalash"
				},
				utilities: {
					baseRent: 12e3,
					gas: 1100,
					gasType: "lpg",
					electricity: 1800,
					electricityType: "postpaid",
					water: 0,
					serviceCharge: 0
				},
				images: [
					"/listings/thakurgaon-house.jpg",
					"/listings/rangpur-flat.jpg",
					"/listings/uttara-building.jpg",
					"/listings/dhanmondi-living.jpg"
				],
				contact: {
					phone: "+8801718456120",
					whatsapp: true,
					telegram: false,
					teams: false,
					imo: true
				},
				availableFrom: "2026-10-01",
				createdAt: "2026-09-01T04:10:00.000Z",
				pin: "3344",
				source: "mock"
			},
			{
				id: "post-agrabad-office",
				title: "Agrabad commercial floor, 1,200 sft, lift and AC",
				description: "Entire 3rd-floor commercial unit on CDA Avenue. Four cabins plus an open hall, two washrooms, and passenger lift. Suitable for a trading office or logistics desk near the port. Rent quoted exclusive of electricity.",
				category: "office",
				tenantType: "family",
				location: {
					division: "Chattogram",
					district: "Chattogram",
					thana: "Double Mooring",
					area: "Agrabad"
				},
				utilities: {
					baseRent: 55e3,
					gas: 0,
					gasType: "included",
					electricity: 8e3,
					electricityType: "postpaid",
					water: 700,
					serviceCharge: 3500
				},
				images: [
					"/listings/agrabad-office.jpg",
					"/listings/motijheel-office.jpg",
					"/listings/gulshan-apt.jpg"
				],
				contact: {
					phone: "+8801819002211",
					whatsapp: true,
					telegram: true,
					teams: true,
					imo: false,
					telegramHandle: "ctg_commercial",
					teamsLink: "https://teams.microsoft.com/"
				},
				availableFrom: "2026-09-20",
				createdAt: "2026-08-22T09:00:00.000Z",
				pin: "8821",
				source: "mock"
			},
			{
				id: "post-sylhet-sublet",
				title: "Sylhet sublet room for female students, Zindabazar",
				description: "Attached-bath single room in a family flat, five minutes from Zindabazar. Study table, almirah, and independent entry after 8pm with the landlady. Female students only. Wi-Fi shared.",
				category: "sublet_room",
				tenantType: "bachelor_female",
				location: {
					division: "Sylhet",
					district: "Sylhet",
					thana: "Sylhet Sadar",
					area: "Zindabazar"
				},
				utilities: {
					baseRent: 8500,
					gas: 0,
					gasType: "included",
					electricity: 900,
					electricityType: "prepaid",
					water: 200,
					serviceCharge: 400
				},
				images: [
					"/listings/sylhet-room.jpg",
					"/listings/mohammadpur-room.jpg",
					"/listings/mirpur-mess.jpg",
					"/listings/rangpur-flat.jpg"
				],
				contact: {
					phone: "+8801715567890",
					whatsapp: true,
					telegram: false,
					teams: false,
					imo: true
				},
				availableFrom: "2026-10-05",
				createdAt: "2026-09-07T13:15:00.000Z",
				pin: "2509",
				source: "mock"
			},
			{
				id: "post-uttara-duplex",
				title: "Uttara Sector 7 duplex, playground downstairs",
				description: "Ground-plus-one duplex in a quiet Sector 7 lane. Four bedrooms, rooftop access, and a small community playground. Walking distance to Azampur and Rajlakshmi. Family with children preferred.",
				category: "house_flat",
				tenantType: "family",
				location: {
					division: "Dhaka",
					district: "Dhaka",
					thana: "Uttara",
					area: "Sector 7"
				},
				utilities: {
					baseRent: 48e3,
					gas: 1e3,
					gasType: "line",
					electricity: 4e3,
					electricityType: "prepaid",
					water: 700,
					serviceCharge: 2e3
				},
				images: [
					"/listings/uttara-building.jpg",
					"/listings/dhanmondi-living.jpg",
					"/listings/gulshan-apt.jpg",
					"/listings/rangpur-flat.jpg",
					"/listings/thakurgaon-house.jpg"
				],
				contact: {
					phone: "+8801612345678",
					whatsapp: true,
					telegram: false,
					teams: false,
					imo: false
				},
				availableFrom: "2026-11-01",
				createdAt: "2026-09-04T10:00:00.000Z",
				pin: "6677",
				source: "mock"
			},
			{
				id: "post-mohammadpur-room",
				title: "Mohammadpur female-only single room, Shyamoli bus",
				description: "Single room with attached bath in a family-run building near Shyamoli bus stand. Independent lock, filtered water, and CCTV on the stair. Female working professionals or students. No overnight guests.",
				category: "sublet_room",
				tenantType: "bachelor_female",
				location: {
					division: "Dhaka",
					district: "Dhaka",
					thana: "Mohammadpur",
					area: "Shyamoli"
				},
				utilities: {
					baseRent: 9500,
					gas: 350,
					gasType: "lpg",
					electricity: 700,
					electricityType: "prepaid",
					water: 200,
					serviceCharge: 250
				},
				images: [
					"/listings/mohammadpur-room.jpg",
					"/listings/sylhet-room.jpg",
					"/listings/dhanmondi-living.jpg"
				],
				contact: {
					phone: "+8801918003344",
					whatsapp: true,
					telegram: true,
					teams: false,
					imo: true,
					telegramHandle: "shyamoli_room"
				},
				availableFrom: "2026-09-10",
				createdAt: "2026-08-30T07:45:00.000Z",
				pin: "0912",
				source: "mock"
			},
			{
				id: "post-motijheel-cabin",
				title: "Motijheel office cabin opposite Shapla Chattar",
				description: "350 sft glass cabin on the 6th floor, two workstations, and shared reception. Opposite Shapla Chattar with easy rickshaw access from GPO. Suitable for a consultancy or trading desk.",
				category: "office",
				tenantType: "family",
				location: {
					division: "Dhaka",
					district: "Dhaka",
					thana: "Motijheel",
					area: "Shapla Chattar"
				},
				utilities: {
					baseRent: 28e3,
					gas: 0,
					gasType: "included",
					electricity: 3500,
					electricityType: "postpaid",
					water: 400,
					serviceCharge: 1800
				},
				images: [
					"/listings/motijheel-office.jpg",
					"/listings/agrabad-office.jpg",
					"/listings/gulshan-apt.jpg"
				],
				contact: {
					phone: "+8801711002299",
					whatsapp: true,
					telegram: false,
					teams: true,
					imo: false,
					teamsLink: "https://teams.microsoft.com/"
				},
				availableFrom: "2026-09-01",
				createdAt: "2026-08-18T05:00:00.000Z",
				pin: "4401",
				source: "mock"
			},
			{
				id: "post-rangpur-medical",
				title: "Rangpur Sadar 2-bed near medical college",
				description: "Second-floor 2-bed flat, ten minutes' walk from Rangpur Medical College. Dedicated parking for one motorcycle. Family or doctor couple. Line gas in the kitchen.",
				category: "house_flat",
				tenantType: "family",
				location: {
					division: "Rangpur",
					district: "Rangpur",
					thana: "Rangpur Sadar",
					area: "Medical College"
				},
				utilities: {
					baseRent: 16e3,
					gas: 800,
					gasType: "line",
					electricity: 1600,
					electricityType: "prepaid",
					water: 300,
					serviceCharge: 500
				},
				images: [
					"/listings/rangpur-flat.jpg",
					"/listings/dhanmondi-living.jpg",
					"/listings/thakurgaon-house.jpg",
					"/listings/uttara-building.jpg"
				],
				contact: {
					phone: "+8801713334455",
					whatsapp: true,
					telegram: false,
					teams: false,
					imo: true
				},
				availableFrom: "2026-10-01",
				createdAt: "2026-09-03T12:00:00.000Z",
				pin: "1288",
				source: "mock"
			},
			{
				id: "post-pirganj-room",
				title: "Pirganj thana single room, attached bath",
				description: "Newly plastered single room behind Pirganj Bazar, attached bath, and a shared courtyard. Suitable for a bachelor posted to the thana or a college student. Rent is negotiable for a 12-month stay.",
				category: "sublet_room",
				tenantType: "bachelor_male",
				location: {
					division: "Rangpur",
					district: "Thakurgaon",
					thana: "Pirganj",
					area: "Pirganj Bazar"
				},
				utilities: {
					baseRent: 4500,
					gas: 500,
					gasType: "lpg",
					electricity: 600,
					electricityType: "prepaid",
					water: 0,
					serviceCharge: 0
				},
				images: [
					"/listings/thakurgaon-house.jpg",
					"/listings/mirpur-mess.jpg",
					"/listings/sylhet-room.jpg"
				],
				contact: {
					phone: "+8801716677889",
					whatsapp: true,
					telegram: false,
					teams: false,
					imo: true
				},
				availableFrom: "2026-09-05",
				createdAt: "2026-08-29T03:20:00.000Z",
				pin: "5151",
				source: "mock"
			},
			{
				id: "post-khulshi-hills",
				title: "Khulshi hillside 3-bed with sea-breeze evenings",
				description: "Top-floor 3-bed in Khulshi Hills. Cross-ventilation, mosaic floors, and a west balcony that catches the evening breeze. Family tenants. Fifteen minutes down to GEC Circle.",
				category: "house_flat",
				tenantType: "family",
				location: {
					division: "Chattogram",
					district: "Chattogram",
					thana: "Khulshi",
					area: "Khulshi Hills"
				},
				utilities: {
					baseRent: 32e3,
					gas: 900,
					gasType: "line",
					electricity: 2800,
					electricityType: "postpaid",
					water: 500,
					serviceCharge: 1500
				},
				images: [
					"/listings/gulshan-apt.jpg",
					"/listings/dhanmondi-living.jpg",
					"/listings/uttara-building.jpg",
					"/listings/rangpur-flat.jpg"
				],
				contact: {
					phone: "+8801812233445",
					whatsapp: true,
					telegram: false,
					teams: false,
					imo: false
				},
				availableFrom: "2026-10-10",
				createdAt: "2026-09-06T14:30:00.000Z",
				pin: "9090",
				source: "mock"
			}
		],
		selectedPostId: null
	},
	reducers: {
		addPost(state, action) {
			state.posts.unshift(action.payload);
		},
		hydrateUserPosts(state, action) {
			const existing = new Set(state.posts.map((p) => p.id));
			const incoming = action.payload.filter((p) => p.source === "user" && !existing.has(p.id));
			if (incoming.length > 0) state.posts = [...incoming, ...state.posts];
		},
		selectPost(state, action) {
			state.selectedPostId = action.payload;
		},
		removePost(state, action) {
			const post = state.posts.find((p) => p.id === action.payload.id);
			if (!post || post.pin !== action.payload.pin) return;
			state.posts = state.posts.filter((p) => p.id !== action.payload.id);
			if (state.selectedPostId === action.payload.id) state.selectedPostId = null;
		}
	}
});
var { addPost, hydrateUserPosts, selectPost, removePost } = postSlice.actions;
var postSlice_default = postSlice.reducer;
function makeStore() {
	return configureStore({
		reducer: {
			filters: filterSlice_default,
			posts: postSlice_default,
			ui: uiSlice_default,
			[baseApi.reducerPath]: baseApi.reducer
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
	});
}
var STORAGE_KEY = "thikana.user-posts.v1";
function ReduxProvider({ children }) {
	const [store] = (0, import_react.useState)(() => makeStore());
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed)) store.dispatch(hydrateUserPosts(parsed));
			}
		} catch {}
		return store.subscribe(() => {
			const userPosts = store.getState().posts.posts.filter((post) => post.source === "user");
			try {
				window.localStorage.setItem(STORAGE_KEY, JSON.stringify(userPosts));
			} catch {}
		});
	}, [store]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider_default, {
		store,
		children
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
var getDeviceVisitorId = async () => {
	return (await (await index.load()).get()).visitorId;
};
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
var CREATE_CATEGORIES = ["house_flat", "sublet_room"];
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
	const { t } = usePreferences();
	const text = (key, values = {}) => Object.entries(values).reduce((result, [name, value]) => result.replace(`{${name}}`, String(value)), t(key));
	const dispatch = useAppDispatch();
	const open = useAppSelector((s) => s.ui.createPostOpen);
	const [form, setForm] = (0, import_react.useState)(INITIAL);
	const [error, setError] = (0, import_react.useState)(null);
	const [formVersion, setFormVersion] = (0, import_react.useState)(0);
	const [stepIndex, setStepIndex] = (0, import_react.useState)(0);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const localizedSteps = STEPS.map((stepItem) => ({
		...stepItem,
		label: t(stepItem.key === "location" ? "location" : stepItem.key === "listing" ? "title" : stepItem.key === "costs" ? "monthlyTotal" : stepItem.key === "photos" ? "addPhotos" : "phone")
	}));
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
			if (!form.division || !form.district || !form.thana) return t("locationRequired");
			if (form.useLiveLocation) {
				if (!form.liveLocationUrl.trim()) return t("liveLocationRequired");
			} else if (!form.address.trim()) return t("addressRequired");
			return null;
		}
		if (key === "listing") {
			if (!form.title.trim()) return t("titleRequired");
			if (!form.availableFrom) return t("dateRequired");
			return null;
		}
		if (key === "costs") {
			if (!form.utilities.baseRent || form.utilities.baseRent <= 0) return t("rentRequired");
			if (!form.utilities.gasType) return t("gasRequired");
			if (!form.utilities.electricityType) return t("electricityRequired");
			return null;
		}
		if (key === "photos") return null;
		if (key === "contact") {
			if (!form.phone.trim()) return t("phoneRequired");
			if (form.pin.length < MIN_PIN_LENGTH) return text("pinRequired", { count: MIN_PIN_LENGTH });
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
				category: CREATE_CATEGORIES.includes(form.category) ? form.category : CREATE_CATEGORIES[0],
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
			const response = await houseListing(formData).unwrap();
			if (!response?.status) {
				setError(response?.message || t("postFailed"));
				return;
			}
			finalizeSuccessfulSubmit({
				...postPayload,
				id: response.data?.id,
				createdAt: response.data?.createdAt,
				images: imagePreviews
			}, response.message || t("postSuccess"));
		} catch (err) {
			console.error("Failed to submit listing:", err);
			const apiData = err?.data;
			const message = apiData?.message || apiData?.error || (typeof apiData === "string" ? apiData : null) || (apiData && typeof apiData === "object" ? Object.values(apiData).flat().filter(Boolean).join(", ") : null) || err?.error || err?.message || t("postTryAgain");
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
						children: t("postListingTitle")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs",
						children: text("stepOf", {
							current: stepIndex + 1,
							total: STEPS.length
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 border-b border-border bg-bg-elevated px-4 py-2 sm:px-5",
					children: localizedSteps.map((s, i) => {
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
									label: t("division"),
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
											children: t("selectDivision")
										}), DIVISIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: d.name,
											children: d.name
										}, d.name))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("district"),
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
											children: t("selectDistrict")
										}), division?.districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: d.name,
											children: d.name
										}, d.name))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("thana"),
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
											children: t("selectThana")
										}), district?.thanas.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: t.name,
											children: t.name
										}, t.name))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("area"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
										disabled: !thana,
										value: form.area,
										onChange: (e) => patch({ area: e.target.value }),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: t("selectArea")
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
										children: t("shareLiveLocation")
									})]
								}),
								form.useLiveLocation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("liveLocationUrl"),
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
										label: t("fullAddress"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "pointer-events-none absolute top-3 left-3 size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												required: true,
												className: "min-h-16 pl-9",
												placeholder: t("addressPlaceholder"),
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
									label: t("title"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										maxLength: 90,
										value: form.title,
										onChange: (e) => patch({ title: e.target.value }),
										placeholder: t("titlePlaceholder")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("description"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionEditor, {
										value: form.description,
										onChange: (html) => patch({ description: html })
									}, formVersion)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2.5 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("category"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
												value: form.category,
												onChange: (e) => patch({ category: e.target.value }),
												children: CREATE_CATEGORIES.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: key,
													children: t({
														house_flat: "houseFlat",
														sublet_room: "subletRoom",
														mess: "mess",
														office: "office"
													}[key])
												}, key))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("tenant"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
												value: form.tenantType,
												onChange: (e) => patch({ tenantType: e.target.value }),
												children: Object.keys(TENANT_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: key,
													children: t({
														family: "family",
														bachelor_male: "bachelorMale",
														bachelor_female: "bachelorFemale",
														office: "office"
													}[key])
												}, key))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("parkingSpace"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
												value: form.parking,
												onChange: (e) => patch({ parking: e.target.value }),
												children: Object.keys(PARKING_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: key,
													children: t({
														none: "noParking",
														car: "carParking",
														bike: "bikeParking",
														car_and_bike: "carBikeParking",
														garage: "privateGarage",
														street: "streetParking",
														not_available: "notAvailable"
													}[key])
												}, key))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("availableFromLabel"),
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
										label: t("baseRentRequired"),
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
										label: t("gasTypeRequired"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
											required: true,
											value: form.utilities.gasType,
											onChange: (e) => patchUtilities({ gasType: e.target.value }),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "line",
													children: t("lineGas")
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "lpg",
													children: t("cylinderLpg")
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "included",
													children: t("included")
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("gasBillOptional"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											disabled: form.utilities.gasType === "included",
											value: form.utilities.gas,
											onChange: (e) => patchUtilities({ gas: Number(e.target.value) || 0 })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("electricityTypeRequired"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
											required: true,
											value: form.utilities.electricityType,
											onChange: (e) => patchUtilities({ electricityType: e.target.value }),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "prepaid",
													children: t("prepaid")
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "postpaid",
													children: t("postpaid")
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "included",
													children: t("included")
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("electricityBillOptional"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											disabled: form.utilities.electricityType === "included",
											value: form.utilities.electricity,
											onChange: (e) => patchUtilities({ electricity: Number(e.target.value) || 0 })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("waterBillOptional"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											value: form.utilities.water,
											onChange: (e) => patchUtilities({ water: Number(e.target.value) || 0 })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("serviceChargeOptional"),
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("totalMonthlyCost") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
									form.images.length >= MAX_IMAGES ? text("maximumPhotos", { count: MAX_IMAGES }) : t("addPhotos"),
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
										"aria-label": t("removePhoto"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
									})]
								}, `${file.name}-${file.lastModified}-${index}`))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: text("optionalPhotos", { count: MAX_IMAGES })
							})]
						}) : null,
						step === "contact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "flex flex-col gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("phone"),
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
									label: t("telegramHandleOptional"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "@username",
										value: form.telegramHandle,
										onChange: (e) => patch({ telegramHandle: e.target.value })
									})
								}) : null,
								form.teams ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("teamsLinkOptional"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "https://teams.microsoft.com/...",
										value: form.teamsLink,
										onChange: (e) => patch({ teamsLink: e.target.value })
									})
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: text("secretPin", { count: MIN_PIN_LENGTH }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										type: "password",
										minLength: MIN_PIN_LENGTH,
										autoComplete: "new-password",
										placeholder: t("secretPinPlaceholder"),
										value: form.pin,
										onChange: (e) => patch({ pin: e.target.value })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-muted",
										children: text("secretPinHelp", { count: MIN_PIN_LENGTH })
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
						children: isFirstStep ? t("cancel") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
							" ",
							t("back")
						] })
					}), isLastStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						form: "create-post-form",
						size: "sm",
						disabled: submitting,
						children: submitting ? t("posting") : t("publishListing")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						onClick: goNext,
						children: [
							t("next"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						]
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
	const { t } = usePreferences();
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
		const url = window.prompt(t("enterUrl"));
		if (url) exec("createLink", url);
	}
	if (mode === "collapsed") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2 rounded-lg border border-border bg-surface p-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "prose prose-sm max-w-none text-xs [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-3 [&_blockquote]:italic [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5",
			dangerouslySetInnerHTML: { __html: value || `<p class='text-muted'>${t("noDescription")}</p>` }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "ghost",
			size: "sm",
			className: "w-fit",
			onClick: () => setMode("editing"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" }),
				" ",
				t("editDescription")
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col overflow-hidden rounded-lg border border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-0.5 border-b border-border bg-bg-elevated px-1.5 py-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Bold,
					label: t("bold"),
					onClick: () => exec("bold")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Italic,
					label: t("italic"),
					onClick: () => exec("italic")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Underline,
					label: t("underline"),
					onClick: () => exec("underline")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Strikethrough,
					label: t("strikethrough"),
					onClick: () => exec("strikeThrough")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Heading1,
					label: t("headingOne"),
					onClick: () => exec("formatBlock", "H1")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Heading2,
					label: t("headingTwo"),
					onClick: () => exec("formatBlock", "H2")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Quote,
					label: t("quote"),
					onClick: () => exec("formatBlock", "BLOCKQUOTE")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: List,
					label: t("bulletedList"),
					onClick: () => exec("insertUnorderedList")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: ListOrdered,
					label: t("numberedList"),
					onClick: () => exec("insertOrderedList")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Link2,
					label: t("link"),
					onClick: insertLink
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Undo2,
					label: t("undo"),
					onClick: () => exec("undo")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Redo2,
					label: t("redo"),
					onClick: () => exec("redo")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
					icon: Eraser,
					label: t("clearFormatting"),
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
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }),
							" ",
							t("exitEditor")
						]
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
			"data-placeholder": t("descriptionPlaceholder")
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
var styles_default = "/assets/styles-fRPzfI8Y.css";
var APP_NAME = "Thikana";
var Route$3 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Find a room, flat, mess, or office across Bangladesh. Filter by thana, tenant type, and monthly total."
			},
			{
				name: "theme-color",
				content: "#1e3d32"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferencesProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReduxProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePostModal, {})] }) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$2 = () => import("./routes-CJNYwpr5.mjs");
var Route$2 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
/**
* A filter "has a value" only when it is a real selection.
* null, undefined, "", "all", "null" and "undefined" are all treated as unset.
*/
/** Returns `value` after it has stopped changing for `delay` ms. */
/** e.g. [1, "gap", 4, 5, 6, "gap", 20] — keeps the pager short on many pages. */
var $$splitComponentImporter$1 = () => import("./live-house-listing-Bd4Ibmzj.mjs");
var Route$1 = createFileRoute("/live-house-listing")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./my-houses-BLvzvshv.mjs");
var Route = createFileRoute("/my-houses")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	LiveHouseListingRoute: Route$1.update({
		id: "/live-house-listing",
		path: "/live-house-listing",
		getParentRoute: () => Route$3
	}),
	MyHousesRoute: Route.update({
		id: "/my-houses",
		path: "/my-houses",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { findDivision as a, Label as c, DialogDescription as d, DialogHeader as f, selectPost as h, findDistrict as i, Dialog as l, CostBreakdown as m, getDeviceVisitorId as n, findThana as o, DialogTitle as p, DIVISIONS as r, locationLabel as s, router_exports as t, DialogContent as u };
