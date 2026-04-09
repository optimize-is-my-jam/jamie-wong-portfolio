import type { Metadata } from "next";
import Link from "next/link";

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

      <div className="mt-48 bg-[#0f1923] px-8 py-20 text-center">
        <h3 className="mb-10 font-headline text-3xl font-bold tracking-tight text-white md:text-4xl">
          Need a software architect or tech lead for your next initiative?
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="flex min-w-[240px] items-center justify-center bg-primary-container px-10 py-4 text-sm font-bold text-on-primary-container transition-transform duration-150 active:scale-95"
          >
            Contact Me
          </Link>
          <Link
            href="/experience"
            className="flex min-w-[240px] items-center justify-center border border-white/10 px-10 py-4 text-sm font-bold text-white transition-colors duration-150 hover:bg-white/5"
          >
            View Experience
          </Link>
        </div>
      </div>
    </main>
  );
}
