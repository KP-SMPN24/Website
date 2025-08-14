'use client';

<<<<<<< HEAD
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
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
    title: z.string().min(10, {
        message: 'Judul harus memiliki setidaknya 10 karakter.',
    }),
    content: z.string().min(50, {
        message: 'Konten harus memiliki setidaknya 50 karakter.',
    }),
});

export function NewsForm() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            content: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: 'Berhasil Disimpan!',
            description: 'Artikel berita Anda telah disimpan (simulasi).',
        });
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Konten Artikel</CardTitle>
                        <CardDescription>
                            Isi detail berita atau pengumuman di bawah ini.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Judul Berita</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Tulis judul berita di sini..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Pastikan judul jelas dan informatif.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Isi Berita</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tulis seluruh isi berita atau pengumuman di sini..."
                                            className="min-h-[200px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
                <Button type="submit">Simpan dan Publikasikan Artikel</Button>
            </form>
        </Form>
    );
=======
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { createNews } from '@/lib/actions';
import { useEffect } from 'react';

export function NewsForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [state, dispatch] = useFormState(createNews, undefined);

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
                description: "Artikel berita telah berhasil dibuat.",
            });
            router.push('/dashboard/berita');
        }
    }
  }, [state, toast, router]);

  return (
    <form action={dispatch} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Konten Artikel</CardTitle>
          <CardDescription>Isi detail berita atau pengumuman di bawah ini.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Judul Berita</label>
            <Input id="title" name="title" placeholder="Tulis judul berita di sini..." required />
            {state?.errors?.title && <p className="text-sm font-medium text-destructive mt-1">{state.errors.title[0]}</p>}
          </div>

          <div>
             <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Isi Berita</label>
            <Textarea
              id="content"
              name="content"
              placeholder="Tulis seluruh isi berita atau pengumuman di sini..."
              className="min-h-[200px]"
              required
            />
            {state?.errors?.content && <p className="text-sm font-medium text-destructive mt-1">{state.errors.content[0]}</p>}
          </div>
        </CardContent>
      </Card>
      <Button type="submit">Simpan dan Publikasikan Artikel</Button>
    </form>
  );
>>>>>>> 076040ab9b1f43864975274b20d71effff1e3591
}
