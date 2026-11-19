import fs from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

const candidates = ["isaac.jpg", "isaac.jpeg", "isaac.png", "isaac.webp"];

/**
 * Returns the portrait path, or null if none is supplied.
 * Priority: site.photo, then a file named public/isaac.(jpg|jpeg|png|webp).
 */
export function getPortrait(): string | null {
  if (site.photo) return site.photo;
  const found = candidates.find((f) => fs.existsSync(path.join(process.cwd(), "public", f)));
  return found ? `/${found}` : null;
}
