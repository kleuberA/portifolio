import { GridBackground } from "@/components/GridBackground";
import About from "@/components/about/about";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="">
      <GridBackground />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
