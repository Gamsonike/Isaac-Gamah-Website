import { ArrowRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-midnight text-white">
      <BackdropImage
        src="/images/backgrounds/circuit.jpg"
        width={1200}
        height={800}
        opacity="opacity-45"
        objectPosition="70% center"
        mask="radial-gradient(ellipse 80% 110% at 78% 40%, #000 25%, transparent 80%)"
      />
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      <div aria-hidden="true" className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-deep/20 blur-3xl" />
      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-28">
        <div>
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-ice sm:text-sm">HELLO, I&apos;M ISAAC GAMAH.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 id="hero-title" className="mt-6 text-[2.4rem] font-semibold leading-[1.08] sm:text-6xl lg:text-[4.1rem]">
              Building Digital Solutions.
              <span className="block text-ice">Securing Digital Futures.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              I am a technology professional focused on full-stack development, cybersecurity and IT solutions. I build
              practical digital products, explore security challenges and help create reliable technology environments.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#projects" variant="primary">
                Explore My Work <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/#contact" variant="secondary">
                <Mail size={18} aria-hidden="true" /> Let&apos;s Connect
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-12 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-ice" />
              <p className="font-mono text-sm tracking-[0.22em] text-ice">{site.tagline}</p>
            </div>
            <p className="mt-3 font-mono text-xs text-mist">{site.title}</p>
          </Reveal>
        </div>
        <Reveal delay={0.2} y={0}>
          <div className="pb-6 pr-4 pt-3"><PhotoFrame /></div>
        </Reveal>
      </Container>
    </section>
  );
}
