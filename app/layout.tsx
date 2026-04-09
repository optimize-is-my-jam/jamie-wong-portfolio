import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description:
    "Solutions architect portfolio — AI systems, enterprise platforms, and technical leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-manrope" suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
