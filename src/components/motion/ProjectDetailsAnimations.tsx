"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiCode, FiDatabase, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import {
  staggerContainer,
  fadeUp,
  fadeRight,
  reducedMotionFade,
  tapScale,
} from "@/lib/motion";

interface ProjectTag {
  name: string;
  color: string;
}

interface ProjectData {
  title: string;
  image: string;
  tags: ProjectTag[];
  technologies: string[];
  mainFeatures: string[];
  challenges: string[];
  futurePlans: string[];
  fullDescription: string;
  liveLink?: string;
  clientRepo: string;
  serverRepo?: string;
  clientLabel?: string;
  serverLabel?: string;
}

export const ProjectDetailsAnimations = ({
  project,
}: {
  project: ProjectData;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const itemVariants = prefersReducedMotion ? reducedMotionFade : fadeUp;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={prefersReducedMotion ? reducedMotionFade : staggerContainer}
    >
      <motion.div variants={itemVariants}>
        <Link
          href="/#projects"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
        >
          <FiArrowLeft aria-hidden="true" className="h-5 w-5 shrink-0" />

          Back to Projects
        </Link>
      </motion.div>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
        <motion.div
          variants={prefersReducedMotion ? reducedMotionFade : fadeRight}
          className="relative aspect-video min-h-[240px] overflow-hidden bg-slate-100 dark:bg-slate-800"
        >
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Project Details
            </p>

            <h1 className="heading-font text-3xl font-extrabold md:text-5xl">
              {project.title}
            </h1>
          </div>
        </motion.div>

        <div className="p-5 md:p-10">
          <motion.div
            variants={prefersReducedMotion ? reducedMotionFade : fadeUp}
            className="mb-8 flex flex-wrap gap-2"
          >
            {project.tags.map((tag, index) => (
              <motion.span
                key={tag.name}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold ${tag.color}`}
              >
                {tag.name}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? reducedMotionFade : fadeUp}
            className={`mb-10 grid gap-3 ${
              project.serverRepo
                ? "sm:grid-cols-3"
                : "sm:grid-cols-2"
            }`}
          >
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : tapScale}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <FiExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />

                Live Project
              </motion.a>
            )}

            <motion.a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : tapScale}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition-all hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900"
            >
              <FiCode aria-hidden="true" className="h-4 w-4 shrink-0" />

              {project.clientLabel ?? "Client Code"}
            </motion.a>

            {project.serverRepo && (
              <motion.a
                href={project.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : tapScale}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition-all hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              >
                <FiDatabase aria-hidden="true" className="h-4 w-4 shrink-0" />

                {project.serverLabel ?? "Server Code"}
              </motion.a>
            )}
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-10">
              <motion.section variants={itemVariants}>
                <h2 className="heading-font mb-4 text-2xl font-bold">
                  Project Description
                </h2>

                <p className="leading-8 text-slate-600 dark:text-slate-300">
                  {project.fullDescription}
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="heading-font mb-4 text-2xl font-bold">
                  Main Features
                </h2>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.mainFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                    >
                      <FiCheckCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />

                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="heading-font mb-4 text-2xl font-bold">
                  Challenges Faced
                </h2>

                <div className="space-y-3">
                  {project.challenges.map(
                    (challenge, index) => (
                      <div
                        key={challenge}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {index + 1}
                        </span>

                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {challenge}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="heading-font mb-4 text-2xl font-bold">
                  Future Improvements
                </h2>

                <div className="space-y-3">
                  {project.futurePlans.map((plan) => (
                    <div
                      key={plan}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                    >
                      <FiTrendingUp aria-hidden="true" className="h-5 w-5 shrink-0 text-secondary" />

                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {plan}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            <motion.aside
              variants={prefersReducedMotion ? reducedMotionFade : fadeRight}
              className="sticky top-24"
            >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/50">
                <h2 className="heading-font mb-5 text-xl font-bold">
                  Main Technology Stack
                </h2>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(
                    (technology, index) => (
                      <motion.span
                        key={technology}
                        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + index * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      >
                        {technology}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </article>
    </motion.div>
  );
};
