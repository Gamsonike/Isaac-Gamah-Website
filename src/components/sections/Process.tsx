import { Container, SectionHeading } from "@/components/ui/Section";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { processHeading, processSteps, type ProcessStep } from "@/content/process";
import { Code2, RefreshCcw, Search, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

const icons: Record<ProcessStep["icon"], ReactNode> = {
  search: <Search size={26} />,
  code: <Code2 size={26} />,
  shield: <ShieldCheck size={26} />,
  refresh: <RefreshCcw size={26} />,
};

export function Process() {
  return (
    <section id="approach" aria-labelledby="process-title" className="relative overflow-hidden bg-midnight py-20 text-white sm:py-28">
      <BackdropImage
        src="/images/backgrounds/circuit.jpg"
        width={1200}
        height={800}
        opacity="opacity-35"
        objectPosition="30% center"
        mask="radial-gradient(ellipse 70% 100% at 12% 50%, #000 15%, transparent 75%)"
      />
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      <Container className="relative">
        <SectionHeading id="process-title" tone="dark" align="center" eyebrow="How I Work" title={processHeading} />
        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-10 hidden h-px border-t border-dashed border-mist/40 lg:block" />
          {processSteps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="relative text-center">
                  <span className="relative mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full border border-ice/40 bg-midnight-700 text-ice">
                    {icons[s.icon]}
                    <span className="absolute -right-1 -top-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ice font-mono text-xs font-bold text-midnight">{i + 1}</span>
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-mist">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
