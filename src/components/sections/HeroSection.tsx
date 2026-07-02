"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import { FiArrowDown } from "react-icons/fi";

// ─── Three.js Scene ─────────────────────────────────────
function WireframeBuilding() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    // Subtle mouse parallax
    meshRef.current.position.x = mouse.x * 0.5;
    meshRef.current.position.y = mouse.y * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2.5, 3.5, 2.5, 8, 10, 8]} />
      <meshBasicMaterial
        color="#E8421A"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

function FurnitureSilhouette({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5 + position[0]) * 0.15;
    ref.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.6, 0.08, 0.3]} />
      <meshBasicMaterial color="#E8421A" transparent opacity={0.08} wireframe />
    </mesh>
  );
}

function ParticleField() {
  const count = 400;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.01;
      ref.current.rotation.x = clock.getElapsedTime() * 0.005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#E8421A" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <WireframeBuilding />
      <FurnitureSilhouette position={[-3, -1, -2]} />
      <FurnitureSilhouette position={[3.5, -0.5, -1]} />
      <FurnitureSilhouette position={[-2, 1.5, -3]} />
      <FurnitureSilhouette position={[2, 0.8, -2.5]} />
      <ParticleField />
    </>
  );
}

// ─── Text Reveal Animation ───────────────────────────────
function CharacterReveal({ text, className }: { text: string; className?: string }) {
  const chars = text.split("");
  return (
    <span className={`inline-flex flex-wrap overflow-hidden ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.5 + i * 0.04,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: char === " " ? "inline-block" : "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Main Hero ───────────────────────────────────────────
export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("philosophy");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#1A0808" }}
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,8,8,0.93) 0%, rgba(42,14,14,0.72) 50%, rgba(26,8,8,0.88) 100%)",
        }}
      />

      {/* Hero image overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      />

      {/* Content */}
      <div className="container-luxury relative z-10 flex-1 flex flex-col justify-center items-start w-full" style={{ paddingTop: "clamp(7rem, 14vh, 10rem)", paddingBottom: "clamp(6rem, 12vh, 9rem)" }}>
        <div className="max-w-3xl text-left flex flex-col items-start w-full">
          {/* Label */}
          <motion.div
            className="flex items-center gap-4 mb-6 justify-start w-full"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="w-8 h-[1px]" style={{ backgroundColor: "#E8421A" }} />
            <span className="section-label" style={{ color: "#E8421A" }}>
              Woodify Commercial
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="overflow-hidden mb-2 text-left w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <motion.p
              className="text-off-white/60 text-sm tracking-[0.3em] uppercase font-body"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              Sustainable Elegance
            </motion.p>
          </motion.div>

          {/* Main Headline */}
          <h1
            className="font-heading text-off-white mb-6 leading-none text-left"
            style={{ fontSize: "clamp(3.5rem, 7.5vw, 7.5rem)", lineHeight: 0.95 }}
          >
            <div className="overflow-hidden flex justify-start w-full">
              <CharacterReveal text="Engineered" />
            </div>
            <div className="overflow-hidden flex justify-start w-full" style={{ color: "#E8421A" }}>
              <CharacterReveal text="Office" />
            </div>
            <div className="overflow-hidden flex justify-start w-full">
              <CharacterReveal text="Furniture" />
            </div>
            <div className="overflow-hidden flex justify-start w-full">
              <CharacterReveal text="Systems" />
            </div>
          </h1>

          {/* Description */}
          <motion.p
            className="text-off-white/60 font-body text-base md:text-lg max-w-lg leading-relaxed mb-10 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            Precision-manufactured modular furniture for enterprises that
            demand scale, sustainability, and uncompromising quality.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-start w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
          >
            <MagneticButton>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary relative overflow-hidden group"
              >
                <span className="relative z-10">Request Consultation</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Systems</span>
              </button>
            </MagneticButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10 justify-start w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8 }}
          >
            {[
              { value: "50K+", label: "Sq.ft Factory" },
              { value: "200+", label: "Projects Delivered" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col text-left">
                <span className="font-heading text-3xl font-semibold" style={{ color: "#E8421A" }}>
                  {stat.value}
                </span>
                <span className="text-off-white/40 text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <span className="text-off-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FiArrowDown size={18} color="rgba(232,66,26,0.7)" />
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-[5]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(15,40,32,0.95) 100%)",
        }}
      />
    </section>
  );
}
