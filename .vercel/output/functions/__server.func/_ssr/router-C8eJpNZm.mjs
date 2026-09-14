import { o as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as useRouter, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Provider_default } from "../_libs/react-redux+[...].mjs";
import { n as createSlice, t as configureStore } from "../_libs/@reduxjs/toolkit+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C8eJpNZm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var COST_MAX = 15e4;
var initialFilterState = {
	searchTerm: "",
	country: "Bangladesh",
	division: null,
	district: null,
	thana: null,
	area: null,
	dateFrom: null,
	dateTo: null,
	availableDayStart: 1,
	availableDayEnd: 31,
	minCost: 0,
	maxCost: COST_MAX,
	category: "all",
	tenantType: "all"
};
var filterSlice = createSlice({
	name: "filters",
	initialState: initialFilterState,
	reducers: {
		setSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		setDivision(state, action) {
			state.division = action.payload;
			state.district = null;
			state.thana = null;
			state.area = null;
		},
		setDistrict(state, action) {
			state.district = action.payload;
			state.thana = null;
			state.area = null;
		},
		setThana(state, action) {
			state.thana = action.payload;
			state.area = null;
		},
		setArea(state, action) {
			state.area = action.payload;
		},
		setDateFrom(state, action) {
			state.dateFrom = action.payload;
		},
		setDateTo(state, action) {
			state.dateTo = action.payload;
		},
		setAvailableDayRange(state, action) {
			state.availableDayStart = action.payload.start;
			state.availableDayEnd = action.payload.end;
		},
		setCostRange(state, action) {
			state.minCost = action.payload.min;
			state.maxCost = action.payload.max;
		},
		setCategory(state, action) {
			state.category = action.payload;
		},
		setTenantType(state, action) {
			state.tenantType = action.payload;
		},
		resetFilters() {
			return initialFilterState;
		}
	}
});
var { setSearchTerm, setDivision, setDistrict, setThana, setArea, setDateFrom, setDateTo, setAvailableDayRange, setCostRange, setCategory, setTenantType, resetFilters } = filterSlice.actions;
var filterSlice_default = filterSlice.reducer;
var uiSlice = createSlice({
	name: "ui",
	initialState: {
		createPostOpen: false,
		detailsOpen: false,
		mobileFiltersOpen: false
	},
	reducers: {
		openCreatePost(state) {
			state.createPostOpen = true;
		},
		closeCreatePost(state) {
			state.createPostOpen = false;
		},
		openDetails(state) {
			state.detailsOpen = true;
		},
		closeDetails(state) {
			state.detailsOpen = false;
		},
		openMobileFilters(state) {
			state.mobileFiltersOpen = true;
		},
		closeMobileFilters(state) {
			state.mobileFiltersOpen = false;
		}
	}
});
var { openCreatePost, closeCreatePost, openDetails, closeDetails, openMobileFilters, closeMobileFilters } = uiSlice.actions;
var uiSlice_default = uiSlice.reducer;
function makeStore() {
	return configureStore({ reducer: {
		filters: filterSlice_default,
		posts: postSlice_default,
		ui: uiSlice_default
	} });
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
var styles_default = "/assets/styles-ov03E0dw.css";
var APP_NAME = "Thikana";
var Route$1 = createRootRoute({
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReduxProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter = () => import("./routes-CYJuyEcy.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { selectPost as C, removePost as S, setDivision as _, openCreatePost as a, setThana as b, COST_MAX as c, setAvailableDayRange as d, setCategory as f, setDistrict as g, setDateTo as h, closeMobileFilters as i, resetFilters as l, setDateFrom as m, closeCreatePost as n, openDetails as o, setCostRange as p, closeDetails as r, openMobileFilters as s, router_exports as t, setArea as u, setSearchTerm as v, addPost as x, setTenantType as y };
