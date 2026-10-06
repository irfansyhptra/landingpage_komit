import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const jakarta = localFont({
  src: './fonts/PlusJakartaSans-latin.woff2',
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  applicationName: 'KOMIT',
  title: 'KOMIT — Koperasi Merah Putih Mitra',
  description:
    'Aplikasi Koperasi Merah Putih untuk marketplace UMKM, pesanan, dan logistik desa.',
  keywords: ['koperasi merah putih', 'UMKM', 'marketplace desa', 'KOMIT'],
  openGraph: {
    title: 'KOMIT — Koperasi Merah Putih Mitra',
    description:
      'Marketplace UMKM lokal, logistik andal, dan analitik berbasis AI untuk koperasi desa.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={jakarta.variable}>{children}</body>
    </html>
  );
}
