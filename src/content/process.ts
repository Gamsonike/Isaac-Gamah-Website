export type ProcessStep = { icon: "search" | "code" | "shield" | "refresh"; title: string; text: string };

/** Working approach / philosophy. Describes intent, not client results. */
export const processHeading = "A practical approach to building technology that lasts.";

export const processSteps: ProcessStep[] = [
  { icon: "search", title: "Understand", text: "Start with the real problem: the people, the systems and the operational context around it." },
  { icon: "code", title: "Build", text: "Develop clear, functional and responsive solutions with maintainable code and sensible architecture." },
  { icon: "shield", title: "Secure", text: "Consider vulnerabilities, access and monitoring from the start rather than as an afterthought." },
  { icon: "refresh", title: "Improve", text: "Keep learning, review what works and refine solutions so they stay reliable and scalable." },
];

export const techStrip = [
  "C#", ".NET", "WPF", "Flutter", "Dart", "JavaScript", "HTML", "CSS",
  "Linux", "Kali Linux", "Nmap", "Wireshark", "VirtualBox", "Netlify",
];
