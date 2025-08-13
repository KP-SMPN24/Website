import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Achievement } from '@/lib/types';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

async function getAllAchievements() {
    const achievementsCollection = collection(db, 'achievements');
    const q = query(achievementsCollection, orderBy('date', 'desc'));
    const achievementsSnapshot = await getDocs(q);
    return achievementsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Achievement));
}

export default async function PrestasiPage() {
  const achievements = await getAllAchievements();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Galeri Prestasi
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Berikut adalah kumpulan prestasi yang telah diraih oleh siswa-siswi dan segenap civitas akademika EduVerse.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="p-0">
               <Image
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  width={600}
                  height={400}
                  className="w-full object-cover aspect-video"
                  data-ai-hint="student achievement award"
                />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <Badge variant="secondary" className="mb-2">{achievement.category}</Badge>
              <CardTitle className="text-xl font-headline">{achievement.title}</CardTitle>
              <CardDescription className="text-sm mt-2 text-muted-foreground">
                {achievement.description}
              </CardDescription>
            </CardContent>
            <CardContent className="p-6 pt-0">
               <p className="text-xs text-muted-foreground">{format(new Date(achievement.date), "d MMMM yyyy", { locale: id })}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
