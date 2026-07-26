"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FiMoon, FiSun, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

interface NavigationItem {
  label: string;
  sectionId: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    sectionId: "home",
  },
  {
    label: "Projects",
    sectionId: "projects",
  },
  {
    label: "Experience",
    sectionId: "experience",
  },
  {
    label: "Skills",
    sectionId: "skills",
  },
  {
    label: "Education",
    sectionId: "education",
  },
  {
    label: "About Me",
    sectionId: "about",
  },
  {
    label: "Contact",
    sectionId: "contact",
  },
];

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const Navbar = () => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
  const [activeSection, setActiveSection] =
    useState("home");

  const isHomePage = pathname === "/";

  const createSectionLink = useCallback(
    (sectionId: string) => {
      return isHomePage
        ? `#${sectionId}`
        : `/#${sectionId}`;
    },
    [isHomePage]
  );

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(
      () => {
        const savedTheme = localStorage.getItem(
          "portfolio-theme"
        );

        const systemPrefersDark =
          window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;

        const shouldUseDarkMode =
          savedTheme === "dark" ||
          (!savedTheme && systemPrefersDark);

        setIsDark(shouldUseDarkMode);

        document.documentElement.classList.toggle(
          "dark",
          shouldUseDarkMode
        );
      }
    );

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscapeKey = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscapeKey
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscapeKey
      );
    };
  }, [closeMenu]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionIds = navigationItems.map(
      (item) => item.sectionId
    );

    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY + 150;

      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section =
          document.getElementById(sectionId);

        if (
          section &&
          section.offsetTop <= scrollPosition
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    const frameId =
      window.requestAnimationFrame(
        updateActiveSection
      );

    window.addEventListener(
      "scroll",
      updateActiveSection,
      {
        passive: true,
      }
    );

    return () => {
      window.cancelAnimationFrame(frameId);

      window.removeEventListener(
        "scroll",
        updateActiveSection
      );
    };
  }, [isHomePage]);

  const toggleDarkMode = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme
    );

    localStorage.setItem(
      "portfolio-theme",
      nextTheme ? "dark" : "light"
    );
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(
      (previousValue) => !previousValue
    );
  };

  const handleNavigationClick = (
    sectionId: string
  ) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  const useAnimate = !prefersReducedMotion;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/85 text-slate-900 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85 dark:text-slate-100">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href={createSectionLink("home")}
          onClick={() =>
            handleNavigationClick("home")
          }
          className="mono-font flex items-center gap-1.5 rounded-lg text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          aria-label="Go to home section"
        >
          <span className="text-primary">
            {"{"}
          </span>

          <span className="text-slate-900 dark:text-white">
            RA
          </span>

          <span className="text-secondary">
            {"}"}
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigationItems.map((item) => {
            const isActive =
              isHomePage &&
              activeSection ===
                item.sectionId;

            return (
              <Link
                key={item.sectionId}
                href={createSectionLink(
                  item.sectionId
                )}
                onClick={() =>
                  handleNavigationClick(
                    item.sectionId
                  )
                }
                className={`group mono-font relative py-2 text-xs font-semibold transition-colors xl:text-sm ${
                  isActive
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950"
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {isDark ? (
              <FiSun aria-hidden="true" className="h-5 w-5" />
            ) : (
              <FiMoon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950 lg:hidden"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMenuOpen ? (
              <FiX aria-hidden="true" className="h-5 w-5" />
            ) : (
              <FiMenu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            variants={useAnimate ? backdropVariants : undefined}
            initial={useAnimate ? "hidden" : undefined}
            animate={useAnimate ? "visible" : undefined}
            exit={useAnimate ? "exit" : undefined}
            className={`fixed inset-0 top-16 z-40 bg-slate-950/45 backdrop-blur-sm lg:hidden ${
              !useAnimate ? "opacity-100" : ""
            }`}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            variants={useAnimate ? mobileMenuVariants : undefined}
            initial={useAnimate ? "hidden" : undefined}
            animate={useAnimate ? "visible" : undefined}
            exit={useAnimate ? "exit" : undefined}
            className={`absolute left-0 right-0 top-16 z-50 border-b border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden ${
              !useAnimate ? "translate-y-0 opacity-100" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {navigationItems.map((item) => {
                  const isActive =
                    isHomePage &&
                    activeSection ===
                      item.sectionId;

                  return (
                    <Link
                      key={item.sectionId}
                      href={createSectionLink(
                        item.sectionId
                      )}
                      onClick={() =>
                        handleNavigationClick(
                          item.sectionId
                        )
                      }
                      className={`mono-font flex items-center justify-between rounded-xl border px-3 py-3 text-sm font-semibold transition-all ${
                        isActive
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                      }`}
                    >
                      <span>{item.label}</span>

                      <FiArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Frontend Developer | MERN Stack
                  &amp; Full-Stack Enthusiast
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
