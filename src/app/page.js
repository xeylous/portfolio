import About from "@/components/About";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Work Experience */}
      <section id="work">
        <WorkExperience />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen scroll-mt-16">
        <Contact />
      </section>

      <section id="socials">
        <Socials />
      </section>

      <section>
        <Footer />
      </section>

    </main>
  );
}
