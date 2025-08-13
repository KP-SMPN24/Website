import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Newspaper, Trophy, Target, Milestone, Building, FlaskConical, Computer, Dumbbell } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockNews, mockAchievements } from '@/lib/data';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function HomePage() {
  const latestNews = mockNews.slice(0, 3);
  const featuredAchievements = mockAchievements.slice(0, 3);

  const facilities = [
    {
      icon: <Building className="h-10 w-10 mx-auto text-primary mb-2"/>,
      title: "Ruang Kelas Modern",
      description: "24 ruang kelas dengan fasilitas AC dan proyektor.",
    },
    {
      icon: <FlaskConical className="h-10 w-10 mx-auto text-primary mb-2"/>,
      title: "Lab Sains & Bahasa",
      description: "6 laboratorium lengkap untuk praktikum dan bahasa.",
    },
    {
      icon: <Computer className="h-10 w-10 mx-auto text-primary mb-2"/>,
      title: "Lab Komputer",
      description: "3 laboratorium komputer dengan perangkat terbaru.",
    },
    {
      icon: <Dumbbell className="h-10 w-10 mx-auto text-primary mb-2"/>,
      title: "Sarana Olahraga",
      description: "5 area olahraga termasuk lapangan basket dan futsal.",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh]">
          <Image
            src="https://placehold.co/1600x900.png"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="school campus building"
          />
          <div className="absolute inset-0 bg-primary/70 z-10" />
          <div className="relative z-20 container mx-auto flex h-full flex-col items-center justify-center text-center text-primary-foreground px-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-fade-in-down">
              Selamat Datang di EduVerse
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl mt-4 animate-fade-in-up">
              Membentuk masa depan cerah melalui pendidikan berkualitas dan inovasi tanpa henti.
            </p>
            <div className="mt-8 animate-fade-in-up animation-delay-300">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/penerimaan">
                  Pendaftaran Siswa Baru <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-base">Tentang Kami</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                  Pendidikan Unggul untuk Generasi Masa Depan
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Di EduVerse, kami berkomitmen untuk menyediakan lingkungan belajar yang inspiratif dan mendukung, di mana setiap siswa dapat mencapai potensi penuh mereka. Dengan kurikulum yang inovatif dan fasilitas modern, kami mempersiapkan siswa untuk menghadapi tantangan global.
                </p>
                 <Button asChild variant="outline">
                    <Link href="/profil">Selengkapnya Tentang Kami</Link>
                </Button>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width={600}
                height={400}
                alt="About us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                data-ai-hint="students classroom library"
              />
            </div>
          </div>
        </section>

        <section id="visi-misi" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
           <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Badge variant="secondary" className="text-base">Visi & Misi</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Arah dan Tujuan Kami</h2>
             </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Target className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Visi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Menjadi sekolah unggul yang menghasilkan lulusan berkarakter mulia, cerdas, kompetitif secara global, dan cinta tanah air.
                    </p>
                  </CardContent>
                </Card>
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Milestone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Misi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Menyelenggarakan pendidikan berkualitas.</li>
                      <li>Mengembangkan potensi siswa secara akademik dan non-akademik.</li>
                      <li>Membekali siswa dengan keterampilan abad ke-21.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-12">
                <Button asChild variant="outline">
                    <Link href="/profil/visi-misi">Lihat Selengkapnya</Link>
                </Button>
            </div>
           </div>
        </section>

        <section id="fasilitas" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <Badge variant="secondary" className="text-base">Fasilitas</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Lingkungan Belajar Modern</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Kami menyediakan fasilitas lengkap dan modern untuk mendukung proses belajar mengajar yang optimal.
                    </p>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
                  {facilities.map((facility, index) => (
                    <Card key={index} className="text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center">
                        {facility.icon}
                        <CardHeader className="p-0 mt-4">
                          <CardTitle className="text-lg font-semibold">{facility.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2">
                          <p className="text-muted-foreground text-sm">{facility.description}</p>
                        </CardContent>
                    </Card>
                  ))}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild variant="outline">
                        <Link href="/profil">Lihat Semua Fasilitas</Link>
                    </Button>
                </div>
            </div>
        </section>


        <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="secondary" className="text-base">Berita Terbaru</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Ikuti Perkembangan Terkini</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dapatkan informasi terbaru seputar kegiatan, pengumuman, dan pencapaian dari komunitas sekolah kami.
              </p>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((article) => (
                <Card key={article.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Link href={`/berita/${article.slug}`}>
                      <Image
                        src={article.imageUrl}
                        width={400}
                        height={250}
                        alt={article.title}
                        className="aspect-video w-full object-cover"
                        data-ai-hint={article.category === 'Berita' ? "news event" : "announcement notice"}
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <Badge variant="outline" className="mb-2">{article.category}</Badge>
                    <CardTitle className="text-xl h-16 leading-tight font-headline">
                       <Link href={`/berita/${article.slug}`} className="hover:text-primary transition-colors">{article.title}</Link>
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm text-muted-foreground">
                      {format(new Date(article.date), "d MMMM yyyy", { locale: id })}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={`/berita/${article.slug}`}>
                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/berita">Lihat Semua Berita</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="secondary" className="text-base">Prestasi Kami</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Merayakan Keberhasilan</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kami bangga dengan berbagai prestasi yang telah diraih oleh siswa dan sekolah kami di berbagai bidang.
              </p>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {featuredAchievements.map((achievement) => (
                <Card key={achievement.id} className="flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="p-4 bg-accent rounded-full mb-4">
                    <Trophy className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg font-semibold font-headline">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-2 flex-grow">
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/prestasi">Lihat Semua Prestasi</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
