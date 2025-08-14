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
}
