'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJsonwebtokens,
} from "react-icons/si";


interface ProjectProps {
  title: string;
  tags: { name: string; color: string }[];
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
}

const ProjectCard = ({ title, tags, description, image, liveLink, repoLink }: ProjectProps) => {
  return (
    <motion.div
      className="project-card group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 text-slate-900 dark:text-slate-100 flex flex-col h-full"
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
        <motion.div
          className="w-full h-full relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            alt={title}
            src={image}
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-2.5 py-1 rounded-full text-[11px] font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>

          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-2.5 py-1 rounded-full text-[11px] font-bold hover:bg-slate-700 transition-colors flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Code
          </a>
        </div>
      </div>

      <div className="p-3 flex-1 flex flex-col">
        <h3 className="heading-font font-bold text-base mb-1.5 leading-tight">
          {title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[8px] ${tag.color} px-1.5 py-0.5 rounded border uppercase tracking-wider font-bold`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed flex-1 line-clamp-2">
          {description}
        </p>

        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-[11px] font-semibold hover:border-primary hover:text-primary transition-all"
          >
            View Live
          </a>

          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-1.5 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[11px] font-semibold hover:opacity-90 transition-all"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "ReSell Hub",
      tags: [
        { name: "Next.js", color: "bg-black text-white border-black" },
        { name: "MongoDB", color: "bg-green-100 text-green-700 border-green-300" },
        { name: "Stripe", color: "bg-indigo-100 text-indigo-700 border-indigo-300" },
        { name: "Better Auth", color: "bg-orange-100 text-orange-700 border-orange-300" },
      ],
      description:
        "Full-stack second-hand marketplace with Better Auth, Buyer/Seller/Admin dashboards, wishlist, product approval, order tracking, Stripe checkout, analytics, and responsive marketplace pages.",
      image: "/projects/resell-hub.jpg",
      liveLink: "https://resell-hub-rho.vercel.app/",
      repoLink: "https://github.com/raselahmed2023/resellHub",
    },
    {
      title: "SportNest",
      tags: [
        { name: "Next.js", color: "bg-black text-white border-black" },
        { name: "MongoDB", color: "bg-green-100 text-green-700 border-green-300" },
        { name: "Express.js", color: "bg-gray-100 text-gray-700 border-gray-300" },
        { name: "Better Auth", color: "bg-orange-100 text-orange-700 border-orange-300" },
      ],
      description:
        "A full-stack sports facility booking platform where users can browse and book sports facilities while owners manage listings through role-based dashboards. Features authentication, booking management, CRUD operations, and responsive design.",
      image: "/projects/sportnest.jpg",
      liveLink: "https://sports-nest-gules.vercel.app/",
      repoLink: "https://github.com/raselahmed2023/sports-nest",
    },
    {
      title: "Online Book Borrowing Platform",
      tags: [
        { name: "Next.js", color: "bg-black text-white border-black" },
        { name: "MongoDB", color: "bg-green-100 text-green-700 border-green-300" },
        { name: "Tailwind", color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
        { name: "Better Auth", color: "bg-orange-100 text-orange-700 border-orange-300" },
      ],
      description:
        "A modern web app to discover, explore, and borrow books. Features Google OAuth, email authentication, book categories, and a personal dashboard to track borrowed books.",
      image: "/projects/book-platform.jpg",
      liveLink: "https://online-book-borrowing-platform-mocha.vercel.app/",
      repoLink: "https://github.com/raselahmed2023/Online_Book_Borrowing_Platform",
    },
    {
      title: "DigiTools",
      tags: [
        { name: "React", color: "bg-blue-100 text-blue-700 border-blue-300" },
        { name: "Tailwind", color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
        { name: "DaisyUI", color: "bg-purple-100 text-purple-700 border-purple-300" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
      ],
      description:
        "Digital productivity tools marketplace with 200+ premium tools and 50k+ active users. Features purchasing, product cart management, and trial periods.",
      image: "/projects/digitools.jpg",
      liveLink: "https://digitools-react.netlify.app/",
      repoLink: "https://github.com/raselahmed2023/digiTools",
    },
    {
      title: "KeenKeeper",
      tags: [
        { name: "Next.js", color: "bg-black text-white border-black" },
        { name: "Tailwind", color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
        { name: "Recharts", color: "bg-pink-100 text-pink-700 border-pink-300" },
        { name: "React", color: "bg-blue-100 text-blue-700 border-blue-300" },
      ],
      description:
        "Friendship management dashboard with smart friend tracking, quick check-in systems, interactive timeline, Recharts data visualization, and toast notifications.",
      image: "/projects/keenkeeper.jpg",
      liveLink: "https://kin-keeper-seven-self.vercel.app/",
      repoLink: "https://github.com/raselahmed2023/ken-keeper",
    },
    {
      title: "Job Application Tracker",
      tags: [
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
        { name: "HTML5", color: "bg-orange-100 text-orange-700 border-orange-300" },
        { name: "CSS3", color: "bg-blue-100 text-blue-700 border-blue-300" },
      ],
      description:
        "Interactive job application tracker with dashboard analytics, interview and rejection management, dynamic tab filtering, real-time status updates, and responsive design.",
      image: "/projects/job-tracker.jpg",
      liveLink: "https://statuesque-salmiakki-676652.netlify.app/",
      repoLink: "https://github.com/raselahmed2023/job-tracker",
    },
    {
      title: "CineTrack",
      tags: [
        { name: "React", color: "bg-blue-100 text-blue-700 border-blue-300" },
        { name: "Vite", color: "bg-purple-100 text-purple-700 border-purple-300" },
        { name: "Tailwind", color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
        { name: "LocalStorage", color: "bg-emerald-100 text-emerald-700 border-emerald-300" },
      ],
      description:
        "Responsive movie watchlist built with React and Vite. Users can add movies, search/filter by watched status, toggle, delete, reset, and persist data with LocalStorage.",
      image: "/projects/cinetrack.jpg",
      liveLink: "https://cine-track-nine.vercel.app/",
      repoLink: "https://github.com/raselahmed2023/cineTrack",
    },
    {
      title: "GitHub Issue Tracker",
      tags: [
        { name: "React", color: "bg-blue-100 text-blue-700 border-blue-300" },
        { name: "GitHub API", color: "bg-gray-100 text-gray-700 border-gray-300" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
      ],
      description:
        "A streamlined GitHub issue tracking interface that helps developers manage and organize repository issues efficiently. Clean UI with real-time GitHub API integration.",
      image: "/projects/github-issue.jpg",
      liveLink: "https://resilient-panda-f132a7.netlify.app/",
      repoLink: "https://github.com/raselahmed2023/github-issue",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as [
          number,
          number,
          number,
          number
        ],
      },
    },
  };

  return (
    <section id="projects" className="py-12">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-7">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-font flex items-center gap-3">
            <span className="text-primary">⚡</span> Projects
          </h2>

          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            A collection of projects I&apos;ve built, ranging from full-stack
            applications to interactive dashboards.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

export const TechStack = () => {
  const techs = [
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-500",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-sky-500",
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-500",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-500",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-black dark:text-white",
    },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
      color: "text-purple-500",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-500",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-600",
    },
  ];

  return (
    <section className="mb-20" id="tech-stack">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">data_object</span>
        <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight">Tech Stack</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techs.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Icon className={`text-3xl ${tech.color}`} />
              </div>

              <span className="font-medium">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

//all

export const Experience = () => {
  const experienceItems = [
    {
      role: "Co-Founder & Assistant Director",
      organization: "Paridhi",
      period: "January 2025 – Present",
      type: "Leadership",
      icon: "groups",
      responsibilities: [
        "Promote reading and critical thinking.",
        "Support intellectual discussions and events.",
        "Manage budgeting and financial records.",
      ],
    },
    {
      role: "Design & IT Secretary",
      organization:
        "Islamic University Accounting Club",
      period: "July 2024 – August 2025",
      type: "Design & IT",
      icon: "design_services",
      responsibilities: [
        "Created visual and digital content.",
        "Managed social media activities.",
        "Provided IT and event support.",
      ],
    },
    {
      role: "Content Writing Intern",
      organization: "Requin BD",
      period: "April 2025 – September 2025",
      type: "Internship",
      icon: "edit_note",
      responsibilities: [
        "Researched educational topics.",
        "Wrote short-form knowledge content.",
        "Prepared and edited video scripts.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 py-16"
    >
      <div className="mb-9">
        <div className="mb-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">
            work_history
          </span>

          <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Experience
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          My leadership, organizational, internship,
          content creation, and development experience.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {experienceItems.map((experience) => (
          <article
            key={`${experience.role}-${experience.organization}`}
            className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/70 sm:p-4"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-xl">
                  {experience.icon}
                </span>
              </div>

              <span className="rounded-full border border-secondary/30 bg-secondary/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-secondary sm:text-[9px]">
                {experience.type}
              </span>
            </div>

            <h3 className="heading-font text-sm font-bold leading-snug text-slate-900 dark:text-white sm:text-base">
              {experience.role}
            </h3>

            <p className="mt-1 text-[10px] font-semibold leading-4 text-primary sm:text-xs">
              {experience.organization}
            </p>

            <p className="mt-2 flex items-start gap-1.5 text-[9px] leading-4 text-slate-500 dark:text-slate-400 sm:text-[10px]">
              <span className="material-symbols-outlined mt-0.5 text-sm">
                calendar_month
              </span>

              <span>{experience.period}</span>
            </p>

            <div className="my-3 h-px bg-slate-200 dark:bg-slate-800" />

            <ul className="flex-1 space-y-2">
              {experience.responsibilities.map(
                (responsibility) => (
                  <li
                    key={responsibility}
                    className="flex items-start gap-1.5 text-[9px] leading-4 text-slate-600 dark:text-slate-300 sm:text-[10px]"
                  >
                    <span className="material-symbols-outlined mt-0.5 text-xs text-secondary">
                      check_circle
                    </span>

                    <span>{responsibility}</span>
                  </li>
                )
              )}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "devices",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "DaisyUI",
        "HeroUI",
      ],
    },
    {
      title: "Backend & Database",
      icon: "dns",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST API",
        "JWT",
        "Better Auth",
      ],
    },
    {
      title: "State & Data",
      icon: "sync_alt",
      skills: [
        "TanStack Query",
        "React Context",
        "React Hooks",
        "Axios",
        "Fetch API",
        "Local Storage",
      ],
    },
    {
      title: "AI Workflow",
      icon: "smart_toy",
      skills: [
        "Gemini AI",
        "Groq AI",
        "ChatGPT",
        "GitHub Copilot",
        "Cursor",
        "Prompt Engineering",
        "AI-Assisted Debugging",
      ],
    },
    {
      title: "Tools & Deployment",
      icon: "construction",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Netlify",
        "Render",
        "Figma",
      ],
    },
    {
      title: "Professional Skills",
      icon: "psychology",
      skills: [
        "Leadership",
        "Communication",
        "Teamwork",
        "Critical Thinking",
        "Time Management",
        "Negotiation",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 py-14"
    >
      <div className="mb-7">
        <div className="mb-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">
            code_blocks
          </span>

          <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Skills
          </h2>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Technologies and tools I use in my development
          workflow.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-xl">
                  {category.icon}
                </span>
              </div>

              <h3 className="heading-font text-lg font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export const Education = () => {
  const educationItems = [
    {
      degree:
        "Master of Business Administration (MBA)",
      subject:
        "Accounting & Information Systems",
      institution:
        "Islamic University, Kushtia, Bangladesh",
      period: "January 2026 – Present",
      status: "Ongoing",
      icon: "school",
      description:
        "Currently pursuing an MBA in Accounting and Information Systems. The program focuses on advanced accounting, business management, information systems, research, data analysis, and organizational decision-making.",
    },
    {
      degree:
        "Bachelor of Business Administration (BBA)",
      subject:
        "Accounting & Information Systems",
      institution:
        "Islamic University, Kushtia, Bangladesh",
      period: "March 2022 – January 2026",
      status: "CGP 3.24",
      icon: "workspace_premium",
      description:
        "Completed a BBA in Accounting and Information Systems, developing knowledge in accounting, auditing, finance, business technology, information systems, research, and data analysis.",
    },
    {
      degree:
        "Higher Secondary Certificate (HSC)",
      subject: "Science",
      institution:
        "Kushtia Government College",
      period: "July 2017 – May 2019",
      status: "GPA 5.00",
      icon: "menu_book",
      description:
        "Completed higher secondary education in the Science group with a GPA of 5.00, building a strong academic foundation in science, mathematics, analytical thinking, and problem solving.",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-24 py-16"
    >
      <div className="mb-9">
        <div className="mb-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">
            school
          </span>

          <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Education
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          My academic qualifications and educational
          background.
        </p>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:block" />

        <div className="space-y-6">
          {educationItems.map((education) => (
            <article
              key={`${education.degree}-${education.period}`}
              className="relative sm:pl-16"
            >
              <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-secondary text-white shadow-lg dark:border-slate-950 sm:flex">
                <span className="material-symbols-outlined text-xl">
                  {education.icon}
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/70 md:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:hidden">
                      <span className="material-symbols-outlined">
                        {education.icon}
                      </span>
                    </div>

                    <h3 className="heading-font text-lg font-bold leading-snug text-slate-900 dark:text-white md:text-xl">
                      {education.degree}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-primary">
                      {education.subject}
                    </p>

                    <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined mt-0.5 text-base">
                        account_balance
                      </span>

                      <span>
                        {education.institution}
                      </span>
                    </p>

                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-base">
                        calendar_month
                      </span>

                      <span>{education.period}</span>
                    </p>
                  </div>

                  <span className="w-fit shrink-0 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 text-xs font-bold text-secondary">
                    {education.status}
                  </span>
                </div>

                <div className="my-5 h-px bg-slate-200 dark:bg-slate-800" />

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {education.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutMe = () => {
  const highlights = [
    {
      icon: "code_blocks",
      title: "Development Interests",
      items: [
        "Frontend and full-stack web development",
        "Responsive and user-friendly interfaces",
        "Authentication and REST API integration",
        "AI-powered web applications",
        "Solving practical user problems",
      ],
    },
    {
      icon: "interests",
      title: "Personal Interests",
      items: [
        "Programming and learning new technologies",
        "Reading literature and philosophy",
        "History and international relations",
        "Educational content creation",
        "Personal and professional development",
      ],
    },
    {
      icon: "groups",
      title: "Personal Strengths",
      items: [
        "Leadership and teamwork",
        "Communication and negotiation",
        "Critical thinking",
        "Time management",
        "Continuous learning",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 py-16"
    >
      <div className="mb-9">
        <div className="mb-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">
            person
          </span>

          <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            About Me
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          My academic background, programming journey,
          interests, and professional goals.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 md:p-8">
          <div className="space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
            <p>
              I am Rasel Ahmed, an MBA student at Islamic
              University, Kushtia, majoring in Accounting and
              Information Systems. My academic background has
              helped me develop an understanding of business,
              accounting, information systems, research, data
              analysis, and organizational management.
            </p>

            <p>
              Alongside my academic studies, I developed a
              strong interest in web development. I started my
              programming journey by learning HTML, CSS, and
              JavaScript. I later progressed to React.js,
              Next.js, TypeScript, Node.js, Express.js, and
              MongoDB to build responsive frontend and
              full-stack web applications.
            </p>

            <p>
              I enjoy developing clean, responsive, and
              user-friendly digital products. I am especially
              interested in frontend development, reusable
              components, REST API integration, authentication,
              database-driven applications, dashboard
              development, and AI-assisted web solutions.
            </p>

            <p>
              Through projects such as TripMind, Rentora,
              ReSell Hub, SportNest, LifeLink, and the Online
              Book Borrowing Platform, I have gained practical
              experience in building and deploying modern web
              applications. These projects have strengthened my
              skills in application architecture, problem
              solving, responsive design, authentication, and
              frontend-backend integration.
            </p>

            <p>
              Outside programming, I enjoy reading literature,
              philosophy, history, international relations, and
              global politics. I am also involved in
              organizational and educational initiatives that
              promote reading, critical thinking, communication,
              and student-led intellectual development.
            </p>

            <p>
              My goal is to grow as a versatile frontend and
              full-stack developer, contribute to professional
              development teams, and create meaningful digital
              solutions that provide real value to users.
            </p>
          </div>
        </article>

        <aside className="space-y-5">
          {highlights.map((highlight) => (
            <AboutHighlightCard
              key={highlight.title}
              icon={highlight.icon}
              title={highlight.title}
              items={highlight.items}
            />
          ))}
        </aside>
      </div>
    </section>
  );
};

interface AboutHighlightCardProps {
  icon: string;
  title: string;
  items: string[];
}

const AboutHighlightCard = ({
  icon,
  title,
  items,
}: AboutHighlightCardProps) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <span className="material-symbols-outlined">
            {icon}
          </span>
        </div>

        <h3 className="heading-font text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
          >
            <span className="material-symbols-outlined mt-1 text-sm text-secondary">
              check_circle
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
