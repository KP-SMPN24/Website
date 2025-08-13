import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';

// Fungsi untuk mengubah URL Google Drive biasa menjadi URL embed
function getEmbedUrl(url: string): string | null {
  const fileIdMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  return null; // atau kembalikan URL asli jika tidak cocok
}

export default function AkreditasiPage() {
  // TODO: Ganti dengan data dari database/CMS.
  const originalPdfUrl = "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing"; // Contoh link Google Drive
  const embedUrl = getEmbedUrl(originalPdfUrl);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Akreditasi Sekolah
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          SMA EduVerse dengan bangga menyandang status Terakreditasi "A" (Unggul) dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M).
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Sertifikat Akreditasi BAN-S/M</CardTitle>
            <Button asChild variant="secondary">
              <a href={originalPdfUrl} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-4" />
                Unduh PDF
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            {embedUrl ? (
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden border">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  title="Sertifikat Akreditasi SMA EduVerse"
                  allow="autoplay"
                ></iframe>
              </div>
            ) : (
              <div className="w-full aspect-video rounded-lg overflow-hidden border bg-muted flex flex-col items-center justify-center text-center p-8">
                <FileText className="h-24 w-24 text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold text-muted-foreground">Pratinjau PDF tidak tersedia.</h3>
                <p className="text-muted-foreground">URL Google Drive tidak valid atau tidak dapat di-embed.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
