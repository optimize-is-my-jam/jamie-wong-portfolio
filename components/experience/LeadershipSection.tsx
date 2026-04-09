import Image from "next/image";

import { ExternalArrowLink } from "@/components/ui/ExternalArrowLink";
import { leadershipSection } from "@/lib/content";

export function LeadershipSection() {
  const p = leadershipSection.projectAlianza;

  return (
    <div
      className="border-t border-outline-variant/10 pt-16"
      data-experience-timeline="2"
    >
      <h3 className="mb-16 text-xs font-black uppercase tracking-[0.3em] text-primary">
        {leadershipSection.heading}
      </h3>
      <div className="space-y-20">
        <div className="group/alz">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white">{p.org}</h2>
              <p className="font-semibold text-primary">{p.role}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                {p.date}
              </p>
            </div>
          </div>
          <div className="border-l-2 border-primary/40 bg-surface-container-low p-6 transition-all group-hover/alz:border-primary">
            <p className="text-sm italic leading-relaxed text-on-surface-variant">
              {p.intro}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
              <strong className="text-white">
                Winner of the Global Low-Code for Good Hackathon.
              </strong>{" "}
              The solution was selected by a panel of judges including
              representatives from <strong className="text-white">Siemens</strong>
              , a <strong className="text-white">Harvard Professor</strong>, and
              the{" "}
              <strong className="text-white">CEO of Project Alianza</strong>.
            </p>
            <div className="mt-4">
              <ExternalArrowLink
                href={p.pressHref}
                className="!text-xs font-bold uppercase tracking-widest"
              >
                {p.pressLabel}
              </ExternalArrowLink>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {p.images.map((img) => (
              <div
                key={img.src}
                className="group/img relative aspect-[16/10] overflow-hidden rounded-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-700 group-hover/img:scale-[1.02]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-primary/10 mix-blend-multiply"
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {leadershipSection.extra.map((item) => (
            <div key={item.title} className="space-y-4">
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
