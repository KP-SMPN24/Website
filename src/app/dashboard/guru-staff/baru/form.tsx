'use client';

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
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
import { createStaff } from '@/lib/actions';
import { useEffect } from 'react';

export function StaffForm() {
  const { toast } = useToast();
  const [state, dispatch] = useFormState(createStaff, undefined);

  useEffect(() => {
    if (state?.message) {
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan!",
        description: state.message,
      });
    }
  }, [state, toast]);


  return (
    <form action={dispatch} className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <Card>
                <CardHeader>
                    <CardTitle>Detail Informasi</CardTitle>
                    <CardDescription>Isi data lengkap mengenai guru atau staf.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <label htmlFor="name">Nama Lengkap</label>
                        <Input id="name" name="name" placeholder="Contoh: Budi Hartono, S.Pd." />
                        {state?.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="position">Jabatan</label>
                        <Input id="position" name="position" placeholder="Contoh: Guru Matematika" />
                         {state?.errors?.position && <p className="text-sm font-medium text-destructive">{state.errors.position[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="category">Kategori</label>
                        <Select name="category">
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Pendidik">Pendidik (Guru)</SelectItem>
                                <SelectItem value="Staf">Tenaga Kependidikan (Staf)</SelectItem>
                            </SelectContent>
                        </Select>
                        {state?.errors?.category && <p className="text-sm font-medium text-destructive">{state.errors.category[0]}</p>}
                    </div>
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
  );
}
