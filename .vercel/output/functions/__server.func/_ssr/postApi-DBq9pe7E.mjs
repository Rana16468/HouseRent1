import { o as __toESM } from "../_runtime.mjs";
import { d as Slot, h as require_react, m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { c as useSelector, i as createSlice, n as fetchBaseQuery, s as useDispatch, t as createApi } from "../_libs/@reduxjs/toolkit+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/postApi-DBq9pe7E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var baseQuery = fetchBaseQuery({
	baseUrl: "https://house-listing-backend-3i16.onrender.com/api/v1",
	credentials: "include",
	prepareHeaders: (headers) => {
		const token = localStorage.getItem("accessToken");
		if (token) headers.set("authorization", `${token}`);
		return headers;
	}
});
var baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery,
	tagTypes: ["post"],
	endpoints: () => ({})
});
var translations = {
	en: {
		searchPlaceholder: "Search area, thana, or title",
		openFilters: "Open filters",
		map: "Map",
		myHouses: "My Houses",
		postListing: "Post listing",
		post: "Post",
		languageLabel: "Language",
		themeLabel: "Theme",
		switchToBangla: "বাংলা",
		switchToEnglish: "English",
		switchToDark: "Dark mode",
		switchToLight: "Light mode",
		location: "Location",
		reset: "Reset",
		cascadingFilter: "Bangladesh · cascading thana filter",
		allDivisions: "All divisions",
		allDistricts: "All districts",
		allThanas: "All thanas",
		allAreas: "All areas",
		division: "Division",
		district: "District",
		thana: "Thana / Upazila",
		area: "Area",
		category: "Category",
		all: "All",
		tenant: "Tenant",
		any: "Any",
		monthlyTotal: "Monthly total",
		baseRentUtilities: "Base rent plus utilities",
		moveInWindow: "Move-in window",
		availableDay: "Day of the month the listing becomes available",
		availableDates: "Available dates",
		from: "From",
		to: "To",
		bangladeshRentals: "Bangladesh rentals",
		roomsFlatsOffices: "Rooms, flats, and offices",
		homeDescription: "Filter by division, thana, tenant type, and the real monthly total — rent plus gas, power, water, and service charge.",
		loadingListings: "Loading listings…",
		listings: "listings",
		filters: "filters",
		details: "Details",
		address: "Address:",
		liveLocation: "Live Location",
		month: "/ month",
		availableFrom: "From",
		footerDescription: "Thikana is a frontend listing board for Bangladesh. Contact landlords directly — no booking fees.",
		noListings: "No listings found",
		clearFilters: "Clear filters",
		houseFlat: "House / Flat",
		subletRoom: "Sublet / Single room",
		mess: "Mess",
		office: "Office / Commercial",
		family: "Family",
		bachelorMale: "Bachelor (Male)",
		bachelorFemale: "Bachelor (Female)",
		postListingTitle: "Post a listing",
		stepOf: "Step {current} of {total}",
		selectDivision: "Select division",
		selectDistrict: "Select district",
		selectThana: "Select thana",
		selectArea: "Select area",
		shareLiveLocation: "Share a live location link instead of typing an address",
		liveLocationUrl: "Live location URL",
		fullAddress: "Full address",
		addressPlaceholder: "House/road/block, landmark, city",
		title: "Title",
		titlePlaceholder: "e.g. 2-bed family flat near Medical College",
		description: "Description",
		parkingSpace: "Parking space",
		availableFromLabel: "Available from",
		baseRentRequired: "Base rent (required)",
		gasTypeRequired: "Gas type (required)",
		gasBillOptional: "Gas bill (optional)",
		electricityTypeRequired: "Electricity type (required)",
		electricityBillOptional: "Electricity bill (optional)",
		waterBillOptional: "Water bill (optional)",
		serviceChargeOptional: "Service charge (optional)",
		lineGas: "Line gas",
		cylinderLpg: "Cylinder (LPG)",
		included: "Included",
		prepaid: "Prepaid",
		postpaid: "Postpaid",
		totalMonthlyCost: "Total monthly cost",
		maximumPhotos: "Maximum {count} photos",
		addPhotos: "Add photos",
		optionalPhotos: "Optional — you can skip this step. Up to {count} photos.",
		removePhoto: "Remove photo",
		phone: "Phone",
		telegramHandleOptional: "Telegram handle (optional)",
		teamsLinkOptional: "Teams link (optional)",
		secretPin: "Secret PIN (min {count} characters)",
		secretPinPlaceholder: "Letters, numbers, symbols — anything works",
		secretPinHelp: "You'll need this PIN later to edit or remove this listing. Use at least {count} characters — any mix of letters, numbers, or symbols is fine.",
		cancel: "Cancel",
		back: "Back",
		next: "Next",
		posting: "Posting...",
		publishListing: "Publish listing",
		editDescription: "Edit description",
		exitEditor: "Exit editor",
		noDescription: "No description yet.",
		enterUrl: "Enter URL",
		bold: "Bold",
		italic: "Italic",
		underline: "Underline",
		strikethrough: "Strikethrough",
		headingOne: "Heading 1",
		headingTwo: "Heading 2",
		quote: "Quote",
		bulletedList: "Bulleted list",
		numberedList: "Numbered list",
		link: "Link",
		undo: "Undo",
		redo: "Redo",
		clearFormatting: "Clear formatting",
		locationRequired: "Select division, district, and thana.",
		liveLocationRequired: "Add a live location link.",
		addressRequired: "Add the full address.",
		titleRequired: "Add a title.",
		dateRequired: "Set an available-from date.",
		rentRequired: "Base rent is required.",
		gasRequired: "Select a gas type.",
		electricityRequired: "Select an electricity type.",
		phoneRequired: "Add a phone number.",
		pinRequired: "PIN must be at least {count} characters.",
		postFailed: "Something went wrong while posting.",
		postTryAgain: "Something went wrong while posting. Please try again.",
		postSuccess: "Listing posted. It is live on the board.",
		noParking: "No parking",
		carParking: "Car parking",
		bikeParking: "Bike / motorcycle parking",
		carBikeParking: "Car & bike parking",
		privateGarage: "Private garage",
		streetParking: "Street parking",
		notAvailable: "Not available",
		descriptionPlaceholder: "Access, nearby landmarks, house rules."
	},
	bn: {
		searchPlaceholder: "এলাকা, থানা বা শিরোনাম খুঁজুন",
		openFilters: "ফিল্টার খুলুন",
		map: "মানচিত্র",
		myHouses: "আমার বাড়ি",
		postListing: "লিস্টিং পোস্ট করুন",
		post: "পোস্ট",
		languageLabel: "ভাষা",
		themeLabel: "থিম",
		switchToBangla: "বাংলা",
		switchToEnglish: "English",
		switchToDark: "ডার্ক মোড",
		switchToLight: "লাইট মোড",
		location: "অবস্থান",
		reset: "রিসেট",
		cascadingFilter: "বাংলাদেশ · ধাপে ধাপে থানা ফিল্টার",
		allDivisions: "সব বিভাগ",
		allDistricts: "সব জেলা",
		allThanas: "সব থানা",
		allAreas: "সব এলাকা",
		division: "বিভাগ",
		district: "জেলা",
		thana: "থানা / উপজেলা",
		area: "এলাকা",
		category: "ক্যাটাগরি",
		all: "সব",
		tenant: "ভাড়াটিয়ার ধরন",
		any: "যেকোনো",
		monthlyTotal: "মাসিক মোট",
		baseRentUtilities: "মূল ভাড়া ও ইউটিলিটি",
		moveInWindow: "উঠে যাওয়ার সময়",
		availableDay: "লিস্টিংটি মাসের যে দিনে পাওয়া যাবে",
		availableDates: "পাওয়ার তারিখ",
		from: "শুরু",
		to: "শেষ",
		bangladeshRentals: "বাংলাদেশের ভাড়া",
		roomsFlatsOffices: "রুম, ফ্ল্যাট ও অফিস",
		homeDescription: "বিভাগ, থানা, ভাড়াটিয়ার ধরন এবং গ্যাস, বিদ্যুৎ, পানি ও সার্ভিস চার্জসহ প্রকৃত মাসিক মোট দিয়ে ফিল্টার করুন।",
		loadingListings: "লিস্টিং লোড হচ্ছে…",
		listings: "টি লিস্টিং",
		filters: "টি ফিল্টার",
		details: "বিস্তারিত",
		address: "ঠিকানা:",
		liveLocation: "লাইভ লোকেশন",
		month: "/ মাস",
		availableFrom: "শুরু",
		footerDescription: "ঠিকানা বাংলাদেশের একটি বাড়ি ভাড়ার লিস্টিং বোর্ড। কোনো বুকিং ফি ছাড়াই সরাসরি বাড়ির মালিকের সঙ্গে যোগাযোগ করুন।",
		noListings: "কোনো লিস্টিং পাওয়া যায়নি",
		clearFilters: "ফিল্টার মুছুন",
		houseFlat: "বাড়ি / ফ্ল্যাট",
		subletRoom: "সাবলেট / সিঙ্গেল রুম",
		mess: "মেস",
		office: "অফিস / বাণিজ্যিক",
		family: "পরিবার",
		bachelorMale: "ব্যাচেলর (পুরুষ)",
		bachelorFemale: "ব্যাচেলর (নারী)",
		postListingTitle: "লিস্টিং পোস্ট করুন",
		stepOf: "ধাপ {current} / {total}",
		selectDivision: "বিভাগ নির্বাচন করুন",
		selectDistrict: "জেলা নির্বাচন করুন",
		selectThana: "থানা নির্বাচন করুন",
		selectArea: "এলাকা নির্বাচন করুন",
		shareLiveLocation: "ঠিকানা লেখার পরিবর্তে লাইভ লোকেশন লিংক দিন",
		liveLocationUrl: "লাইভ লোকেশন URL",
		fullAddress: "সম্পূর্ণ ঠিকানা",
		addressPlaceholder: "বাড়ি/সড়ক/ব্লক, ল্যান্ডমার্ক, শহর",
		title: "শিরোনাম",
		titlePlaceholder: "যেমন: মেডিকেল কলেজের কাছে ২ বেডের পারিবারিক ফ্ল্যাট",
		description: "বিবরণ",
		parkingSpace: "পার্কিং ব্যবস্থা",
		availableFromLabel: "পাওয়া যাবে",
		baseRentRequired: "মূল ভাড়া (আবশ্যিক)",
		gasTypeRequired: "গ্যাসের ধরন (আবশ্যিক)",
		gasBillOptional: "গ্যাস বিল (ঐচ্ছিক)",
		electricityTypeRequired: "বিদ্যুতের ধরন (আবশ্যিক)",
		electricityBillOptional: "বিদ্যুৎ বিল (ঐচ্ছিক)",
		waterBillOptional: "পানি বিল (ঐচ্ছিক)",
		serviceChargeOptional: "সার্ভিস চার্জ (ঐচ্ছিক)",
		lineGas: "লাইন গ্যাস",
		cylinderLpg: "সিলিন্ডার (LPG)",
		included: "অন্তর্ভুক্ত",
		prepaid: "প্রিপেইড",
		postpaid: "পোস্টপেইড",
		totalMonthlyCost: "মাসিক মোট খরচ",
		maximumPhotos: "সর্বোচ্চ {count}টি ছবি",
		addPhotos: "ছবি যোগ করুন",
		optionalPhotos: "ঐচ্ছিক — এই ধাপটি এড়িয়ে যেতে পারেন। সর্বোচ্চ {count}টি ছবি।",
		removePhoto: "ছবি সরান",
		phone: "ফোন",
		telegramHandleOptional: "টেলিগ্রাম হ্যান্ডেল (ঐচ্ছিক)",
		teamsLinkOptional: "Teams লিংক (ঐচ্ছিক)",
		secretPin: "গোপন PIN ({count} অক্ষর ন্যূনতম)",
		secretPinPlaceholder: "অক্ষর, সংখ্যা, প্রতীক — যেকোনো কিছু ব্যবহার করুন",
		secretPinHelp: "লিস্টিং সম্পাদনা বা মুছতে পরে এই PIN লাগবে। কমপক্ষে {count}টি অক্ষর ব্যবহার করুন — অক্ষর, সংখ্যা বা প্রতীকের যেকোনো সমন্বয় চলবে।",
		cancel: "বাতিল",
		back: "পেছনে",
		next: "পরবর্তী",
		posting: "পোস্ট হচ্ছে...",
		publishListing: "লিস্টিং প্রকাশ করুন",
		editDescription: "বিবরণ সম্পাদনা করুন",
		exitEditor: "এডিটর বন্ধ করুন",
		noDescription: "এখনও কোনো বিবরণ নেই।",
		enterUrl: "URL লিখুন",
		bold: "বোল্ড",
		italic: "ইটালিক",
		underline: "আন্ডারলাইন",
		strikethrough: "স্ট্রাইকথ্রু",
		headingOne: "শিরোনাম ১",
		headingTwo: "শিরোনাম ২",
		quote: "উদ্ধৃতি",
		bulletedList: "বুলেট তালিকা",
		numberedList: "নম্বর তালিকা",
		link: "লিংক",
		undo: "পূর্বাবস্থা",
		redo: "পুনরায়",
		clearFormatting: "ফরম্যাট মুছুন",
		locationRequired: "বিভাগ, জেলা ও থানা নির্বাচন করুন।",
		liveLocationRequired: "লাইভ লোকেশন লিংক দিন।",
		addressRequired: "সম্পূর্ণ ঠিকানা দিন।",
		titleRequired: "একটি শিরোনাম দিন।",
		dateRequired: "পাওয়ার তারিখ নির্ধারণ করুন।",
		rentRequired: "মূল ভাড়া আবশ্যিক।",
		gasRequired: "গ্যাসের ধরন নির্বাচন করুন।",
		electricityRequired: "বিদ্যুতের ধরন নির্বাচন করুন।",
		phoneRequired: "ফোন নম্বর দিন।",
		pinRequired: "PIN কমপক্ষে {count} অক্ষরের হতে হবে।",
		postFailed: "লিস্টিং পোস্ট করতে সমস্যা হয়েছে।",
		postTryAgain: "লিস্টিং পোস্ট করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
		postSuccess: "লিস্টিং পোস্ট হয়েছে। এটি এখন বোর্ডে লাইভ।",
		noParking: "পার্কিং নেই",
		carParking: "গাড়ি পার্কিং",
		bikeParking: "বাইক / মোটরসাইকেল পার্কিং",
		carBikeParking: "গাড়ি ও বাইক পার্কিং",
		privateGarage: "ব্যক্তিগত গ্যারেজ",
		streetParking: "সড়কে পার্কিং",
		notAvailable: "পাওয়া যায় না",
		descriptionPlaceholder: "প্রবেশপথ, কাছাকাছি স্থান, বাড়ির নিয়ম লিখুন।"
	}
};
var PreferencesContext = (0, import_react.createContext)(null);
function readStored(key, fallback) {
	if (typeof window === "undefined") return fallback;
	const stored = window.localStorage.getItem(key);
	return stored === "en" || stored === "bn" || stored === "light" || stored === "dark" ? stored : fallback;
}
function PreferencesProvider({ children }) {
	const [locale, setLocaleState] = (0, import_react.useState)("en");
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const storedLocale = readStored("thikana.locale", "en");
		const storedTheme = window.localStorage.getItem("thikana.theme") ? readStored("thikana.theme", "light") : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		setLocaleState(storedLocale);
		setTheme(storedTheme);
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = locale;
		document.documentElement.dataset.locale = locale;
		if (hydrated) window.localStorage.setItem("thikana.locale", locale);
	}, [hydrated, locale]);
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;
		if (hydrated) window.localStorage.setItem("thikana.theme", theme);
	}, [hydrated, theme]);
	const setLocale = (nextLocale) => setLocaleState(nextLocale);
	const toggleLocale = () => setLocaleState((current) => current === "en" ? "bn" : "en");
	const toggleTheme = () => setTheme((current) => current === "light" ? "dark" : "light");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferencesContext.Provider, {
		value: {
			locale,
			theme,
			setLocale,
			toggleLocale,
			toggleTheme,
			t: (key) => translations[locale][key]
		},
		children
	});
}
function usePreferences() {
	const context = (0, import_react.useContext)(PreferencesContext);
	if (!context) throw new Error("usePreferences must be used inside PreferencesProvider");
	return context;
}
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
//#endregion
export { setDateTo as A, useDeleteHouseListingMutation as B, openMobileFilters as C, setCategory as D, setAvailableDayRange as E, setThana as F, useHouseListingMutation as G, useGetLiveHouseListringTrackingQuery as H, totalMonthlyCost as I, usePreferences as K, uiSlice_default as L, setDivision as M, setSearchTerm as N, setCostRange as O, setTenantType as P, useAppDispatch as R, openDetails as S, setArea as T, useGetMyHouseListingQuery as U, useGetFindByAllHouseListQuery as V, useGetSpecificHouseListQuery as W, filterSlice_default as _, GAS_LABEL as a, formatLongDate as b, PreferencesProvider as c, baseApi as d, closeCreatePost as f, digitsPhone as g, cn as h, ELECTRICITY_LABEL as i, setDistrict as j, setDateFrom as k, TENANT_LABEL as l, closeMobileFilters as m, CATEGORY_LABEL as n, Input as o, closeDetails as p, COST_MAX as r, NativeSelect as s, Button as t, Textarea as u, formatBdt as v, resetFilters as w, openCreatePost as x, formatDayOrdinal as y, useAppSelector as z };
