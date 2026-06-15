
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Achievements from "@/components/portfolio/Achievements";
import Projects from "@/components/portfolio/Projects";
import Publications from "@/components/portfolio/Publications";
import Extracurricular from "@/components/portfolio/Extracurricular";
import Contact from "@/components/portfolio/Contact";
import Navigation from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Projects />
      <Publications />
      <Extracurricular />
      <Contact />
    </div>
  );
};

export default Index;
