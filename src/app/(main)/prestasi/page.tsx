import prisma from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Star } from 'lucide-react';
import type { Achievement } from '@prisma/client';

const categoryIcons: { [key in Achievement['category']]: React.ReactNode } = {
  Akademik: <Trophy className="h-8 w-8 text-accent-foreground" />,
  Olahraga: <Medal className="h-8 w-8 text-accent-foreground" />,
  Seni: <Award className="h-8 w-8 text-accent-foreground" />,
  Lainnya: <Star className="h-8 w-8 text-accent-foreground" />,
};

export default async function PrestasiPage() {
  const achievements = await prisma.achievement.findMany({
    orderBy: {
      date: 'desc',
    },
  });

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
          <Card key={achievement.id} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-4 bg-accent rounded-full mb-4">
              {categoryIcons[achievement.category]}
            </div>
            <CardHeader className="p-0">
              <Badge variant="secondary" className="mb-2">{achievement.category}</Badge>
              <CardTitle className="text-xl font-headline">{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-2 text-muted-foreground">
              <p>{achievement.description}</p>
              <p className="text-xs mt-4">{achievement.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
