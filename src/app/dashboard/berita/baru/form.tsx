'use client';

import { useFormState } from 'react-dom';
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
import { createNews } from '@/lib/actions';
import { useEffect } from 'react';

export function NewsForm() {
  const { toast } = useToast();
  const [state, dispatch] = useFormState(createNews, undefined);

  useEffect(() => {
    if (state?.message) {
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan!",
        description: state.message,
      });
    } else if (state === undefined) {
      // success state is tricky with redirects, so we can assume success if no error
      // A more robust solution might involve passing a success message via query params
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Konten Artikel</CardTitle>
          <CardDescription>Isi detail berita atau pengumuman di bawah ini.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Judul Berita</label>
            <Input id="title" name="title" placeholder="Tulis judul berita di sini..." />
            {state?.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title[0]}</p>}
          </div>

          <div>
             <label htmlFor="content" className="block text-sm font-medium text-gray-700">Isi Berita</label>
            <Textarea
              id="content"
              name="content"
              placeholder="Tulis seluruh isi berita atau pengumuman di sini..."
              className="min-h-[200px]"
            />
            {state?.errors?.content && <p className="text-sm font-medium text-destructive">{state.errors.content[0]}</p>}
          </div>
        </CardContent>
      </Card>
      <Button type="submit">Simpan dan Publikasikan Artikel</Button>
    </form>
  );
}
