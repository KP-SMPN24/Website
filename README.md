<div align="center">
  <h1 align="center">Website Sekolah EduVerse</h1>
  <p align="center">
    Proyek website informasi sekolah modern yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS.
  </p>
</div>

---

## 📚 Tentang Proyek

**Website Sekolah EduVerse** adalah sebuah platform informasi digital untuk sekolah fiktif bernama "SMA EduVerse". Proyek ini bertujuan untuk menyediakan antarmuka yang bersih, modern, dan responsif bagi siswa, orang tua, dan masyarakat umum untuk mendapatkan informasi terkini seputar sekolah.

Selain halaman publik, proyek ini juga dilengkapi dengan **Dashboard Admin** yang fungsional untuk memudahkan pengelolaan konten seperti berita, pengumuman, dan data prestasi.

## ✨ Fitur Utama

### Halaman Publik

-   **Beranda:** Halaman utama yang menampilkan ringkasan informasi penting, berita terbaru, dan prestasi unggulan.
-   **Profil Sekolah:** Informasi detail mengenai sejarah, visi, misi, dan fasilitas sekolah.
-   **Berita & Pengumuman:** Daftar semua artikel berita dan pengumuman yang telah dipublikasikan, dengan halaman detail untuk setiap artikel.
-   **Galeri Prestasi:** Menampilkan daftar pencapaian yang telah diraih oleh siswa maupun sekolah.
-   **Desain Responsif:** Tampilan yang optimal di berbagai perangkat, mulai dari desktop hingga mobile.

### Dashboard Admin

-   **Ringkasan Statistik:** Menampilkan jumlah total berita dan prestasi yang telah diinput.
-   **Manajemen Berita:** Fitur CRUD (Create, Read, Update, Delete) untuk mengelola artikel berita dan pengumuman.
-   **Manajemen Prestasi:** Fitur CRUD untuk mencatat dan mempublikasikan prestasi sekolah.

## 🚀 Tumpukan Teknologi (Tech Stack)

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Data:** Mock data (saat ini data masih bersifat statis di dalam kode).

## ⚙️ Panduan Instalasi & Menjalankan Lokal

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repository ini:**

    ```bash
    git clone https://github.com/username/repository-name.git
    cd repository-name
    ```

2.  **Install dependensi:**
    (Gunakan package manager pilihan Anda)

    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    ```

3.  **Jalankan server development:**

    ```bash
    npm run dev
    ```

4.  Buka browser Anda dan kunjungi `http://localhost:3000`.

## 📂 Struktur Proyek (Ringkas)

```
/
├── src/
│   ├── app/
│   │   ├── (main)/         # Grup layout untuk halaman publik (Home, Berita, Profil, dll.)
│   │   ├── dashboard/      # Grup layout dan halaman untuk admin dashboard
│   │   └── layout.tsx      # Layout utama
│   ├── components/
│   │   └── ui/             # Komponen UI dari shadcn/ui
│   └── lib/
│       ├── data.ts         # Mock data untuk berita dan prestasi
│       └── utils.ts        # Fungsi utilitas (cth: cn dari clsx)
├── public/                 # Aset statis
└── tailwind.config.ts      # Konfigurasi Tailwind CSS
```
