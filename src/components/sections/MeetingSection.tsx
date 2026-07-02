"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TbUsers, TbBrandTeams, TbCoffee } from "react-icons/tb";

const cards = [
  {
    id: "meeting",
    title: "Meeting Systems",
    subtitle: "6 to 36-seater configurations",
    desc: "Precision conference tables engineered for boardrooms, strategy rooms, and collaborative decision-making spaces. Available in veneer, laminate, and glass finishes.",
    icon: TbUsers,
    features: ["6 to 36-seater", "Wire management", "Power modules", "Custom shapes"],
    gradient: "linear-gradient(135deg, #1A0808 0%, #1A0808 100%)",
  },
  {
    id: "collaboration",
    title: "Collaboration Systems",
    subtitle: "Open-plan co-working furniture",
    desc: "Flexible modular furniture designed for agile teams. Standing desk clusters, breakout pods, and lounge seating that encourage spontaneous collaboration.",
    icon: TbBrandTeams,
    features: ["Height adjustable", "Acoustic booths", "Lounge pods", "Breakout zones"],
    gradient: "linear-gradient(135deg, #1a3528 0%, #1A0808 100%)",
  },
  {
    id: "cafeteria",
    title: "Pantry & Cafeteria",
    subtitle: "Dining & breakout solutions",
    desc: "Premium cafeteria furniture that transforms your office pantry into a destination. Durable, stylish, and easy to maintain for high-traffic environments.",
    icon: TbCoffee,
    features: ["Solid wood tops", "Easy maintenance", "Stackable chairs", "Custom colours"],
    gradient: "linear-gradient(135deg, #193023 0%, #101e17 100%)",
  },
];

export default function MeetingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="meeting"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#1A0808",
        padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)",
      }}
    >
      {/* Blob BG */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob absolute w-[600px] h-[600px] -top-32 -left-32"
          style={{ backgroundColor: "#E8421A" }}
        />
        <div
          className="blob absolute w-[400px] h-[400px] bottom-0 right-0"
          style={{ backgroundColor: "#1A0808" }}
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="w-8 h-[1px] bg-brand-orange/60" />
            <span className="section-label">Meeting & Collaboration</span>
            <div className="w-8 h-[1px] bg-brand-orange/60" />
          </motion.div>
          <motion.h2
            className="font-heading text-off-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Where Decisions{" "}
            <span className="italic" style={{ color: "#E8421A" }}>
              Get Made.
            </span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <MeetingCard key={card.id} card={card} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetingCard({
  card,
  index,
  inView,
}: {
  card: (typeof cards)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-3xl p-8 cursor-pointer"
      style={{
        background: card.gradient,
        border: hovered
          ? "1px solid rgba(232,66,26,0.3)"
          : "1px solid rgba(255,255,255,0.05)",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), border 0.3s ease, box-shadow 0.4s ease",
        boxShadow: hovered
          ? "0 30px 80px rgba(0,0,0,0.4)"
          : "0 10px 40px rgba(0,0,0,0.2)",
      }}
    >
      {/* Glass overlay on hover */}
      <div
        className="absolute inset-0 rounded-3xl transition-opacity duration-400"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: hovered ? "blur(2px)" : "blur(0px)",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
          style={{
            background: "rgba(232,66,26,0.12)",
            border: "1px solid rgba(232,66,26,0.2)",
            transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <card.icon size={22} color="#E8421A" />
        </div>

        {/* Title */}
        <h3
          className="font-heading text-off-white mb-1"
          style={{ fontSize: "1.5rem", lineHeight: 1.1 }}
        >
          {card.title}
        </h3>
        <p className="text-brand-orange text-xs tracking-widest uppercase mb-4">
          {card.subtitle}
        </p>

        {/* Description */}
        <p className="text-off-white/50 text-sm font-body leading-relaxed mb-6">
          {card.desc}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {card.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-off-white/60 text-xs">
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#E8421A" }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Bottom arrow */}
        <div
          className="mt-6 flex items-center gap-2 text-brand-orange text-xs tracking-wider uppercase"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.3s ease",
          }}
        >
          <span>Learn More</span>
          <span>→</span>
        </div>
      </div>
    </motion.div>
  );
}
