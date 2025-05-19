import { Features } from "../../components/Features";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { NewReleases } from "../../components/NewReleases";
import { getDictionary } from "../../get-dictionary";
import { type Locale } from "../../i18n-config";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Navbar dictionary={dictionary["navbar"]} />
      <Hero dictionary={dictionary["hero"]} />
      <NewReleases dictionary={dictionary["newReleases"]} />
      <Features dictionary={dictionary["features"]} />
    </div>
  );
}
