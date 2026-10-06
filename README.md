# Landing KOMIT

Landing page statis untuk promosi dan unduhan aplikasi Android KOMIT.

## Menjalankan lokal

Jalankan dari direktori `website`:

```bash
npm install
npm run dev:landing
```

Landing tersedia di `http://localhost:3100`.

## Deploy ke Vercel

Gunakan `website/landing` sebagai **Root Directory** bila repository yang dihubungkan adalah repository utama KOPDES. Gunakan `landing` bila repository yang dihubungkan adalah repository `website`. Preset framework akan terdeteksi sebagai Next.js dan perintah build-nya adalah `npm run build`.

APK rilis sudah tersedia di `public/downloads/KOMIT-v1.0.0.apk`, sehingga `NEXT_PUBLIC_APK_URL` tidak wajib diatur. Isi `NEXT_PUBLIC_APP_URL` dengan alamat website aplikasi utama agar tombol **Buka versi web** mengarah ke aplikasi. Jika APK dipindahkan ke Vercel Blob, isi `NEXT_PUBLIC_APK_URL` dengan URL Blob tersebut.

Konfigurasi lengkap tersedia di `.env.example`.
