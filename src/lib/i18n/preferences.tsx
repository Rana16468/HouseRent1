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
  | "bachelorFemale";

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
  const [locale, setLocaleState] = useState<Locale>(() => readStored("thikana.locale", "en"));
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = readStored<Theme>("thikana.theme", "light");
    if (typeof window !== "undefined" && !window.localStorage.getItem("thikana.theme")) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return stored;
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    window.localStorage.setItem("thikana.locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("thikana.theme", theme);
  }, [theme]);

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
