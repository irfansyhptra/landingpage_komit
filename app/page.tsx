import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  Check,
  ChevronRight,
  Fingerprint,
  Globe2,
  MapPin,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

import { DownloadCard } from './components/DownloadCard';
import { RoleShowcase } from './components/RoleShowcase';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? '#atas';
const APK_URL =
  process.env.NEXT_PUBLIC_APK_URL ?? '/downloads/KOMIT-v1.0.0.apk';
const APK_VERSION = process.env.NEXT_PUBLIC_APK_VERSION ?? '1.0.0';
const APK_SIZE = process.env.NEXT_PUBLIC_APK_SIZE ?? '72,2 MB';
const APK_SHA256 =
  process.env.NEXT_PUBLIC_APK_SHA256 ??
  '92ec68816a5cb684da19ec4cf3349eb9871305b6233fedc1b141a0f9908d8d62';

const capabilities: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  className: string;
}[] = [
  {
    icon: ShoppingBag,
    eyebrow: 'Marketplace lokal',
    title: 'Belanja dari tetangga sendiri.',
    description:
      'Produk Kopdes dan UMKM terverifikasi hadir dalam katalog yang mudah dicari.',
    className: 'bento-card--market',
  },
  {
    icon: Bot,
    eyebrow: 'Asisten cerdas',
    title: 'Insight yang bisa langsung dipakai.',
    description:
      'KOMIT membantu membaca kebutuhan stok dan aktivitas usaha dengan lebih jelas.',
    className: 'bento-card--ai',
  },
  {
    icon: Truck,
    eyebrow: 'Kurir desa',
    title: 'Pengiriman dekat dan terlacak.',
    description:
      'Toko meminta pengantaran, kurir Kopdes mengambil barang, pembeli memantau prosesnya.',
    className: 'bento-card--delivery',
  },
  {
    icon: Boxes,
    eyebrow: 'Operasional terpadu',
    title: 'Satu data dari stok sampai transaksi.',
    description:
      'Perubahan inventaris, pesanan, pembayaran, dan laporan tetap saling terhubung.',
    className: 'bento-card--ops',
  },
];

