import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { TechStack } from "@/components/sections/tech-stack";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <FeaturedWork />
      <Process />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
