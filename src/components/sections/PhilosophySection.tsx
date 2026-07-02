"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 50000, suffix: "+", label: "Sq.ft Factory" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [1, -1]);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative overflow-hidden bg-off-white"
      style={{ padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)" }}
    >
      {/* Background decorative text */}
      <div
        className="absolute top-0 right-0 font-heading text-[25vw] leading-none select-none pointer-events-none"
        style={{ color: "rgba(23,59,46,0.03)", zIndex: 0 }}
        aria-hidden
      >
        WOODIFY
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT – Text */}
          <div>
            {/* Section label */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
            >
              <div className="section-divider" />
              <span className="section-label">Our Philosophy</span>
            </motion.div>

            {/* Oversized heading */}
            <motion.h2
              className="font-heading text-brand-red mb-4"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", lineHeight: 0.95 }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
            >
              Manufacturing-Led.
              <br />
              <span className="italic" style={{ color: "#E8421A" }}>
                Not Retail-Led.
              </span>
            </motion.h2>

            {/* Body text */}
            <motion.p
              className="text-text-muted font-body text-base md:text-lg leading-relaxed max-w-lg mt-8 mb-12"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2}
            >
              At Woodify India, we don&apos;t stock furniture — we engineer it. Every
              workstation, cabin, and conference table is precision-manufactured
              at our 50,000+ sq.ft facility using CNC machining, quality-grade
              engineered wood, and globally-sourced hardware. We deliver at the
              scale enterprises need, with the customization they demand.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={3 + i * 0.3}
                  className="flex flex-col"
                >
                  <div
                    className="font-heading font-bold"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#E8421A", lineHeight: 1 }}
                  >
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      className="counter-number"
                    />
                  </div>
                  <div className="text-text-muted text-xs tracking-widest uppercase mt-2 font-body">
                    {stat.label}
                  </div>
                  <div
                    className="mt-3 w-8 h-[1px]"
                    style={{ backgroundColor: "#E8421A", opacity: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT – Image */}
          <motion.div
            ref={imageRef}
            className="relative"
            style={{ y: imageY, rotate: imageRotate }}
            variants={{
              hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
              visible: {
                opacity: 1,
                clipPath: "inset(0 0 0% 0)",
                transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
              },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden">
              <Image
                src="/factory.png"
                alt="Woodify India manufacturing facility — 50,000 sq.ft precision furniture factory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gold overlay border */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ border: "1px solid rgba(232,66,26,0.2)" }}
              />
              {/* Caption badge */}
              <div className="absolute bottom-6 left-6 glass-dark rounded-2xl px-5 py-3">
                <div className="text-brand-orange text-xs tracking-widest uppercase mb-1">
                  Manufacturing Facility
                </div>
                <div className="text-off-white text-sm font-body">
                  Tiruvallur, Tamil Nadu
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-brand-orange/20"
              style={{ zIndex: -1 }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full border border-brand-red/10"
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
