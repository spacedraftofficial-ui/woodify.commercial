"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TbDesk,
  TbArmchair,
  TbTable,
  TbBuilding,
  TbCrown,
  TbStar,
  TbDoor,
  TbUsers,
  TbCoffee,
  TbLayoutBoard,
} from "react-icons/tb";

const products = [
  {
    id: 1,
    title: "Workstations",
    desc: "Modular linear & cluster configurations",
    icon: TbDesk,
    color: "#1A0808",
    size: "large",
    bg: "from-brand-red-dark to-[#1A0808]",
  },
  {
    id: 2,
    title: "Cabin Tables",
    desc: "Private executive cabin solutions",
    icon: TbArmchair,
    color: "#E8421A",
    size: "small",
    bg: "from-[#1a2a20] to-[#0d1f16]",
  },
  {
    id: 3,
    title: "Meeting Tables",
    desc: "6 to 24-seater meeting configurations",
    icon: TbTable,
    color: "#E8421A",
    size: "small",
    bg: "from-[#1d3528] to-[#102318]",
  },
  {
    id: 4,
    title: "Conference Tables",
    desc: "Boardroom-grade precision tables",
    icon: TbBuilding,
    color: "#F8F7F3",
    size: "large",
    bg: "from-[#1A0808] to-[#1A0808]",
  },
  {
    id: 5,
    title: "Director Tables",
    desc: "Authority by design, crafted in wood",
    icon: TbCrown,
    color: "#E8421A",
    size: "small",
    bg: "from-[#1c3326] to-[#0f2218]",
  },
  {
    id: 6,
    title: "MD Tables",
    desc: "Flagship executive desk systems",
    icon: TbStar,
    color: "#E8421A",
    size: "small",
    bg: "from-[#193023] to-[#0f2118]",
  },
  {
    id: 7,
    title: "Reception",
    desc: "Make the right first impression",
    icon: TbDoor,
    color: "#F8F7F3",
    size: "large",
    bg: "from-[#163822] to-[#0e2619]",
  },
  {
    id: 8,
    title: "Collaboration",
    desc: "Open-plan co-working furniture",
    icon: TbUsers,
    color: "#E8421A",
    size: "small",
    bg: "from-[#1a3526] to-[#102219]",
  },
  {
    id: 9,
    title: "Cafeteria",
    desc: "Premium pantry & dining furniture",
    icon: TbCoffee,
    color: "#E8421A",
    size: "small",
    bg: "from-[#1b3427] to-[#10231a]",
  },
  {
    id: 10,
    title: "Centre Tables",
    desc: "Lounge and accent table systems",
    icon: TbLayoutBoard,
    color: "#F8F7F3",
    size: "large",
    bg: "from-[#153621] to-[#0d2418]",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-3xl cursor-pointer group ${
        product.size === "large" ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{ minHeight: product.size === "large" ? "320px" : "200px" }}
      whileHover={{ y: -6, transition: { duration: 0.4 } }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${product.bg} transition-all duration-500`}
      />

      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: hovered
            ? "radial-gradient(circle at 50% 50%, rgba(232,66,26,0.12) 0%, transparent 70%)"
            : "transparent",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Border */}
      <div
        className="absolute inset-0 rounded-3xl transition-all duration-500"
        style={{
          border: hovered
            ? "1px solid rgba(232,66,26,0.3)"
            : "1px solid rgba(255,255,255,0.05)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.06)" }}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <product.icon size={22} style={{ color: product.color }} />
        </motion.div>

        {/* Text */}
        <div className="mt-auto">
          <motion.div
            animate={{ y: hovered ? -5 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3
              className="font-heading font-semibold mb-1"
              style={{
                fontSize: product.size === "large" ? "clamp(1.5rem, 2.5vw, 2.2rem)" : "1.1rem",
                color: product.color === "#F8F7F3" ? "#F8F7F3" : "#F8F7F3",
                lineHeight: 1.1,
              }}
            >
              {product.title}
            </h3>
            <p className="text-off-white/40 text-sm font-body">{product.desc}</p>
          </motion.div>

          {/* Hover: reveal arrow */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-brand-orange text-xs tracking-wider uppercase"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn More</span>
            <span>→</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative overflow-hidden bg-off-white"
      style={{ padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)" }}
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-divider" />
              <span className="section-label">Product Systems</span>
            </motion.div>
            <motion.h2
              className="font-heading text-brand-red"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Complete Workspace
              <br />
              <span className="italic" style={{ color: "#E8421A" }}>
                Ecosystems.
              </span>
            </motion.h2>
          </div>
          <motion.p
            className="text-text-muted font-body max-w-xs text-sm leading-relaxed md:text-right"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            10 product categories covering every touchpoint of a modern
            corporate workspace — from reception to boardroom.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
