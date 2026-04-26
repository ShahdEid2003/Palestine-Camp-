import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Schedule } from "@/components/Schedule";
import { Activities } from "@/components/Activities";
import { Levels } from "@/components/Levels";
import { Pricing } from "@/components/Pricing";
import { Results } from "@/components/Results";
import { Register } from "@/components/Register";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Programs /></div>
        <div className="reveal"><Schedule /></div>
        <div className="reveal"><Activities /></div>
        <div className="reveal"><Levels /></div>
        <div className="reveal"><Pricing /></div>
        <div className="reveal"><Results /></div>
        <div className="reveal"><Register /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
