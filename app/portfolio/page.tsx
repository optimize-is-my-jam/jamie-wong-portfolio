import type { Metadata } from "next";

import { PortfolioProjectBlock } from "@/components/portfolio/PortfolioProjectBlock";
import { portfolioProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 pb-20 pt-32">
      <header className="mb-24">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" aria-hidden />
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary">
              Strategic Portfolio
            </span>
          </div>
          <h1 className="mb-8 font-headline text-5xl font-extrabold leading-none tracking-tighter text-white md:text-7xl">
            Featured <br />
            <span className="text-on-surface-variant/50">Engagements.</span>
          </h1>
          <p className="font-body max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            A collection of high-impact technical initiatives focusing on
            enterprise scale, data science integration, and strategic engineering
            advisory.
          </p>
        </div>
      </header>

      <div className="space-y-40">
        {portfolioProjects.map((project) => (
          <PortfolioProjectBlock key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
