"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clientNames = [
  "TechCorp India",
  "FinanceHub",
  "Pharma Global",
  "BuildRight Group",
  "InfoSys Partners",
  "Capital Markets",
  "MedTech India",
  "AutoSys Corp",
];

export default function ClientLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const doubled = [...clientNames, ...clientNames];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-off-white"
      style={{ padding: "3rem 0" }}
    >
      {/* Label */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        <span className="text-text-muted text-xs tracking-[0.3em] uppercase">
          Trusted by leading enterprises across India
        </span>
      </motion.div>

      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #F8F7F3, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F8F7F3, transparent)" }}
      />

      {/* Marquee */}
      <div className="marquee-container">
        <motion.div
          className="marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center mx-8 flex-shrink-0"
            >
              <span
                className="font-heading text-lg tracking-wider whitespace-nowrap"
                style={{ color: "rgba(23,59,46,0.2)" }}
              >
                {name}
              </span>
              <span
                className="ml-8 w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: "rgba(232,66,26,0.4)" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
