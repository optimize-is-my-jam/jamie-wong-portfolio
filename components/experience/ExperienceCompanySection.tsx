import Image from "next/image";

import { ExperiencePositionBlock } from "@/components/experience/ExperiencePositionBlock";
import type { ExperienceCompany } from "@/lib/content";

type ExperienceCompanySectionProps = {
  company: ExperienceCompany;
  showTopRule?: boolean;
  /** Maps this block to `experienceTimelineLabels` for sticky timeline highlighting */
  timelineSectionIndex?: 0 | 1;
};

export function ExperienceCompanySection({
  company,
  showTopRule,
  timelineSectionIndex,
}: ExperienceCompanySectionProps) {
  return (
    <div
      data-experience-timeline={
        timelineSectionIndex !== undefined ? String(timelineSectionIndex) : undefined
      }
      className={`group ${showTopRule ? "border-t border-outline-variant/10 pt-16" : ""}`}
    >
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div className="order-1 md:order-2 md:text-right">
          <h2 className="mb-2 text-3xl font-bold text-white">{company.company}</h2>
          <p className="mt-1 text-sm font-bold uppercase tracking-widest text-slate-500">
            {company.location}
          </p>
        </div>
        <div className="order-2 flex-1 space-y-12 md:order-1">
          {company.positions.map((pos, idx) => (
            <ExperiencePositionBlock
              key={`${pos.title}-${pos.date}`}
              position={pos}
              tagsClassName={
                company.clientLogos &&
                idx === company.positions.length - 1
                  ? "mb-8"
                  : ""
              }
            />
          ))}

          {company.clientLogos?.length ? (
            <div className="mt-8 border-t border-outline-variant/10 pt-8">
              <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                {company.clientLogosCaption}
              </p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
                {company.clientLogos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={72}
                    className={`opacity-90 transition-opacity duration-300 hover:opacity-100 ${logo.className ?? ""}`}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
