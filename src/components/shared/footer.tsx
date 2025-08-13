import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EduVerse</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Membangun Generasi Unggul, Berkarakter, dan Berwawasan Global.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/berita" className="text-muted-foreground hover:text-primary transition-colors">Berita</Link></li>
              <li><Link href="/prestasi" className="text-muted-foreground hover:text-primary transition-colors">Prestasi</Link></li>
              <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Login CMS</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Jl. Pendidikan No. 123, Kota Edukasi, 40123</p>
              <p>Email: info@eduverse.sch.id</p>
              <p>Telepon: (021) 123-4567</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
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
