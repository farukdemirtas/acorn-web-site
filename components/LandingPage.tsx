"use client";

/**
 * Single-page composition: navbar, all sections, footer.
 * i18n is provided in app/layout via I18nProvider.
 */
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutOak } from "@/components/sections/AboutOak";
import { AcornStory } from "@/components/sections/AcornStory";
import { LogoShowcase } from "@/components/sections/LogoShowcase";
import { MascotSection } from "@/components/sections/MascotSection";
import { CTASection } from "@/components/sections/CTASection";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutOak />
        <AcornStory />
        <LogoShowcase />
        <MascotSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
