import { Award, BookOpen, Briefcase, GraduationCap, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience, experienceNote, type TimelineEntry } from "@/content/experience";

const icons: Record<TimelineEntry["kind"], ReactNode> = {
  certification: <Award size={18} />,
  training: <BookOpen size={18} />,
  experience: <Briefcase size={18} />,
  skills: <Wrench size={18} />,
  education: <GraduationCap size={18} />,
};

const labels: Record<TimelineEntry["kind"], string> = {
  certification: "Certification",
  training: "Professional development",
  experience: "Experience",
  skills: "Exposure",
  education: "Education",
};

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="on-light bg-soft py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="experience-title"
          eyebrow="Experience & Certifications"
          title="Education, training and professional development."
          intro="Credentials and learning that support a practical blend of software engineering, IT systems and cybersecurity."
        />
        <ol className="relative mt-14 max-w-3xl border-l border-deep/30 pl-8 sm:pl-10">
          {experience.map((e, i) => (
            <li key={e.title} className="relative pb-10 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[2.9rem] top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-midnight text-ice ring-4 ring-soft sm:-left-[3.15rem]">
                {icons[e.kind]}
              </span>
              <Reveal delay={i * 0.04}>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-deep-700">
                  {labels[e.kind]}
                  {e.date ? ` · ${e.date}` : ""}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-midnight sm:text-xl">{e.title}</h3>
                {e.organisation && <p className="mt-1 text-sm font-medium text-deep-700">{e.organisation}</p>}
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75 sm:text-base">{e.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl rounded-xl border border-dashed border-deep/40 bg-white p-4 text-sm text-charcoal/70">{experienceNote}</p>
      </Container>
    </section>
  );
}
