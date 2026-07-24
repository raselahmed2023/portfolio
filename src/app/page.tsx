import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import {
  TechStack,
  Experience,
  Skills,
  Education,
  AboutMe,
} from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-32">
        <Hero />
        <ProjectsSection />
        <TechStack />
        <Experience />
        <Skills />
        <Education />
        <AboutMe />
      </main>

      <Footer />
    </>
  );
}