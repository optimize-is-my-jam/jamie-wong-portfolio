import type { Metadata } from "next";

import { ExperienceCompanySection } from "@/components/experience/ExperienceCompanySection";
import { LeadershipSection } from "@/components/experience/LeadershipSection";
import { SkillsCertificationsSection } from "@/components/experience/SkillsCertificationsSection";
import { StickyTimeline } from "@/components/experience/StickyTimeline";
import { experienceCompanies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <main className="pb-20 pt-40">
      <section className="relative mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <StickyTimeline />
          <div className="lg:col-span-10">
            <header className="mb-24">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Jamie&apos;s Career Journey
              </span>
              <h1 className="mb-8 text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-white">
                <strong>Building Scalable AI & Cloud Platforms</strong>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                Designing and delivering enterprise systems that turn complex data
                and AI capabilities into real business impact.
              </p>
            </header>

            <div className="space-y-32">
              {experienceCompanies.map((company, i) => (
                <ExperienceCompanySection
                  key={company.company}
                  company={company}
                  showTopRule={i > 0}
                  timelineSectionIndex={i === 0 ? 0 : 1}
                />
              ))}
              <LeadershipSection />
              <SkillsCertificationsSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
