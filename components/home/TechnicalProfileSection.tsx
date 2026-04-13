import { CredentialsContent } from "@/components/credentials/CredentialsContent";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import Link from "next/link";

export function TechnicalProfileSection() {
  return (
    <section className="mx-auto max-w-7xl border-t border-outline-variant/10 bg-surface-container-low/40 px-8 py-24">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <SectionEyebrow>Skills &amp; credentials</SectionEyebrow>
          <p className="text-3xl font-black leading-tight tracking-tighter text-on-surface md:text-4xl">
            Technical skills, education &amp; certifications
          </p>
          <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
            Languages, platforms, and credentials behind enterprise delivery.
          </p>
          <p className="mt-8">
            <Link
              href="/experience"
              className="text-sm font-bold uppercase tracking-widest text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary-container hover:decoration-primary-container"
            >
              View full experience
            </Link>
          </p>
        </div>
        <div className="md:col-span-8">
          <CredentialsContent />
        </div>
      </div>
    </section>
  );
}
