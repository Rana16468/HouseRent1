import { Map, Plus, Search, SlidersHorizontal, Home, Moon, Sun, Languages } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setSearchTerm } from "@/lib/redux/filterSlice";
import { selectActiveFilterCount } from "@/lib/redux/selectors";
import { openCreatePost, openMobileFilters } from "@/lib/redux/uiSlice";
import { Link } from "@tanstack/react-router";
import { usePreferences } from "@/lib/i18n/preferences";

export function Header() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((s) => s.filters.searchTerm);
  const activeFilters = useAppSelector(selectActiveFilterCount);
  const { locale, theme, toggleLocale, toggleTheme, t } = usePreferences();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg-elevated/70 backdrop-blur-xl supports-[backdrop-filter]:bg-bg-elevated/60">
      {/* সূক্ষ্ম অ্যাকসেন্ট লাইন — হেডারকে পেজ থেকে আলাদা করে */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto flex min-h-16 max-w-[1440px] flex-wrap items-center gap-2 px-3 py-2 sm:h-16 sm:flex-nowrap sm:gap-3 sm:px-6 sm:py-0 lg:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="relative shrink-0 rounded-xl lg:hidden"
          aria-label={t("openFilters")}
          onClick={() => dispatch(openMobileFilters())}
        >
          <SlidersHorizontal />
          {activeFilters > 0 ? (
            <span className="absolute top-1.5 right-1.5 flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
          ) : null}
        </Button>

        <a
          href="/"
          aria-label="Thikana home"
          className="min-w-0 shrink rounded-lg transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
        >
          <Logo />
        </a>

        {/* সার্চ — ডেস্কটপে হেডারের কেন্দ্রবিন্দু */}
        <div className="group relative mx-auto hidden min-w-0 max-w-xl flex-1 sm:block">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle transition-colors group-focus-within:text-primary" />
          <Input
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder={t("searchPlaceholder")}
            className="h-10 rounded-full border-border/70 bg-bg-elevated/60 pr-4 pl-10 shadow-sm transition-all focus-visible:border-primary/60 focus-visible:bg-bg-elevated focus-visible:shadow-md"
            aria-label={t("searchPlaceholder")}
          />
        </div>

        {/* নেভিগেশন + প্রাইমারি অ্যাকশন */}
        <nav className="order-3 flex w-full shrink-0 items-center justify-end gap-1 sm:order-none sm:ml-auto sm:w-auto sm:gap-1.5">
          <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-bg-elevated/50 p-1 md:flex">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="rounded-full px-3 text-subtle hover:text-foreground"
            >
              <Link
                to="/live-house-listing"
                activeProps={{ className: "bg-primary/10 text-primary" }}
              >
                <Map className="size-4" />
                {t("map")}
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="sm"
              className="rounded-full px-3 text-subtle hover:text-foreground"
            >
              <Link to="/my-houses" activeProps={{ className: "bg-primary/10 text-primary" }}>
                <Home className="size-4" />
                {t("myHouses")}
              </Link>
            </Button>
          </div>

          {/* মোবাইলে শুধু আইকন */}
          <div className="flex items-center gap-1 md:hidden">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-xl"
              aria-label={t("map")}
            >
              <Link to="/live-house-listing">
                <Map />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-xl"
              aria-label={t("myHouses")}
            >
              <Link to="/my-houses">
                <Home />
              </Link>
            </Button>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="inline-flex rounded-full px-3"
            aria-label={t("languageLabel")}
            title={t("languageLabel")}
            onClick={toggleLocale}
          >
            <Languages />
            <span className="hidden sm:inline">
              {locale === "en" ? t("switchToBangla") : t("switchToEnglish")}
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl"
            aria-label={theme === "light" ? t("switchToDark") : t("switchToLight")}
            title={theme === "light" ? t("switchToDark") : t("switchToLight")}
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>

          <Button
            size="sm"
            className="h-8 px-3 gap-1.5 rounded-full bg-gradient-to-r from-accent to-indigo-900 hover:from-blue-900 hover:to-indigo-700 text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            onClick={() => dispatch(openCreatePost())}
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-xs font-medium">{t("postListing")}</span>
            <span className="sm:hidden text-xs font-medium">{t("post")}</span>
          </Button>
        </nav>
      </div>

      {/* মোবাইল সার্চ বার */}
      <div className="border-t border-border/70 px-4 pt-2 pb-3 sm:hidden">
        <div className="group relative">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle transition-colors group-focus-within:text-primary" />
          <Input
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder={t("searchPlaceholder")}
            className="h-10 rounded-full border-border/70 pr-4 pl-10 focus-visible:border-primary/60"
            aria-label={t("searchPlaceholder")}
          />
        </div>
      </div>
    </header>
  );
}
