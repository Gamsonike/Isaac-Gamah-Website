import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Post } from "@/content/posts";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-deep/40 hover:shadow-xl hover:shadow-midnight/10">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-deep-700">{post.category}</p>
      <h3 className="mt-3 text-xl font-semibold text-midnight">{post.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{post.description}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6 text-xs text-charcoal/65">
        <span className="flex items-center gap-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1"><Clock size={13} aria-hidden="true" /> {post.readingTime}</span>
        </span>
        <Link href={`/insights/${post.slug}`} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-midnight hover:text-deep-700">
          Read article <ArrowUpRight size={15} aria-hidden="true" />
          <span className="sr-only">: {post.title}</span>
        </Link>
      </div>
    </article>
  );
}
