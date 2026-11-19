import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p className={cn("font-mono text-xs font-medium uppercase tracking-[0.2em]", tone === "dark" ? "text-ice" : "text-deep-700")}>
      <span aria-hidden="true" className="mr-2">{"//"}</span>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  id,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  id?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 id={id} className={cn("mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]", tone === "dark" ? "text-white" : "text-midnight")}>
        {title}
      </h2>
      {intro && <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-mist" : "text-charcoal/75")}>{intro}</p>}
    </Reveal>
  );
}

export function Tag({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 font-mono text-xs",
        tone === "dark" ? "border border-mist/30 bg-white/5 text-ice" : "border border-deep/20 bg-soft text-deep-700",
      )}
    >
      {children}
    </span>
  );
}
