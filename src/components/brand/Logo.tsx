import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Scalable IG monogram in Winter Chill colours. */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      <rect x="1.5" y="1.5" width="61" height="61" rx="14" fill="#0B2E33" stroke="#4F7C82" strokeWidth="1.5" />
      {/* I */}
      <path d="M15 18h12M21 18v28M15 46h12" stroke="#B8E3E9" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* G */}
      <path d="M49.9 22.1A14 14 0 1 0 54 32H42" stroke="#B8E3E9" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="54" cy="32" r="2.2" fill="#93B1B5" />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="h-10 w-10" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-sm font-semibold tracking-[0.18em]", tone === "dark" ? "text-white" : "text-midnight")}>
          {site.brand}
        </span>
        <span className={cn("mt-1 font-mono text-[10px] tracking-[0.14em]", tone === "dark" ? "text-mist" : "text-deep-700")}>
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
