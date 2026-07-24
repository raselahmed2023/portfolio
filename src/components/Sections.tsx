'use client';

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
          My leadership, organizational, design, IT, and content
          creation experience.
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
      status: "CGPA 3.24",
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
