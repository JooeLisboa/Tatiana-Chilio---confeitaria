import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tatiana Chilio | Confeitaria Especial de Páscoa',
  description:
    'Cartão interativo premium da Tatiana Chilio com coleção especial de Páscoa e encomendas artesanais em Bauru - SP.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
