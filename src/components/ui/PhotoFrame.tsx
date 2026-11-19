import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { site } from "@/content/site";
import { getPortrait } from "@/lib/photo";

/**
 * Portrait frame. Shows the photo when one exists (public/isaac.jpg, or site.photo),
 * otherwise a monogram placeholder. No photo is ever invented.
 */
export function PhotoFrame() {
  const src = getPortrait();
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
            alt={`Portrait of ${site.name}`}
            fill
            sizes="(min-width: 1024px) 24rem, 90vw"
            className="object-cover"
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
        <span className="block font-mono text-[11px] text-deep-700">Full-Stack · Cybersecurity · IT Solutions</span>
      </figcaption>
    </figure>
  );
}
