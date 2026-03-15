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
  { label: 'Cardápio Especial', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Tatiana! Gostaria de ver o cardápio especial de Páscoa.')}`, icon: UtensilsCrossed },
  { label: 'Encomendar Agora', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Tatiana! Quero fazer uma encomenda para uma data especial.')}`, icon: Gift },
  { label: 'Falar no WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`, icon: MessageCircle },
  { label: 'Localização', href: 'https://maps.google.com/?q=Bauru+SP', icon: MapPin },
  { label: 'Datas Especiais', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Tatiana! Gostaria de conhecer as opções para datas especiais.')}`, icon: CalendarHeart }
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

const highlights = [
  'Doces artesanais',
  'Encomendas especiais',
  'Produção com carinho',
  'Presentes para datas marcantes'
];

const infoChips = ['276 posts', '933 seguidores', '1.962 seguindo', 'Bauru – SP', 'Encomendas para festas e datas especiais'];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-blushWhite px-4 py-8 text-deepAccent md:px-6 md:py-10">
      <EasterBackground />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6">
        <motion.section
          className="glass-panel p-5 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="relative h-20 w-20 rounded-full border-2 border-white/80 bg-gradient-to-br from-premiumPink via-softPink to-lightBlush p-1 shadow-softGlow">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white/85 text-sm font-semibold text-mauveText">
                TC
              </div>
            </div>
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-medium text-mauveText">
                <Sparkles size={14} /> Encomendas especiais para Páscoa e celebrações
              </span>
              <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Tatiana Chilio</h1>
              <p className="mt-2 text-base font-medium text-mauveText md:text-lg">
                Confeitaria artesanal com coleção especial de Páscoa
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mauveText md:text-base">
                Bolos, pudins e doces artesanais com apresentação delicada para tornar datas especiais ainda mais memoráveis.
              </p>
            </div>
          </div>

          <a
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-deepAccent to-accentPink px-5 py-3 text-sm font-semibold text-white shadow-softGlow transition hover:opacity-95 md:w-auto"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Encomendar pelo WhatsApp
          </a>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {actions.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/65 bg-white/50 px-3 py-3 text-xs font-medium text-mauveText transition hover:bg-white/70"
              >
                <span>{label}</span>
                <Icon size={15} className="transition group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="glass-panel p-5 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Coleção Especial de Páscoa</h2>
            <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-medium text-mauveText">Vitrine Premium</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
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
          className="grid gap-4 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-panel p-5 md:p-6">
            <h3 className="text-xl font-semibold">Diferenciais da marca</h3>
            <ul className="mt-4 grid gap-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-mauveText">
                  <HeartHandshake size={16} className="text-accentPink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-5 md:p-6">
            <h3 className="text-xl font-semibold">Perfil em destaque</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {infoChips.map((chip) => (
                <span key={chip} className="rounded-full bg-white/75 px-3 py-1 text-xs font-medium text-mauveText">
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-mauveText">
              Tatiana Chilio | confeitaria • Empreendedora • 🍰 Bolos • Pudins • Doces artesanais
            </p>
          </div>
        </motion.section>

        <footer className="pb-3 pt-1 text-center text-xs text-mauveText">
          <p className="font-medium">Tatiana Chilio | confeitaria</p>
          <p className="mt-1">📍 Bauru – SP • WhatsApp (14) 98810-6046</p>
          <p className="mt-2 inline-flex items-center gap-1">
            <Star size={13} className="text-accentPink" />
            Cartão digital premium para encomendas de Páscoa e datas especiais.
          </p>
        </footer>
      </div>
    </main>
  );
}
