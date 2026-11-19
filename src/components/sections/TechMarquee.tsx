import { techStrip } from "@/content/process";

export function TechMarquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {techStrip.map((t) => (
        <li key={t} className="flex items-center gap-10 font-mono text-sm text-midnight">
          {t}
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-midnight/40" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden bg-ice py-4" role="region" aria-label="Technologies and tools">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
