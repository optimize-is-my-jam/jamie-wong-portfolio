import type { Metadata } from "next";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ExternalArrowLink } from "@/components/ui/ExternalArrowLink";
import { contactEmail, linkedinUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 pb-24 pt-40">
      <header className="mb-16 max-w-2xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Contact
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Let&apos;s connect
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
          For collaborations, opportunities, or a conversation about architecture
          and AI—reach out on LinkedIn or send me an email.
        </p>
      </header>

      <div className="flex max-w-xl flex-col gap-10 sm:flex-row sm:items-start sm:gap-16">
        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-widest text-slate-500">
            LinkedIn
          </p>
          <ExternalArrowLink href={linkedinUrl}>
            Message me on LinkedIn
          </ExternalArrowLink>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-widest text-slate-500">
            Email
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="group flex w-fit items-center gap-2 text-sm font-bold tracking-tight text-primary transition-all hover:gap-3"
          >
            <MaterialSymbol name="mail" className="text-lg" aria-hidden />
            {contactEmail}
          </a>
        </div>
      </div>
    </main>
  );
}
