import { Container, SectionHeading, Tag } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { postCategories } from "@/content/posts";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "./PostCard";
import { PenLine } from "lucide-react";

export function InsightsEmpty() {
  return (
    <div className="rounded-2xl border border-dashed border-deep/40 bg-soft p-8 text-center sm:p-12">
      <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-midnight text-ice"><PenLine size={22} aria-hidden="true" /></span>
      <h3 className="mt-5 text-xl font-semibold text-midnight">First articles are on the way.</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
        No articles have been published yet. Writing will cover the topics below as it is published.
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Planned topics">
        {postCategories.map((c) => <li key={c}><Tag>{c}</Tag></li>)}
      </ul>
    </div>
  );
}

export function Insights() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <section id="insights" aria-labelledby="insights-title" className="on-light bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="insights-title"
          align="center"
          eyebrow="Insights"
          title="Notes on building and securing technology."
          intro="Software development, cybersecurity, networking, tutorials, infrastructure and a personal learning journey."
        />
        <div className="mt-12">
          {posts.length === 0 ? (
            <Reveal><InsightsEmpty /></Reveal>
          ) : (
            <>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => <li key={p.slug}><PostCard post={p} /></li>)}
              </ul>
              <div className="mt-10 flex justify-center">
                <ButtonLink href="/insights" variant="ghost-dark">All insights</ButtonLink>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
