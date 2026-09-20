import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "bn";
export type Theme = "light" | "dark";

type TranslationKey =
  | "searchPlaceholder"
  | "openFilters"
  | "map"
  | "myHouses"
  | "postListing"
  | "post"
  | "languageLabel"
  | "themeLabel"
  | "switchToBangla"
  | "switchToEnglish"
  | "switchToDark"
  | "switchToLight"
  | "location"
  | "reset"
  | "cascadingFilter"
  | "allDivisions"
  | "allDistricts"
  | "allThanas"
  | "allAreas"
  | "division"
  | "district"
  | "thana"
  | "area"
  | "category"
  | "all"
  | "tenant"
  | "any"
  | "monthlyTotal"
  | "baseRentUtilities"
  | "moveInWindow"
  | "availableDay"
  | "availableDates"
  | "from"
  | "to"
  | "bangladeshRentals"
  | "roomsFlatsOffices"
  | "homeDescription"
  | "loadingListings"
  | "listings"
  | "filters"
  | "details"
  | "address"
  | "liveLocation"
  | "month"
  | "availableFrom"
  | "footerDescription"
  | "noListings"
  | "clearFilters"
  | "houseFlat"
  | "subletRoom"
  | "mess"
  | "office"
  | "family"
  | "bachelorMale"
  | "bachelorFemale"
  | "postListingTitle"
  | "stepOf"
  | "selectDivision"
  | "selectDistrict"
  | "selectThana"
  | "selectArea"
  | "shareLiveLocation"
  | "liveLocationUrl"
  | "fullAddress"
  | "addressPlaceholder"
  | "title"
  | "titlePlaceholder"
  | "description"
  | "parkingSpace"
  | "availableFromLabel"
  | "baseRentRequired"
  | "gasTypeRequired"
  | "gasBillOptional"
  | "electricityTypeRequired"
  | "electricityBillOptional"
  | "waterBillOptional"
  | "serviceChargeOptional"
  | "lineGas"
  | "cylinderLpg"
  | "included"
  | "prepaid"
  | "postpaid"
  | "totalMonthlyCost"
  | "maximumPhotos"
  | "addPhotos"
  | "optionalPhotos"
  | "removePhoto"
  | "phone"
  | "telegramHandleOptional"
  | "teamsLinkOptional"
  | "secretPin"
  | "secretPinPlaceholder"
  | "secretPinHelp"
  | "cancel"
  | "back"
  | "next"
  | "posting"
  | "publishListing"
  | "editDescription"
  | "exitEditor"
  | "noDescription"
  | "enterUrl"
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "headingOne"
  | "headingTwo"
  | "quote"
  | "bulletedList"
  | "numberedList"
  | "link"
  | "undo"
  | "redo"
  | "clearFormatting"
  | "locationRequired"
  | "liveLocationRequired"
  | "addressRequired"
  | "titleRequired"
  | "dateRequired"
  | "rentRequired"
  | "gasRequired"
  | "electricityRequired"
  | "phoneRequired"
  | "pinRequired"
  | "postFailed"
  | "postTryAgain"
  | "postSuccess"
  | "noParking"
  | "carParking"
  | "bikeParking"
  | "carBikeParking"
  | "privateGarage"
  | "streetParking"
  | "notAvailable"
  | "descriptionPlaceholder";
  

const translations: Record<Locale, Record<TranslationKey, string>> = {
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
    descriptionPlaceholder: "Access, nearby landmarks, house rules.",
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
    descriptionPlaceholder: "প্রবেশপথ, কাছাকাছি স্থান, বাড়ির নিয়ম লিখুন।",
  },
};

type PreferencesContextValue = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  toggleTheme: () => void;
  t: (key: TranslationKey) => string;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function readStored<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const stored = window.localStorage.getItem(key);
  return stored === "en" || stored === "bn" || stored === "light" || stored === "dark"
    ? (stored as T)
    : fallback;
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedLocale = readStored<Locale>("thikana.locale", "en");
    const storedTheme = window.localStorage.getItem("thikana.theme")
      ? readStored<Theme>("thikana.theme", "light")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    setLocaleState(storedLocale);
    setTheme(storedTheme);
    setHydrated(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    if (hydrated) window.localStorage.setItem("thikana.locale", locale);
  }, [hydrated, locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (hydrated) window.localStorage.setItem("thikana.theme", theme);
  }, [hydrated, theme]);

  const setLocale = (nextLocale: Locale) => setLocaleState(nextLocale);
  const toggleLocale = () => setLocaleState((current) => (current === "en" ? "bn" : "en"));
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <PreferencesContext.Provider value={{ locale, theme, setLocale, toggleLocale, toggleTheme, t: (key) => translations[locale][key] }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used inside PreferencesProvider");
  return context;
}
