'use client';

import { motion } from 'framer-motion';
import {
  CalendarHeart,
  Gift,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
  UtensilsCrossed
} from 'lucide-react';
import { EasterBackground } from '@/components/easter-background';
import { ProductCard } from '@/components/product-card';

const WHATSAPP_NUMBER = '5514988106046';
const defaultMessage =
  'Olá, Tatiana! Vi seu cartão interativo e gostaria de saber mais sobre os ovos de Páscoa e encomendas especiais.';

const actions = [
  { label: 'Ver Instagram', href: 'https://instagram.com/tatianachilio', icon: Instagram },
  {
    label: 'Cardápio Especial',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Tatiana! Gostaria de ver o cardápio especial de Páscoa.')}`,
    icon: UtensilsCrossed
  },
  {
    label: 'Encomendar Agora',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Tatiana! Quero fazer uma encomenda para uma data especial.')}`,
    icon: Gift
  },
  {
    label: 'Falar no WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`,
    icon: MessageCircle
  },
  { label: 'Localização', href: 'https://maps.google.com/?q=Bauru+SP', icon: MapPin },
  {
    label: 'Datas Especiais',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Tatiana! Gostaria de conhecer as opções para datas especiais.')}`,
    icon: CalendarHeart
  }
];

const products = [
  {
    name: 'Ovo Clássico Premium',
    description: 'Chocolate nobre com acabamento delicado e apresentação especial para presentear.',
    badge: 'Seleção Elegance',
    imageTone: 'bg-gradient-to-br from-[#FCEEF5] via-[#F7D9E8] to-[#EFB8D1]'
  },
  {
    name: 'Ovo Recheado Especial',
    description: 'Camadas cremosas e sabor marcante em uma criação artesanal feita para surpreender.',
    badge: 'Mais Pedido',
    imageTone: 'bg-gradient-to-br from-[#FFF8FB] via-[#FCEEF5] to-[#D98BB2]/70'
  },
  {
    name: 'Ovo Deluxe da Casa',
    description: 'Versão premium da coleção de Páscoa, com visual elegante e proposta irresistível.',
    badge: 'Edição Boutique',
    imageTone: 'bg-gradient-to-br from-[#F7D9E8] via-[#EFB8D1] to-[#D98BB2]'
  }
];

const highlights = ['Doces artesanais', 'Encomendas especiais', 'Produção com carinho', 'Presentes para datas marcantes'];

const infoChips = ['Bauru – SP', 'Atendimento por WhatsApp', 'Páscoa 2026', 'Retirada e entrega sob consulta'];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-blushWhite px-4 py-6 text-deepAccent sm:py-8">
      <EasterBackground />

      <div className="relative mx-auto flex w-full max-w-xl flex-col gap-4 sm:gap-5">
        <motion.section
          className="glass-panel card-shell p-4 sm:p-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-mauveText">
              <Sparkles size={13} /> Encomendas especiais para Páscoa e celebrações
            </span>

            <div className="relative h-16 w-16 rounded-full border border-white/80 bg-gradient-to-br from-premiumPink via-softPink to-lightBlush p-1 shadow-softGlow">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white/85 text-sm font-semibold text-mauveText">TC</div>
            </div>

            <div>
              <h1 className="text-2xl font-semibold leading-tight">Tatiana Chilio</h1>
              <p className="mt-1 text-sm font-medium text-mauveText">Confeitaria artesanal com coleção especial de Páscoa</p>
              <p className="mt-3 text-sm leading-relaxed text-mauveText">
                Bolos, pudins e doces artesanais com apresentação delicada para tornar datas especiais ainda mais memoráveis.
              </p>
            </div>
          </div>

          <a
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-deepAccent to-accentPink px-4 py-3 text-sm font-semibold text-white shadow-softGlow transition hover:opacity-95"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> Encomendar pelo WhatsApp
          </a>

          <div className="mt-4 flex flex-wrap gap-2">
            {infoChips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-mauveText">
                {chip}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="glass-panel card-shell p-3 sm:p-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {actions.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/65 bg-white/65 px-3 py-3 text-sm font-medium text-mauveText transition hover:bg-white/80"
              >
                <span>{label}</span>
                <Icon size={16} className="text-accentPink transition group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="glass-panel card-shell p-4 sm:p-5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold sm:text-xl">Coleção Especial de Páscoa</h2>
            <span className="rounded-full bg-white/75 px-3 py-1 text-[11px] font-semibold text-mauveText">Vitrine Premium</span>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
                whatsappLink={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, Tatiana! Gostaria de pedir o produto: ${product.name}.`)}`}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="glass-panel card-shell p-4 sm:p-5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-lg font-semibold">Diferenciais rápidos</h3>
          <ul className="mt-3 grid gap-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-mauveText">
                <HeartHandshake size={15} className="text-accentPink" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <footer className="pb-2 pt-1 text-center text-xs text-mauveText">
          <p className="font-medium">Tatiana Chilio | confeitaria</p>
          <p className="mt-1">📍 Bauru – SP • WhatsApp (14) 98810-6046</p>
          <p className="mt-2 inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/60 px-3 py-1">
            <Star size={12} className="text-accentPink" />
            Cartão premium para encomendas de Páscoa e datas especiais.
          </p>
        </footer>
      </div>
    </main>
  );
}
