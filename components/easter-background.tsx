'use client';

import { motion } from 'framer-motion';

const eggs = [
  { top: '10%', left: '7%', delay: 0.2, size: 72 },
  { top: '22%', right: '4%', delay: 0.6, size: 62 },
  { bottom: '18%', right: '10%', delay: 1.1, size: 70 }
];

export function EasterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-roseGlow" />
      <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-premiumPink/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-softPink/30 blur-3xl" />

      {eggs.map((egg, index) => (
        <motion.div
          key={index}
          className="absolute hidden rounded-[44%_56%_50%_50%/56%_44%_56%_44%] border border-white/45 bg-white/35 shadow-softGlow backdrop-blur-md sm:block"
          style={{ ...egg, width: egg.size, height: egg.size * 1.28 }}
          animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 8 + index, repeat: Infinity, delay: egg.delay }}
        >
          <div className="absolute inset-3 rounded-full border border-accentPink/25" />
          <div className="absolute inset-x-4 top-1/3 h-1.5 rounded-full bg-premiumPink/45" />
          <div className="absolute inset-x-5 top-1/2 h-1.5 rounded-full bg-softPink/70" />
        </motion.div>
      ))}
    </div>
  );
}
