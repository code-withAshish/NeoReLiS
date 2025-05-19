"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "../get-dictionary";
import { i18n, Locale } from "../i18n-config";

export default function Navbar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["navbar"];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState<Locale>(i18n.defaultLocale);

  // Extract current locale from pathname
  const detectLocaleFromPath = (path: string): Locale => {
    const segments = path.split("/");
    const locale = segments[1];
    return i18n.locales.includes(locale as Locale)
      ? (locale as Locale)
      : i18n.defaultLocale;
  };

  useEffect(() => {
    setSelectedLang(detectLocaleFromPath(pathname));
  }, [pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;

    // Set NEXT_LOCALE cookie for middleware
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    // Replace or insert locale in URL
    const segments = pathname.split("/");
    if (i18n.locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/") || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex justify-between bg-[#f7f9fc] p-2 w-full">
      <div className="ml-2 p-2 poppins py-2">
        <div className="p-2 font-semibold text-2xl">{dictionary.siteName}</div>
      </div>

      <div className="p-2 flex transform translate-y-1.5 justify-between">
        {Object.entries(dictionary.navLinks).map(([key, value]) => (
          <div
            key={key}
            className="p-2 text-[#6b829a] inter cursor-pointer hover:text-[#2e4e6d] transition duration-300 ease-in-out"
          >
            {value}
          </div>
        ))}
      </div>

      <div className="mr-2 p-2 flex items-center gap-2">
        <select
          value={selectedLang}
          onChange={handleLanguageChange}
          className="px-2 py-1 border border-[#ccc] rounded-md text-[#304d69] bg-[#f5f3f2] focus:outline-none"
        >
          {i18n.locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale === "en" ? "English" : "Français"}
            </option>
          ))}
        </select>

        <button className="relative px-4 py-2 bg-[#f5f3f2] rounded-md overflow-hidden cursor-pointer">
          <span className="relative inline-block group">
            {dictionary.logIn}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#f7f9fc] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>

        <button className="relative px-4 bg-[#2e4e6d] text-white rounded-md overflow-hidden cursor-pointer">
          <span className="relative inline-block group">
            {dictionary.getStarted}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#f7f9fc] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
