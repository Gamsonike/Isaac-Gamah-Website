import { Mail } from "lucide-react";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { site } from "@/content/site";

export function Contact() {
  const row = "group flex min-h-14 items-center gap-4 rounded-xl border border-mist/25 p-4 text-white transition-colors hover:border-ice hover:bg-white/5";
  const ico = "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ice/10 text-ice";
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-midnight py-20 text-white sm:py-28">
      <BackdropImage
        src="/images/backgrounds/circuit.jpg"
        width={1200}
        height={800}
        opacity="opacity-35"
        objectPosition="75% center"
        mask="radial-gradient(ellipse 70% 100% at 90% 50%, #000 15%, transparent 75%)"
      />
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone="dark">Contact</Eyebrow>
          <h2 id="contact-title" className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
            Let&apos;s Build Something That Matters.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-mist sm:text-lg">
            Open to meaningful collaborations, technology opportunities and conversations across software development,
            cybersecurity and digital innovation.
          </p>
          <ul className="mt-8 space-y-3">
            <li>
              <a href={`mailto:${site.email}`} className={row}>
                <span className={ico}><Mail size={18} aria-hidden="true" /></span>
                <span className="min-w-0"><span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-mist">Email</span><span className="block break-all text-sm">{site.email}</span></span>
              </a>
            </li>
            <li>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className={row}>
                <span className={ico}><GithubIcon className="h-[18px] w-[18px]" /></span>
                <span className="min-w-0"><span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-mist">GitHub</span><span className="block break-all text-sm">github.com/Gamsonike</span></span>
              </a>
            </li>
            {site.socials.linkedin && (
              <li>
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className={row}>
                  <span className={ico}><LinkedinIcon className="h-[18px] w-[18px]" /></span>
                  <span className="min-w-0"><span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-mist">LinkedIn</span><span className="block text-sm">View profile</span></span>
                </a>
              </li>
            )}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
