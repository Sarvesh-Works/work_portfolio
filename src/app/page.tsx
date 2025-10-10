import { Navbar } from "../components/navbar";
import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Experience } from "../components/sections/experience";
import { Skills } from "../components/sections/skills";
import { Projects } from "../components/sections/projects";
import { Education } from "../components/sections/education";
import { Contact } from "../components/sections/contact";
import { Footer } from "../components/footer";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
