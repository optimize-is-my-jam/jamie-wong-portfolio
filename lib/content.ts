/** Content aligned with stitch-export reference; update URLs and copy as needed. */

export const hero = {
  portraitSrc: "/images/hero.png",
  portraitAlt: "Jamie Wong — professional headshot",
} as const;

export const portfolioProjects = [
  {
    id: "bain-skylink",
    eyebrow:
      "Current focus · Strategic Advisory and AI System Implementation",
    title: "Bain AI Travel Platform",
    subheadline:
      "AI-powered travel workflow automation in Microsoft Teams—designed to streamline booking processes, policy guidance, and traveler support within a single workflow.",
    description:
      "**Leading the development** of an enterprise AI platform where **intelligent agents** support travel policy enforcement, approvals, and rebooking **directly within Teams**—with a **goal** of reducing coordination overhead and improving the travel support experience. **Working with Bain leadership teams** through a **pilot rollout** to **clarify the value this AI capability can deliver for the firm** and **advise on potential further investment**.",
    role: {
      title: "Solution Architect",
      description:
        "Owning platform architecture, security design, and AI evaluation frameworks for enterprise deployment.",
    },
    focusSection: {
      label: "Current focus",
      bullets: [
        "Designing architecture for enterprise scale",
        "Building secure AI workflows in Microsoft Teams",
        "Establishing evaluation frameworks for reliable deployment",
        "Improving speed, policy compliance, and user experience",
      ],
    } as const,
    tags: ["AI Agents", "Travel Technology", "Solution Architecture"],
    linkHref: "https://www.tryskylink.com/#how-it-works",
    linkLabel: "Learn more about Skylink",
    mediaOnRight: true,
  },
  {
    id: "experimentation",
    eyebrow: "Hands on engineering leadership",
    title: "Experimentation & Optimization Platform",
    subheadline:
      "Surfaces optimal markets with linear regression and organizes marketing and pricing experiments so teams can reallocate spend with confidence.",
    description:
      "**Led engineering delivery** of a **client-facing platform** that used **linear regression ** to find optimal markets to run experiments and validate results. The platform provided a way to organize analysis runs and outcomes into a test charter for **marketing and pricing** campaigns. **Designed a multi-tenant architecture** for **parallel runs across regions**, helping teams **identify where spend drove the highest ROI** and **reallocate investment** more effectively.",
    role: {
      title: "Software Engineering Manager",
      description:
        "Led cross-functional engineering delivery, owning technical implementation, system architecture, and client-facing technical strategy.",
    },
    focusSection: {
      label: "Key contributions",
      bullets: [
        "Architected a multi-tenant system with isolated client environments",
        "Implemented modern OAuth 2.0-based security for client-facing access",
        "Integrated R and Python models through Plumber and Django APIs",
        "Designed async processing for parallel experiment runs at scale",
        "Led client workshops to transition technical assets after case completion",
        "Enabled $100M+ in revenue through platform adoption and use",
      ],
    } as const,
    tags: ["Linear Regression", "Experimentation", "Data Science"],
    linkHref:
      "https://www.bain.com/vector-digital/ai-insights-and-solutions/experimentation-at-scale/",
    linkLabel: "Learn more about the Experimentation at Scale",
    mediaOnRight: false,
  },
  {
    id: "value-diagnostic-calculator",
    eyebrow: "Product engineering & value analytics",
    title: "Value Diagnostic Calculator",
    subheadline:
      "Client-facing analytics tool enabling leaders to benchmark performance and simulate business scenarios before making investment decisions.",
    description:
      "**Built and delivered** a client-facing **Value Diagnostic Calculator** used to compare spend and revenue against benchmarks and run **what-if scenarios**. The platform enabled consultants and clients to quickly generate insights and visualize impact **without manual analysis or slide creation**.",
    role: {
      title: "Staff Software Engineer",
      description:
        "Owned end-to-end development, testing, and deployment of the Value Calculator platform, delivering a reliable and scalable client-facing application.",
    },
    focusSection: {
      label: "Key contributions",
      bullets: [
        "Built interactive data visualizations using AmCharts to replace manual PowerPoint chart creation",
        "Enabled users to upload client data and generate instant benchmarking insights",
        "Designed a single-tenant architecture for secure, client-specific deployments",
        "Reduced time required to generate executive-ready insights",
        "Improved usability and accessibility of data for non-technical stakeholders",
      ],
    } as const,
    tags: ["Software Engineering", "Visualizations", "Business Logic"],
    linkHref:
      "https://www.bain.com/consulting-services/customer-strategy-and-marketing/customer-capital/",
    linkLabel: "Learn more about the Value Calculator",
    mediaOnRight: true,
  },
] as const;

export type PortfolioProject = (typeof portfolioProjects)[number];

export const experienceTimelineLabels = [
  { id: "2020-pres", label: "2020 — PRES" },
  { id: "2016-2020", label: "2016 — 2020" },
  { id: "leadership", label: "Leadership & Community Impact" },
  {
    id: "skills-credentials",
    label: "Skills, certs & education",
  },
] as const;

export type ExperiencePosition = {
  title: string;
  date: string;
  bullets: string[];
  tags: string[];
};

