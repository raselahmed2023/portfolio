'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionA = motion.a;
const MotionP = motion.p;

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <MotionSection
      className="text-center mb-20"
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionDiv
        className="relative inline-block mb-8"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1, ease: 'easeOut' },
          },
        }}
      >
        <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full"></div>
        <Image
          alt="Rasel Ahmed"
          width={160}
          height={160}
          priority
          className="relative w-40 h-40 rounded-full border-4 border-slate-200 dark:border-slate-800 object-cover shadow-2xl"
          src="/profile.jpg"
        />
      </MotionDiv>

      <MotionH1
        className="text-4xl md:text-6xl font-extrabold mb-4 max-w-4xl mx-auto leading-tight heading-font"
        variants={itemVariants}
      >
        I'm <span className="gradient-text">Rasel Ahmed</span>,
        <br />
        a Junior Frontend Developer
      </MotionH1>

      <MotionP
        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8"
        variants={itemVariants}
      >
        Building modern, responsive, and user-friendly web applications
        with React.js, Next.js, and MERN Stack technologies.
      </MotionP>

      <MotionDiv
        className="flex flex-wrap items-center justify-center gap-4 mono-font text-sm"
        variants={itemVariants}
      >
        <a
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-2 rounded-full flex items-center gap-2 hover:border-primary transition-all shadow-sm group text-slate-900 dark:text-slate-100"
          href="mailto:raselahmediu22@gmail.com"
        >
          <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform text-slate-600 dark:text-slate-400">
            mail
          </span>
          Contact me
        </a>
        <a
          className="bg-primary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-all shadow-sm group"
          href="https://drive.google.com/uc?export=download&id=1Wz0ls0Cm7kpV-uAKF2aIjzcslyMmOkQ-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">
            download
          </span>
          Download Resume
        </a>
        <div className="flex gap-4 ml-2">
          <MotionA
            className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
            href="https://github.com/raselahmed2023"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-github text-xl"></i>
          </MotionA>
          <MotionA
            className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
            href="https://www.linkedin.com/in/rasel-ahmed06/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
          </MotionA>
        </div>
      </MotionDiv>
    </MotionSection >
  );
};

export default Hero;