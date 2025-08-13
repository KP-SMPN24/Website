import type { NewsArticle, Achievement } from '@/lib/types';

export const mockNews: NewsArticle[] = [
  {
    id: 1,
    slug: 'juara-olimpiade-sains-nasional',
    title: 'Siswa SMA EduVerse Raih Juara 1 Olimpiade Sains Nasional',
    content: '<p>Dengan bangga kami umumkan bahwa salah satu siswa terbaik kami, Budi Santoso dari kelas XI IPA 1, berhasil meraih Juara 1 dalam ajang Olimpiade Sains Nasional (OSN) 2023 bidang Fisika. Kompetisi yang diadakan di Jakarta ini diikuti oleh ratusan siswa dari seluruh Indonesia.</p><p>Kemenangan ini merupakan buah dari kerja keras Budi serta bimbingan intensif dari para guru. Sekolah memberikan dukungan penuh dalam bentuk fasilitas laboratorium dan jam belajar tambahan. "Saya sangat bersyukur atas dukungan sekolah dan keluarga. Ini adalah mimpi yang menjadi kenyataan," ujar Budi saat diwawancarai.</p><p>Kepala Sekolah, Ibu Dr. Siti Aminah, M.Pd., menyatakan kebanggaannya, "Prestasi Budi adalah inspirasi bagi kita semua. Ini membuktikan bahwa dengan tekad dan kerja keras, tidak ada yang tidak mungkin. Kami akan terus mendukung siswa-siswi kami untuk berprestasi di berbagai bidang."</p>',
    author: 'Tim Jurnalistik Sekolah',
    date: '2023-10-26',
    imageUrl: 'https://placehold.co/800x600/3F51B5/FFFFFF',
    category: 'Berita',
  },
  {
    id: 2,
    slug: 'penerimaan-siswa-baru-2024',
    title: 'Pengumuman Penerimaan Siswa Baru (PSB) Tahun Ajaran 2024/2025',
    content: '<p>Penerimaan Siswa Baru (PSB) untuk tahun ajaran 2024/2025 di SMA EduVerse resmi dibuka! Kami mengundang putra-putri terbaik bangsa untuk bergabung bersama kami.</p><p><strong>Jadwal Penting:</strong></p><ul><li>Pendaftaran Online: 1 - 28 Februari 2024</li><li>Tes Seleksi Akademik: 5 Maret 2024</li><li>Wawancara & Tes Psikologi: 7 - 8 Maret 2024</li><li>Pengumuman Kelulusan: 15 Maret 2024</li></ul><p>Informasi lebih lanjut mengenai syarat pendaftaran dan alur PSB dapat diakses melalui tombol di bawah ini. Jangan lewatkan kesempatan untuk menjadi bagian dari keluarga besar SMA EduVerse!</p>',
    author: 'Admin Sekolah',
    date: '2023-10-20',
    imageUrl: 'https://placehold.co/800x600/FF9800/FFFFFF',
    category: 'Pengumuman',
  },
  {
    id: 3,
    slug: 'kegiatan-bakti-sosial',
    title: 'Sukses Gelar Bakti Sosial dan Donor Darah',
    content: '<p>OSIS SMA EduVerse sukses menyelenggarakan kegiatan Bakti Sosial tahunan pada tanggal 15 Oktober 2023. Acara yang berpusat di desa tetangga ini meliputi pembagian sembako, pemeriksaan kesehatan gratis, dan kegiatan bersih-bersih lingkungan.</p><p>Selain itu, bekerja sama dengan Palang Merah Indonesia (PMI), kami juga mengadakan acara donor darah yang diikuti oleh siswa, guru, dan masyarakat umum. Total terkumpul 150 kantong darah yang siap didonasikan. "Kegiatan ini mengajarkan kami tentang pentingnya kepedulian dan berbagi dengan sesama," kata Ketua OSIS, Rina Wijaya.</p>',
    author: 'Tim Jurnalistik Sekolah',
    date: '2023-10-16',
    imageUrl: 'https://placehold.co/800x600/3F51B5/FFFFFF',
    category: 'Berita',
  },
];

export const mockAchievements: Achievement[] = [
  {
    id: 1,
    title: 'Juara 1 Lomba Cerdas Cermat Tingkat Provinsi',
    description: 'Tim cerdas cermat SMA EduVerse berhasil mempertahankan gelar juara dalam Lomba Cerdas Cermat tingkat provinsi Jawa Barat.',
    date: '2023-09-15',
    imageUrl: 'https://placehold.co/600x400/3F51B5/FFFFFF',
    category: 'Akademik',
  },
  {
    id: 2,
    title: 'Medali Emas Kejuaraan Karate Nasional',
    description: 'Ahmad Dhani, siswa kelas X, membawa pulang medali emas dari Kejuaraan Karate Nasional kategori junior.',
    date: '2023-08-22',
    imageUrl: 'https://placehold.co/600x400/FF9800/FFFFFF',
    category: 'Olahraga',
  },
  {
    id: 3,
    title: 'Penghargaan Festival Film Pendek Pelajar',
    description: 'Klub sinematografi sekolah memenangkan penghargaan "Film Terbaik" di Festival Film Pendek Pelajar untuk karya mereka yang berjudul "Cita-citaku".',
    date: '2023-07-30',
    imageUrl: 'https://placehold.co/600x400/3F51B5/FFFFFF',
    category: 'Seni',
  },
  {
    id: 4,
    title: 'Sekolah Adiwiyata Tingkat Nasional',
    description: 'SMA EduVerse dianugerahi penghargaan sebagai Sekolah Adiwiyata tingkat nasional atas komitmennya terhadap lingkungan hidup.',
    date: '2023-06-05',
    imageUrl: 'https://placehold.co/600x400/FF9800/FFFFFF',
    category: 'Lainnya',
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return mockNews.find((article) => article.slug === slug);
}
