'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
}

const ClickEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ['#10b981', '#0ea5e9', '#6366f1', '#f43f5e', '#f59e0b'];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newParticles = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: (i * 360) / 8,
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      // Cleanup particles after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              x: p.x - 4, 
              y: p.y - 4, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: p.x + Math.cos((p.angle * Math.PI) / 180) * 100 - 4,
              y: p.y + Math.sin((p.angle * Math.PI) / 180) * 100 - 4,
              opacity: 0,
              scale: [0, 1.5, 0.5],
              rotate: p.angle + 90
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-2 h-6 rounded-full blur-[1px]"
            style={{ 
              backgroundColor: p.color,
              boxShadow: `0 0 15px ${p.color}`
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickEffect;
