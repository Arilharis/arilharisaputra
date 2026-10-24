# Portofolio Aril Hari Saputra

Website portofolio statis (HTML + CSS + JavaScript, tanpa build).

## Cara mengedit isi
Semua teks ada di **`data.js`** — nama, deskripsi, proyek, sertifikat, tech stack, pengalaman, email, dan link sosial.
Bagian bertanda `[ISI]` masih perlu dilengkapi (program studi, tahun masuk, GitHub, tech stack).

- **Foto:** simpan sebagai `assets/foto.jpg` (rasio 4:5). Jika tidak ada, inisial "AH" yang tampil.
- **CV:** simpan sebagai `assets/CV-Aril-Hari-Saputra.pdf`.
- **Gambar proyek (opsional):** tambahkan `image: "assets/nama-gambar.jpg"` di proyek. Tanpa gambar, tampil mockup otomatis.
- **Link demo/repo:** isi `links.demo` / `links.repo`. Jika kosong, tombolnya disembunyikan.

## Memperbarui CV
Sumber CV ada di `cv/cv.html`. Ada dua versi:

| Versi | Cara membuka | Simpan sebagai | Dipakai untuk |
|---|---|---|---|
| Publik (tanpa nomor WA) | `cv/cv.html?public` | `assets/CV-Aril-Hari-Saputra.pdf` | Tombol Unduh CV di website |
| Lengkap (dengan nomor WA) | `cv/cv.html` | `cv/CV-Aril-Hari-Saputra-lengkap.pdf` | Melamar kerja / dikirim langsung |

Jalankan server lokal (lihat di bawah), buka `http://localhost:5173/cv/cv.html?public` atau tanpa `?public`,
lalu Ctrl+P → "Save as PDF" (kertas A4, margin None, centang Background graphics).
Data pribadi diberi atribut `data-private` di `cv.html` dan otomatis disembunyikan pada versi publik.

**Jangan upload folder `cv/` ke GitHub**, karena berisi nomor WA.

## Menjalankan
Buka `index.html` langsung di browser, atau:

```bash
npx http-server -p 5173
```

## Deploy gratis
Upload folder ini ke GitHub, lalu hubungkan ke Vercel / Netlify / GitHub Pages.
