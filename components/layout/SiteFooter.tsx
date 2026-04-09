import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { footerLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full border-t border-white/5 bg-slate-950 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">
        <div className="font-headline text-sm font-black uppercase tracking-tighter text-slate-200">
          {site.name}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 font-manrope text-[10px] uppercase tracking-[0.1em] text-slate-500 opacity-80 transition-colors duration-300 hover:text-primary hover:opacity-100"
            >
              {"icon" in link && link.icon ? (
                <MaterialSymbol
                  name={link.icon}
                  className="text-[14px]"
                  aria-hidden
                />
              ) : null}
              {link.label}
            </Link>
          ))}
        </div>
        <div className="font-manrope text-[10px] uppercase tracking-[0.1em] text-slate-500">
          {site.copyright}
        </div>
      </div>
    </footer>
  );
}
