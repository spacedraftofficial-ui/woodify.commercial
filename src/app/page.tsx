"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PhilosophySection from "@/components/sections/PhilosophySection";
import WorkstationSection from "@/components/sections/WorkstationSection";
import ProductGridSection from "@/components/sections/ProductGridSection";
import MeetingSection from "@/components/sections/MeetingSection";
import ExecutiveSection from "@/components/sections/ExecutiveSection";
import ManufacturingSection from "@/components/sections/ManufacturingSection";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClientLogos from "@/components/sections/ClientLogos";
import ContactSection from "@/components/sections/ContactSection";

// Dynamically import heavy Three.js hero
const HeroSection = dynamic(
  () => import("@/components/sections/HeroSection"),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0f2820" }}
      >
        <div className="text-off-white/20 font-heading text-4xl tracking-widest">
          WOODIFY
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <WorkstationSection />
      <ProductGridSection />
      <MeetingSection />
      <ExecutiveSection />
      <ManufacturingSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <ClientLogos />
      <ContactSection />
      <Footer />
    </main>
  );
}
