"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Maximize2, X } from "lucide-react";
import type { ProjectImage } from "@/content/projects";
import { cn } from "@/lib/utils";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Props = {
  image: ProjectImage;
  title: string;
  /** Detail pages open the full-size screenshot in a dialog when clicked. */
  zoomable?: boolean;
  priority?: boolean;
  sizes: string;
  className?: string;
};

/** Real product screenshot at its original aspect ratio, with a restrained frame. */
export function ProjectScreenshot({ image, title, zoomable = false, priority = false, sizes, className }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  // next/image does not add the basePath to plain string sources on a static export.
  const src = `${basePath}${image.src}`;

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === el) el.close();
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  const picture = (
    <Image
      src={src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      unoptimized={basePath !== ""}
      className="block h-auto w-full"
    />
  );

  const frame = "relative overflow-hidden rounded-xl bg-midnight ring-1 ring-midnight/15 border border-mist/25 shadow-lg shadow-midnight/15";

  if (!zoomable) return <div className={cn(frame, className)}>{picture}</div>;

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`View a larger screenshot of ${title}`}
        className={cn(frame, "group block w-full cursor-zoom-in text-left shadow-2xl", className)}
      >
        {picture}
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg bg-midnight/90 px-3 py-1.5 font-mono text-[11px] text-ice ring-1 ring-mist/30 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
          <Maximize2 size={14} aria-hidden="true" /> Enlarge
        </span>
      </button>
      <dialog
        ref={dialog}
        aria-label={`${title} screenshot`}
        className="m-auto max-h-[94vh] w-[min(96vw,100rem)] max-w-none overflow-auto rounded-xl border border-mist/30 bg-midnight p-0 backdrop:bg-midnight/85"
      >
        <form method="dialog" className="sticky top-0 z-10 flex justify-end p-2">
          <button
            autoFocus
            aria-label="Close screenshot"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-midnight/90 text-ice ring-1 ring-mist/30 hover:text-white"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </form>
        <Image src={src} alt={image.alt} width={image.width} height={image.height} sizes="96vw" unoptimized className="-mt-12 block h-auto w-full" />
      </dialog>
    </>
  );
}
