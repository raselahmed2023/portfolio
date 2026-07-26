"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, reducedMotionFade } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal = ({
  children,
  className,
  delay = 0,
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={prefersReducedMotion ? reducedMotionFade : fadeUp}
      transition={
        delay > 0
          ? { delay, duration: prefersReducedMotion ? 0.3 : 0.55, ease: [0.22, 1, 0.36, 1] }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};
