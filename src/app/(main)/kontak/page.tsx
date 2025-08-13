import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function KontakPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Hubungi Kami
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui informasi di bawah ini atau kirimkan pesan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Alamat</h3>
                  <p className="text-muted-foreground">Jl. Pendidikan No. 123, Kota Edukasi, 40123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p className="text-muted-foreground">(021) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@eduverse.sch.id</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Formulir Kontak</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Nama Anda" />
                <Input type="email" placeholder="Email Anda" />
                <Textarea placeholder="Pesan Anda" />
                <Button className="w-full">Kirim Pesan</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="rounded-lg overflow-hidden h-96 md:h-full">
            <Image 
                src="https://placehold.co/600x800"
                alt="Peta Lokasi Sekolah"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                data-ai-hint="map location"
            />
        </div>
      </div>
    </div>
  );
}
