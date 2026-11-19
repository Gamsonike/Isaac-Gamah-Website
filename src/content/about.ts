export const aboutHeading = "Technology Should Work. And It Should Be Secure.";

export const aboutParagraphs = [
  "I'm Isaac Gamah, a technology professional with a background spanning IT support, systems administration, business operations and technology development.",
  "My professional interests sit at the intersection of full-stack development and cybersecurity.",
  "I enjoy building functional digital solutions while understanding the infrastructure, security and operational considerations that make technology reliable.",
  "I believe technology should not only work efficiently but should also be designed with security, reliability and scalability in mind.",
];

export type AboutFacet = {
  icon: "briefcase" | "code" | "shield" | "compass" | "book" | "target";
  title: string;
  text: string;
};

export const aboutFacets: AboutFacet[] = [
  { icon: "briefcase", title: "Professional background", text: "IT support, systems administration, business operations and technology development." },
  { icon: "code", title: "Technology interests", text: "Full-stack applications, desktop and mobile development, networking and infrastructure." },
  { icon: "compass", title: "Development philosophy", text: "Build software that is functional, reliable and scalable, with security considered from the start." },
  { icon: "shield", title: "Cybersecurity interests", text: "Vulnerability assessment, network security, security monitoring and security awareness." },
  { icon: "book", title: "Continuous learning", text: "Ongoing professional development through certifications, courses and hands-on lab work." },
  { icon: "target", title: "Professional goals", text: "Contribute to software and security teams, and help organisations run dependable, secure technology." },
];

/** Structured professional journey. Deliberately undated: add dates only when confirmed. */
export const journey = [
  { title: "Business & operations foundation", text: "Economics and Linguistics education, with exposure to business operations." },
  { title: "IT support & systems administration", text: "Hands-on support of technology environments and business systems." },
  { title: "Software development", text: "Building desktop, web and mobile applications with C#/.NET, Flutter and web technologies." },
  { title: "Cybersecurity development", text: "ISC2 CC certification, Cisco courses and Thrive Africa learning and internship experience." },
  { title: "What's next", text: "Combining secure engineering with practical IT solutions. This timeline grows as the journey does." },
];
