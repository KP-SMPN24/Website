import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Newspaper, Trophy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockNews, mockAchievements } from '@/lib/data';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function HomePage() {
  const latestNews = mockNews.slice(0, 3);
  const featuredAchievements = mockAchievements.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh]">
          <Image
            src="https://placehold.co/1600x900"
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
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/berita">
                  Jelajahi Lebih Lanjut <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Tentang Kami</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                  Pendidikan Unggul untuk Generasi Masa Depan
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Di EduVerse, kami berkomitmen untuk menyediakan lingkungan belajar yang inspiratif dan mendukung, di mana setiap siswa dapat mencapai potensi penuh mereka. Dengan kurikulum yang inovatif dan fasilitas modern, kami mempersiapkan siswa untuk menghadapi tantangan global.
                </p>
              </div>
              <Image
                src="https://placehold.co/600x400"
                width={600}
                height={400}
                alt="About us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                data-ai-hint="students classroom library"
              />
            </div>
          </div>
        </section>

        <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-accent/10 text-accent-foreground hover:bg-accent/20">Berita Terbaru</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Ikuti Perkembangan Terkini</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dapatkan informasi terbaru seputar kegiatan, pengumuman, dan pencapaian dari komunitas sekolah kami.
              </p>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((article) => (
                <Card key={article.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Image
                      src={article.imageUrl}
                      width={400}
                      height={250}
                      alt={article.title}
                      className="aspect-video w-full object-cover"
                      data-ai-hint={article.category === 'Berita' ? "news event" : "announcement notice"}
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <Badge variant="outline" className="mb-2">{article.category}</Badge>
                    <CardTitle className="text-xl h-16 leading-tight font-headline">{article.title}</CardTitle>
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
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Prestasi Kami</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Merayakan Keberhasilan</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kami bangga dengan berbagai prestasi yang telah diraih oleh siswa dan sekolah kami di berbagai bidang.
              </p>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {featuredAchievements.map((achievement) => (
                <Card key={achievement.id} className="flex flex-col text-center items-center p-6 transition-shadow duration-300 hover:shadow-lg">
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
