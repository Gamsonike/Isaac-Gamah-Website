export type PostCategory =
  | "Software Development"
  | "Cybersecurity"
  | "Networking"
  | "Technology Tutorials"
  | "IT Infrastructure"
  | "Personal Learning Journey";

export const postCategories: PostCategory[] = [
  "Software Development",
  "Cybersecurity",
  "Networking",
  "Technology Tutorials",
  "IT Infrastructure",
  "Personal Learning Journey",
];

export type Post = {
  slug: string;
  category: PostCategory;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-01-31". Use real publication dates only. */
  date: string;
  readingTime: string;
  /** Body paragraphs. Prefix a paragraph with "## " for a subheading. */
  body: string[];
};

/**
 * Add real articles here. They appear automatically on /insights and the home page,
 * each with its own page at /insights/<slug>. Intentionally empty: no fabricated articles.
 */
export const posts: Post[] = [];
