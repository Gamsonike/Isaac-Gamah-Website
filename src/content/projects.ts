export type ProjectVisualKind = "toolkit" | "soc" | "shop" | "mobile";

export type ProjectImage = {
  /** Path inside /public. */
  src: string;
  /** Intrinsic pixel size of the original screenshot (keeps the aspect ratio exact). */
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  /** Optional case-study sections, rendered on the detail page when present. */
  problem?: string;
  solution?: string;
  role?: string[];
  featuresLabel: string;
  features: string[];
  stack: string[];
  status: string;
  /** Concept / work-in-progress notice shown on the card and detail page. */
  notice?: string;
  /** Illustrative fallback, used only when no real screenshot exists. */
  visual: ProjectVisualKind;
  /** Real screenshot of the product. */
  image?: ProjectImage;
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
    image: {
      src: "/images/projects/gamiphil-toolkit.png",
      width: 1917,
      height: 1034,
      alt: "Gamiphil Toolkit Enterprise dashboard showing system health, CPU load, memory and disk usage, active alerts, recommendations and optimization opportunities.",
      caption: "Dashboard of the Windows desktop application: system health, CPU, memory and disk usage, active alerts and optimization opportunities.",
    },
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
    image: {
      src: "/images/projects/gamiphil-it-shop.png",
      width: 1910,
      height: 915,
      alt: "Gamiphil IT Shop product listing with category filters, laptop prices, view details and add to cart buttons.",
      caption: "Product listing with category filters, prices, product details and add-to-cart actions.",
    },
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
    image: {
      src: "/images/projects/sikaly.png",
      width: 1914,
      height: 904,
      alt: "Sikaly landing page with the headline 'Know your money every day' beside a preview of the mobile app showing balance, today's profit and recent entries.",
      caption: "Sikaly landing page alongside a preview of the mobile app interface.",
    },
  },
  {
    slug: "nkabom",
    number: "05",
    title: "Nkabom",
    tagline: "Web application / FinTech for susu and savings groups",
    description:
      "A digital savings-group management platform that helps susu groups track contributions, manage collection schedules and maintain transparent payout records.",
    details: [
      "Nkabom is designed to simplify how traditional susu and savings groups manage their contributions and payouts. Instead of relying entirely on manual records and constant communication, members can access a shared view of their group's payment progress, collection schedule and payout history from their phones.",
      "The platform focuses on transparency, organisation and making savings-group management easier for everyone involved.",
    ],
    problem:
      "Susu and rotating savings groups usually run on notebooks, memory and long chat threads. Members ask the organiser again and again who has paid this month, who collects next and when the last pot was handed over, and a single lost record can create disputes.",
    solution:
      "Nkabom gives every group one shared record. The organiser marks contributions as paid, confirms each payout and keeps the collection order up to date, while every member sees the same schedule, payment status and payout history live on their own phone.",
    role: [
      "Designed and built the application end to end from a single Flutter codebase.",
      "Modelled groups, members, contribution cycles and payouts, including the rule that the turn only moves on once a payout is confirmed.",
      "Implemented phone-number sign-in and live shared groups with Firebase Authentication and Cloud Firestore, with security rules so only the organiser can change records.",
      "Designed the dashboard, group detail and schedule interfaces.",
    ],
    featuresLabel: "Key features",
    features: [
      "Monthly contribution tracking",
      "Member payment status (paid / unpaid)",
      "Savings-group creation and management",
      "Collection and payout scheduling",
      "Visibility into who collects next",
      "Shared access to group schedules",
      "Payout history and records",
      "Reminders to unpaid members",
    ],
    stack: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore", "Firebase Hosting"],
    status: "Working MVP",
    visual: "mobile",
    image: {
      src: "/images/projects/nkabom.png",
      width: 1901,
      height: 913,
      alt: "Nkabom dashboard showing a savings group's monthly contribution, the member collecting this month, pot progress, payout due date and each member's paid or unpaid status.",
      caption: "Group dashboard: this month's collector, pot progress, payout due date and each member's contribution status.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
