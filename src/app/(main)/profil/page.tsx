import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Users, GraduationCap, Computer, Dumbbell } from 'lucide-react';

export default function ProfilPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Profil Sekolah
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Mengenal lebih dekat SMA EduVerse, tempat lahirnya generasi masa depan.
        </p>
      </div>

      <section id="sambutan" className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2">
              <Image
                src="https://placehold.co/400x500.png"
                alt="Kepala Sekolah"
                width={400}
                height={500}
                className="w-full h-full object-cover object-top"
                data-ai-hint="school principal portrait"
              />
            </div>
            <div className="md:col-span-3">
              <CardHeader>
                <Badge variant="outline">Sambutan Kepala Sekolah</Badge>
                <CardTitle className="text-3xl font-headline mt-2">Dr. Siti Aminah, M.Pd.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  "Selamat datang di SMA EduVerse! Kami bangga menjadi lembaga pendidikan yang berkomitmen pada keunggulan akademik dan pembentukan karakter. Di sini, kami tidak hanya mengajar, tetapi juga menginspirasi setiap siswa untuk menemukan dan mengembangkan potensi terbaik mereka."
                </p>
                <p>
                  "Dengan dukungan fasilitas modern, kurikulum yang relevan, dan tenaga pendidik profesional, kami menciptakan lingkungan belajar yang kondusif dan inovatif. Mari bersama-sama kita wujudkan masa depan yang gemilang bagi putra-putri kita."
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      <section id="fasilitas">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="text-lg">Fasilitas Unggulan</Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
                <GraduationCap className="h-10 w-10 mx-auto text-primary mb-2"/>
                <CardTitle className="text-lg font-semibold">Ruang Kelas Modern</CardTitle>
            </Card>
             <Card className="text-center p-6">
                <Users className="h-10 w-10 mx-auto text-primary mb-2"/>
                <CardTitle className="text-lg font-semibold">Perpustakaan Digital</CardTitle>
            </Card>
             <Card className="text-center p-6">
                <Computer className="h-10 w-10 mx-auto text-primary mb-2"/>
                <CardTitle className="text-lg font-semibold">Laboratorium Komputer</CardTitle>
            </Card>
             <Card className="text-center p-6">
                <Dumbbell className="h-10 w-10 mx-auto text-primary mb-2"/>
                <CardTitle className="text-lg font-semibold">Sarana Olahraga</CardTitle>
            </Card>
        </div>
      </section>

    </div>
  );
}
