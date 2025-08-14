import Link from 'next/link';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import type { NewsArticle } from '@/lib/types';

async function getAllNews(): Promise<NewsArticle[]> {
    try {
        const newsCollection = collection(db, 'newsArticles');
        const q = query(newsCollection, orderBy('date', 'desc'));
        const newsSnapshot = await getDocs(q);
        const newsList = newsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as NewsArticle));
        return newsList;
    } catch (error) {
        console.error("Failed to fetch news for dashboard, returning empty array.", error);
        return [];
    }
}

export default async function BeritaManagementPage() {
  const allNews = await getAllNews();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Manajemen Berita</h1>
        <Button asChild size="sm" className="ml-auto gap-1 bg-accent hover:bg-accent/90">
          <Link href="/dashboard/berita/baru">
            Tambah Berita
            <PlusCircle className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Daftar Berita & Pengumuman</CardTitle>
          <CardDescription>
            Kelola semua artikel berita dan pengumuman yang ada di website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead className="hidden md:table-cell">Kategori</TableHead>
                <TableHead className="hidden md:table-cell">Tanggal</TableHead>
                <TableHead>
                  <span className="sr-only">Aksi</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allNews.map((article) => {
                const articleDate = article.date instanceof Timestamp ? article.date.toDate() : new Date(article.date);
                return (
                    <TableRow key={article.id}>
                    <TableCell className="font-medium">{article.title}</TableCell>
                    <TableCell className="hidden md:table-cell">
                        <Badge variant="outline">{article.category}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                        {format(articleDate, "d MMMM yyyy", { locale: id })}
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                            Hapus
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                    </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
