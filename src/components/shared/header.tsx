'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Menu, UserCircle, ChevronDown, Facebook, Twitter, Instagram } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { 
    label: 'Profil',
    items: [
      { href: '/profil', label: 'Profil Sekolah' },
      { href: '/profil/akreditasi', label: 'Akreditasi' },
    ]
  },
  { href: '/akademik', label: 'Akademik' },
  { href: '/penerimaan', label: 'Penerimaan' },
  { href: '/berita', label: 'Berita' },
  { href: '/prestasi', label: 'Prestasi' },
  { href: '/kontak', label: 'Kontak' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-muted/50 text-muted-foreground py-1 border-b">
        <div className="container flex justify-between items-center h-8 text-xs">
           <p className="hidden sm:block">Membentuk Generasi Unggul dan Berkarakter</p>
            <div className="flex items-center gap-4">
              <p>info@eduverse.sch.id</p>
              <div className="flex space-x-3">
                  <Link href="#" className="hover:text-primary transition-colors"><Facebook size={16} /></Link>
                  <Link href="#" className="hover:text-primary transition-colors"><Twitter size={16} /></Link>
                  <Link href="#" className="hover:text-primary transition-colors"><Instagram size={16} /></Link>
              </div>
            </div>
        </div>
      </div>
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden lg:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">EduVerse</span>
          </Link>
          <nav className="flex items-center space-x-2 text-sm font-medium">
            {navLinks.map((link, index) =>
              link.href ? (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-foreground/80 px-3 py-2 rounded-md',
                    pathname === link.href ? 'text-foreground bg-muted' : 'text-foreground/60'
                  )}
                >
                  {link.label}
                </Link>
              ) : (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80',
                      link.items.some(item => pathname.startsWith(item.href)) ? 'text-foreground' : 'text-foreground/60'
                    )}>
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.items.map((item, itemIndex) => (
                       <DropdownMenuItem key={itemIndex} asChild>
                         <Link href={item.href}>{item.label}</Link>
                       </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Buka Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="font-bold">EduVerse</span>
                </Link>
                <div className="my-4 h-px w-full bg-border" />
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, index) =>
                    link.href ? (
                      <Link
                        key={index}
                        href={link.href}
                        className={cn(
                          'px-4 py-2 rounded-md transition-colors hover:text-foreground/80',
                           pathname === link.href ? 'text-foreground font-semibold bg-muted' : 'text-foreground/60'
                        )}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <div key={index} className="px-4 py-2">
                        <span className="font-semibold text-foreground/80">{link.label}</span>
                        <div className="flex flex-col space-y-2 mt-2 pl-4 border-l">
                          {link.items.map((item, itemIndex) => (
                             <Link
                                key={itemIndex}
                                href={item.href}
                                className={cn(
                                  'transition-colors hover:text-foreground/80',
                                  pathname === item.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                                )}
                              >
                                {item.label}
                              </Link>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
           <div className="lg:hidden flex-1">
             <Link href="/" className="flex items-center space-x-2 justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold">EduVerse</span>
              </Link>
           </div>


          <nav className="flex items-center">
            <Button asChild variant="ghost" size="icon">
              <Link href="/dashboard">
                <UserCircle className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
