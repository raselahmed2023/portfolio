'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Bubble {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  distance: number;
  size: number;
}

const colors = [
  '#10b981',
  '#0ea5e9',
  '#6366f1',
  '#f43f5e',
  '#f59e0b',
];

const ClickEffect = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const clickId = Date.now();

      const newBubbles: Bubble[] = Array.from({ length: 10 }, (_, index) => ({
        id: clickId + index,
        x: event.clientX,
        y: event.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: (index * 360) / 10 + Math.random() * 20,
        distance: 35 + Math.random() * 45,
        size: 6 + Math.random() * 8,
      }));

      setBubbles((previousBubbles) => [
        ...previousBubbles,
        ...newBubbles,
      ]);

      setTimeout(() => {
        const newBubbleIds = new Set(
          newBubbles.map((bubble) => bubble.id)
        );

        setBubbles((previousBubbles) =>
          previousBubbles.filter(
            (bubble) => !newBubbleIds.has(bubble.id)
          )
        );
      }, 800);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden">
      <AnimatePresence>
        {bubbles.map((bubble) => {
          const radians = (bubble.angle * Math.PI) / 180;

          const destinationX =
            bubble.x + Math.cos(radians) * bubble.distance;

          const destinationY =
            bubble.y + Math.sin(radians) * bubble.distance;

          return (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full"
              initial={{
                x: bubble.x - bubble.size / 2,
                y: bubble.y - bubble.size / 2,
                opacity: 1,
                scale: 0,
              }}
              animate={{
                x: destinationX - bubble.size / 2,
                y: destinationY - bubble.size / 2,
                opacity: 0,
                scale: [0, 1.3, 0.8],
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: bubble.size,
                height: bubble.size,
                backgroundColor: bubble.color,
                boxShadow: `0 0 10px ${bubble.color}`,
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ClickEffect;