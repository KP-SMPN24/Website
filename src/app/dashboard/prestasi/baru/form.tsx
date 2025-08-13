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

const formSchema = z.object({
  title: z.string().min(10, {
    message: 'Judul prestasi harus memiliki setidaknya 10 karakter.',
  }),
  description: z.string().min(20, {
    message: 'Deskripsi prestasi harus memiliki setidaknya 20 karakter.',
  }),
  category: z.enum(['Akademik', 'Olahraga', 'Seni', 'Lainnya'], {
    required_error: 'Anda harus memilih kategori prestasi.',
  }),
});

export function AchievementForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Prestasi Berhasil Disimpan!",
      description: "Data prestasi baru telah disimpan (simulasi).",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Detail Prestasi</CardTitle>
            <CardDescription>Isi informasi mengenai prestasi yang diraih.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Prestasi</FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: Juara 1 Lomba Cerdas Cermat" {...field} />
                  </FormControl>
                  <FormDescription>
                    Tuliskan nama penghargaan atau gelar yang diraih.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi Singkat</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Jelaskan sedikit tentang prestasi ini, seperti tingkat kompetisi atau siapa yang meraihnya."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori prestasi" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Akademik">Akademik</SelectItem>
                      <SelectItem value="Olahraga">Olahraga</SelectItem>
                      <SelectItem value="Seni">Seni</SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                   <FormDescription>
                    Kelompokkan prestasi agar mudah ditemukan di website.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <Button type="submit">Simpan Data Prestasi</Button>
      </form>
    </Form>
  );
}
