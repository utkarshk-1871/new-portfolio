import { About } from "@/sections/About";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
