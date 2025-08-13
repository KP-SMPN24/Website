import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import prisma from '@/lib/prisma';

export default async function BeritaPage() {
  const allNews = await prisma.newsArticle.findMany({
    orderBy: {
      date: 'desc',
    },
  });

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Berita & Pengumuman
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Ikuti terus informasi terkini dari SMA EduVerse.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allNews.map((article) => (
          <Card key={article.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="p-0">
              <Link href={`/berita/${article.slug}`}>
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full object-cover aspect-video"
                  data-ai-hint={article.category === 'Berita' ? 'news event' : 'announcement paper'}
                />
              </Link>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <Badge variant="outline" className="mb-2">{article.category}</Badge>
              <CardTitle className="text-2xl h-24 leading-tight font-headline">
                <Link href={`/berita/${article.slug}`} className="hover:text-primary transition-colors">
                  {article.title}
                </Link>
              </CardTitle>
              <CardDescription className="mt-2 text-sm text-muted-foreground">
                Oleh {article.author} - {format(new Date(article.date), "d MMMM yyyy", { locale: id })}
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
    </div>
  );
}
