"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = () => { isHovering.current = true; };
    const onLeave = () => { isHovering.current = false; };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => document.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[rgba(232,201,122,0.35)] pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}