import { ExternalArrowLink } from "@/components/ui/ExternalArrowLink";
import { RichStrong } from "@/components/ui/RichStrong";
import { TechChip } from "@/components/ui/TechChip";
import { PortfolioIllustration } from "@/components/portfolio/illustrations/PortfolioIllustration";
import { portfolioProjects, type PortfolioProject } from "@/lib/content";

type PortfolioProjectBlockProps = {
  project: PortfolioProject;
};

type ExtendedPortfolioProject =
  | (typeof portfolioProjects)[0]
  | (typeof portfolioProjects)[1]
  | (typeof portfolioProjects)[2];

function isExtendedPortfolioProject(
  project: PortfolioProject,
): project is ExtendedPortfolioProject {
  return (
    project.id === "bain-skylink" ||
    project.id === "experimentation" ||
    project.id === "value-diagnostic-calculator"
  );
}

/** Premium card shell — aligned with mockup: depth, inset highlight, restrained glow. */
const featuredPanelClass =
  "relative flex h-full min-h-[12rem] flex-col overflow-hidden rounded-xl border border-white/[0.09] bg-gradient-to-b from-[#111820]/95 to-[#0a0e14]/98 px-5 py-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/[0.04] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(50,145,255,0.07),transparent_55%)] before:opacity-90 sm:px-5 lg:px-6 lg:py-5";

const featuredCardLabelClass =
  "font-label text-[10px] font-bold uppercase tracking-[0.22em] text-primary/95";

const focusBulletClass =
  "mt-[0.42em] h-1.5 w-1.5 flex-shrink-0 rounded-full border border-primary/30 bg-primary/25 shadow-[0_0_10px_rgba(50,145,255,0.35)]";

const extendedBodyTone =
  "font-body text-base leading-relaxed text-on-surface-variant";

export function PortfolioProjectBlock({ project }: PortfolioProjectBlockProps) {
  const extended = isExtendedPortfolioProject(project);

  const extendedTopCopy = extended ? (
    <div className="relative flex w-full min-w-0 flex-col gap-7">
      <div className="space-y-5">
        <span className="font-label text-[10px] font-bold uppercase tracking-[0.22em] text-primary-container">
          {project.eyebrow}
        </span>
        <div className="space-y-4">
          <h2 className="font-headline text-[1.65rem] font-bold leading-[1.1] tracking-tight text-white md:text-4xl">
            {project.title}
          </h2>
          <p className="text-base leading-snug text-slate-400 md:text-lg md:leading-relaxed">
            {project.subheadline}
          </p>
        </div>
      </div>

      <p className={`${extendedBodyTone} pb-0.5`}>
        <RichStrong text={project.description} />
      </p>
    </div>
  ) : null;

  const extendedCardsRow = extended ? (
    <div className="grid w-full min-w-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5">
      <div className={featuredPanelClass}>
        <div className="relative z-[1] flex flex-1 flex-col">
          <p className={featuredCardLabelClass}>Role</p>
          <p className="mt-3 font-headline text-lg font-semibold tracking-tight text-white md:text-xl">
            {project.role.title}
          </p>
          <p className="mt-3 flex-1 text-[0.8125rem] leading-relaxed text-slate-400 md:text-sm">
            {project.role.description}
          </p>
        </div>
      </div>

      <div className={featuredPanelClass}>
        <div className="relative z-[1] flex flex-1 flex-col">
          <h3 className={featuredCardLabelClass}>
            {project.focusSection.label}
          </h3>
          <ul
            className="mt-4 flex-1 space-y-2.5 text-[0.8125rem] leading-snug text-slate-300 md:text-sm md:leading-relaxed"
            role="list"
          >
            {project.focusSection.bullets.map((item) => (
              <li key={item} className="flex gap-3 pl-0.5">
                <span className={focusBulletClass} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null;

  const extendedTagsFooter = extended ? (
    <div className="mt-1 border-t border-white/[0.06] pt-7">
      <div className="flex flex-wrap gap-2.5">
        {project.tags.map((tag) => (
          <TechChip key={tag} variant="featured">
            {tag}
          </TechChip>
        ))}
      </div>

      <div className="mt-6">
        <ExternalArrowLink
          href={project.linkHref}
          className="text-sm font-semibold tracking-tight text-primary"
        >
          {project.linkLabel}
        </ExternalArrowLink>
      </div>
    </div>
  ) : null;

  const mediaInner = (
    <div className="group/media bg-surface-container-low p-2">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#12161c] transition-all duration-700 ease-out group-hover/media:brightness-110 group-hover/media:[box-shadow:inset_0_0_0_1px_rgba(50,145,255,0.2)]">
        <div className="transition-transform duration-500 ease-out group-hover/media:scale-[1.02]">
          <PortfolioIllustration projectId={project.id} />
        </div>
      </div>
    </div>
  );

  if (extended) {
    /** Row 1: Bain = copy left / mockup right; Experimentation = mockup left / copy right. Mobile follows DOM order. */
    const rowOne = project.mediaOnRight ? (
      <>
        <div className="min-w-0 lg:col-span-7">{extendedTopCopy}</div>
        <div className="min-w-0 lg:col-span-5">{mediaInner}</div>
      </>
    ) : (
      <>
        <div className="min-w-0 lg:col-span-5">{mediaInner}</div>
        <div className="min-w-0 lg:col-span-7">{extendedTopCopy}</div>
      </>
    );

    return (
      <section className="flex w-full min-w-0 flex-col gap-10 lg:gap-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {rowOne}
        </div>

        <div className="w-full min-w-0">
          {extendedCardsRow}
          {extendedTagsFooter}
        </div>
      </section>
    );
  }

  return null;
}
