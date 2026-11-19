import { posts, type Post } from "@/content/posts";

export const getAllPosts = (): Post[] => [...posts].sort((a, b) => b.date.localeCompare(a.date));
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
