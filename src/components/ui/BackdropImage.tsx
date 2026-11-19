import Image from "next/image";
import { cn } from "@/lib/utils";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Props = {
  src: string;
  width: number;
  height: number;
  /** Tailwind opacity utility for the image strength. */
  opacity?: string;
  /** CSS mask-image value; fades the image into the section background. */
  mask: string;
  className?: string;
  objectPosition?: string;
};

/**
 * Decorative photo that melts into a Midnight Teal section.
 * `mix-blend-luminosity` keeps only the image's light/dark structure and takes its hue from the
 * section background, so the original blues are tinted to the brand teal.
 */
export function BackdropImage({ src, width, height, opacity = "opacity-40", mask, className, objectPosition = "center" }: Props) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} style={{ maskImage: mask, WebkitMaskImage: mask }}>
      <Image
        src={`${basePath}${src}`}
        alt=""
        width={width}
        height={height}
        sizes="100vw"
        unoptimized={basePath !== ""}
        style={{ objectPosition }}
        className={cn("h-full w-full object-cover mix-blend-luminosity", opacity)}
      />
    </div>
  );
}
