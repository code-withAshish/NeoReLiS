"use client";

import { useTranslations } from "next-intl";

export function Navbar() {
  const navLinkKeys = ["home", "features", "documentation", "about"] as const;
  const t = useTranslations("navbar");

  return (
    <div className="flex justify-between bg-[#f7f9fc] p-2 w-full">
      <div className="ml-2 p-2 poppins py-2">
        <div className="p-2 font-semibold text-2xl">{t("siteName")}</div>
      </div>

      <div className="p-2 flex transform translate-y-1.5 justify-between">
        {navLinkKeys.map((key) => (
          <div
            key={key}
            className="p-2 text-[#6b829a] inter cursor-pointer hover:text-[#2e4e6d] transition duration-300 ease-in-out"
          >
            {t(`navLinks.${key}`)}
          </div>
        ))}
      </div>

      <div className="mr-2 p-2 flex items-center gap-2">
        {/* <select
          value={selectedLang}
          onChange={handleLanguageChange}
          className="px-2 py-1 border border-[#ccc] rounded-md text-[#304d69] bg-[#f5f3f2] focus:outline-none"
        >
          {i18n.locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale === "en" ? "English" : "Français"}
            </option>
          ))}
        </select> */}

        <button className="relative px-4 py-2 bg-[#f5f3f2] rounded-md overflow-hidden cursor-pointer">
          <span className="relative inline-block group">
            {t("logIn")}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#f7f9fc] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>

        <button className="relative px-4 bg-[#2e4e6d] text-white rounded-md overflow-hidden cursor-pointer">
          <span className="relative inline-block group">
            {t("getStarted")}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#f7f9fc] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
