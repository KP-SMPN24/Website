'use client';

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { updateOrgChart } from '@/lib/actions';
import { useEffect } from 'react';
import type { Setting } from '@/lib/types';
import Image from 'next/image';

export function OrgChartForm({ settings }: { settings: Setting[] }) {
  const { toast } = useToast();
  const [state, dispatch] = useFormState(updateOrgChart, undefined);

  const orgChartUrl = settings.find(s => s.id === 'orgChartUrl')?.value || '';

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
            title: "Pengaturan Disimpan!",
            description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Struktur Organisasi</CardTitle>
          <CardDescription>
            Unggah atau perbarui gambar bagan struktur organisasi sekolah.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            {orgChartUrl && (
                <div>
                    <p className="text-sm font-medium mb-2">Pratinjau Saat Ini:</p>
                    <div className="border rounded-lg p-4">
                        <Image src={orgChartUrl} alt="Pratinjau Struktur Organisasi" width={600} height={400} className="w-full h-auto" />
                    </div>
                </div>
            )}
            <div>
                <label htmlFor="orgChartUrl">URL Gambar Struktur Organisasi</label>
                <Input 
                id="orgChartUrl" 
                name="orgChartUrl" 
                placeholder="https://... (URL gambar yang sudah diunggah)" 
                defaultValue={orgChartUrl} 
                />
                <p className="text-sm text-muted-foreground mt-2">Pastikan gambar sudah diunggah ke sebuah layanan hosting dan tempelkan URL-nya di sini.</p>
                {state?.errors?.orgChartUrl && <p className="text-sm font-medium text-destructive">{state.errors.orgChartUrl[0]}</p>}
            </div>
        </CardContent>
      </Card>
      
      <Button type="submit">Simpan Perubahan</Button>
    </form>
  );
}
