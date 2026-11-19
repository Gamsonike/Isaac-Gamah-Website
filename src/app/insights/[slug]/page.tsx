import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Section";
import { site } from "@/content/site";
import { getAllPosts, getPost } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export const dynamicParams = false;
// A static export needs at least one param; with zero posts a placeholder is emitted that renders notFound().
export const generateStaticParams = (): Params[] => {
  const posts = getAllPosts();
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_" }];
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, url: `${site.url}/insights/${post.slug}`, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return (
    <main id="main">
      <section className="bg-midnight py-14 text-white sm:py-20">
        <Container>
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-mist hover:text-white">
            <ArrowLeft size={16} aria-hidden="true" /> All insights
          </Link>
          <div className="mt-8 max-w-3xl">
            <Eyebrow tone="dark">{post.category}</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 flex items-center gap-4 text-sm text-mist">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="inline-flex items-center gap-1"><Clock size={14} aria-hidden="true" /> {post.readingTime}</span>
            </p>
          </div>
        </Container>
      </section>
      <article className="on-light bg-white py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-charcoal/85">
            {post.body.map((block) =>
              block.startsWith("## ") ? (
                <h2 key={block} className="pt-4 text-2xl font-semibold text-midnight">{block.slice(3)}</h2>
              ) : (
                <p key={block}>{block}</p>
              ),
            )}
          </div>
        </Container>
      </article>
    </main>
  );
}
