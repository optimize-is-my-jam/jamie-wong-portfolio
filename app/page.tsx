import { AboutInterestsSection } from "@/components/home/AboutInterestsSection";
import { CoreValueSection } from "@/components/home/CoreValueSection";
import { HomeHero } from "@/components/home/HomeHero";
import { TechnicalProfileSection } from "@/components/home/TechnicalProfileSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CoreValueSection />
      <TechnicalProfileSection />
      <AboutInterestsSection />
    </>
  );
}
