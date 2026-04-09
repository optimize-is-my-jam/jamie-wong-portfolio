"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { navItems, resumeUrl, site } from "@/lib/site";

function navLinkClass(active: boolean) {
  return active
    ? "border-b border-primary pb-1 font-bold text-primary"
    : "font-medium text-slate-400 hover:text-primary";
}

function mobileNavLinkClass(active: boolean) {
  return active
    ? "rounded border border-primary/30 bg-primary/10 px-4 py-3 font-bold text-primary"
    : "rounded border border-white/10 px-4 py-3 font-medium text-slate-300 transition-colors hover:border-primary/30 hover:text-primary";
}

export function SiteNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-headline text-lg font-extrabold uppercase tracking-tighter text-white sm:text-xl"
          >
            {site.name}
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-manrope leading-relaxed tracking-tight transition-colors ${navLinkClass(pathname === item.href)}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container px-6 py-2 text-sm font-bold text-on-primary-container transition-transform duration-150 active:scale-95"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-white/10 p-2 text-slate-200 transition-colors hover:border-primary/40 hover:text-primary md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-site-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <MaterialSymbol
              name={isMenuOpen ? "close" : "menu"}
              className="text-[22px]"
              aria-hidden
            />
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-site-menu"
            className="mt-4 space-y-3 border-t border-white/5 pt-4 md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={mobileNavLinkClass(pathname === item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded bg-primary-container px-4 py-3 text-sm font-bold text-on-primary-container transition-transform duration-150 active:scale-[0.99]"
            >
              Resume
            </a>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
