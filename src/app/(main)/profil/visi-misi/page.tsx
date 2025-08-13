import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Milestone } from 'lucide-react';

export default function VisiMisiPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Visi & Misi
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Landasan dan arah tujuan SMA EduVerse dalam menyelenggarakan pendidikan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader className="flex-row items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
                <Target className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl">Visi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg">
              Menjadi sekolah unggul yang menghasilkan lulusan berkarakter mulia, cerdas, kompetitif secara global, dan cinta tanah air.
            </p>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader className="flex-row items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
                <Milestone className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl">Misi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground text-lg">
              <li>Menyelenggarakan pendidikan berkualitas yang mengintegrasikan iman dan takwa.</li>
              <li>Mengembangkan potensi siswa secara akademik dan non-akademik.</li>
              <li>Membekali siswa dengan keterampilan abad ke-21.</li>
              <li>Membangun jiwa kepemimpinan dan kepedulian sosial.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
