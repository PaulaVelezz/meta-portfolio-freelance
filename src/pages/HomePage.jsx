import { useState } from "react";
import Hero from "@/components/site/Hero";
import Portfolio from "@/components/site/Portfolio";
import SectorsAlternative from "@/components/site/SectorsAlternative";
import Problems from "@/components/site/Problems";
import Methodology from "@/components/site/Methodology";
import Capabilities from "@/components/site/Capabilities";
import Team from "@/components/site/Team";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import GrowthStack from "@/components/site/GrowthStack";
import { Testimonials } from "@/components/site/Testimonials";
import LogosScroll from "@/components/site/LogosScroll";

function HomePage() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Hero animate={heroReady} />
      <LogosScroll />
      <Portfolio />
      <SectorsAlternative />
      <Problems />
      <Methodology />
      <Capabilities />
      <GrowthStack />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

export default HomePage;
