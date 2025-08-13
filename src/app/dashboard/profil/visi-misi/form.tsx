'use client';

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { updateVisionMission } from '@/lib/actions';
import { useEffect } from 'react';
import type { VisionMission } from '@/lib/types';

export function VisionMissionForm({ data }: { data: VisionMission | null }) {
  const { toast } = useToast();
  const [state, dispatch] = useFormState(updateVisionMission, undefined);

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
            title: "Data Disimpan!",
            description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-8">
        <div className="grid lg:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Visi Sekolah</CardTitle>
                    <CardDescription>
                        Tuliskan visi jangka panjang sekolah Anda.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea 
                        id="vision"
                        name="vision"
                        defaultValue={data?.vision}
                        className="min-h-[150px]"
                        placeholder="Menjadi sekolah unggul..."
                        required
                    />
                    {state?.errors?.vision && <p className="text-sm font-medium text-destructive mt-1">{state.errors.vision[0]}</p>}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Misi Sekolah</CardTitle>
                    <CardDescription>
                        Jabarkan poin-poin misi untuk mencapai visi tersebut.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea 
                        id="mission"
                        name="mission"
                        defaultValue={data?.mission}
                        className="min-h-[150px]"
                        placeholder="<ul><li>Misi pertama...</li></ul>"
                        required
                    />
                     <p className="text-sm text-muted-foreground mt-1">Gunakan tag &lt;ul&gt; dan &lt;li&gt; untuk membuat daftar (list).</p>
                    {state?.errors?.mission && <p className="text-sm font-medium text-destructive mt-1">{state.errors.mission[0]}</p>}
                </CardContent>
            </Card>
        </div>
      
      <Button type="submit">Simpan Perubahan</Button>
    </form>
  );
}
