import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, Timestamp } from 'firebase/firestore';
import type { NewsArticle } from '@/lib/types';


type BeritaDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  try {
    const newsCollection = collection(db, 'newsArticles');
    const newsSnapshot = await getDocs(newsCollection);
    const newsList = newsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as NewsArticle));
    
    return newsList.map((news) => ({
      slug: news.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params for news, returning empty array.", error);
    return [];
  }
}

async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
    try {
        const q = query(collection(db, "newsArticles"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return null;
        }
        const docData = querySnapshot.docs[0].data();
        return { ...docData, id: querySnapshot.docs[0].id } as NewsArticle;
    } catch (error) {
        console.error(`Failed to get news by slug: ${slug}`, error);
        return null;
    }
}

export default async function BeritaDetailPage({ params }: BeritaDetailPageProps) {
  const article = await getNewsBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const articleDate = article.date instanceof Timestamp ? article.date.toDate() : new Date(article.date);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline mb-4">
            {article.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{format(articleDate, "d MMMM yyyy", { locale: id })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
          </div>
        </header>

        <Image
          src={article.imageUrl}
          alt={article.title}
          width={1200}
          height={675}
          className="w-full rounded-lg object-cover aspect-video mb-8 shadow-lg"
          data-ai-hint="article feature image"
          priority
        />

        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}
