import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Palette, Dumbbell, Computer } from 'lucide-react';

export default function AkademikPage() {
  const extracurriculars = [
    {
      name: 'OSIS & MPK',
      icon: <Computer className="h-8 w-8 text-accent-foreground" />,
      description: 'Organisasi siswa intra sekolah untuk belajar kepemimpinan dan manajemen.',
    },
    {
      name: 'Klub Olahraga',
      icon: <Dumbbell className="h-8 w-8 text-accent-foreground" />,
      description: 'Mencakup futsal, basket, voli, dan bulu tangkis untuk menyalurkan bakat olahraga.',
    },
    {
      name: 'Seni & Musik',
      icon: <Palette className="h-8 w-8 text-accent-foreground" />,
      description: 'Wadah kreativitas siswa di bidang musik, tari tradisional, dan teater.',
    },
    {
      name: 'Kelompok Ilmiah Remaja (KIR)',
      icon: <BookOpen className="h-8 w-8 text-accent-foreground" />,
      description: 'Bagi siswa yang tertarik pada penelitian dan pengembangan ilmu pengetahuan.',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Akademik & Kurikulum
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Kurikulum dan kegiatan penunjang akademik di SMA EduVerse.
        </p>
      </div>

      <div className="grid gap-12">
        <div>
          <Badge variant="secondary" className="text-lg mb-4">Kurikulum</Badge>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Kurikulum Merdeka</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                SMA EduVerse menerapkan Kurikulum Merdeka yang memberikan keleluasaan kepada pendidik untuk menciptakan pembelajaran berkualitas yang sesuai dengan kebutuhan dan lingkungan belajar peserta didik.
              </p>
              <p>
                Fokus kami adalah pada pengembangan karakter dan kompetensi siswa, dengan pendekatan pembelajaran yang berpusat pada proyek (Project-Based Learning) untuk mengasah kemampuan berpikir kritis, kolaborasi, dan kreativitas.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Struktur kurikulum yang fleksibel.</li>
                <li>Fokus pada materi esensial.</li>
                <li>Pengembangan soft skills melalui Proyek Penguatan Profil Pelajar Pancasila.</li>
                <li>Memberikan ruang lebih luas untuk pengembangan minat dan bakat siswa.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Badge variant="secondary" className="text-lg mb-4">Ekstrakurikuler</Badge>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {extracurriculars.map((item) => (
              <Card key={item.name} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                 <div className="p-4 bg-accent rounded-full mb-4">
                  {item.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-headline">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="mt-2 text-muted-foreground">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