const installSteps = [
  {
    number: '01',
    title: 'Unduh APK',
    description: 'Tekan tombol unduh dan tunggu berkas KOMIT selesai tersimpan.',
  },
  {
    number: '02',
    title: 'Izinkan instalasi',
    description: 'Buka berkas APK dan setujui instalasi dari browser bila diminta.',
  },
  {
    number: '03',
    title: 'Masuk ke KOMIT',
    description: 'Buka aplikasi, pilih peran Anda, lalu mulai terhubung dengan desa.',
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar-wrap">
        <nav className="topbar container" aria-label="Navigasi utama">
          <a className="brand" href="#atas" aria-label="KOMIT, kembali ke atas">
            <span className="brand-mark">K</span>
            <span>KOMIT<small>Koperasi Merah Putih Mitra</small></span>
          </a>
          <div className="nav-links">
            <a href="#pengalaman">Pengalaman</a>
            <a href="#fitur">Fitur</a>
            <a href="#cara-instal">Cara instal</a>
          </div>
          <a className="nav-download" href="#unduh">
            Unduh aplikasi <ArrowDown size={16} />
          </a>
        </nav>
      </header>

      <main id="atas">
        <section className="hero">
          <div className="hero-orb hero-orb--one" aria-hidden="true" />
          <div className="hero-orb hero-orb--two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <a className="release-pill" href="#unduh">
                <span><Sparkles size={14} /> KOMIT {APK_VERSION} tersedia</span>
                Lihat rilis <ChevronRight size={14} />
              </a>
              <h1>
                Ekonomi desa,
                <span>bergerak dalam satu aplikasi.</span>
              </h1>
              <p>
                Belanja lokal, kelola usaha, kirim pesanan, dan pantau Kopdes
                dalam pengalaman digital yang cepat, aman, dan terasa dekat.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href={APK_URL} download>
                  Unduh KOMIT <ArrowDown size={18} />
                </a>
                <a className="button button--secondary" href="#pengalaman">
                  Jelajahi aplikasi <ArrowRight size={18} />
                </a>
              </div>
              <div className="hero-trust" aria-label="Keunggulan aplikasi">
                <span><ShieldCheck size={17} /> Ditandatangani resmi</span>
                <span><Zap size={17} /> Ringan &amp; responsif</span>
                <span><Globe2 size={17} /> Dibangun untuk desa</span>
              </div>
            </div>

            <div className="phone-stage" aria-label="Pratinjau aplikasi KOMIT">
              <div className="float-note float-note--top">
                <span className="float-note__icon"><PackageCheck size={19} /></span>
                <span><small>Status pesanan</small><strong>Siap diantar</strong></span>
                <Check size={16} />
              </div>
              <div className="phone">
                <div className="phone__speaker" />
                <div className="phone__screen">
                  <div className="phone__status"><span>09:41</span><span>● ● ▰</span></div>
                  <div className="phone__welcome">
                    <div><small>Selamat datang kembali</small><strong>Halo, Budi 👋</strong></div>
                    <span className="phone__avatar">B</span>
                  </div>
                  <div className="phone__location">
                    <MapPin size={18} /><span><small>Lokasi Anda</small><strong>Desa Lamteh, Banda Aceh</strong></span>
                  </div>
                  <div className="phone__search">Cari produk atau UMKM...</div>
                  <div className="phone__section-title"><strong>Pilihan hari ini</strong><span>Lihat semua</span></div>
                  <div className="phone__products">
                    <div><span className="product-art product-art--one">◒</span><strong>Beras Premium</strong><small>Rp72.000</small></div>
                    <div><span className="product-art product-art--two">◇</span><strong>Kopi Gayo</strong><small>Rp38.000</small></div>
                  </div>
                  <div className="phone__banner"><span>Gratis ongkir</span><strong>Kurir Desa</strong><Truck size={26} /></div>
                  <div className="phone__dock"><span className="is-active">●</span><span>□</span><span>✦</span><span>▱</span><span>○</span></div>
                </div>
              </div>
              <div className="float-note float-note--bottom">
                <span className="float-note__icon float-note__icon--gold"><BadgeCheck size={19} /></span>
                <span><small>Mitra terverifikasi</small><strong>128 usaha lokal</strong></span>
              </div>
            </div>
          </div>
          <div className="container proof-strip">
            <span>Dipercaya untuk</span>
            <strong><Users size={20} /> Warga</strong>
            <strong><Store size={20} /> UMKM</strong>
            <strong><Truck size={20} /> Kurir desa</strong>
            <strong><Fingerprint size={20} /> Pengurus Kopdes</strong>
          </div>
        </section>

        <section className="download-section" id="unduh">
          <div className="container download-layout">
            <div className="section-intro section-intro--light">
              <span className="section-kicker">Unduh langsung</span>
              <h2>Satu langkah menuju ekosistem desa yang terhubung.</h2>
              <p>
                APK tersimpan bersama landing page dan siap diunduh segera
                setelah website dipublikasikan ke Vercel.
              </p>
              <ul className="benefit-list">
                <li><Check size={17} /> Tanpa biaya berlangganan untuk pengguna</li>
                <li><Check size={17} /> Pembaruan status pesanan secara langsung</li>
                <li><Check size={17} /> Satu akun untuk pengalaman sesuai peran</li>
              </ul>
            </div>
            <DownloadCard
              url={APK_URL}
              version={APK_VERSION}
              size={APK_SIZE}
              sha256={APK_SHA256}
            />
          </div>
        </section>

        <section className="experience-section" id="pengalaman">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Satu platform, banyak peran</span>
              <h2>Berubah mengikuti cara Anda bekerja.</h2>
              <p>Pilih peran untuk melihat bagaimana KOMIT membantu aktivitas sehari-hari.</p>
            </div>
            <RoleShowcase />
          </div>
        </section>

        <section className="features-section" id="fitur">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><span className="section-kicker">Fitur yang saling terhubung</span><h2>Lebih sedikit langkah.<br />Lebih banyak dampak.</h2></div>
              <p>Setiap bagian KOMIT dirancang untuk menjaga informasi tetap ringkas, jelas, dan siap ditindaklanjuti.</p>
            </div>
            <div className="bento-grid">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <article className={`bento-card ${item.className}`} key={item.title}>
                    <div className="bento-card__icon"><Icon size={24} /></div>
                    <div><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.description}</p></div>
                    <ArrowRight className="bento-card__arrow" size={20} aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="install-section" id="cara-instal">
          <div className="container install-layout">
            <div className="section-intro">
              <span className="section-kicker">Mulai dalam beberapa menit</span>
              <h2>Unduh. Instal. Langsung terhubung.</h2>
              <p>Tiga langkah sederhana untuk membawa KOMIT ke perangkat Android Anda.</p>
              <a className="text-link" href={APK_URL} download>
                Unduh versi {APK_VERSION} <ArrowRight size={17} />
              </a>
            </div>
            <ol className="install-steps">
              {installSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-card">
            <div className="closing-glow" aria-hidden="true" />
            <div className="app-tile" aria-hidden="true"><span>K</span></div>
            <span className="section-kicker">KOMIT 1.0</span>
            <h2>Dari desa, untuk kemajuan bersama.</h2>
            <p>Mulai gunakan ekosistem koperasi digital yang menyatukan warga dan usaha lokal.</p>
            <div className="closing-actions">
              <a className="button button--white" href={APK_URL} download>Unduh aplikasi <ArrowDown size={18} /></a>
              <a className="button button--glass" href={APP_URL}>Buka versi web <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand brand--footer" href="#atas"><span className="brand-mark">K</span><span>KOMIT</span></a>
        <p>© {new Date().getFullYear()} PT Komit Indonesia. Koperasi Merah Putih Mitra.</p>
        <div><a href="#unduh">Unduh</a><a href={APP_URL}>Aplikasi web</a></div>
      </footer>
    </div>
  );
}
