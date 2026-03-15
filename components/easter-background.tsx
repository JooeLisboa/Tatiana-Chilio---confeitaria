'use client';

import { motion } from 'framer-motion';

const eggs = [
  { top: '8%', left: '14%', delay: 0.2, size: 95 },
  { top: '17%', right: '8%', delay: 0.6, size: 78 },
  { bottom: '24%', left: '6%', delay: 1, size: 112 },
  { bottom: '12%', right: '18%', delay: 1.2, size: 88 }
];

const bunnies = [
  { top: '30%', right: '32%', delay: 0.4 },
  { bottom: '20%', left: '30%', delay: 1.1 }
];

export function EasterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-roseGlow" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-premiumPink/35 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-softPink/40 blur-3xl" />

      {eggs.map((egg, index) => (
        <motion.div
          key={index}
          className="absolute rounded-[42%_58%_50%_50%/55%_45%_55%_45%] border border-white/50 bg-white/40 shadow-softGlow backdrop-blur-md"
          style={{ ...egg, width: egg.size, height: egg.size * 1.3 }}
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 8 + index, repeat: Infinity, delay: egg.delay }}
        >
          <div className="absolute inset-3 rounded-full border border-accentPink/30" />
          <div className="absolute inset-x-4 top-1/3 h-2 rounded-full bg-premiumPink/45" />
          <div className="absolute inset-x-6 top-1/2 h-2 rounded-full bg-softPink/70" />
        </motion.div>
      ))}

      {bunnies.map((bunny, index) => (
        <motion.div
          key={index}
          className="absolute h-24 w-16 opacity-40"
          style={bunny}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: bunny.delay }}
        >
          <div className="absolute left-2 top-0 h-8 w-4 rounded-full border border-accentPink/30 bg-white/30" />
          <div className="absolute right-2 top-0 h-8 w-4 rounded-full border border-accentPink/30 bg-white/30" />
          <div className="absolute bottom-0 left-1/2 h-16 w-14 -translate-x-1/2 rounded-[55%_45%_45%_55%] border border-accentPink/30 bg-white/30" />
        </motion.div>
      ))}
    </div>
  );
}
