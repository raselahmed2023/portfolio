"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { cardContainer, reducedMotionFade, tapScale } from "@/lib/motion";

const PROJECTS_PER_PAGE = 4;

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const totalPages = Math.ceil(
    projects.length / PROJECTS_PER_PAGE
  );

  const currentProjects = useMemo(() => {
    const startingIndex =
      (currentPage - 1) * PROJECTS_PER_PAGE;

    return projects.slice(
      startingIndex,
      startingIndex + PROJECTS_PER_PAGE
    );
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentPage]);

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="scroll-mt-24 py-12"
    >
      <Reveal>
        <div className="mb-7">
          <h2 className="heading-font mb-4 flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <span className="text-primary">⚡</span>
            Projects
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-base">
            A collection of my full-stack applications,
            AI-powered platforms, dashboards, and interactive
            frontend projects.
          </p>
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={prefersReducedMotion ? reducedMotionFade : cardContainer}
          initial="hidden"
          animate="visible"
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={
            prefersReducedMotion
              ? { duration: 0.2 }
              : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
          }
          className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
        >
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <motion.button
            type="button"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            whileTap={prefersReducedMotion ? undefined : tapScale}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <FiChevronLeft aria-hidden="true" className="h-4 w-4 shrink-0" />

            Previous
          </motion.button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <motion.button
              type="button"
              key={page}
              onClick={() => changePage(page)}
              aria-label={`Go to project page ${page}`}
              aria-current={
                currentPage === page ? "page" : undefined
              }
              whileTap={prefersReducedMotion ? undefined : tapScale}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                currentPage === page
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              }`}
            >
              {page}
            </motion.button>
          ))}

          <motion.button
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            whileTap={prefersReducedMotion ? undefined : tapScale}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            Next

            <FiChevronRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </motion.button>
        </div>
      )}

      <p className="mt-4 text-center text-xs text-slate-400">
        Showing page {currentPage} of {totalPages}
      </p>
    </section>
  );
};

export default ProjectsSection;
