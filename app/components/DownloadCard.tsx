'use client';

import { Check, Copy, Download, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

type Props = {
  url: string;
  version: string;
  size: string;
  sha256: string;
};

export function DownloadCard({ url, version, size, sha256 }: Props) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  async function copyChecksum() {
    await navigator.clipboard.writeText(sha256);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="download-card">
      <div className="download-card__glow" aria-hidden="true" />
      <div className="download-card__top">
        <div className="app-tile app-tile--large" aria-hidden="true">
          <span>K</span>
        </div>
        <div>
          <span className="download-card__label">Rilis stabil terbaru</span>
          <h3>KOMIT untuk Android</h3>
          <p>Versi {version} · {size} · Android 7.0+</p>
        </div>
      </div>

      <a
        className="download-primary"
        href={url}
        download="KOMIT-v1.0.0.apk"
        onClick={() => setDownloading(true)}
      >
        {downloading ? <Check size={20} /> : <Download size={20} />}
        <span>{downloading ? 'Unduhan dimulai' : 'Unduh APK sekarang'}</span>
        <small>Gratis</small>
      </a>

      <div className="download-card__verified">
        <ShieldCheck size={18} aria-hidden="true" />
        <span>
          Ditandatangani resmi oleh <strong>PT Komit Indonesia</strong>
        </span>
      </div>

      <div className="checksum">
        <div>
          <span>SHA-256</span>
          <code>{sha256}</code>
        </div>
        <button type="button" onClick={copyChecksum} aria-label="Salin checksum SHA-256">
          {copied ? <Check size={17} /> : <Copy size={17} />}
          <span>{copied ? 'Tersalin' : 'Salin'}</span>
        </button>
      </div>
    </div>
  );
}
