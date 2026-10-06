'use client';

import {
  Building2,
  PackageCheck,
  ShoppingBag,
  Store,
  Truck,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';

type Role = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  metrics: [string, string][];
};

const roles: Role[] = [
  {
    id: 'customer',
    label: 'Pembeli',
    eyebrow: 'Belanja dekat, terasa mudah',
    title: 'Kebutuhan desa dalam satu genggaman.',
    description:
      'Temukan produk Kopdes dan UMKM sekitar, bayar dengan cara yang nyaman, lalu pantau pesanan hingga tiba.',
    icon: ShoppingBag,
    metrics: [['850 m', 'Kopdes terdekat'], ['4,8', 'Rating warga'], ['COD', 'Pembayaran tersedia']],
  },
  {
    id: 'seller',
    label: 'UMKM',
    eyebrow: 'Etalase digital usaha lokal',
    title: 'Kelola usaha tanpa proses yang rumit.',
    description:
      'Atur produk, stok, pesanan, pengantaran, dan saldo toko dari satu ruang kerja yang ringkas.',
    icon: Store,
    metrics: [['24/7', 'Etalase aktif'], ['Real-time', 'Status stok'], ['1 layar', 'Kontrol usaha']],
  },
  {
    id: 'courier',
    label: 'Kurir',
    eyebrow: 'Pengiriman milik desa',
    title: 'Tugas jelas, perjalanan lebih terarah.',
    description:
      'Terima permintaan, ambil barang dari toko, gunakan navigasi, dan validasi penerimaan langsung di aplikasi.',
    icon: Truck,
    metrics: [['GPS', 'Navigasi tugas'], ['2 tahap', 'Validasi aman'], ['Langsung', 'Update status']],
  },
  {
    id: 'kopdes',
    label: 'Kopdes',
    eyebrow: 'Operasional koperasi terhubung',
    title: 'Lihat desa bergerak dari satu dashboard.',
    description:
      'Pantau transaksi, mitra, inventaris, kurir, dan insight operasional untuk keputusan yang lebih cepat.',
    icon: Building2,
    metrics: [['1 pusat', 'Data operasional'], ['AI', 'Insight stok'], ['Terukur', 'Kinerja mitra']],
  },
];

export function RoleShowcase() {
  const [activeId, setActiveId] = useState(roles[0].id);
  const active = roles.find((role) => role.id === activeId) ?? roles[0];
  const ActiveIcon = active.icon;

  return (
    <div className="role-showcase">
      <div className="role-tabs" role="tablist" aria-label="Pilih pengalaman pengguna">
        {roles.map((role) => {
          const Icon = role.icon;
          const selected = role.id === active.id;
          return (
            <button
              key={role.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={selected ? 'role-tab is-active' : 'role-tab'}
              onClick={() => setActiveId(role.id)}
            >
              <Icon size={18} />
              {role.label}
            </button>
          );
        })}
      </div>

      <div className="role-panel" key={active.id} role="tabpanel">
        <div className="role-panel__copy">
          <span className="section-kicker">{active.eyebrow}</span>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <div className="role-metrics">
            {active.metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="role-panel__visual" aria-hidden="true">
          <div className="visual-head">
            <span className="visual-icon"><ActiveIcon size={24} /></span>
            <div><small>Ruang kerja</small><strong>{active.label}</strong></div>
            <span className="live-dot">Aktif</span>
          </div>
          <div className="visual-card visual-card--featured">
            <div className="visual-lines"><span /><span /><span /></div>
            <PackageCheck size={34} />
          </div>
          <div className="visual-grid"><span /><span /><span /></div>
        </div>
      </div>
    </div>
  );
}
