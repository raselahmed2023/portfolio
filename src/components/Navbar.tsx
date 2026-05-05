'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="mono-font text-xl font-bold flex items-center gap-2">
          <span className="text-primary">{"{"}</span>
          <span className="dark:text-white">A</span>
          <span className="text-secondary">{"}"}</span>
        </div>
        <div className="hidden md:flex items-center gap-8 mono-font text-sm">
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300 hover:dark:text-primary" href="#home">Home</a>
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300 hover:dark:text-primary" href="#projects">Projects</a>
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300 hover:dark:text-primary" href="#experience">Experience</a>
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300 hover:dark:text-primary" href="#skills">Skills</a>
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300 hover:dark:text-primary" href="#about">About me</a>
        </div>
        <button 
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          onClick={toggleDarkMode}
        >
          <span className="material-symbols-outlined text-xl">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
