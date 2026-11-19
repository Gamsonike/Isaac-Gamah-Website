import type { Metadata } from "next";
import { Container, Eyebrow, Tag } from "@/components/ui/Section";
import { InsightsEmpty } from "@/components/sections/Insights";
import { PostCard } from "@/components/sections/PostCard";
import { postCategories } from "@/content/posts";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles on software development, cybersecurity, networking, tutorials, IT infrastructure and personal learning.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllPosts();
  return (
    <main id="main">
      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-24">
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
        <Container className="relative">
          <Eyebrow tone="dark">Insights</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Notes on building and securing technology.</h1>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Categories">
            {postCategories.map((c) => <li key={c}><Tag tone="dark">{c}</Tag></li>)}
          </ul>
        </Container>
      </section>
      <section className="on-light bg-soft py-16 sm:py-20">
        <Container>
          {posts.length === 0 ? (
            <InsightsEmpty />
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => <li key={p.slug}><PostCard post={p} /></li>)}
            </ul>
          )}
        </Container>
      </section>
    </main>
  );
}
