/** @type {import('next').NextConfig} */
const nextConfig = {
  // Landing sepenuhnya statis (SSG) — bisa di-host di CDN mana pun.
  output: 'export',
  images: { unoptimized: true },
  // Pakai pemeriksa TypeScript berbasis API. Output `tsc --showConfig` dapat
  // terpotong pada monorepo npm dan membuat build Next salah menganggap JSON
  // konfigurasinya rusak.
  experimental: { useTypeScriptCli: false },
};

export default nextConfig;
