import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";
import { ButtonLink } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/icons";
import { site } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="on-light bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="projects-title"
          align="center"
          eyebrow="Projects"
          title="Selected work across software and security."
          intro="Desktop, web and mobile projects, plus a defensive-security lab concept. Statuses are shown honestly. Screenshots are from the real applications; the lab concept uses an illustrative preview."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <li
              key={p.slug}
              // An odd last card is centred under the two-column grid instead of hanging left.
              className={i === projects.length - 1 && projects.length % 2 === 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]" : undefined}
            >
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-10 flex justify-center">
          <ButtonLink href={site.socials.github} variant="ghost-light">
            <GithubIcon className="h-4 w-4" /> More on GitHub
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
