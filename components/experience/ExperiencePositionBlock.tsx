import { BulletList } from "@/components/experience/BulletList";
import { TechChip } from "@/components/ui/TechChip";
import type { ExperiencePosition } from "@/lib/content";

type ExperiencePositionBlockProps = {
  position: ExperiencePosition;
  /** e.g. `mb-8` before client logo row on KPMG (stitch reference). */
  tagsClassName?: string;
};

export function ExperiencePositionBlock({
  position,
  tagsClassName = "",
}: ExperiencePositionBlockProps) {
  return (
    <div>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xl font-semibold text-primary">{position.title}</p>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {position.date}
        </p>
      </div>
      <BulletList items={position.bullets} />
      <div className={`flex flex-wrap gap-2 ${tagsClassName}`.trim()}>
        {position.tags.map((t) => (
          <TechChip key={t} size="experience">
            {t}
          </TechChip>
        ))}
      </div>
    </div>
  );
}
