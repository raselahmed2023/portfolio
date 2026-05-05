import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Projects, TechStack, Experience, Skills, Education, AboutMe } from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <Hero />
        <Projects />
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
