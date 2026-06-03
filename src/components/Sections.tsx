'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';


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
      className="project-card group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5 text-slate-900 dark:text-slate-100 flex flex-col"
      whileHover={{ y: -10, scale: 1.02 }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            Live Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            Code
          </a>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="heading-font font-bold text-xl mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[10px] ${tag.color} px-2 py-1 rounded border uppercase tracking-wider font-bold`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {description}
        </p>
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:border-primary hover:text-primary transition-all"
          >
            View Live
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-semibold hover:opacity-90 transition-all"
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
      title: "Online Book Borrowing Platform",
      tags: [
        { name: "Next.js", color: "bg-black text-white border-black" },
        { name: "MongoDB", color: "bg-green-100 text-green-700 border-green-300" },
        { name: "Tailwind", color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
        { name: "Better Auth", color: "bg-orange-100 text-orange-700 border-orange-300" },
      ],
      description: "A modern web app to discover, explore, and borrow books. Features Google OAuth, email authentication, book categories (Story, Tech, Science), and a personal dashboard to track borrowed books. Fully responsive design.",
      image: "/projects/book-platform.jpg",
      liveLink: "https://online-book-borrowing-platform-mocha.vercel.app/",
      repoLink: "https://github.com/raselahmed2023/Online_Book_Borrowing_Platform"
    },
    {
      title: "DigiTools",
      tags: [
        { name: "React", color: "bg-blue-100 text-blue-700 border-blue-300" },
        { name: "Tailwind", color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
        { name: "DaisyUI", color: "bg-purple-100 text-purple-700 border-purple-300" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
      ],
      description: "Digital productivity tools marketplace with 200+ premium tools and 50k+ active users. Features easy purchasing with three payment methods, product cart management, and trial periods. Built with React-Toastify for notifications.",
      image: "/projects/digitools.jpg",
      liveLink: "https://digitools-react.netlify.app/",
      repoLink: "https://github.com/raselahmed2023/digiTools"
    },
    {
      title: "KeenKeeper",
      tags: [
        { name: "Next.js", color: "bg-black text-white border-black" },
        { name: "Tailwind", color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
        { name: "Recharts", color: "bg-pink-100 text-pink-700 border-pink-300" },
        { name: "React", color: "bg-blue-100 text-blue-700 border-blue-300" },
      ],
      description: "Friendship management dashboard with smart friend tracking, quick check-in systems, and an interactive timeline. Fully responsive with data visualization using Recharts and toast notifications.",
      image: "/projects/keenkeeper.jpg",
      liveLink: "https://kin-keeper-seven-self.vercel.app/",
      repoLink: "https://github.com/raselahmed2023/ken-keeper"
    },
    {
      title: "GitHub Issue Tracker",
      tags: [
        { name: "React", color: "bg-blue-100 text-blue-700 border-blue-300" },
        { name: "GitHub API", color: "bg-gray-100 text-gray-700 border-gray-300" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
      ],
      description: "A streamlined GitHub issue tracking interface that helps developers manage and organize repository issues efficiently. Clean UI with real-time GitHub API integration.",
      image: "/projects/github-issue.jpg",
      liveLink: "https://raselahmed2023.github.io/github-issue/",
      repoLink: "https://github.com/raselahmed2023/github-issue"
    }
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
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="projects" className="py-20">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-font flex items-center gap-3">
            <span className="text-primary">⚡</span> Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            A collection of projects I've built, ranging from full-stack applications to interactive dashboards.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
    { name: "React", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuApo0-GKQUHxXE8AljESUl9nTuzUiV3lw42ZQtVLvijNO1qFKT9TuRtkvh6E7lm5NbZQryd_xtuvp3Ii4hHXPtblfsGAwDKXmcetnmGSEflMpLvbcrfYFkbHCgRZRAoD7WROWCizZRumvuG_1y3s5KoGYUg1-FVfsBHglgvXKnc5VgKf1SIXqHD1IJLS46f1jlpk9IfsDZCdyhY6lTEuAQv7Hy256kYO0ZdooRjUIbDoaYgzh6HSQeli3N5TjEdSOrpED66uplfcHg", color: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "Node.js", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvM9uU9aWMRCwjRAJK8okg-rJUtJwq3Z5lDRSb2uV51DuMaKLK5TYNACW5bw4Oa8XjwuU7tZGhgEsR_lHKUEobPQutnGgBZXLRatJS1Y-ckS1tcrvoKsbvbImBGJzVVTiT6Th6p6-omeu6-omWIYYE10JGOsAwLhnK3zQSTBy7h80n8YMrRPlUAPPXDRwXi65nykbQFCM_ECTB1IwEEAuM96fMnkCQzesipdnb5W5wSUlWhiWFrBPNfCgBaA5XsIgtXdRd6S21BDA", color: "bg-green-100 dark:bg-green-900/20" },
    { name: "Tailwind CSS", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuATtbUkmSmF_I04OnaQuHVeMMET7UBIBCzFuEJOe4-dzunmJcGbatoaErNNWmV2T7B7GRAlt2D2wdJyWgXHQ0mU12kNphIOxNytRrofHOaoe29uXQSt8W9XVvn1qX1ajcyuRgEoAlAmLyvQbECeLylkh_FQsOy7SrdDMDWN0NVQHXOBVIsHwl9rRGz1ziScPAlCq3lNKULDnuGKDrodPYLHPtxgeu-7wRZ2ychvyvgKJaH72dM8oZ4E32pgiXRwJ9aavzvMi3w32Uo", color: "bg-sky-100 dark:bg-sky-900/20" },
    { name: "JavaScript", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnnZT1rkLzC5qAtMVbEzbED87NakVmiwFpTfIIslIB8RSK0cg1ME5P-9QZ6-sZBXYPGtT9ah3Umsse5WtHdyymNNuS6PTeg45cPL9ET3vvSsaO2s43eImwmcGVa8lwkn-JK9CTwPYq6CmK-25hiWeHSuHCHy9Uo43IsbhrEEb4i02JrgCRsec8Ydj3SC7qMpq9LXSKh26cJCHnPa_hpsFU42ryhg-RIkPbEAcEPuZInEK9YAUCq4vHIC_XFh2SXheYsHQ2lAyjKaY", color: "bg-yellow-100 dark:bg-yellow-900/20" },
    { name: "TypeScript", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdpT0VloLYH7v6Em9naY5A1J61SMaiHzqPqb1JVMUP6I1gx1Ia5OC5XP8s134vJFZ_8tFeXdZSg1A539yU58snL9H0zQBvsH8sI6vBVcxbxvGlB_tXqXEuF4IV6X-jSn0xMkVd57_ANRC0fDBG-W90lRNcUU_reQa74x_7Iarb6IRP7lb703mlkQi0v7ER4khhxRUEEK-NUdSlyRDvvsXelHzCW20X_7NLzZVabZJhpf058GQ-VYy5IygMn3d41C-9ioCgYLwywI8", color: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "Next.js", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMD7sbpDRuKcxbOvhzWPDJkUi7v6jk1KxsGIaNcNqWOYAy5qep8ZpERFtOXkRww76jzkbuAnyyDt-nEmqohw9Q778vyjWGpvX2Gb-GQywiUGAbara0p3mZQQSNY4nJh2-EerCuHvxVe1SxKGJSe20v8mJEdP3Qx5WuFG7RXwr2ut36Rqt3_hgUQC336vZa2-Hoaady8_liQk7ET-JI8R37r_k0tOxVYE-3NbK41opB7a-oNFTC-c99alUvPE8U2s8dToVr1t3ai-4", color: "bg-slate-100 dark:bg-slate-800" },
    {
      name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jsonwebtokens/jsonwebtokens-original.svg", color: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-emerald-100 dark:bg-emerald-900/20"
    }
  ];

  return (
    <section className="mb-20" id="tech-stack">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">data_object</span>
        <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight">Tech Stack</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, borderColor: "var(--color-primary)" }}
          >
            <div className={`w-10 h-10 flex items-center justify-center ${tech.color} rounded-lg relative`}>
              <Image
                alt={tech.name}
                src={tech.icon}
                fill
                className={`object-contain p-1.5 ${tech.name === 'Next.js' ? 'dark:invert' : ''}`}
              />
            </div>
            <span className="font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ... rest of your code (Experience, Skills, Education, AboutMe) remains the same

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      company: "Paridhi",
      period: "Jan 2025 - Present",
      role: "Co-Founder & Assistant Director",
      description: "Promoting a culture of reading and critical thinking through discussions on literature, philosophy, history, and international relations."
    },

    {
      company: "Islamic University Accounting Club",
      period: "July 2024 - Aug 2025",
      role: "Design & IT Secretary",
      description: "Created visual content, managed social media presence, and oversaw IT tasks to enhance digital communication."
    },
    {
      company: "Cancer Awareness Program for Women",
      period: "Jun 2023 - Jun 2024",
      role: "Asst. Communication Affairs Secretary",
      description: "Managed content writing and communication to engage members and support awareness initiatives through personalized outreach."
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate vertical line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none"
      });

      // Animate items
      gsap.from(".experience-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: (i) => i % 2 === 0 ? 50 : -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mb-20" id="experience" ref={sectionRef}>
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">work</span>
        <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight">Experience</h2>
      </div>
      <div className="space-y-12 relative">
        {/* Progress Line */}
        <div
          ref={lineRef}
          className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 hidden md:block"
        ></div>

        {experiences.map((exp, index) => (
          <div key={`${exp.company}-${exp.role}`} className={`experience-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/30 transition-colors text-slate-900 dark:text-slate-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="mono-font font-bold text-primary">{exp.company}</h3>
                <span className="text-xs text-slate-500 mono-font">{exp.period}</span>
              </div>
              <h4 className="font-bold mb-3 mono-font text-sm">{exp.role}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Skills = () => {
  const categories = [
    {
      name: "Frontend",
      color: "bg-primary",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "DaisyUI"]
    },
    {
      name: "Backend",
      color: "bg-secondary",
      skills: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT Authentication", "Better Auth", "Google OAuth"]
    },
    {
      name: "Tools & Deployment",
      color: "bg-secondary",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Render"]
    },
    {
      name: "AI & Productivity",
      color: "bg-primary",
      skills: ["ChatGPT", "Gemini", "GitHub Copilot", "Cursor", "Prompt Engineering", "AI-Assisted Debugging"]
    },
    {
      name: "Management & Creative",
      color: "bg-primary",
      skills: ["Leadership", "Teamwork", "Communication", "Critical Thinking", "Time Management", "Negotiation", "Content Writing"]
    }
  ];

  return (
    <section className="mb-20" id="skills">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">verified</span>
        <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight">Skills</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mono-font text-sm font-bold uppercase tracking-widest text-slate-400">{cat.name}</h3>
            <ul className="space-y-2 text-sm">
              {cat.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 ${cat.color} rounded-full`}></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Education = () => {
  const education = [
    {
      title: "MBA in Accounting & Information Systems",
      school: "Islamic University, Kushtia, Bangladesh",
      period: "Feb 2026 - Present",
      gpa: "Ongoing",
      extra: "Research & Data Focus",
      color: "bg-primary/5",
      textColor: "text-primary"
    },
    {
      title: "BBA in Accounting & Information Systems",
      school: "Islamic University, Kushtia",
      period: "Mar 2022 - Feb 2026",
      gpa: "3.21",
      extra: "Leadership & IT",
      color: "bg-secondary/5",
      textColor: "text-secondary"
    },
    {
      title: "Higher Secondary Certificate (Science)",
      school: "Kushtia Government College",
      period: "2017 — 2019",
      gpa: "GPA 5.00/5.00",
      extra: "Science Background",
      color: "bg-primary/5",
      textColor: "text-primary"
    }
  ];

  return (
    <section className="mb-20" id="education">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">school</span>
        <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight">Education</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, i) => (
          <motion.div
            key={`${edu.title}-${edu.school}`}
            className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl relative overflow-hidden group text-slate-900 dark:text-slate-100"
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${edu.color} rounded-full -translate-y-1/2 translate-x-1/2`}></div>
            <span className={`text-xs font-bold ${edu.textColor} mono-font mb-2 block uppercase`}>{edu.period}</span>
            <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.school}</p>
            <div className="mt-4 flex gap-2">
              <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{edu.gpa}</span>
              <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{edu.extra}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const AboutMe = () => {
  return (
    <section className="mb-20" id="about">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">person</span>
        <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight">About Me</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 leading-relaxed">
            I'm <span className="text-primary font-semibold">Rasel Ahmed</span>, a final-year BBA student at Islamic University, Kushtia, majoring in <span className="text-secondary">Accounting and Information Systems</span>. With leadership, research, and IT experience, I bring combined strengths in business, digital skills, and organizational management.
          </p>
          <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
            Passionate about reading, programming, and personal growth, I aim to grow as a versatile professional, ready to embrace new challenges and contribute meaningfully in academic, organizational, and professional domains.
          </p>
          <div className="mb-8">
            <h4 className="mono-font text-sm font-bold uppercase tracking-widest text-primary mb-4">Current Goals</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">rocket_launch</span>
                Job-Ready Frontend Developer
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">analytics</span>
                Improve Data Analysis Skills
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">podcasts</span>
                Start Educational Podcast
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">groups</span>
                Build Student Community
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            {[
              { val: "0", label: "Years Experience" },
              { val: "10+", label: "Projects Built" },
              { val: "0", label: "Happy Clients" }
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mono-font">{stat.val}</div>
                  <div className="text-[10px] uppercase text-slate-500 font-bold">{stat.label}</div>
                </div>
                {i < 2 && <div className="w-px h-10 bg-slate-200 dark:bg-slate-800"></div>}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl rounded-full"></div>
            <motion.div
              animate={{
                rotate: [3, -3, 3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <Image
                alt="Rasel Ahmed"
                src="/profile.jpg"
                fill
                className="rounded-3xl object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

