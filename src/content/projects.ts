export type ProjectVisualKind = "toolkit" | "soc" | "shop" | "mobile";

export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  featuresLabel: string;
  features: string[];
  stack: string[];
  status: string;
  /** Concept / work-in-progress notice shown on the card and detail page. */
  notice?: string;
  visual: ProjectVisualKind;
  /** Only set when a real repository URL exists. */
  github?: string;
  /** Only set when a real live URL exists. */
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "gamiphil-toolkit-enterprise",
    number: "01",
    title: "Gamiphil Toolkit Enterprise",
    tagline: "Unified Windows system toolkit",
    description:
      "A Windows-based system toolkit designed to bring system diagnostics, health monitoring and performance management into a unified desktop application.",
    details: [
      "Gamiphil Toolkit Enterprise is a Windows desktop application built with C#, .NET and WPF using the MVVM pattern.",
      "The goal is a single place for system diagnostics, health monitoring and performance management, rather than a collection of separate utilities.",
    ],
    featuresLabel: "Feature areas",
    features: ["Dashboard", "System diagnostics", "Health monitoring", "Performance metrics", "Disk monitoring", "System utilities"],
    stack: ["C#", ".NET", "WPF", "MVVM"],
    status: "In Development",
    visual: "toolkit",
  },
  {
    slug: "gamiphil-soc-analyst",
    number: "02",
    title: "Gamiphil SOC Analyst",
    tagline: "Mini Security Operations Center concept",
    description:
      "A Windows-based mini Security Operations Center concept designed to explore security monitoring and defensive security workflows within a virtual lab environment.",
    details: [
      "This is a concept and learning project for exploring how security monitoring and defensive workflows fit together inside an isolated virtual lab.",
      "It is a work in progress. No production capabilities are claimed.",
    ],
    featuresLabel: "Lab environment",
    features: ["Windows", "Kali Linux", "VirtualBox", "Security monitoring tools"],
    stack: ["Windows", "Kali Linux", "VirtualBox", "Security monitoring tools"],
    status: "Concept / Work in Progress",
    notice: "Concept project exploring defensive security workflows in a virtual lab. Not a finished product.",
    visual: "soc",
  },
  {
    slug: "gamiphil-it-shop",
    number: "03",
    title: "Gamiphil IT Shop",
    tagline: "Computer products e-commerce platform",
    description:
      "An e-commerce platform for computer products, featuring product discovery, category filtering, product details, shopping cart functionality and WhatsApp checkout.",
    details: [
      "A storefront for computer products built with HTML, CSS and JavaScript and hosted on Netlify.",
      "Customers browse and filter products, review product details, fill a cart and complete checkout through WhatsApp.",
    ],
    featuresLabel: "Features",
    features: ["Product discovery", "Category filtering", "Product details", "Shopping cart", "WhatsApp checkout"],
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    status: "Built",
    visual: "shop",
  },
  {
    slug: "ledgerly-sikaly",
    number: "04",
    title: "Ledgerly / Sikaly",
    tagline: "Mobile financial record management",
    description:
      "Mobile application development projects exploring financial record management and practical mobile application experiences.",
    details: [
      "Ledgerly and Sikaly are mobile projects built with Flutter and Dart, exploring how financial records can be managed in a practical mobile experience.",
    ],
    featuresLabel: "Focus",
    features: ["Financial record management", "Practical mobile experiences", "Cross-platform development"],
    stack: ["Flutter", "Dart"],
    status: "In Development",
    visual: "mobile",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
