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
import Image from 'next/image';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { Staff } from '@/lib/types';


async function getAllStaff(): Promise<Staff[]> {
    try {
        const staffCollection = collection(db, 'staff');
        const staffSnapshot = await getDocs(staffCollection);
        return staffSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Staff));
    } catch (error) {
        console.error("Failed to fetch staff for dashboard, returning empty array.", error);
        return [];
    }
}

export default async function GuruStaffManagementPage() {
  const allStaff = await getAllStaff();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>Daftar Guru & Tenaga Kependidikan</CardTitle>
            <CardDescription>
                Kelola semua data guru dan staf yang ditampilkan di website.
            </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1 bg-accent hover:bg-accent/90">
          <Link href="/dashboard/guru-staff/baru">
            Tambah Data
            <PlusCircle className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Jabatan</TableHead>
              <TableHead className="hidden md:table-cell">Kategori</TableHead>
              <TableHead>
                <span className="sr-only">Aksi</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allStaff.map((person) => (
              <TableRow key={person.id}>
                 <TableCell className="hidden sm:table-cell">
                  <Image
                    alt={`Foto ${person.name}`}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={person.imageUrl}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{person.name}</TableCell>
                 <TableCell>{person.position}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="outline">{person.category}</Badge>
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
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
