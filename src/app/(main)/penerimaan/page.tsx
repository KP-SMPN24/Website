import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, UserCheck } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Pendaftaran Online',
    description: 'Calon siswa mengisi formulir pendaftaran secara online melalui portal PSB kami dan mengunggah dokumen yang diperlukan.',
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: 'Seleksi Berkas & Ujian',
    description: 'Panitia akan memverifikasi kelengkapan berkas. Siswa yang lolos akan mengikuti ujian seleksi akademik.',
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Pengumuman & Daftar Ulang',
    description: 'Hasil kelulusan akan diumumkan di website. Siswa yang diterima wajib melakukan daftar ulang sesuai jadwal.',
  },
];

export default function PenerimaanPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Penerimaan Siswa Baru
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Bergabunglah dengan SMA EduVerse dan jadilah bagian dari generasi unggul.
        </p>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-center font-headline text-3xl">Alur Pendaftaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-primary text-primary-foreground rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="secondary" className="text-lg mb-4">Jadwal Penting</Badge>
          <Card>
            <CardContent className="p-6 space-y-4">
                <div className="flex justify-between">
                    <span className="font-semibold">Pendaftaran Online:</span>
                    <span className="text-muted-foreground">1 - 28 Februari 2024</span>
                </div>
                 <div className="flex justify-between">
                    <span className="font-semibold">Tes Seleksi Akademik:</span>
                    <span className="text-muted-foreground">5 Maret 2024</span>
                </div>
                 <div className="flex justify-between">
                    <span className="font-semibold">Wawancara & Psikotes:</span>
                    <span className="text-muted-foreground">7 - 8 Maret 2024</span>
                </div>
                 <div className="flex justify-between">
                    <span className="font-semibold">Pengumuman Kelulusan:</span>
                    <span className="text-muted-foreground">15 Maret 2024</span>
                </div>
                 <div className="flex justify-between">
                    <span className="font-semibold">Daftar Ulang:</span>
                    <span className="text-muted-foreground">16 - 20 Maret 2024</span>
                </div>
            </CardContent>
          </Card>
           <Button size="lg" className="mt-8 w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
            Daftar Sekarang
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Siswa SMA EduVerse"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="students smiling registration"
            />
        </div>
      </div>
    </div>
  );
}
