import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Highlights } from "@/components/Highlights";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { GithubContributions } from "@/components/GithubContributions";
import { FundsRaised } from "@/components/FundsRaised";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Highlights />
      <Blog />
      <Projects />
      <GithubContributions />
      <FundsRaised />
      <Footer />
    </main>
  );
}
