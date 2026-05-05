'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  tags: { name: string; color: string }[];
  description: string;
  image: string;
}

const ProjectCard = ({ title, tags, description, image }: ProjectProps) => {
  return (
    <motion.div 
      className="project-card group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5 text-slate-900 dark:text-slate-100"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="heading-font font-bold text-lg mb-2">{title}</h3>
        <div className="flex gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag.name}
              className={`text-[10px] ${tag.color} px-2 py-0.5 rounded border uppercase tracking-wider font-bold`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

