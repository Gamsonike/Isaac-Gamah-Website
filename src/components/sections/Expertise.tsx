import { Code2, Lightbulb, Server, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Container, SectionHeading, Tag } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { expertise, type Expertise as E } from "@/content/expertise";

const icons: Record<E["icon"], ReactNode> = {
  code: <Code2 size={24} />,
  shield: <ShieldCheck size={24} />,
  server: <Server size={24} />,
  lightbulb: <Lightbulb size={24} />,
};

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="on-light relative overflow-hidden bg-soft py-20 sm:py-28">
      <div aria-hidden="true" className="bg-grid-light absolute inset-0 opacity-60" />
      <Container className="relative">
        <SectionHeading
          id="expertise-title"
          align="center"
          eyebrow="Expertise"
          title="Where software meets security."
          intro="Four complementary disciplines that together produce technology that is useful, dependable and secure."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {expertise.map((e, i) => (
            <li key={e.id}>
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-midnight hover:shadow-2xl hover:shadow-midnight/20 sm:p-8">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-ice transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-midnight text-ice transition-colors group-hover:bg-ice group-hover:text-midnight">{icons[e.icon]}</span>
                    <span aria-hidden="true" className="font-display text-5xl font-semibold text-line transition-colors group-hover:text-deep">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-midnight transition-colors group-hover:text-white sm:text-2xl">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75 transition-colors group-hover:text-mist sm:text-base">{e.description}</p>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-deep-700 transition-colors group-hover:text-ice">{e.itemsLabel}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {e.items.map((it) => (
                      <li key={it}>
                        <Tag>{it}</Tag>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
