import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Insights } from "@/components/sections/Insights";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TechMarquee />
      <Stats />
      <About />
      <Expertise />
      <Process />
      <Projects />
      <Experience />
      <CtaBand />
      <Insights />
      <Faq />
      <Contact />
    </main>
  );
}
