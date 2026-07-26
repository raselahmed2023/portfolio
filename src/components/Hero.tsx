"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiFileText,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTerminal,
  FiCode,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import {
  staggerContainer,
  fadeUp,
  reducedMotionFade,
} from "@/lib/motion";

const RESUME_URL =
  "https://drive.google.com/file/d/1Wz0ls0Cm7kpV-uAKF2aIjzcslyMmOkQ-/view";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const contentVariants = prefersReducedMotion
    ? reducedMotionFade
    : staggerContainer;

  const itemVariants = prefersReducedMotion
    ? reducedMotionFade
    : fadeUp;

  return (
    <section
      id="home"
      className="scroll-mt-24 pb-16 pt-4"
    >
      <div className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Hero Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.p
            variants={itemVariants}
            className="mono-font mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="heading-font text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Rasel Ahmed
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="heading-font mt-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
          >
            Frontend Developer | MERN Stack & Full-Stack Enthusiast
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            I enjoy building responsive, user-friendly, and
            practical web applications that solve real-world
            problems.
          </motion.p>

          {/* Main Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap gap-3"
          >
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              <FiFileText aria-hidden="true" className="h-4 w-4 shrink-0" />

              View Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-all hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              <FiMail aria-hidden="true" className="h-4 w-4 shrink-0" />

              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <HeroSocialLink
              href="https://github.com/raselahmed2023"
              label="GitHub"
              Icon={FiGithub}
              reducedMotion={prefersReducedMotion ?? false}
            />

            <HeroSocialLink
              href="https://www.linkedin.com/in/rasel-ahmed06/"
              label="LinkedIn"
              Icon={FiLinkedin}
              reducedMotion={prefersReducedMotion ?? false}
            />

            <HeroSocialLink
              href="https://leetcode.com/u/rasel_ahmed06/"
              label="LeetCode"
              Icon={FiTerminal}
              reducedMotion={prefersReducedMotion ?? false}
            />

            <HeroSocialLink
              href="mailto:raselahmediu22@gmail.com"
              label="Email"
              Icon={FiMail}
              external={false}
              reducedMotion={prefersReducedMotion ?? false}
            />
          </motion.div>
        </motion.div>

        {/* Professional Photo */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 28, scale: 0.97 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />

            <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:h-80 sm:w-80">
              <Image
                src="/profile.jpg"
                alt="Rasel Ahmed"
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-top"
              />
            </div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>

                <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  Open to Opportunities
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -right-4 top-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg"
            >
              <FiCode aria-hidden="true" className="h-6 w-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface HeroSocialLinkProps {
  href: string;
  label: string;
  Icon: IconType;
  external?: boolean;
  reducedMotion: boolean;
}

const HeroSocialLink = ({
  href,
  label,
  Icon,
  external = true,
  reducedMotion,
}: HeroSocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external ? "noopener noreferrer" : undefined
      }
      aria-label={label}
      title={label}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-all hover:border-primary hover:text-primary hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
    >
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />

      <span>{label}</span>
    </motion.a>
  );
};

export default Hero;
