'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  accreditationUrl: z.string().url({ message: "Harap masukkan URL yang valid." }).optional().or(z.literal('')),
});

export function SettingsForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // TODO: Nanti ambil nilai default dari database
    defaultValues: {
      accreditationUrl: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Pengaturan Disimpan!",
      description: "Perubahan telah berhasil disimpan (simulasi).",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Akreditasi Sekolah</CardTitle>
            <CardDescription>
              Masukkan link Google Drive (yang bisa diakses publik) dari sertifikat akreditasi untuk ditampilkan di halaman profil.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="accreditationUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Sertifikat Akreditasi</FormLabel>
                  <FormControl>
                    <Input placeholder="https://drive.google.com/file/d/..." {...field} />
                  </FormControl>
                   <FormDescription>
                    Pastikan link diatur ke "Siapa saja yang memiliki link".
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        
        <Button type="submit">Simpan Perubahan</Button>
      </form>
    </Form>
  );
}
