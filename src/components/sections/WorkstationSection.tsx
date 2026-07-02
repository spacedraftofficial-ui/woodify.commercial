"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  TbLayoutGrid,
  TbPlugConnected,
  TbVolume,
  TbTool,
  TbArrowRight,
} from "react-icons/tb";

const features = [
  {
    icon: TbLayoutGrid,
    title: "Linear Configurations",
    desc: "Seamlessly scalable from 2 to 200+ seats",
  },
  {
    icon: TbPlugConnected,
    title: "Integrated Cable Management",
    desc: "Hidden channels for clean, organised desks",
  },
  {
    icon: TbVolume,
    title: "Acoustic Privacy Panels",
    desc: "Engineered for focus in open-plan spaces",
  },
  {
    icon: TbTool,
    title: "Tool-Free Assembly",
    desc: "Modular design enables rapid deployment",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function WorkstationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="workstations"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#1A0808",
        padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)",
      }}
    >
      {/* BG decorative */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full -translate-y-1/2 -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, rgba(232,66,26,0.06) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT – Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95, clipPath: "inset(0 100% 0 0)" }}
            animate={
              inView
                ? { opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0)" }
                : {}
            }
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative h-[480px] lg:h-[600px] rounded-3xl overflow-hidden group img-zoom-container">
              <Image
                src="/workstation.png"
                alt="Premium modular workstation system with integrated cable management"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,40,32,0.5) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Floating tag */}
            <motion.div
              className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-brand-orange text-xs tracking-widest uppercase mb-1">
                Capacity
              </div>
              <div className="text-off-white text-xl font-heading">
                2 – 500+ Seats
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT – Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-divider" style={{ background: "linear-gradient(90deg, #E8421A, transparent)" }} />
              <span className="section-label">Workstation Systems</span>
            </motion.div>

            <motion.h2
              className="font-heading text-off-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Built for{" "}
              <span className="italic" style={{ color: "#E8421A" }}>
                Enterprise
              </span>{" "}
              Scale.
            </motion.h2>

            <motion.p
              className="text-off-white/50 font-body leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our workstation systems are precision-engineered for large-scale
              corporate deployments. Designed for flexibility, durability, and
              seamless integration into any workspace.
            </motion.p>

            {/* Features list */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-5 mb-10"
            >
              {features.map((f) => (
                <motion.li
                  key={f.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(232,66,26,0.12)",
                      border: "1px solid rgba(232,66,26,0.2)",
                    }}
                  >
                    <f.icon size={18} style={{ color: "#E8421A" }} />
                  </div>
                  <div>
                    <div className="text-off-white font-medium text-sm mb-0.5">
                      {f.title}
                    </div>
                    <div className="text-off-white/40 text-sm font-body">
                      {f.desc}
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.button
              className="group flex items-center gap-3 text-brand-orange text-sm font-medium tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Explore Workstations</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <TbArrowRight size={18} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
