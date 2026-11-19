import { Briefcase, Code2, Compass, BookOpen, ShieldCheck, Target } from "lucide-react";
import type { ReactNode } from "react";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { aboutFacets, aboutHeading, aboutParagraphs, journey, type AboutFacet } from "@/content/about";

const icons: Record<AboutFacet["icon"], ReactNode> = {
  briefcase: <Briefcase size={20} />,
  code: <Code2 size={20} />,
  compass: <Compass size={20} />,
  shield: <ShieldCheck size={20} />,
  book: <BookOpen size={20} />,
  target: <Target size={20} />,
};

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="on-light bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2 id="about-title" className="mt-4 text-3xl font-semibold leading-tight text-midnight sm:text-4xl lg:text-[2.75rem]">
              {aboutHeading}
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              {aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <PhotoFrame />
            <ol className="mt-16 border-l border-deep/30 pl-6" aria-label="Professional journey">
              {journey.map((j) => (
                <li key={j.title} className="relative pb-6 last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-deep bg-white" />
                  <h3 className="font-display text-sm font-semibold text-midnight">{j.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{j.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutFacets.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-soft p-6 transition-all hover:-translate-y-0.5 duration-300 hover:border-deep/40">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-midnight text-ice">{icons[f.icon]}</span>
                  <h3 className="mt-4 font-display text-base font-semibold text-midnight">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{f.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
