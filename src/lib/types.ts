export type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: 'Berita' | 'Pengumuman';
};

export type Achievement = {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: 'Akademik' | 'Olahraga' | 'Seni' | 'Lainnya';
};
