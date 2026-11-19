import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/Section";
import { GithubIcon } from "@/components/ui/icons";
import { buttonClasses } from "@/components/ui/Button";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { ProjectScreenshot } from "./ProjectScreenshot";
import { ProjectVisual } from "./ProjectVisual";

export function StatusBadge({ status, tone = "light" }: { status: string; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px]",
        tone === "dark" ? "bg-ice/10 text-ice ring-1 ring-ice/30" : "bg-midnight text-ice",
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ice" />
      {status}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-deep/40 hover:shadow-xl hover:shadow-midnight/10">
      <div className="p-3 pb-0">
        {project.image ? (
          <ProjectScreenshot image={project.image} title={project.title} sizes="(min-width: 768px) 560px, 100vw" />
        ) : (
          <ProjectVisual kind={project.visual} title={project.title} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-deep-700">PROJECT {project.number}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-midnight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{project.description}</p>
        {project.notice && (
          <p className="mt-4 rounded-lg border border-deep/25 bg-soft px-3 py-2 text-xs leading-relaxed text-deep-700">{project.notice}</p>
        )}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.stack.map((s) => (
            <li key={s}><Tag>{s}</Tag></li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Link href={href} className={buttonClasses("ghost-dark", "min-h-11 px-5 py-2")}>
            View Project <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> {project.title}</span>
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonClasses("ghost-light", "min-h-11 px-5 py-2")}>
              <GithubIcon className="h-4 w-4" /> GitHub<span className="sr-only"> repository for {project.title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
