/** @type {import('next').NextConfig} */
const nextConfig = {
  // Landing sepenuhnya statis (SSG) — bisa di-host di CDN mana pun.
  output: 'export',
  images: { unoptimized: true },
  // Hindari output `tsc --showConfig` yang terpotong pada instalasi npm.
  experimental: { useTypeScriptCli: false },
};

export default nextConfig;