export type ExperienceCompany = {
  company: string;
  location: string;
  positions: ExperiencePosition[];
  /** Optional KPMG client logos row */
  clientLogos?: { alt: string; src: string; className?: string }[];
  clientLogosCaption?: string;
};

export const experienceCompanies: ExperienceCompany[] = [
  {
    company: "Bain & Company",
    location: "Chicago, IL",
    positions: [
      {
        title: "Staff Solution Architect II",
        date: "Feb 2026 — Present",
        bullets: [
          "Staff Solution Architect responsible for designing and delivering AI and cloud-based enterprise solutions.",
        ],
        tags: ["Enterprise Architecture", "Solution Architecture"],
      },
      {
        title: "Software Engineering Manager",
        date: "Mar 2023 — Feb 2026",
        bullets: [
          "Led cross-functional team of software, data, DevOps, and QA automation engineers.",
          "Designed architecture for complex marketing data science platform using linear programming.",
          "Partnered with senior leadership on strategy. Directly managed careers for data/software engineers. Built product used in 28+ cases.",
        ],
        tags: ["People Management", "Python", "Platform Strategy"],
      },
      {
        title: "Software Engineer",
        date: "Mar 2020 — Mar 2023",
        bullets: [
          "Founding engineer for low-code platform adoption.",
          "Led global teams, owned deployments and operating processes for scalability.",
          "Delivered core features accelerating revenue.",
        ],
        tags: ["Technical Leadership", "Agile Methodologies", "Low-Code"],
      },
    ],
  },
  {
    company: "KPMG US",
    location: "Arlington, VA",
    positions: [
      {
        title: "Senior Associate",
        date: "Jul 2016 — Feb 2020",
        bullets: [
          "Consultant for Fortune 500 companies and Contractor for Capital Group, Goldman Sachs, and Johnson & Johnson. Gathered requirements and led global technical teams to develop business applications for these clients.",
        ],
        tags: ["Agile Methodologies", "Database Design"],
      },
    ],
    clientLogosCaption:
      "Consulted for these firms as a lead technology consultant while at KPMG",
    clientLogos: [
      {
        alt: "Capital Group",
        src: "/images/clients/kpmg/capital-group.png",
        className:
          "h-10 w-auto max-w-[200px] rounded-md bg-white px-4 py-2.5 object-contain object-center",
      },
      {
        alt: "Goldman Sachs",
        src: "/images/clients/kpmg/goldman-sachs.png",
        className:
          "h-12 w-auto max-w-[220px] rounded-md object-contain object-left",
      },
      {
        alt: "Johnson & Johnson",
        src: "/images/clients/kpmg/johnson-johnson.png",
        className:
          "h-10 w-auto max-w-[240px] rounded-md bg-white px-4 py-2.5 object-contain object-center",
      },
    ],
  },
];

export const leadershipSection = {
  heading: "Leadership & Community Impact",
  projectAlianza: {
    org: "Project Alianza",
    role: "Leadership Advisory Council, Digital Strategy and Technology Advisor",
    date: "NOV 2022 – JAN 2025",
    intro:
      "Providing strategic guidance on technology adoption and digital strategy to empower organizational leadership and scale social impact through modern technical foundations.",
    highlight:
      "Winner of the Global Low-Code for Good Hackathon. The solution was selected by a panel of judges including representatives from Siemens, a Harvard Professor, and the CEO of Project Alianza.",
    pressHref:
      "https://www.mendix.com/press/mendix-launches-global-low-code-for-good-hackathon-to-deliver-transformative-solutions-for-nonprofits/",
    pressLabel: "Read Press Release",
    images: [
      {
        src: "/images/alianza/project-alianza-team.png",
        alt: "Hackathon team at Project Alianza in front of the MAKE IT MATTER wall",
      },
      {
        src: "/images/alianza/mx-hacks-collaboration.png",
        alt: "Collaborating at the Mendix low-code hackathon with Hacks.mx",
      },
    ],
  },
  extra: [
    {
      title: "Chicago Office Technology Leader",
      body: "Organized monthly events for 50+ employees to foster community and knowledge sharing.",
    },
    {
      title: "Asians at Bain Advocate",
      body: "Dedicated to developing professional development and contributions of Asian employees within the firm.",
    },
    {
      title: "Toastmasters International",
      body: "Regularly attend sessions to refine public speaking, communication, and leadership skills.",
    },
  ],
} as const;

export const technicalSkills = {
  "Languages & Frameworks": [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    ".NET",
    "ReactJS"
  ],
  "API & Web": ["Django REST", "FastAPI", "GraphQL", "OAuth 2.0"],
  "Architecture & Cloud": ["Docker", "CI/CD", "Azure", "AWS", "GCP", "Terraform"],
} as const;

export const certifications = [
  "Azure Cloud Fundamentals",
  "Certified Scrum Master (CSM)",
  "E-Cornell Engineering Leadership",
  "Harvard CS50",
  "Generative AI for Business Applications",
] as const;

export const education = {
  school: "University of Maryland",
  college: "Robert H. Smith School of Business",
  degree: "Bachelor of Science, Information Systems",
} as const;

