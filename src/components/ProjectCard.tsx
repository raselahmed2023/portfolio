"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { fadeUp, reducedMotionFade, hoverLift } from "@/lib/motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      variants={prefersReducedMotion ? reducedMotionFade : fadeUp}
      whileHover={prefersReducedMotion ? undefined : hoverLift}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/60"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-3 md:p-4">
        <h3 className="heading-font mb-2 text-sm font-bold leading-tight text-slate-900 dark:text-white sm:text-base">
          {project.title}
        </h3>

        <div className="mb-3 flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.name}
              className={`rounded border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide sm:text-[9px] ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        <p className="mb-4 line-clamp-3 flex-1 text-[10px] leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xs">
          {project.shortDescription}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="group/btn inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-secondary px-3 py-2 text-[10px] font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/20 sm:text-xs"
        >
          View Details

          <FiArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
