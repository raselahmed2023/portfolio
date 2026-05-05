'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.section 
      className="text-center mb-20" 
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="relative inline-block mb-8"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
          }
        }}
      >
        <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full"></div>
        <Image 
          alt="Profile" 
          width={128}
          height={128}
          priority
          className="relative w-32 h-32 rounded-full border-4 border-slate-200 dark:border-slate-800 object-cover shadow-2xl" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDK-lMI8_nOLhdAfbU4JMDrLmElog5ggn2HG7aMTe0IO90BmeJHCWoHGqO3LyVhomeSGZq83PXQaFHgEdMEK82yXJ-YUEqIEqXNjaZUyD9n78L8EvpFbVS2d4IReEerxbS21o34EIOFSZIqGNTXJ8H-Bxbkj5YBHfmW2QE48IyKuL0cHPUqRrnotJrveP1FsNvgQXAAp5UrGkYwJOvzrWfvn3yTGP8XAFHM9i3-gsFAl327RlPKTGHblhXWPwhsiSRtevJti7Knhk"
        />
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl mx-auto leading-tight heading-font"
        variants={itemVariants}
      >
        Building <span className="gradient-text">modern web applications</span> with a focus on aesthetics, functionality and accessibility.
      </motion.h1>

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4 mono-font text-sm"
        variants={itemVariants}
      >
        <a 
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-2 rounded-full flex items-center gap-2 hover:border-primary transition-all shadow-sm group text-slate-900 dark:text-slate-100" 
          href="mailto:contact@example.com"
        >
          <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform text-slate-600 dark:text-slate-400">mail</span>
          Contact me
        </a>
        <div className="flex gap-4 ml-2">
          {['code', 'link', 'search'].map((icon, i) => (
            <motion.a 
              key={icon}
              className="text-slate-500 hover:text-primary transition-colors" 
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined">{icon}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

