import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FeaturesCard } from "./FeaturesCard";
import {
  faBoltLightning,
  faChartSimple,
  faClock,
  faCloud,
  faFileImport,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { getDictionary } from "../get-dictionary";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function Features({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["features"];
}) {
  const icons = [
    faBoltLightning,
    faFileImport,
    faUsers,
    faChartSimple,
    faCloud,
    faClock,
  ];

  return (
    <div>
      <div className="400 w-full flex justify-center mt-20">
        <div className="border-2 rounded-4xl bg-[#ECF0F6] px-5 text-[#6B829A]">
          {dictionary.label}
        </div>
      </div>

      <div className="mt-8 poppins tracking-widest">
        <h2 className="text-7xl text-center leading-20 text-[#304D69]">
          {dictionary.title}
        </h2>
      </div>

      <div className="text-center mt-10 px-2">
        <h4 className="text-xl my-2 mx-2 text-[#6B829A] poppins">
          {dictionary.subtitle}
        </h4>
      </div>

      <div className="justify-between flex mx-20 flex-wrap">
        {dictionary.cards.map((card, idx) => (
          <div key={idx}>
            <FeaturesCard
              heading={card.heading}
              description={card.description}
              icon={<FontAwesomeIcon icon={icons[idx] as IconProp} size="lg" />}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
