"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { Logo } from "@/components/brand/Logo";
import { navigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

const sectionIds = navigation.flatMap((n) => (n.id && n.id !== "home" ? [n.id] : []));

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy on the home page
  useEffect(() => {
    if (pathname !== "/") return;
    const els = sectionIds.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
        else if (window.scrollY < 200) setActive("home");
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    els.forEach((el) => io.observe(el));
    const top = () => window.scrollY < 200 && setActive("home");
    window.addEventListener("scroll", top, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", top);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (item: (typeof navigation)[number]) =>
    item.id ? pathname === "/" && active === item.id : pathname.startsWith(item.href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-mist/15 bg-midnight/95 backdrop-blur" : "border-transparent bg-midnight",
      )}
    >
      <div className="hidden border-b border-mist/15 bg-midnight-900 xl:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-10 text-xs text-mist">
          <p className="font-mono tracking-[0.16em] text-ice">{site.tagline}</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white"><Mail size={13} aria-hidden="true" /> {site.email}</a>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><GithubIcon className="h-3.5 w-3.5" /> GitHub</a>
          </div>
        </div>
      </div>
      <nav aria-label="Primary" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Isaac Gamah, home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive(item) ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item) ? "text-ice" : "text-mist hover:text-white",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn("absolute inset-x-3 -bottom-0.5 h-px bg-ice transition-opacity", isActive(item) ? "opacity-100" : "opacity-0")}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/#contact" className="hidden min-h-11 items-center rounded-lg bg-ice px-5 text-sm font-semibold text-midnight transition-colors hover:bg-white xl:inline-flex">
          Let&apos;s Connect
        </Link>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-mist/15 bg-midnight lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item) ? "page" : undefined}
                className={cn(
                  "flex min-h-14 items-center justify-between border-b border-mist/10 font-display text-lg",
                  isActive(item) ? "text-ice" : "text-white",
                )}
              >
                {item.label}
                <span aria-hidden="true" className="font-mono text-xs text-mist">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
