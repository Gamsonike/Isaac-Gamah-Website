import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Section";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const social = "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-mist/25 text-mist transition-colors hover:border-ice hover:text-ice";
  return (
    <footer className="relative overflow-hidden bg-midnight text-mist">
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">{site.supportingTagline}</p>
            <p className="mt-6 font-mono text-xs tracking-[0.18em] text-ice">{site.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ice">Navigate</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="transition-colors hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ice">Connect</h2>
            <a href={`mailto:${site.email}`} className="mt-5 block break-all text-sm transition-colors hover:text-white">
              {site.email}
            </a>
            <div className="mt-5 flex gap-3">
              <a href={`mailto:${site.email}`} className={social} aria-label="Email Isaac Gamah"><Mail size={18} /></a>
              <a href={site.socials.github} className={social} aria-label="Isaac Gamah on GitHub" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
              {site.socials.linkedin && (
                <a href={site.socials.linkedin} className={social} aria-label="Isaac Gamah on LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="h-[18px] w-[18px]" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-mist/15 pt-6 text-xs sm:flex-row sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="font-mono">{site.title}</p>
        </div>
      </Container>
    </footer>
  );
}
