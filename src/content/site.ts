/** Central site configuration. Edit values here to update the whole site. */
export const site = {
  name: "Isaac Gamah",
  brand: "ISAAC GAMAH",
  initials: "IG",
  tagline: "BUILD. SECURE. INNOVATE.",
  supportingTagline: "Engineering Digital Solutions. Securing Digital Futures.",
  title: "Full-Stack Developer | Cybersecurity Professional | IT Solutions",
  description:
    "Isaac Gamah is a technology professional focused on full-stack development, cybersecurity and IT solutions, building practical digital products and reliable, secure technology environments.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  email: "isaacgamah.dev@gmail.com",
  /** Contact form endpoint (e.g. Formspree). Empty = mailto fallback. */
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
  socials: {
    github: "https://github.com/Gamsonike",
    /** Set NEXT_PUBLIC_LINKEDIN_URL to show LinkedIn. Never invented. */
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
  /** Put a photo in /public (e.g. "/isaac.jpg") and set the path here to show it in About. Empty = monogram. */
  photo: "",
};
