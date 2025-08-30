import About from "@/components/About";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import MyProjects from "@/components/MyProjects";

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
        <MyProjects />
      </section>

      {/* Contact */}
      <section id="contact">
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
