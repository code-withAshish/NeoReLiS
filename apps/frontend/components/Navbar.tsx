import { getDictionary } from "../get-dictionary";

export default function Navbar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["navbar"];
}) {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    // const newPath = `/${selectedLang}${pathname.replace(/^\/(en|fr)/, "")}`;
    // router.push(newPath);
  };

  return (
    <div className="flex justify-between bg-[#f7f9fc] p-2 w-full">
      <div className="ml-2 p-2 poppins py-2">
        <div className="p-2 font-semibold text-2xl">{dictionary.siteName}</div>
      </div>

      <div className="p-2 flex transform translate-y-1.5 justify-between">
        {Object.keys(dictionary.navLinks).map((key) => (
          <div
            key={key}
            className="p-2 text-[#6b829a] inter cursor-pointer hover:text-[#2e4e6d] transition duration-300 ease-in-out"
          >
            {dictionary.navLinks[key as keyof typeof dictionary.navLinks]}
          </div>
        ))}
      </div>

      <div className="mr-2 p-2 flex items-center gap-2">
        {/* Language Switcher */}
        <select
          // onChange={handleLanguageChange}
          // defaultValue={pathname.startsWith("/fr") ? "fr" : "en"}
          className="px-2 py-1 border border-[#ccc] rounded-md text-[#304d69] bg-[#f5f3f2] focus:outline-none"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
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
