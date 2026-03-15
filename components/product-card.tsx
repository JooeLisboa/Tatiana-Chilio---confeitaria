'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type ProductCardProps = {
  name: string;
  description: string;
  badge: string;
  imageTone: string;
  whatsappLink: string;
};

export function ProductCard({ name, description, badge, imageTone, whatsappLink }: ProductCardProps) {
  return (
    <motion.article
      className="glass-panel p-4 md:p-5"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
    >
      <div className={`relative mb-4 h-44 rounded-2xl ${imageTone} p-4 shadow-softGlow`}>
        <div className="absolute inset-3 rounded-2xl border border-white/50" />
        <div className="absolute bottom-3 right-3 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-deepAccent">
          Coleção Páscoa
        </div>
      </div>

      <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-mauveText">
        {badge}
      </span>
      <h3 className="mt-3 text-xl font-semibold text-deepAccent">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mauveText">{description}</p>

      <a
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accentPink to-premiumPink px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        Pedir este produto
        <ArrowUpRight size={16} />
      </a>
    </motion.article>
  );
}
