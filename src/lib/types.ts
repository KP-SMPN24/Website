import type { Timestamp } from 'firebase/firestore';

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string | Timestamp;
  imageUrl: string;
  category: 'Berita' | 'Pengumuman';
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  date: string | Timestamp;
  imageUrl: string;
  category: 'Akademik' | 'Olahraga' | 'Seni' | 'Lainnya';
};

export type Staff = {
    id: string;
    name: string;
    position: string;
    category: 'Pendidik' | 'Staf';
    imageUrl: string;
};

export type Setting = {
    id: string;
    value: string;
};

export type VisionMission = {
    vision: string;
    mission: string;
};

export type SchoolProfile = {
    principalName: string;
    principalWelcome: string;
    principalImageUrl: string;
};
