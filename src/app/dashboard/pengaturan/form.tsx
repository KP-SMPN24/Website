'use client';

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { updateSettings } from '@/lib/actions';
import { useEffect } from 'react';
import type { Setting } from '@/lib/types';


export function SettingsForm({ settings }: { settings: Setting[] }) {
  const { toast } = useToast();
  // The state now includes a success message
  const [state, dispatch] = useFormState(updateSettings, undefined);

  const accreditationUrl = settings.find(s => s.id === 'accreditationUrl')?.value || '';

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
          <CardTitle>Akreditasi Sekolah</CardTitle>
          <CardDescription>
            Masukkan link Google Drive (yang bisa diakses publik) dari sertifikat akreditasi untuk ditampilkan di halaman profil.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <label htmlFor="accreditationUrl" className="block text-sm font-medium text-gray-700">URL Sertifikat Akreditasi</label>
            <Input 
              id="accreditationUrl" 
              name="accreditationUrl" 
              placeholder="https://drive.google.com/file/d/..." 
              defaultValue={accreditationUrl} 
            />
            <p className="text-sm text-muted-foreground mt-2">Pastikan link diatur ke "Siapa saja yang memiliki link".</p>
            {state?.errors?.accreditationUrl && <p className="text-sm font-medium text-destructive">{state.errors.accreditationUrl[0]}</p>}
          </div>
        </CardContent>
      </Card>
      
      <Button type="submit">Simpan Perubahan</Button>
    </form>
  );
}
