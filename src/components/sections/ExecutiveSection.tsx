"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TbCrown, TbBox, TbStar, TbSettings } from "react-icons/tb";

const features = [
  { icon: TbCrown, label: "Director Systems", desc: "Command presence in every room" },
  { icon: TbBox, label: "Cabin Storage", desc: "Precision-crafted storage solutions" },
  { icon: TbStar, label: "Premium Veneers", desc: "Walnut, oak, and teak finishes" },
  { icon: TbSettings, label: "Custom Configuration", desc: "Fully bespoke to your floor plan" },
];

export default function ExecutiveSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="executive"
      ref={sectionRef}
      className="relative overflow-hidden bg-off-white"
      style={{ padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)" }}
    >
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT – Content */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-divider" />
              <span className="section-label">Executive Systems</span>
            </motion.div>

            <motion.h2
              className="font-heading text-brand-red mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Crafted Authority.
              <br />
              <span className="italic" style={{ color: "#E8421A" }}>
                Engineered Confidence.
              </span>
            </motion.h2>

            <motion.p
              className="text-text-muted font-body text-base leading-relaxed max-w-md mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our executive furniture collection is designed for leaders who
              demand the finest. Every surface, edge, and joint reflects the
              precision engineering that Woodify brings to its manufacturing
              process — resulting in pieces that command authority.
            </motion.p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-2xl group hover:bg-brand-red/5 transition-colors duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: "rgba(23,59,46,0.08)",
                      border: "1px solid rgba(23,59,46,0.12)",
                    }}
                  >
                    <f.icon size={16} color="#1A0808" />
                  </div>
                  <div>
                    <div className="text-text-dark font-medium text-sm mb-0.5">{f.label}</div>
                    <div className="text-text-muted text-xs">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              className="btn-outline-dark"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Configure Your Executive Suite
            </motion.button>
          </div>

          {/* RIGHT – Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={
              inView
                ? { opacity: 1, clipPath: "inset(0 0 0% 0)" }
                : {}
            }
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          >
            <div className="relative h-[520px] lg:h-[680px] rounded-3xl overflow-hidden group">
              <Image
                src="/executive.png"
                alt="Premium executive office furniture — Director's desk with walnut veneer and gold accents"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(23,59,46,0.6) 0%, transparent 60%)",
                }}
              />
              {/* Luxury badge */}
              <div className="absolute top-6 right-6 glass-dark rounded-2xl px-4 py-3 text-center">
                <div className="text-brand-orange text-[0.6rem] tracking-widest uppercase mb-1">
                  Premium
                </div>
                <div className="text-off-white text-sm font-heading italic">
                  Collection
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div
              className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 rounded-full"
              style={{ border: "1px solid rgba(232,66,26,0.15)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
