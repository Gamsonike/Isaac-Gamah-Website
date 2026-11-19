import { Plus } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/faq";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="on-light bg-soft py-20 sm:py-28">
      <Container>
        <SectionHeading id="faq-title" align="center" eyebrow="FAQ" title="Questions, answered." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group rounded-xl border border-line bg-white open:border-deep/40 open:shadow-md">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-semibold text-midnight [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus size={20} aria-hidden="true" className="shrink-0 text-deep transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-charcoal/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
