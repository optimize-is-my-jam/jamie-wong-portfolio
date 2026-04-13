import { AboutInterestsSection } from "@/components/home/AboutInterestsSection";
import { CoreValueSection } from "@/components/home/CoreValueSection";
import { HomeHero } from "@/components/home/HomeHero";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CoreValueSection />
      <AboutInterestsSection />
    </>
  );
}
