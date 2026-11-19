export type TimelineEntry = {
  kind: "education" | "certification" | "training" | "experience" | "skills";
  title: string;
  organisation?: string;
  description: string;
  /** Add only when confirmed, e.g. "2024". */
  date?: string;
};

export const experience: TimelineEntry[] = [
  {
    kind: "certification",
    title: "Certified in Cybersecurity (CC)",
    organisation: "ISC2",
    description: "Entry-level cybersecurity certification covering security principles, network security and security operations.",
  },
  {
    kind: "training",
    title: "Cybersecurity courses",
    organisation: "Cisco",
    description: "Cybersecurity professional development through Cisco learning courses.",
  },
  {
    kind: "experience",
    title: "Cybersecurity learning & internship",
    organisation: "Thrive Africa",
    description: "Cybersecurity learning and internship experience.",
  },
  {
    kind: "skills",
    title: "Hands-on exposure",
    description: "Vulnerability assessment, networking, IT support and security awareness.",
  },
  {
    kind: "education",
    title: "Bachelor's degree in Economics and Linguistics",
    description: "Academic foundation in analytical thinking and communication.",
  },
];

export const experienceNote =
  "This timeline is built to grow. Confirmed dates, institutions and new certifications are added in content/experience.ts.";
