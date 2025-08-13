import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { mockStaff } from '@/lib/data';

export default function GuruStaffPage() {
  const teachers = mockStaff.filter(s => s.category === 'Pendidik');
  const staff = mockStaff.filter(s => s.category === 'Staf');

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Guru & Tenaga Kependidikan
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Mengenal lebih dekat para pendidik dan staf yang berdedikasi di SMA EduVerse.
        </p>
      </div>

      <section id="pendidik" className="mb-16">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="text-lg">Tenaga Pendidik (Guru)</Badge>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {teachers.map((person) => (
            <Card key={person.id} className="text-center overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="aspect-w-3 aspect-h-4">
                <Image
                  src={person.imageUrl}
                  alt={`Foto ${person.name}`}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  data-ai-hint="teacher portrait"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-base font-semibold">{person.name}</CardTitle>
                <CardDescription className="text-xs">{person.position}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="staf">
         <div className="text-center mb-8">
          <Badge variant="secondary" className="text-lg">Tenaga Kependidikan (Staf)</Badge>
        </div>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {staff.map((person) => (
            <Card key={person.id} className="text-center overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="aspect-w-3 aspect-h-4">
                <Image
                  src={person.imageUrl}
                  alt={`Foto ${person.name}`}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  data-ai-hint="staff portrait"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-base font-semibold">{person.name}</CardTitle>
                <CardDescription className="text-xs">{person.position}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
