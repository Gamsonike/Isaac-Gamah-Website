export type NavItem = { label: string; href: string; id?: string };

export const navigation: NavItem[] = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Expertise", href: "/#expertise", id: "expertise" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/#contact", id: "contact" },
];
