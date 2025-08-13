'use client';

import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { createAchievement } from '@/lib/actions';
import { useEffect, useState } from 'react';

export function AchievementForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [state, dispatch] = useFormState(createAchievement, undefined);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (state?.message) {
      if(state.errors) {
          toast({
              variant: "destructive",
              title: "Terjadi Kesalahan!",
              description: state.message,
          });
      } else {
           toast({
              title: "Berhasil!",
              description: "Prestasi telah berhasil ditambahkan.",
          });
          router.push('/dashboard/prestasi');
      }
    }
  }, [state, toast, router]);

  return (
    <form action={dispatch} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Detail Prestasi</CardTitle>
          <CardDescription>Isi informasi mengenai prestasi yang diraih.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label htmlFor="title">Nama Prestasi</label>
            <Input id="title" name="title" placeholder="Contoh: Juara 1 Lomba Cerdas Cermat" required/>
            <p className="text-sm text-muted-foreground mt-1">Tuliskan nama penghargaan atau gelar yang diraih.</p>
            {state?.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title[0]}</p>}
          </div>

          <div>
            <label htmlFor="description">Deskripsi Singkat</label>
            <Textarea
              id="description"
              name="description"
              placeholder="Jelaskan sedikit tentang prestasi ini, seperti tingkat kompetisi atau siapa yang meraihnya."
              required
            />
            {state?.errors?.description && <p className="text-sm font-medium text-destructive">{state.errors.description[0]}</p>}
          </div>

          <div>
            <label htmlFor="category">Kategori</label>
             <input type="hidden" name="category" value={category} />
            <Select onValueChange={setCategory} required>
                <SelectTrigger>
                    <SelectValue placeholder="Pilih kategori prestasi" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Akademik">Akademik</SelectItem>
                    <SelectItem value="Olahraga">Olahraga</SelectItem>
                    <SelectItem value="Seni">Seni</SelectItem>
                    <SelectItem value="Lainnya">Lainnya</SelectItem>
                </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground mt-1">Kelompokkan prestasi agar mudah ditemukan di website.</p>
            {state?.errors?.category && <p className="text-sm font-medium text-destructive">{state.errors.category[0]}</p>}
          </div>
        </CardContent>
      </Card>
      <Button type="submit">Simpan Data Prestasi</Button>
    </form>
  );
}
