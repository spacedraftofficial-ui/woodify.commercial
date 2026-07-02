"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotSpringConfig = { damping: 50, stiffness: 400, mass: 0.2 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleLinkHoverIn = () => setIsHovering(true);
    const handleLinkHoverOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverIn);
      el.addEventListener("mouseleave", handleLinkHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverIn);
        el.removeEventListener("mouseleave", handleLinkHoverOut);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          width: isHovering ? 56 : isClicking ? 20 : 36,
          height: isHovering ? 56 : isClicking ? 20 : 36,
          opacity: isHidden ? 0 : 1,
          borderColor: isHovering ? "#E8421A" : "rgba(248,247,243,0.8)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(248,247,243,0.8)",
          backgroundColor: "transparent",
        }}
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#E8421A",
        }}
        animate={{ opacity: isHidden ? 0 : 1, scale: isClicking ? 0.5 : 1 }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
