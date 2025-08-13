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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { Upload } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Nama harus memiliki setidaknya 3 karakter.',
  }),
  position: z.string().min(5, {
    message: 'Jabatan harus memiliki setidaknya 5 karakter.',
  }),
  category: z.enum(['Pendidik', 'Staf'], {
    required_error: 'Anda harus memilih kategori.',
  }),
});

export function StaffForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      position: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Data Berhasil Disimpan!",
      description: "Data guru/staf baru telah disimpan (simulasi).",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <Card>
                <CardHeader>
                    <CardTitle>Detail Informasi</CardTitle>
                    <CardDescription>Isi data lengkap mengenai guru atau staf.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                            <Input placeholder="Contoh: Budi Hartono, S.Pd." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Jabatan</FormLabel>
                        <FormControl>
                            <Input placeholder="Contoh: Guru Matematika" {...field} />
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
                                <SelectValue placeholder="Pilih kategori" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="Pendidik">Pendidik (Guru)</SelectItem>
                            <SelectItem value="Staf">Tenaga Kependidikan (Staf)</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </CardContent>
                </Card>
            </div>
            <div>
                 <Card>
                    <CardHeader>
                        <CardTitle>Foto Profil</CardTitle>
                        <CardDescription>Unggah foto untuk ditampilkan di website.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Klik untuk mengunggah</span></p>
                                    <p className="text-xs text-muted-foreground">PNG, JPG (MAX. 800x800px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div> 
                    </CardContent>
                </Card>
            </div>
        </div>
        <Button type="submit">Simpan Data</Button>
      </form>
    </Form>
  );
}
