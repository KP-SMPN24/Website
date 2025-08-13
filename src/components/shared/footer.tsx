import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EduVerse</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Membangun Generasi Unggul, Berkarakter, dan Berwawasan Global.
            </p>
             <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Jelajahi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/profil" className="text-muted-foreground hover:text-primary transition-colors">Profil</Link></li>
              <li><Link href="/akademik" className="text-muted-foreground hover:text-primary transition-colors">Akademik</Link></li>
              <li><Link href="/berita" className="text-muted-foreground hover:text-primary transition-colors">Berita</Link></li>
              <li><Link href="/prestasi" className="text-muted-foreground hover:text-primary transition-colors">Prestasi</Link></li>
              <li><Link href="/kontak" className="text-muted-foreground hover:text-primary transition-colors">Kontak</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4">Lokasi Kami</h3>
            <div className="rounded-lg overflow-hidden h-48 w-full">
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
             <div className="text-sm text-muted-foreground space-y-2 mt-4">
              <p><strong>Alamat:</strong> Jl. Pendidikan No. 123, Kota Edukasi, 40123</p>
              <p><strong>Email:</strong> info@eduverse.sch.id</p>
              <p><strong>Telepon:</strong> (021) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
