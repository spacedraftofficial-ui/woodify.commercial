"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp({ phone }: { phone: string }) {
  const url = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=Hello%2C%20I%27m%20interested%20in%20Woodify%20office%20furniture%20systems.`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} color="#fff" />
    </motion.a>
  );
}
