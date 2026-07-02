"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Head of Facilities",
    company: "TechCorp India",
    quote:
      "Woodify delivered 850 workstations across our 3 campuses in just 6 weeks. The quality, consistency, and after-sales support have been exceptional. It's the only furniture partner we'll ever need.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "CEO",
    company: "FinanceHub Solutions",
    quote:
      "Our new executive floor looks like something from a premium global bank. Woodify understood our brief perfectly — the director cabins are absolutely stunning and built to last decades.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anand Krishnamurthy",
    title: "VP Infrastructure",
    company: "Pharma Global India",
    quote:
      "We've worked with many furniture vendors but Woodify operates at a completely different level. Manufacturing-led quality means every piece is identical. Perfect for our 1,200-seat facility.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-off-white"
      style={{ padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)" }}
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="w-8 h-[1px] bg-brand-red/30" />
            <span className="section-label text-brand-red">Client Stories</span>
            <div className="w-8 h-[1px] bg-brand-red/30" />
          </motion.div>
          <motion.h2
            className="font-heading text-brand-red"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Trusted by{" "}
            <span className="italic" style={{ color: "#E8421A" }}>
              Industry Leaders.
            </span>
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-3xl p-8 md:p-12 text-center"
              style={{
                background: "rgba(23,59,46,0.04)",
                border: "1px solid rgba(23,59,46,0.08)",
              }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FiStar key={i} size={16} color="#E8421A" fill="#E8421A" />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="font-heading text-brand-red italic mb-8"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", lineHeight: 1.4 }}
              >
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <div className="text-text-dark font-semibold text-sm">
                  {testimonials[current].name}
                </div>
                <div className="text-text-muted text-xs mt-0.5">
                  {testimonials[current].title}, {testimonials[current].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-brand-red/20 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    backgroundColor: i === current ? "#E8421A" : "rgba(23,59,46,0.2)",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-brand-red/20 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
