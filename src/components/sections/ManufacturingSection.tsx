"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Material Selection",
    desc: "We source only certified engineered wood, premium laminates, and globally-sourced hardware. Every material undergoes rigorous quality testing before entering our production line.",
    tags: ["E1 Grade Board", "ISO Certified", "Zero Formaldehyde"],
  },
  {
    number: "02",
    title: "CNC Machining",
    desc: "State-of-the-art 5-axis CNC machining centres ensure sub-millimetre precision on every cut, edge, and joint. Zero manual cutting in our process.",
    tags: ["5-Axis CNC", "±0.1mm Tolerance", "Auto Edge Banding"],
  },
  {
    number: "03",
    title: "Assembly",
    desc: "Trained assembly technicians at dedicated workstations bring together components with exacting standards. Every connection is tested for load capacity and longevity.",
    tags: ["Load Tested", "Dowel Joinery", "Steel Brackets"],
  },
  {
    number: "04",
    title: "Quality Gate",
    desc: "A 14-point quality inspection covers surface finish, structural integrity, dimensional accuracy, and hardware function before any piece leaves our facility.",
    tags: ["14-Point QC", "ISO 9001", "Final Audit"],
  },
];

function TimelineStep({
  step,
  index,
  inView,
}: {
  step: (typeof steps)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-start gap-8 ${isEven ? "flex-row" : "flex-row-reverse"} md:flex-row md:gap-12`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Step number bubble */}
      <motion.div
        className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-heading font-bold text-lg relative z-10"
        animate={{
          scale: hovered ? 1.15 : 1,
          backgroundColor: hovered ? "#E8421A" : "rgba(232,66,26,0.15)",
          color: hovered ? "#1A0808" : "#E8421A",
        }}
        style={{
          border: "1px solid rgba(232,66,26,0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        {step.number}
      </motion.div>

      {/* Content card */}
      <motion.div
        className="flex-1 pb-12 md:max-w-lg"
        animate={{
          borderColor: hovered ? "rgba(232,66,26,0.3)" : "rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="rounded-3xl p-6 transition-all duration-400"
          style={{
            background: hovered
              ? "rgba(232,66,26,0.06)"
              : "rgba(255,255,255,0.03)",
            border: hovered
              ? "1px solid rgba(232,66,26,0.2)"
              : "1px solid rgba(255,255,255,0.06)",
            boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.3)" : "none",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <h3
            className="font-heading text-off-white mb-3"
            style={{ fontSize: "1.4rem" }}
          >
            {step.title}
          </h3>
          <p className="text-off-white/50 text-sm font-body leading-relaxed mb-4">
            {step.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(232,66,26,0.1)",
                  border: "1px solid rgba(232,66,26,0.2)",
                  color: "#E8421A",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ManufacturingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="manufacturing"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#1A0808",
        padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)",
      }}
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="w-8 h-[1px] bg-brand-orange/60" />
            <span className="section-label">Manufacturing Process</span>
            <div className="w-8 h-[1px] bg-brand-orange/60" />
          </motion.div>
          <motion.h2
            className="font-heading text-off-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            From Raw Material to
            <br />
            <span className="italic" style={{ color: "#E8421A" }}>
              Boardroom Standard.
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-8 top-8 bottom-8 w-[1px] bg-white/5">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(to bottom, #E8421A, transparent)",
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <TimelineStep key={step.number} step={step} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
