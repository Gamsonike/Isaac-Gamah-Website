import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { site } from "@/content/site";
import { getPortrait } from "@/lib/photo";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const alt = "Isaac Gamah – Full-Stack Developer and Cybersecurity Professional";
const role = "Full-Stack · Cybersecurity · IT Solutions";
/** The portrait is 2:3; anchoring the crop a little above centre keeps the face fully in frame. */
const objectPosition = "50% 28%";

/**
 * Portrait frame. Shows the photo when one exists (site.photo, or public/isaac.jpg),
 * otherwise a monogram placeholder. No photo is ever invented.
 *
 * - `featured` (default): large framed portrait, used in the hero.
 * - `compact`: small profile card, used in About so the same large portrait is not repeated.
 */
export function PhotoFrame({ variant = "featured" }: { variant?: "featured" | "compact" }) {
  const photo = getPortrait();
  // next/image does not add the basePath to plain string sources on a static export.
  const src = photo ? `${basePath}${photo}` : null;

  if (variant === "compact") {
    return (
      <figure className="flex items-center gap-5 rounded-2xl border border-line bg-soft p-4">
        <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl bg-midnight ring-1 ring-deep/25 sm:w-28">
          {src ? (
            <Image src={src} alt={alt} fill sizes="7rem" unoptimized={basePath !== ""} className="object-cover" style={{ objectPosition }} />
          ) : (
            <div className="flex h-full items-center justify-center text-white">
              <LogoMark className="h-12 w-12" title="IG monogram" />
            </div>
          )}
        </div>
        <figcaption>
          <span className="block font-display text-base font-semibold text-midnight">{site.name}</span>
          <span className="mt-1 block font-mono text-[11px] text-deep-700">{role}</span>
          <span className="mt-3 block font-mono text-[11px] tracking-[0.16em] text-deep">{site.tagline}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="relative mx-auto w-full max-w-sm">
      {/* offset outline */}
      <span aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.75rem] border-2 border-deep/50" />
      {/* corner brackets */}
      <span aria-hidden="true" className="absolute -left-3 -top-3 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-ice" />
      <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-ice" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-midnight shadow-2xl shadow-midnight/30 ring-1 ring-midnight/20">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 24rem, 90vw"
            unoptimized={basePath !== ""}
            className="object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <>
            <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
            <div className="relative flex h-full flex-col items-center justify-center gap-5 p-8 text-center text-white">
              <LogoMark className="h-24 w-24" title="IG monogram" />
              <div>
                <p className="font-display text-base font-semibold tracking-[0.18em]">{site.brand}</p>
                <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-ice">{site.tagline}</p>
              </div>
              <p className="mt-2 inline-flex items-center gap-2 rounded-lg border border-dashed border-mist/50 px-3 py-2 text-xs text-mist">
                <ImagePlus size={14} aria-hidden="true" /> Photo goes here
              </p>
            </div>
          </>
        )}
      </div>

      <figcaption className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-xl bg-white px-4 py-3 text-center shadow-lg ring-1 ring-line">
        <span className="block font-display text-sm font-semibold text-midnight">{site.name}</span>
        <span className="block font-mono text-[11px] text-deep-700">{role}</span>
      </figcaption>
    </figure>
  );
}
