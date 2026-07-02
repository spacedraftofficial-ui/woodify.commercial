"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiGlobe,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const projectSizes = [
  "Under 50 Seats",
  "50 – 200 Seats",
  "200 – 500 Seats",
  "500+ Seats",
  "Full Campus",
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#1A0808",
        padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 6rem)",
      }}
    >
      {/* Moving gradient bg */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 50%, rgba(232,66,26,0.08) 0%, transparent 60%)",
              "radial-gradient(ellipse at 80% 50%, rgba(232,66,26,0.08) 0%, transparent 60%)",
              "radial-gradient(ellipse at 20% 50%, rgba(232,66,26,0.08) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
            <span className="section-label">Get In Touch</span>
            <div className="w-8 h-[1px] bg-brand-orange/60" />
          </motion.div>
          <motion.h2
            className="font-heading text-off-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", lineHeight: 1 }}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9 }}
          >
            Let&apos;s Engineer{" "}
            <br />
            <span className="italic" style={{ color: "#E8421A" }}>
              Your Workspace.
            </span>
          </motion.h2>
          <motion.p
            className="text-off-white/50 font-body mt-4 max-w-lg mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Share your project requirements and our team will reach out within
            24 hours with a tailored proposal.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-off-white/60 text-xs tracking-widest uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="form-input"
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-off-white/60 text-xs tracking-widest uppercase mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company name"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="form-input"
                        id="contact-company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-off-white/60 text-xs tracking-widest uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="form-input"
                        id="contact-email"
                      />
                    </div>
                    <div>
                      <label className="block text-off-white/60 text-xs tracking-widest uppercase mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="form-input"
                        id="contact-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-off-white/60 text-xs tracking-widest uppercase mb-2">
                      Project Size
                    </label>
                    <select
                      value={formState.projectSize}
                      onChange={(e) => setFormState({ ...formState, projectSize: e.target.value })}
                      className="form-input appearance-none"
                      id="contact-project-size"
                    >
                      <option value="" disabled>
                        Select project scale
                      </option>
                      {projectSizes.map((s) => (
                        <option key={s} value={s} style={{ color: "#1D1D1D" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-off-white/60 text-xs tracking-widest uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="form-input resize-none"
                      id="contact-message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary flex items-center justify-center gap-3 relative overflow-hidden"
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {loading ? (
                      <motion.div
                        className="w-5 h-5 rounded-full border-2 border-brand-red/30 border-t-brand-red"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <span>Request Consultation</span>
                        <FiArrowRight size={16} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-3xl"
                  style={{
                    background: "rgba(232,66,26,0.06)",
                    border: "1px solid rgba(232,66,26,0.2)",
                  }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(232,66,26,0.15)" }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <FiCheck size={28} color="#E8421A" />
                  </motion.div>
                  <h3 className="font-heading text-off-white text-2xl mb-2">
                    We&apos;ll be in touch!
                  </h3>
                  <p className="text-off-white/50 text-sm font-body">
                    Thank you, {formState.name}. Our team will reach out within
                    24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <h3 className="font-heading text-off-white text-xl mb-6">
                Reach Us Directly
              </h3>
            </div>

            {[
              {
                icon: FiPhone,
                label: "Phone",
                value: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: FiMail,
                label: "Email",
                value: "info@woodifyindia.com",
                href: "mailto:info@woodifyindia.com",
              },
              {
                icon: FiGlobe,
                label: "Website",
                value: "woodifyindia.com",
                href: "https://woodifyindia.com",
              },
            ].map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Website" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl group transition-all duration-300 hover:border-brand-orange/30"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                whileHover={{ x: 4 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(232,66,26,0.12)" }}
                >
                  <contact.icon size={16} color="#E8421A" />
                </div>
                <div>
                  <div className="text-off-white/40 text-xs uppercase tracking-widest mb-1">
                    {contact.label}
                  </div>
                  <div className="text-off-white text-sm group-hover:text-brand-orange transition-colors duration-300">
                    {contact.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Address */}
            <div
              className="p-4 rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="text-off-white/40 text-xs uppercase tracking-widest mb-2">
                Address
              </div>
              <div className="text-off-white text-sm leading-relaxed">
                Woodify Commercial
                <br />
                Tiruvallur, Tamil Nadu
                <br />
                India
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
