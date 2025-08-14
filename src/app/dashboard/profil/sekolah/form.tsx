'use client';

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { updateSchoolProfile } from '@/lib/actions';
import { useEffect } from 'react';
import type { SchoolProfile } from '@/lib/types';

export function SchoolProfileForm({ profile }: { profile: SchoolProfile | null }) {
  const { toast } = useToast();
  const [state, dispatch] = useFormState(updateSchoolProfile, undefined);

  useEffect(() => {
    if (state?.message) {
      if (state.errors) {
        toast({
          variant: "destructive",
          title: "Terjadi Kesalahan!",
          description: state.message,
        });
      } else {
        toast({
            title: "Profil Disimpan!",
            description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Sambutan Kepala Sekolah</CardTitle>
          <CardDescription>
            Kelola konten sambutan kepala sekolah yang tampil di halaman profil.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label htmlFor="principalName">Nama Kepala Sekolah</label>
            <Input 
              id="principalName" 
              name="principalName" 
              defaultValue={profile?.principalName}
              placeholder="Contoh: Dr. Budi Santoso, M.Pd."
              required
            />
            {state?.errors?.principalName && <p className="text-sm font-medium text-destructive mt-1">{state.errors.principalName[0]}</p>}
          </div>

          <div>
            <label htmlFor="principalWelcome">Isi Sambutan</label>
            <Textarea
              id="principalWelcome"
              name="principalWelcome"
              className="min-h-[200px]"
              defaultValue={profile?.principalWelcome}
              placeholder="Tuliskan kata sambutan di sini..."
              required
            />
             <p className="text-sm text-muted-foreground mt-1">Anda bisa menggunakan tag HTML dasar seperti &lt;p&gt; dan &lt;strong&gt; untuk format.</p>
            {state?.errors?.principalWelcome && <p className="text-sm font-medium text-destructive mt-1">{state.errors.principalWelcome[0]}</p>}
          </div>

           <div>
            <label htmlFor="principalImageUrl">URL Foto Kepala Sekolah</label>
            <Input 
              id="principalImageUrl" 
              name="principalImageUrl" 
              defaultValue={profile?.principalImageUrl}
              placeholder="https://... (URL gambar)"
            />
             <p className="text-sm text-muted-foreground mt-1">Gunakan URL gambar yang sudah diunggah. Ukuran rekomendasi 400x500 piksel.</p>
            {state?.errors?.principalImageUrl && <p className="text-sm font-medium text-destructive mt-1">{state.errors.principalImageUrl[0]}</p>}
          </div>
        </CardContent>
      </Card>
      
      <Button type="submit">Simpan Perubahan</Button>
    </form>
  );
}
