export const site = {
  name: "Jamie Wong",
  title: "Jamie Wong | AI Architect",
  copyright: "© Jamie Wong. ALL RIGHTS RESERVED.",
} as const;

/** View-only resume (Google Docs). */
export const resumeUrl =
  "https://docs.google.com/document/d/1lc5roU35QE6Ml1oWNUm6PIMCxDHhoQ-n/edit?usp=sharing&ouid=103250735981627215705&rtpof=true&sd=true" as const;

export const linkedinUrl =
  "https://www.linkedin.com/in/jamiehoyuwong/" as const;

/** Primary inbox for inbound contact (contact page MVP). */
export const contactEmail = "jamiewongmac@gmail.com" as const;

export const githubUrl = "https://github.com/optimize-is-my-jam" as const;

export const instagramUrl =
  "https://www.instagram.com/jamiewongmac/" as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: linkedinUrl, label: "LinkedIn", icon: "link" as const },
  { href: githubUrl, label: "GitHub", icon: "terminal" as const },
  { href: instagramUrl, label: "Instagram", icon: "photo_camera" as const },
] as const;
