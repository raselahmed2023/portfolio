'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectCard from './ProjectCard';

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projects = [
    {
      title: "ZenSerenity Spa",
      tags: [
        { name: "Frontend", color: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800" },
        { name: "UI/UX", color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" }
      ],
      description: "ZenSerenity Spa is your digital sanctuary for relaxation and wellness. Our website offers a seamless and soothing experience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWGcm3dhE5DqKIaYuS1EOLuLyEvCQm9WXEYtZCMJqpwHI7W1SK1W5ACn-AK6t1V4hBluQmteErQ3z4B4jleppaJtSCXfsmS28TI2tem264YbTDhw9HWmQ0W3kNFQd5QLBJdvsOMHqSbwjDwHRdBXqNpG3P20Z_F8iQPkC1_n6ERXof5Tw7-mo_kwU-pWdaR4cXwcl0jZ-IgYBYiM8-159GFIxzNiabSS1xhCTtKAf_KqMOyWgrK5qP7Fjoz91msoB07H81sK7LkoQ"
    },
    {
      title: "SoleElegance Shoes",
      tags: [
        { name: "E-Commerce", color: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800" },
        { name: "React", color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" }
      ],
      description: "SoleElegance Shoes is your one-stop destination for the latest trends in footwear. Modern UI for premium shopping.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWvkgXODrZ-TH5fHRU_PU0-GNj9lXJC1SenH_0UENd5P6Xezc3-HEUED0-olPmUdPkFso2_QtBLbHTUqJ0kv6HLNbLG__TLyiadjXNC1o06n9UVFD-W7DAjyeB6aDZiA7ZFcor3NZO37XgdkTS-wUjFtxUrr8ZFV3l_KG9HK5KUY2P0__Ah3TxsoZs7-4tH2iD23vlprxNC1jV22rguH050KeEPD9us-0knV-meKUJAJbcYx3x6CgUL8gKLTraqUaW4p-2NXQRVeE"
    },
    {
      title: "HarmonyBeat",
      tags: [
        { name: "Web App", color: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800" },
        { name: "API", color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" }
      ],
      description: "HarmonyBeat is your ultimate music companion, designed to elevate your auditory experience with sleek navigation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGzP_iT8TbbQe4IuZZuSbeZrvO6aa9KPHKjAdRpHupJ-wdi0ilQqcSMbnRRvjgD78jxek7cdb7N7CTFROqeiJF8hNXpYKubj-orKc5_S3cZnTEFJzACYwP4pTof4Xhok84YuD1hnf6QNEXOb3-4sThCWYA9xUnNOWquVRex0_n9rgN_4dzZ2dGCFuJJpc3I_qEDxJfDoatyzNkRKsUNsy_7PHpDY8EmWGf_CC30Gji1EI4aCeyf98LRJ55KIpW5_zkIZezDihSL6w"
    },
    {
      title: "Visionary Analytics",
      tags: [
        { name: "Data Viz", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800" },
        { name: "D3.js", color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800" }
      ],
      description: "A complex data visualization dashboard for business intelligence and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "EcoSmart Home",
      tags: [
        { name: "IoT", color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800" },
        { name: "Mobile", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800" }
      ],
      description: "Smart home automation system with focus on energy efficiency and sustainable living.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pulse Fitness",
      tags: [
        { name: "Health", color: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800" },
        { name: "AI", color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800" }
      ],
      description: "AI-powered fitness tracker that provides personalized workout plans and real-time form correction.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Lumina Real Estate",
      tags: [
        { name: "Next.js", color: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700" },
        { name: "Mapbox", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800" }
      ],
      description: "A luxury real estate platform with interactive maps and high-resolution 3D virtual tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Skyline Travel",
      tags: [
        { name: "React Native", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800" },
        { name: "FastAPI", color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800" }
      ],
      description: "A comprehensive travel companion app for booking flights, hotels, and discovering hidden gems.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Quantum Secure",
      tags: [
        { name: "Security", color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800" },
        { name: "Web3", color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800" }
      ],
      description: "An end-to-end encrypted messaging and file storage solution leveraging blockchain technology.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "BioTrack Wearable",
      tags: [
        { name: "Health", color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800" },
        { name: "Hardware", color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800" }
      ],
      description: "Next-gen wearable tech for continuous health monitoring and early disease detection.",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Nexus VR Platform",
      tags: [
        { name: "Metaverse", color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800" },
        { name: "Unity", color: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700" }
      ],
      description: "A collaborative virtual reality platform for remote engineering and design teams.",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Aura Smart Lighting",
      tags: [
        { name: "Home Automation", color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800" },
        { name: "Zigbee", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800" }
      ],
      description: "Adaptive lighting system that syncs with your circadian rhythm for better sleep and productivity.",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800"
    }
  ];


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mb-20" id="projects" ref={sectionRef}>
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">folder</span>
        <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export const TechStack = () => {
  const techs = [
    { name: "React", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuApo0-GKQUHxXE8AljESUl9nTuzUiV3lw42ZQtVLvijNO1qFKT9TuRtkvh6E7lm5NbZQryd_xtuvp3Ii4hHXPtblfsGAwDKXmcetnmGSEflMpLvbcrfYFkbHCgRZRAoD7WROWCizZRumvuG_1y3s5KoGYUg1-FVfsBHglgvXKnc5VgKf1SIXqHD1IJLS46f1jlpk9IfsDZCdyhY6lTEuAQv7Hy256kYO0ZdooRjUIbDoaYgzh6HSQeli3N5TjEdSOrpED66uplfcHg", color: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "Node.js", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvM9uU9aWMRCwjRAJK8okg-rJUtJwq3Z5lDRSb2uV51DuMaKLK5TYNACW5bw4Oa8XjwuU7tZGhgEsR_lHKUEobPQutnGgBZXLRatJS1Y-ckS1tcrvoKsbvbImBGJzVVTiT6Th6p6-omeu6-omWIYYE10JGOsAwLhnK3zQSTBy7h80n8YMrRPlUAPPXDRwXi65nykbQFCM_ECTB1IwEEAuM96fMnkCQzesipdnb5W5wSUlWhiWFrBPNfCgBaA5XsIgtXdRd6S21BDA", color: "bg-green-100 dark:bg-green-900/20" },
    { name: "Tailwind CSS", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuATtbUkmSmF_I04OnaQuHVeMMET7UBIBCzFuEJOe4-dzunmJcGbatoaErNNWmV2T7B7GRAlt2D2wdJyWgXHQ0mU12kNphIOxNytRrofHOaoe29uXQSt8W9XVvn1qX1ajcyuRgEoAlAmLyvQbECeLylkh_FQsOy7SrdDMDWN0NVQHXOBVIsHwl9rRGz1ziScPAlCq3lNKULDnuGKDrodPYLHPtxgeu-7wRZ2ychvyvgKJaH72dM8oZ4E32pgiXRwJ9aavzvMi3w32Uo", color: "bg-sky-100 dark:bg-sky-900/20" },
    { name: "JavaScript", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnnZT1rkLzC5qAtMVbEzbED87NakVmiwFpTfIIslIB8RSK0cg1ME5P-9QZ6-sZBXYPGtT9ah3Umsse5WtHdyymNNuS6PTeg45cPL9ET3vvSsaO2s43eImwmcGVa8lwkn-JK9CTwPYq6CmK-25hiWeHSuHCHy9Uo43IsbhrEEb4i02JrgCRsec8Ydj3SC7qMpq9LXSKh26cJCHnPa_hpsFU42ryhg-RIkPbEAcEPuZInEK9YAUCq4vHIC_XFh2SXheYsHQ2lAyjKaY", color: "bg-yellow-100 dark:bg-yellow-900/20" },
    { name: "TypeScript", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdpT0VloLYH7v6Em9naY5A1J61SMaiHzqPqb1JVMUP6I1gx1Ia5OC5XP8s134vJFZ_8tFeXdZSg1A539yU58snL9H0zQBvsH8sI6vBVcxbxvGlB_tXqXEuF4IV6X-jSn0xMkVd57_ANRC0fDBG-W90lRNcUU_reQa74x_7Iarb6IRP7lb703mlkQi0v7ER4khhxRUEEK-NUdSlyRDvvsXelHzCW20X_7NLzZVabZJhpf058GQ-VYy5IygMn3d41C-9ioCgYLwywI8", color: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "Next.js", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMD7sbpDRuKcxbOvhzWPDJkUi7v6jk1KxsGIaNcNqWOYAy5qep8ZpERFtOXkRww76jzkbuAnyyDt-nEmqohw9Q778vyjWGpvX2Gb-GQywiUGAbara0p3mZQQSNY4nJh2-EerCuHvxVe1SxKGJSe20v8mJEdP3Qx5WuFG7RXwr2ut36Rqt3_hgUQC336vZa2-Hoaady8_liQk7ET-JI8R37r_k0tOxVYE-3NbK41opB7a-oNFTC-c99alUvPE8U2s8dToVr1t3ai-4", color: "bg-slate-100 dark:bg-slate-800" },
    { name: "Firebase", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiW6_aWM7RHk28pqRgqeDRKWON1IzVxC4gnwywJd0rdxVUl4SVXbz_KAfZiohEdPI9kG2WvJSHBqI42pNa5iKO-vFfaSSw85-hPKO4ZUJqn7zO77O-kb1EvQ8WOhdCplLl70FjCZERJC7R6kZkv_9WsQUGVwkUdoqYtgot8GITDSUh00w5KRDVxTGa_Otbn6P0Ch-PYd47Eb7UJtG83DTISkbOj9eHBRKNHaMjRYmBvxpDOkALSIKRmHJHlqtTE9QALIspCEFLI4E", color: "bg-orange-100 dark:bg-orange-900/20" },
    { name: "PostgreSQL", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJSbYwBYN5A3PFZ0mwo9IDhWWTNaoB3PrrSnKD3jD4sE7RFBc3ZkfYWp4oS-MhICU0CWq36DS5D3KM5VqPgCdl2Dq1y6VwBov90hW6V98pypHVP4wZUnJ23OlrVTTnIsw-J7Rs374A52kvH5-bnCRKzWJvQtb99aPnDE4LLlhUO5-xv2G0YNloqB9nVBEFc6VoMX0HZOo_UQV1dKIUtB4qhqmTEDJRH4dEGIHqMDqGiXwgvcg3TAaJB6hrVzO_9ozmhh6Gyv--qiU", color: "bg-indigo-100 dark:bg-indigo-900/20" }
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
            <div className={`w-10 h-10 flex items-center justify-center ${tech.color} rounded-lg`}>
              <img alt={tech.name} className={`w-6 h-6 ${tech.name === 'Next.js' ? 'dark:invert' : ''}`} src={tech.icon} />
            </div>
            <span className="font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      company: "CreativeTech Innovations",
      period: "Jan 2024 - Present",
      role: "Senior Web Developer",
      description: "Led the development of high-performing web applications with a focus on user-friendly designs and efficient code. Implemented advanced frontend technologies, resulting in a 30% reduction in page load times."
    },
    {
      company: "TechNova Solutions",
      period: "April 2020 - Dec 2023",
      role: "Lead Frontend Developer",
      description: "Designed and implemented scalable frontend architectures, enhancing performance and user experience. Increased user engagement by 25% through dynamic UI components."
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
          <div key={exp.company} className={`experience-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
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
      name: "Design",
      color: "bg-primary",
      skills: ["UI/UX Design", "Figma Prototyping", "Responsive Web"]
    },
    {
      name: "Frontend",
      color: "bg-secondary",
      skills: ["Component Systems", "State Management", "Animation/GSAP"]
    },
    {
      name: "Backend",
      color: "bg-primary",
      skills: ["API Development", "Database Schema", "Cloud Computing"]
    },
    {
      name: "Soft Skills",
      color: "bg-secondary",
      skills: ["Team Leadership", "Agile/Scrum", "Client Relation"]
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
      title: "B.S. in Computer Science",
      school: "University of Technology, San Francisco",
      period: "2016 — 2020",
      gpa: "GPA 3.8/4.0",
      extra: "Dean's List",
      color: "bg-primary/5",
      textColor: "text-primary"
    },
    {
      title: "Advanced Frontend Cert.",
      school: "Global Tech Institute",
      period: "2021",
      gpa: "Verified",
      extra: "Cloud Specialist",
      color: "bg-secondary/5",
      textColor: "text-secondary"
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
            key={edu.title} 
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
            I'm Angel Garcia, a <span className="text-primary font-semibold">Web Developer</span> with a passion for <span className="text-secondary">Transforming Ideas into Interactive Experiences</span>. While early in my career, I bring fresh perspectives and a dedication to creating intuitive, polished <span className="text-primary">Applications That Truly Connect With Users</span>.
          </p>
          <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
            Every line of code is a step toward mastering my craft, and I'm excited to deliver projects that are both beautiful and functional. Beyond my frontend focus, I also draw on experience with backend and full-stack projects.
          </p>
          <div className="flex gap-4">
            {[
              { val: "4+", label: "Years Experience" },
              { val: "50+", label: "Projects Built" },
              { val: "20+", label: "Happy Clients" }
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
                alt="Angel Garcia" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHGKbkS1eoh2NrnRi7WaueASUzfCMyrwoUOUSlOPrlK-TtDsv4RbljcNWLJz_1JCO-IVCL2eMJdg1KFaWdjk_tQWpFxVkBG0ssRlcFFY_Lxwd64G7ngP2H_ZJx17wqEXKMivtZTqQprA-ZDYhbC0HCu_RMxLZBlw-dFJyD7GoakKUXStnJN_pl8nJx6uNJYni6l42-KNqJDZUKSGl5Ec4-JuFvRGdYyoQZIEKaWtUiXIhVlxDwzuOv9HlTfKKgq10w9UA70JaxffI"
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

