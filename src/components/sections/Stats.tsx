import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { expertise } from "@/content/expertise";
import { projects } from "@/content/projects";

/** Figures are derived from the site's own content, never invented. */
const stats = [
  { value: String(projects.length), label: "Featured projects" },
  { value: String(expertise.length), label: "Core disciplines" },
  { value: "3", label: "Platforms: desktop, web & mobile" },
  { value: "ISC2", label: "Certified in Cybersecurity (CC)" },
];

export function Stats() {
  return (
    <section aria-label="At a glance" className="on-light border-b border-line bg-white">
      <Container>
        <dl className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="px-2 py-8 text-center sm:py-12 lg:px-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold text-midnight sm:text-5xl" aria-hidden="true">{s.value}</dd>
                <p className="mt-2 text-sm text-charcoal/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
