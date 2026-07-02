"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const quickLinks = [
  { label: "About Woodify", href: "#philosophy" },
  { label: "Workstations", href: "#workstations" },
  { label: "Executive Systems", href: "#executive" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Sustainability", href: "#sustainability" },
];

const productLinks = [
  { label: "Workstation Systems", href: "#products" },
  { label: "Meeting Tables", href: "#products" },
  { label: "Conference Tables", href: "#products" },
  { label: "Director Tables", href: "#products" },
  { label: "Reception Furniture", href: "#products" },
];

const socials = [
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiTwitter, href: "#", label: "Twitter / X" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ backgroundColor: "#1A0808" }}
      className="relative overflow-hidden"
    >
      {/* Top border */}
      <div
        className="w-full h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,66,26,0.3), transparent)" }}
      />

      <div
        className="container-luxury"
        style={{ padding: "5rem clamp(1.5rem, 5vw, 6rem) 3rem" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo("#home")}
              className="flex flex-col mb-6"
            >
              <Image
                src="/logo-white.png"
                alt="Woodify Commercial"
                width={160}
                height={50}
                className="object-contain"
              />
            </button>
            <p className="text-off-white/40 text-sm font-body leading-relaxed mb-6 max-w-xs">
              Precision-manufactured engineered office furniture for enterprises
              that demand scale, sustainability, and quality.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(232,66,26,0.15)",
                    borderColor: "rgba(232,66,26,0.3)",
                  }}
                >
                  <s.icon size={15} color="rgba(248,247,243,0.6)" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-off-white/40 text-xs tracking-[0.25em] uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-off-white/60 text-sm hover:text-brand-orange transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-off-white/40 text-xs tracking-[0.25em] uppercase mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-off-white/60 text-sm hover:text-brand-orange transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-off-white/40 text-xs tracking-[0.25em] uppercase mb-5">
              Newsletter
            </h4>
            <p className="text-off-white/40 text-xs leading-relaxed mb-4">
              Stay updated with new product launches, design insights, and
              manufacturing milestones.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                id="footer-newsletter"
                className="flex-1 px-3 py-2.5 rounded-xl text-xs font-body outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(232,66,26,0.15)",
                  color: "#F8F7F3",
                }}
              />
              <motion.button
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#E8421A" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Subscribe to newsletter"
              >
                <FiArrowRight size={15} color="#1A0808" />
              </motion.button>
            </div>

            {/* Download brochure */}
            <motion.a
              href="#"
              className="mt-4 flex items-center gap-2 text-brand-orange text-xs tracking-wider uppercase"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <span>Download Brochure</span>
              <FiArrowRight size={12} />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-off-white/30 text-xs">
            © {new Date().getFullYear()} Woodify Commercial. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-off-white/30 text-xs hover:text-brand-orange transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
