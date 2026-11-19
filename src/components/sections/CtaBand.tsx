import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="on-light bg-white px-5 py-16 sm:px-8 sm:py-20">
      <Container className="p-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-midnight px-6 py-14 text-center text-white sm:px-14 sm:py-16">
            <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ice/15 blur-3xl" />
            <div className="relative">
              <p className="font-mono text-xs tracking-[0.22em] text-ice">{site.tagline}</p>
              <h2 id="cta-title" className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Have a project or opportunity in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mist">Let&apos;s talk about software, security and technology that works.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/#contact">Start a conversation <ArrowRight size={18} aria-hidden="true" /></ButtonLink>
                <ButtonLink href="/#projects" variant="secondary">See my work</ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
