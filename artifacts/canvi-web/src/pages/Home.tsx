import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Proposals } from "@/components/sections/Proposals";
import { Achievements } from "@/components/sections/Achievements";
import { Values } from "@/components/sections/Values";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Proposals />
        <Achievements />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
