export type Expertise = {
  id: string;
  icon: "code" | "shield" | "server" | "lightbulb";
  title: string;
  description: string;
  itemsLabel: string;
  items: string[];
};

export const expertise: Expertise[] = [
  {
    id: "full-stack",
    icon: "code",
    title: "Full-Stack Development",
    description: "Building functional, responsive and scalable digital applications.",
    itemsLabel: "Technologies & interests",
    items: ["C#", ".NET", "WPF", "Flutter", "Dart", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "cybersecurity",
    icon: "shield",
    title: "Cybersecurity",
    description: "Understanding vulnerabilities, strengthening digital environments and promoting secure technology practices.",
    itemsLabel: "Areas of interest",
    items: ["Vulnerability Assessment", "Network Security", "Security Awareness", "Security Monitoring", "Linux", "Kali Linux", "Nmap", "Wireshark"],
  },
  {
    id: "infrastructure",
    icon: "server",
    title: "IT Infrastructure & Systems",
    description: "Supporting, managing and improving technology infrastructure and business systems.",
    itemsLabel: "Areas",
    items: ["Windows Administration", "Linux", "Networking", "Virtualisation", "IT Support", "Systems Administration", "Infrastructure Management"],
  },
  {
    id: "solutions",
    icon: "lightbulb",
    title: "Digital Solutions & Innovation",
    description: "Applying technology to solve practical business and operational problems.",
    itemsLabel: "Areas",
    items: ["Business Process Improvement", "Application Development", "Technology Integration", "Digital Transformation"],
  },
];
