import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FileText } from 'lucide-react';

async function getOrgChartUrl(): Promise<string> {
    try {
        const settingRef = doc(db, 'settings', 'orgChartUrl');
        const docSnap = await getDoc(settingRef);
        if (docSnap.exists()) {
            return docSnap.data().value;
        }
        return "";
    } catch (error) {
        console.error("Failed to fetch org chart URL, returning empty.", error);
        return "";
    }
}

export default async function StrukturOrganisasiPage() {
  const orgChartUrl = await getOrgChartUrl();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Struktur Organisasi
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Struktur organisasi kepengurusan di SMA EduVerse.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Bagan Struktur Organisasi Sekolah</CardTitle>
          </CardHeader>
          <CardContent>
            {orgChartUrl ? (
              <div className="w-full rounded-lg overflow-hidden border">
                <Image
                  src={orgChartUrl}
                  alt="Struktur Organisasi"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            ) : (
                <div className="w-full aspect-video rounded-lg overflow-hidden border bg-muted flex flex-col items-center justify-center text-center p-8">
                    <FileText className="h-24 w-24 text-muted-foreground/50 mb-4" />
                    <h3 className="text-xl font-semibold text-muted-foreground">Struktur Organisasi Belum Diunggah</h3>
                    <p className="text-muted-foreground">Gambar belum diunggah melalui CMS.</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
