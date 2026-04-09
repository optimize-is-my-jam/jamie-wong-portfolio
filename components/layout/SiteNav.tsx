"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems, resumeUrl, site } from "@/lib/site";

function navLinkClass(active: boolean) {
  return active
    ? "border-b border-primary pb-1 font-bold text-primary"
    : "font-medium text-slate-400 hover:text-primary";
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="font-headline text-xl font-extrabold uppercase tracking-tighter text-white"
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
        <div className="flex items-center gap-4">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container px-6 py-2 text-sm font-bold text-on-primary-container transition-transform duration-150 active:scale-95"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
