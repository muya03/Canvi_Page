import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Proposals } from "@/components/sections/Proposals";
import { Achievements } from "@/components/sections/Achievements";
import { Values } from "@/components/sections/Values";
import { News } from "@/components/sections/News";
import { JoinUs } from "@/components/sections/JoinUs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Values />
        <Proposals />
        <Achievements />
        <News />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}