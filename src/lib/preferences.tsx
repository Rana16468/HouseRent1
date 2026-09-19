import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Locale = "en" | "bn";
type Theme = "light" | "dark";

type Dictionary = {
  [key: string]: string;
};

const translations: Record<Locale, Dictionary> = {
  en: {
    map: "Map",
    myHouses: "My houses",
    postListing: "Post listing",
    post: "Post",
    searchPlaceholder: "Search area, thana, or title",
    openFilters: "Open filters",
    language: "বাংলা",
    theme: "Theme",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    home: "Home",
    listingsEyebrow: "Bangladesh rentals",
    listingsTitle: "Rooms, flats, and offices",
    listingsDescription: "Find a better fit with clear monthly costs, trusted location filters, and direct landlord contact.",
    loading: "Loading listings…",
    noListings: "0 listings",
    listings: "listings",
    filters: "filters",
    previousPage: "Previous page",
    nextPage: "Next page",
    footer: "Thikana is a focused listing board for Bangladesh. Contact landlords directly — no booking fees.",
    address: "Address:",
    liveLocation: "Live location",
    month: "/ month",
    from: "From",
    details: "Details",
    featured: "Featured",
    location: "Location",
    reset: "Reset",
    filterHint: "Bangladesh · cascading location filters",
    division: "Division",
    district: "District",
    thana: "Thana / Upazila",
    area: "Area",
    allDivisions: "All divisions",
    allDistricts: "All districts",
    allThanas: "All thanas",
    allAreas: "All areas",
    category: "Category",
    all: "All",
    tenant: "Tenant",
    any: "Any",
    monthlyTotal: "Monthly total",
    baseRent: "Base rent plus utilities",
    moveIn: "Move-in window",
    moveInHint: "Day of the month the listing becomes available",
    availableDates: "Available dates",
    noResults: "No listings match these filters",
    noResultsHint: "Try widening your search or clearing one of the filters.",
    clearFilters: "Clear filters",
  },
  bn: {
    map: "মানচিত্র",
    myHouses: "আমার বাড়ি",
    postListing: "বিজ্ঞাপন দিন",
    post: "পোস্ট",
    searchPlaceholder: "এলাকা, থানা বা শিরোনাম খুঁজুন",
    openFilters: "ফিল্টার খুলুন",
    language: "English",
    theme: "থিম",
    lightMode: "লাইট মোড",
    darkMode: "ডার্ক মোড",
    home: "হোম",
    listingsEyebrow: "বাংলাদেশের ভাড়া",
    listingsTitle: "রুম, ফ্ল্যাট ও অফিস",
    listingsDescription: "পরিষ্কার মাসিক খরচ, নির্ভরযোগ্য লোকেশন ফিল্টার এবং সরাসরি বাড়িওয়ালার যোগাযোগে আপনার পছন্দের বাসা খুঁজুন।",
    loading: "বিজ্ঞাপন লোড হচ্ছে…",
    noListings: "০টি বিজ্ঞাপন",
    listings: "টি বিজ্ঞাপন",
    filters: "টি ফিল্টার",
    previousPage: "আগের পৃষ্ঠা",
    nextPage: "পরের পৃষ্ঠা",
    footer: "থিকানা বাংলাদেশের একটি সহজ ভাড়া বিজ্ঞাপন বোর্ড। সরাসরি বাড়িওয়ালার সাথে যোগাযোগ করুন — কোনো বুকিং ফি নেই।",
    address: "ঠিকানা:",
    liveLocation: "লাইভ লোকেশন",
    month: "/ মাস",
    from: "শুরু",
    details: "বিস্তারিত",
    featured: "নির্বাচিত",
    location: "লোকেশন",
    reset: "রিসেট",
    filterHint: "বাংলাদেশ · ধাপে ধাপে লোকেশন ফিল্টার",
    division: "বিভাগ",
    district: "জেলা",
    thana: "থানা / উপজেলা",
    area: "এলাকা",
    allDivisions: "সব বিভাগ",
    allDistricts: "সব জেলা",
    allThanas: "সব থানা",
    allAreas: "সব এলাকা",
    category: "ক্যাটাগরি",
    all: "সব",
    tenant: "ভাড়াটে",
    any: "যেকোনো",
    monthlyTotal: "মাসিক মোট",
    baseRent: "মূল ভাড়া ও ইউটিলিটি",
    moveIn: "উঠার সময়",
    moveInHint: "যেদিন থেকে বিজ্ঞাপনটি পাওয়া যাবে",
    availableDates: "পাওয়ার তারিখ",
    noResults: "এই ফিল্টারে কোনো বিজ্ঞাপন নেই",
    noResultsHint: "সার্চটি একটু বিস্তৃত করুন অথবা কোনো ফিল্টার সরিয়ে দেখুন।",
    clearFilters: "ফিল্টার পরিষ্কার করুন",
  },
};

type PreferencesValue = {
  locale: Locale;
  theme: Theme;
  t: (key: string) => string;
  toggleLocale: () => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<PreferencesValue | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("thikana-locale");
    const storedTheme = window.localStorage.getItem("thikana-theme");
    if (storedLocale === "en" || storedLocale === "bn") setLocale(storedLocale);
    if (storedTheme === "light" || storedTheme === "dark") setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("thikana-locale", locale);
    window.localStorage.setItem("thikana-theme", theme);
  }, [locale, theme]);

  const value = useMemo(() => ({
    locale,
    theme,
    t: (key: string) => translations[locale][key] ?? translations.en[key] ?? key,
    toggleLocale: () => setLocale((current) => (current === "en" ? "bn" : "en")),
    toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light")),
  }), [locale, theme]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

const defaultPreferences: PreferencesValue = {
  locale: "en",
  theme: "light",
  t: (key) => translations.en[key] ?? key,
  toggleLocale: () => undefined,
  toggleTheme: () => undefined,
};

export function usePreferences() {
  return useContext(PreferencesContext) ?? defaultPreferences;
}

export type { Locale, Theme };
export { translations };
