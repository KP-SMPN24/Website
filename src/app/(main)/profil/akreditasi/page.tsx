import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';

export default function AkreditasiPage() {
  // TODO: Ganti dengan URL PDF akreditasi yang sebenarnya.
  // Untuk saat ini, kita tidak menampilkan PDF secara langsung karena butuh file.
  const pdfUrl = "#"; 

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
              <a href={pdfUrl} download="Sertifikat-Akreditasi-SMA-EduVerse.pdf">
                <Download className="mr-2 h-4 w-4" />
                Unduh PDF
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="w-full aspect-video rounded-lg overflow-hidden border bg-muted flex flex-col items-center justify-center text-center p-8">
               <FileText className="h-24 w-24 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground">Pratinjau PDF tidak tersedia.</h3>
              <p className="text-muted-foreground">Silakan unduh dokumen untuk melihatnya.</p>
               {/* 
                CATATAN: Untuk menampilkan PDF secara langsung di browser, Anda bisa menggunakan tag <iframe> atau <embed>:
                <iframe src={pdfUrl} className="w-full h-full" title="Sertifikat Akreditasi"></iframe>
                Pastikan file PDF tersedia di path yang benar di dalam folder /public. 
                Contoh: /public/dokumen/akreditasi.pdf -> src="/dokumen/akreditasi.pdf"
              */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
