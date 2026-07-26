"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTerminal, FiMail, FiArrowUp } from "react-icons/fi";
import type { IconType } from "react-icons";
import { fadeUp, reducedMotionFade } from "@/lib/motion";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="border-t border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={prefersReducedMotion ? reducedMotionFade : fadeUp}
        className="mx-auto max-w-6xl px-6 py-7"
      >
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="text-center sm:text-left">
            <Link
              href="/#home"
              className="mono-font inline-flex items-center gap-1 text-lg font-bold"
              aria-label="Go to home section"
            >
              <span className="text-primary">{"{"}</span>

              <span className="text-slate-900 dark:text-white">
                RA
              </span>

              <span className="text-secondary">{"}"}</span>
            </Link>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Frontend Developer | MERN Stack &amp; Full-Stack
              Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FooterSocialLink
              href="https://github.com/raselahmed2023"
              label="GitHub"
              Icon={FiGithub}
              reducedMotion={prefersReducedMotion ?? false}
            />

            <FooterSocialLink
              href="https://www.linkedin.com/in/rasel-ahmed06/"
              label="LinkedIn"
              Icon={FiLinkedin}
              reducedMotion={prefersReducedMotion ?? false}
            />

            <FooterSocialLink
              href="https://leetcode.com/u/rasel_ahmed06/"
              label="LeetCode"
              Icon={FiTerminal}
              reducedMotion={prefersReducedMotion ?? false}
            />

            <FooterSocialLink
              href="mailto:raselahmediu22@gmail.com"
              label="Email"
              Icon={FiMail}
              external={false}
              reducedMotion={prefersReducedMotion ?? false}
            />
          </div>
        </div>

        <div className="my-5 h-px bg-slate-200 dark:bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:text-left">
          <p>
            © {currentYear} Rasel Ahmed. All rights reserved.
          </p>

          <Link
            href="/#home"
            className="inline-flex items-center gap-1 font-semibold transition-colors hover:text-primary"
          >
            Back to top

            <FiArrowUp aria-hidden="true" className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

interface FooterSocialLinkProps {
  href: string;
  label: string;
  Icon: IconType;
  external?: boolean;
  reducedMotion: boolean;
}

const FooterSocialLink = ({
  href,
  label,
  Icon,
  external = true,
  reducedMotion,
}: FooterSocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
    </motion.a>
  );
};

export default Footer;
