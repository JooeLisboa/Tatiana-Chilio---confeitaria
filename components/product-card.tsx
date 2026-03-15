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
      className="rounded-2xl border border-white/70 bg-white/60 p-3 shadow-softGlow backdrop-blur-md sm:p-4"
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
    >
      <div className={`relative mb-3 h-40 rounded-xl ${imageTone} p-3 sm:h-44`}>
        <div className="absolute inset-3 rounded-xl border border-white/60" />
        <div className="absolute bottom-3 right-3 rounded-full bg-white/75 px-2.5 py-1 text-[10px] font-semibold text-deepAccent">
          Coleção Páscoa
        </div>
      </div>

      <span className="inline-flex rounded-full bg-white/75 px-2.5 py-1 text-[11px] font-medium text-mauveText">{badge}</span>
      <h3 className="mt-2 text-lg font-semibold text-deepAccent">{name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-mauveText">{description}</p>

      <a
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accentPink to-premiumPink px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
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
