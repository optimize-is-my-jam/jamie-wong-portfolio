"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/content";
import { resumeUrl } from "@/lib/site";

export function HomeHero() {
  const router = useRouter();

  return (
    <section className="mx-auto mb-32 max-w-7xl px-8 pt-32">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-12">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container opacity-20 blur"
            aria-hidden
          />
          <Image
            src={hero.portraitSrc}
            alt={hero.portraitAlt}
            width={256}
            height={256}
            priority
            className="relative h-48 w-48 border-2 border-outline-variant/20 object-cover shadow-2xl transition-all duration-700 hover:scale-105 hover:brightness-110 hover:shadow-primary/30 md:h-64 md:w-64"
          />
        </div>
        <h1 className="mb-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-tighter text-on-surface md:text-8xl">
          Solutions Architect building{" "}
          <span className="text-primary-container">
            enterprise AI systems
          </span>{" "}
          that drive business outcomes.
        </h1>
        <p className="mb-12 max-w-3xl text-xl font-light text-on-surface-variant md:text-2xl">
          Client facing technical consultant, experienced in building bespoke systems and implementing mission-critical enterprise
          platforms.
        </p>
        <div className="flex flex-col gap-6 md:flex-row">
          <Button
            type="button"
            variant="primary"
            className="hover:shadow-primary-glow"
            onClick={() => router.push("/portfolio")}
          >
            Review Portfolio
          </Button>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold transition-all border border-outline-variant/30 text-on-surface hover:bg-surface-container-high"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
