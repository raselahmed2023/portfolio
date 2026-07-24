"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const PROJECTS_PER_PAGE = 4;

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{ duration: 0.5 }}
      >
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

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
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
            <button
              type="button"
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <span className="material-symbols-outlined text-base">
                chevron_left
              </span>

              Previous
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                type="button"
                key={page}
                onClick={() => changePage(page)}
                aria-label={`Go to project page ${page}`}
                aria-current={
                  currentPage === page ? "page" : undefined
                }
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                  currentPage === page
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Next

              <span className="material-symbols-outlined text-base">
                chevron_right
              </span>
            </button>
          </div>
        )}

        <p className="mt-4 text-center text-xs text-slate-400">
          Showing page {currentPage} of {totalPages}
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;