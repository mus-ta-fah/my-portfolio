import Hero     from "@/components/hero";
import Problem  from "@/components/problem";
import About    from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Process  from "@/components/process";
import CTA      from "@/components/CTA";
import Footer   from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <About />
      <Services />
      <Projects />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
