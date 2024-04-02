import About from "@/components/about/about";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
