import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Milestone } from 'lucide-react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { VisionMission } from '@/lib/types';


async function getVisionMission(): Promise<VisionMission> {
    const defaultData: VisionMission = {
        vision: "Menjadi sekolah unggul yang menghasilkan lulusan berkarakter mulia, cerdas, kompetitif secara global, dan cinta tanah air.",
        mission: `<ul><li>Menyelenggarakan pendidikan berkualitas yang mengintegrasikan iman dan takwa.</li><li>Mengembangkan potensi siswa secara akademik dan non-akademik.</li><li>Membekali siswa dengan keterampilan abad ke-21.</li><li>Membangun jiwa kepemimpinan dan kepedulian sosial.</li></ul>`
    };

    try {
        const docRef = doc(db, "settings", "visionMission");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data() as VisionMission;
        } else {
            return defaultData;
        }
    } catch (error) {
        console.error("Failed to fetch vision/mission, returning default data.", error);
        return defaultData;
    }
}


export default async function VisiMisiPage() {
  const data = await getVisionMission();

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
              {data.vision}
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
            <div className="prose max-w-none dark:prose-invert text-muted-foreground" dangerouslySetInnerHTML={{ __html: data.mission }} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
