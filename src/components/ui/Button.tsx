import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost-dark" | "ghost-light";

const variants: Record<Variant, string> = {
  // On dark (Midnight) backgrounds
  primary: "bg-ice text-midnight hover:bg-white",
  secondary: "border border-mist/50 text-white hover:border-ice hover:bg-white/5",
  // On light backgrounds
  "ghost-dark": "bg-midnight text-white hover:bg-midnight-700",
  "ghost-light": "border border-deep/40 text-midnight hover:border-deep hover:bg-deep/5",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200",
    variants[variant],
    variant.endsWith("light") || variant === "ghost-dark" ? "focus-dark" : "",
    className,
  );
}

type Props = { variant?: Variant; children: ReactNode; className?: string } & Omit<ComponentProps<typeof Link>, "className">;

/** Link styled as a button. Internal hrefs use next/link; external open safely in a new tab. */
export function ButtonLink({ variant = "primary", className, children, href, ...rest }: Props) {
  const external = typeof href === "string" && /^(https?:|mailto:)/.test(href);
  if (external) {
    const isMail = href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={buttonClasses(variant, className)}
        {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClasses(variant, className)} {...rest}>
      {children}
    </Link>
  );
}
