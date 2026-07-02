"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#philosophy" },
  { label: "Systems", href: "#workstations" },
  { label: "Products", href: "#products" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "home",
      "philosophy",
      "workstations",
      "products",
      "manufacturing",
      "sustainability",
      "contact",
    ];

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        id="navbar"
        className="fixed top-0 left-0 right-0 z-[500] transition-all duration-500"
        animate={{
          backgroundColor: scrolled
            ? "rgba(26, 8, 8, 0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: scrolled
            ? "1px solid rgba(232, 66, 26, 0.2)"
            : "1px solid transparent",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container-luxury flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex flex-col leading-none group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/logo-white.png"
              alt="Woodify Commercial"
              width={160}
              height={50}
              className="object-contain"
            />
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
                      isActive ? "" : "text-off-white/80 hover:text-off-white"
                    }`}
                    style={isActive ? { color: "#E8421A" } : {}}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-[1px]"
                        style={{ backgroundColor: "#E8421A" }}
                        layoutId="activeNav"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => handleNavClick("#contact")}
              className="hidden lg:flex btn-primary text-xs py-3 px-6"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Consultation
            </motion.button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-off-white p-2 rounded-xl border border-white/10"
              aria-label="Toggle menu"
            >
              {menuOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[400] flex flex-col"
            style={{ backgroundColor: "#1A0808" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-8 pt-24">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-heading text-4xl text-off-white transition-colors"
                  style={{} as React.CSSProperties}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E8421A')}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick("#contact")}
                className="mt-6 btn-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Request Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
