'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Wand2, LoaderCircle } from 'lucide-react';
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { generateNewsTitle } from '@/ai/flows/generate-news-title';

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
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  async function handleGenerateTitles() {
    const content = form.getValues('content');
    if (content.length < 50) {
      toast({
        title: "Konten terlalu pendek",
        description: "Mohon tulis setidaknya 50 karakter pada bagian konten untuk bisa mendapatkan saran judul otomatis.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setSuggestions([]);
    try {
      const result = await generateNewsTitle({ newsContent: content });
      setSuggestions(result.titleSuggestions);
    } catch (error) {
      console.error(error);
      toast({
        title: "Gagal mendapatkan saran judul",
        description: "Terjadi kesalahan saat menghubungi AI. Silakan coba beberapa saat lagi.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  }

  function applySuggestion(title: string) {
    form.setValue('title', title);
    setSuggestions([]);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Berhasil Disimpan!",
      description: "Artikel berita Anda telah disimpan (simulasi).",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Konten Artikel</CardTitle>
            <CardDescription>Isi detail berita atau pengumuman di bawah ini.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul Berita</FormLabel>
                  <FormControl>
                    <Input placeholder="Judul yang menarik akan ditampilkan di sini" {...field} />
                  </FormControl>
                   <FormDescription>
                    Anda bisa mengisi judul secara manual atau gunakan bantuan AI di bawah.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wand2 className="text-primary" />
                  Saran Judul Otomatis (AI)
                </CardTitle>
                <CardDescription>
                  Jika Anda kesulitan membuat judul, biarkan AI memberikan beberapa ide.
                  Pastikan isi berita sudah ditulis, lalu klik tombol di bawah untuk mendapatkan saran.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button type="button" onClick={handleGenerateTitles} disabled={isGenerating}>
                  {isGenerating ? (
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  {isGenerating ? 'Memberikan Saran...' : 'Beri Saya Saran Judul'}
                </Button>
                {suggestions.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-semibold">Pilih salah satu saran di bawah ini:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {suggestions.map((s, i) => (
                        <li key={i}>
                          <Button
                            type="button"
                            variant="link"
                            className="p-0 h-auto text-left"
                            onClick={() => applySuggestion(s)}
                          >
                            {s}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

          </CardContent>
        </Card>
        <Button type="submit">Simpan dan Publikasikan Artikel</Button>
      </form>
    </Form>
  );
}
