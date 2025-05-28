import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBoltLightning,
  faChartSimple,
  faClock,
  faCloud,
  faFileImport,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTranslations } from "next-intl/server";

import { FeaturesCard } from "./FeaturesCard";

export async function Features() {
  const t = await getTranslations("features");

  const icons = [
    faBoltLightning,
    faFileImport,
    faUsers,
    faChartSimple,
    faCloud,
    faClock,
  ];

  const cards = [
    {
      heading: t("cards.0.heading"),
      description: t("cards.0.description"),
    },
    {
      heading: t("cards.1.heading"),
      description: t("cards.1.description"),
    },
    {
      heading: t("cards.2.heading"),
      description: t("cards.2.description"),
    },
    {
      heading: t("cards.3.heading"),
      description: t("cards.3.description"),
    },
    {
      heading: t("cards.4.heading"),
      description: t("cards.4.description"),
    },
    {
      heading: t("cards.5.heading"),
      description: t("cards.5.description"),
    },
  ];

  return (
    <div>
      <div className="400 w-full flex justify-center mt-20">
        <div className="border-2 rounded-4xl bg-[#ECF0F6] px-5 text-[#6B829A]">
          {t("label")}
        </div>
      </div>

      <div className="mt-8 poppins tracking-widest">
        <h2 className="text-7xl text-center leading-20 text-[#304D69]">
          {t("title")}
        </h2>
      </div>

      <div className="text-center mt-10 px-2">
        <h4 className="text-xl my-2 mx-2 text-[#6B829A] poppins">
          {t("subtitle")}
        </h4>
      </div>

      <div className="justify-between flex mx-20 flex-wrap">
        {cards.map((card, idx) => (
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
