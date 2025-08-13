import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.576882253961!2d106.8271833!3d-6.186419399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43a9e324031%3A0x8618f2624867d587!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi Sekolah"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
