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
import type { Achievement } from '@/lib/types';


async function getAllAchievements(): Promise<Achievement[]> {
    try {
        const achievementsCollection = collection(db, 'achievements');
        const q = query(achievementsCollection, orderBy('date', 'desc'));
        const achievementsSnapshot = await getDocs(q);
        return achievementsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Achievement));
    } catch (error) {
        console.error("Failed to fetch achievements for dashboard, returning empty array.", error);
        return [];
    }
}


export default async function PrestasiManagementPage() {
  const allAchievements = await getAllAchievements();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Manajemen Prestasi</h1>
        <Button asChild size="sm" className="ml-auto gap-1 bg-accent hover:bg-accent/90">
          <Link href="/dashboard/prestasi/baru">
            Tambah Prestasi
            <PlusCircle className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Daftar Prestasi</CardTitle>
          <CardDescription>
            Kelola semua prestasi yang ditampilkan di website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul Prestasi</TableHead>
                <TableHead className="hidden md:table-cell">Kategori</TableHead>
                <TableHead className="hidden md:table-cell">Tanggal</TableHead>
                <TableHead>
                  <span className="sr-only">Aksi</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allAchievements.map((achievement) => {
                 const achievementDate = achievement.date instanceof Timestamp ? achievement.date.toDate() : new Date(achievement.date);
                 return (
                    <TableRow key={achievement.id}>
                      <TableCell className="font-medium">{achievement.title}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="outline">{achievement.category}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {format(achievementDate, "d MMMM yyyy", { locale: id })}
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
