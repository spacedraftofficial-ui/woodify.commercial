"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function SustainabilitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const circleScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1.05]);

  const pillars = [
    { title: "Certified Materials", desc: "E1-grade engineered wood — zero harmful emissions" },
    { title: "Waste Reduction", desc: "CNC precision minimises off-cut waste by 40%" },
    { title: "Longevity by Design", desc: "25-year durability guarantee reduces replacement cycles" },
    { title: "Responsible Sourcing", desc: "Supply chain audited for ethical forest management" },
  ];

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#1A0808",
        padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)",
      }}
    >
      {/* Organic blob backgrounds */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="blob absolute w-[700px] h-[700px] -top-40 -right-40 opacity-10"
          style={{ backgroundColor: "#E8421A" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob absolute w-[500px] h-[500px] -bottom-20 -left-20 opacity-10"
          style={{ backgroundColor: "#1A0808" }}
          animate={{ scale: [1, 0.9, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Floating leaves */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-5 opacity-20"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              backgroundColor: "#E8421A",
              borderRadius: "50% 0 50% 0",
              rotate: `${i * 30}deg`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [`${i * 30}deg`, `${i * 30 + 15}deg`, `${i * 30}deg`],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT – Animated Circle */}
          <div className="flex justify-center items-center">
            <motion.div className="relative" style={{ scale: circleScale }}>
              {/* Outer rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-brand-orange/10"
                style={{ margin: "-40px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-brand-orange/5"
                style={{ margin: "-80px" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* Main circle */}
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center text-center"
                style={{
                  background:
                    "radial-gradient(circle, rgba(23,59,46,0.9) 0%, rgba(15,40,32,0.95) 100%)",
                  border: "1px solid rgba(232,66,26,0.3)",
                  boxShadow: "0 0 80px rgba(232,66,26,0.1)",
                }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {/* Earth icon */}
                <motion.div
                  className="text-5xl mb-3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  🌍
                </motion.div>

                <div
                  className="font-heading text-off-white"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}
                >
                  Zero
                </div>
                <div
                  className="font-heading italic"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", color: "#E8421A" }}
                >
                  Emissions
                </div>
                <div className="text-off-white/40 text-xs tracking-widest uppercase mt-1">
                  by 2050
                </div>

                {/* Particle dots */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const r = 140;
                  const x = Math.cos(angle) * r;
                  const y = Math.sin(angle) * r;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-brand-orange/40"
                      style={{
                        left: "50%",
                        top: "50%",
                        marginLeft: x,
                        marginTop: y,
                      }}
                      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.25,
                      }}
                    />
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT – Content */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="section-divider" style={{ background: "linear-gradient(90deg, #E8421A, transparent)" }} />
              <span className="section-label">Sustainability</span>
            </motion.div>

            <motion.h2
              className="font-heading text-off-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Building a Greener{" "}
              <span className="italic" style={{ color: "#E8421A" }}>
                Tomorrow.
              </span>
            </motion.h2>

            <motion.p
              className="text-off-white/50 font-body leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Sustainability isn&apos;t an afterthought at Woodify — it&apos;s
              engineered into every decision. From material sourcing to end-of-life
              recyclability, our roadmap targets net-zero operations by 2050.
            </motion.p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(232,66,26,0.12)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-3"
                    style={{ backgroundColor: "#E8421A" }}
                  />
                  <div className="text-off-white text-sm font-medium mb-1">{p.title}</div>
                  <div className="text-off-white/40 text-xs font-body">{p.desc}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="btn-primary"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Sustainability Roadmap
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
