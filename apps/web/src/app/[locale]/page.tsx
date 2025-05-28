import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NewReleases } from "@/components/NewReleases";

export const metadata = {
  title: "Relis - Home",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewReleases />
      <Features />
    </>
  );
}
