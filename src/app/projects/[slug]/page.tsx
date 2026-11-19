import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { StatusBadge } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, Tag } from "@/components/ui/Section";
import { GithubIcon } from "@/components/ui/icons";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = (): Params[] => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.title} | ${site.name}`, description: project.description, url: `${site.url}/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main id="main">
      <section className="relative overflow-hidden bg-midnight py-14 text-white sm:py-20">
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
        <Container className="relative">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-white">
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow tone="dark">Project {project.number}</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{project.title}</h1>
              <p className="mt-3 text-lg text-ice">{project.tagline}</p>
              <div className="mt-5"><StatusBadge status={project.status} tone="dark" /></div>
              <p className="mt-6 max-w-xl leading-relaxed text-mist">{project.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.live && <ButtonLink href={project.live}>Visit live project</ButtonLink>}
                <ButtonLink href={project.github ?? site.socials.github} variant={project.live ? "secondary" : "primary"}>
                  <GithubIcon className="h-4 w-4" /> {project.github ? "View repository" : "GitHub profile"}
                </ButtonLink>
              </div>
              {!project.github && (
                <p className="mt-3 text-xs text-mist">A public repository link for this project has not been added yet.</p>
              )}
            </div>
            <ProjectVisual kind={project.visual} title={project.title} />
          </div>
        </Container>
      </section>

      <section className="on-light bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold text-midnight">Overview</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-charcoal/80">
              {project.details.map((d) => <p key={d}>{d}</p>)}
            </div>
            {project.notice && (
              <p className="mt-6 rounded-xl border border-deep/25 bg-soft p-4 text-sm text-deep-700">{project.notice}</p>
            )}
            <h2 className="mt-12 text-2xl font-semibold text-midnight">{project.featuresLabel}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-charcoal/85">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-deep" aria-hidden="true" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <aside aria-label="Project facts" className="h-fit rounded-2xl border border-line bg-soft p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-deep-700">Technology</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => <li key={s}><Tag>{s}</Tag></li>)}
            </ul>
            <h2 className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-deep-700">Status</h2>
            <p className="mt-3 text-sm text-charcoal/85">{project.status}</p>
          </aside>
        </Container>
      </section>

      <section className="bg-soft py-12">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-charcoal/75">Next project</p>
          <ButtonLink href={`/projects/${next.slug}`} variant="ghost-dark">
            {next.title} <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
        </Container>
      </section>
    </main>
  );
}
