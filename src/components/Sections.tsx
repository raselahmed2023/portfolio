'use client';

import { motion, useReducedMotion } from "framer-motion";
import {
  FiBriefcase,
  FiUsers,
  FiEdit3,
  FiCalendar,
  FiCheckCircle,
  FiMonitor,
  FiDatabase,
  FiRefreshCw,
  FiCpu,
  FiTool,
  FiActivity,
  FiCode,
  FiBookOpen,
  FiUser,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/motion/Reveal";
import {
  staggerContainer,
  fadeUp,
  cardContainer,
  reducedMotionFade,
  hoverLift,
} from "@/lib/motion";

export const Experience = () => {
  const prefersReducedMotion = useReducedMotion();

  const experienceItems = [
    {
      role: "Co-Founder & Assistant Director",
      organization: "Paridhi",
      period: "January 2025 – Present",
      type: "Leadership",
      Icon: FiUsers,
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
      Icon: FiMonitor,
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
      Icon: FiEdit3,
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
      className="scroll-mt-24 py-12"
    >
      <Reveal>
        <div className="mb-7">
          <div className="mb-3 flex items-center gap-3">
            <FiBriefcase aria-hidden="true" className="h-8 w-8 text-primary" />

            <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              Experience
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
            My leadership, organizational, design, IT, and
            content creation experience.
          </p>
        </div>
      </Reveal>

      <motion.div
        variants={prefersReducedMotion ? reducedMotionFade : cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {experienceItems.map((experience) => (
          <motion.article
            key={`${experience.role}-${experience.organization}`}
            variants={prefersReducedMotion ? reducedMotionFade : fadeUp}
            whileHover={prefersReducedMotion ? undefined : hoverLift}
            className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <experience.Icon aria-hidden="true" className="h-5 w-5" />
              </div>

              <span className="rounded-full border border-secondary/30 bg-secondary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-secondary">
                {experience.type}
              </span>
            </div>

            <h3 className="heading-font text-base font-bold leading-snug text-slate-900 dark:text-white">
              {experience.role}
            </h3>

            <p className="mt-1 text-xs font-semibold leading-5 text-primary">
              {experience.organization}
            </p>

            <p className="mt-2 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <FiCalendar aria-hidden="true" className="h-4 w-4 shrink-0" />

              <span>{experience.period}</span>
            </p>

            <div className="my-3 h-px bg-slate-200 dark:bg-slate-800" />

            <ul className="space-y-2">
              {experience.responsibilities.map(
                (responsibility) => (
                  <li
                    key={responsibility}
                    className="flex items-start gap-2 text-[11px] leading-5 text-slate-600 dark:text-slate-300"
                  >
                    <FiCheckCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />

                    <span>{responsibility}</span>
                  </li>
                )
              )}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  const skillCategories = [
    {
      title: "Frontend",
      Icon: FiMonitor,
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
      Icon: FiDatabase,
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
      Icon: FiRefreshCw,
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
      Icon: FiCpu,
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
      Icon: FiTool,
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
      Icon: FiActivity,
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
      <Reveal>
        <div className="mb-7">
          <div className="mb-3 flex items-center gap-3">
            <FiCode aria-hidden="true" className="h-8 w-8 text-primary" />

            <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              Skills
            </h2>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Technologies and tools I use in my development
            workflow.
          </p>
        </div>
      </Reveal>

      <motion.div
        variants={prefersReducedMotion ? reducedMotionFade : cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category) => (
          <motion.article
            key={category.title}
            variants={prefersReducedMotion ? reducedMotionFade : fadeUp}
            whileHover={prefersReducedMotion ? undefined : { y: -3, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="mb-4 flex items-center gap-3">
              <motion.div
                whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
              >
                <category.Icon aria-hidden="true" className="h-5 w-5" />
              </motion.div>

              <h3 className="heading-font text-lg font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={
                    prefersReducedMotion
                      ? reducedMotionFade
                      : {
                          hidden: { opacity: 0, y: 6 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.3,
                              delay: index * 0.03,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }
                  }
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export const Education = () => {
  const prefersReducedMotion = useReducedMotion();

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
      Icon: FiBookOpen,
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
      status: "CGPA 3.24",
      Icon: FiBookOpen,
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
      Icon: FiBookOpen,
      description:
        "Completed higher secondary education in the Science group with a GPA of 5.00, building a strong academic foundation in science, mathematics, analytical thinking, and problem solving.",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-24 py-16"
    >
      <Reveal>
        <div className="mb-9">
          <div className="mb-4 flex items-center gap-3">
            <FiBookOpen aria-hidden="true" className="h-8 w-8 text-primary" />

            <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              Education
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
            My academic qualifications and educational
            background.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:block" />

        <div className="space-y-6">
          {educationItems.map((education, index) => (
            <Reveal
              key={`${education.degree}-${education.period}`}
              delay={index * 0.1}
            >
              <article className="relative sm:pl-16">
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-secondary text-white shadow-lg dark:border-slate-950 sm:flex"
                >
                  <education.Icon aria-hidden="true" className="h-5 w-5" />
                </motion.div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/70 md:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:hidden">
                        <education.Icon aria-hidden="true" className="h-5 w-5" />
                      </div>

                      <h3 className="heading-font text-lg font-bold leading-snug text-slate-900 dark:text-white md:text-xl">
                        {education.degree}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-primary">
                        {education.subject}
                      </p>

                      <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        <FiBriefcase aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />

                        <span>
                          {education.institution}
                        </span>
                      </p>

                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <FiCalendar aria-hidden="true" className="h-4 w-4 shrink-0" />

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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutMe = () => {
  const prefersReducedMotion = useReducedMotion();

  const highlights = [
    {
      Icon: FiCode,
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
      Icon: FiActivity,
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
      Icon: FiUsers,
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
      <Reveal>
        <div className="mb-9">
          <div className="mb-4 flex items-center gap-3">
            <FiUser aria-hidden="true" className="h-8 w-8 text-primary" />

            <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              About Me
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
            My academic background, programming journey,
            interests, and professional goals.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal delay={0.05}>
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
        </Reveal>

        <motion.aside
          variants={prefersReducedMotion ? reducedMotionFade : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-5"
        >
          {highlights.map((highlight) => (
            <AboutHighlightCard
              key={highlight.title}
              Icon={highlight.Icon}
              title={highlight.title}
              items={highlight.items}
              reducedMotion={prefersReducedMotion ?? false}
            />
          ))}
        </motion.aside>
      </div>
    </section>
  );
};

interface AboutHighlightCardProps {
  Icon: IconType;
  title: string;
  items: string[];
  reducedMotion: boolean;
}

const AboutHighlightCard = ({
  Icon,
  title,
  items,
  reducedMotion,
}: AboutHighlightCardProps) => {
  return (
    <motion.article
      variants={reducedMotion ? reducedMotionFade : fadeUp}
      whileHover={reducedMotion ? undefined : hoverLift}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon aria-hidden="true" className="h-5 w-5" />
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
            <FiCheckCircle aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-secondary" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};
