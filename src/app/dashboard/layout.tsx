'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  LayoutDashboard,
  Newspaper,
  Trophy,
  PanelLeft,
  Users,
  Settings,
  ChevronDown,
} from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/berita', label: 'Berita', icon: Newspaper },
  { href: '/dashboard/prestasi', label: 'Prestasi', icon: Trophy },
  { 
    label: 'Profil', 
    icon: GraduationCap,
    subItems: [
        { href: '/dashboard/profil/sekolah', label: 'Info Sekolah' },
        { href: '/dashboard/profil/visi-misi', label: 'Visi & Misi' },
        { href: '/dashboard/profil/guru-staff', label: 'Guru & Staf' },
        { href: '/dashboard/profil/akreditasi', label: 'Akreditasi' },
        { href: '/dashboard/profil/struktur-organisasi', label: 'Struktur Organisasi' },
    ]
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProfileActive = pathname.startsWith('/dashboard/profil');

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link href="/dashboard" className="flex items-center gap-2">
            <GraduationCap className="size-6 text-primary" />
            <h1 className="text-lg font-semibold">EduVerse CMS</h1>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
<<<<<<< HEAD
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    className={cn(
                      pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="size-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
=======
            {menuItems.map((item, index) => (
              <SidebarMenuItem key={index}>
                {item.href ? (
                    <Link href={item.href}>
                        <SidebarMenuButton
                        isActive={pathname === item.href}
                        >
                        <item.icon className="size-4" />
                        <span>{item.label}</span>
                        </SidebarMenuButton>
                    </Link>
                ) : (
                    <Collapsible defaultOpen={isProfileActive}>
                        <CollapsibleTrigger asChild>
                             <SidebarMenuButton
                                className="justify-between w-full"
                                isActive={isProfileActive}
                            >
                                <div className='flex items-center gap-2'>
                                    <item.icon className="size-4" />
                                    <span>{item.label}</span>
                                </div>
                                <ChevronDown className="size-4 transition-transform duration-200 [&[data-state=open]]:-rotate-180" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="flex flex-col gap-1 py-1 ml-6 border-l pl-2 mt-1">
                                {item.subItems?.map(subItem => (
                                    <Link key={subItem.href} href={subItem.href}>
                                        <SidebarMenuButton
                                            variant="ghost"
                                            size="sm"
                                            className="w-full justify-start"
                                            isActive={pathname === subItem.href}
                                        >
                                            {subItem.label}
                                        </SidebarMenuButton>
                                    </Link>
                                ))}
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                )}
>>>>>>> 076040ab9b1f43864975274b20d71effff1e3591
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <Link href="/">
             <SidebarMenuButton>Kembali ke Situs</SidebarMenuButton>
          </Link>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <SidebarTrigger className="sm:hidden" />
          <div className="relative ml-auto flex-1 md:grow-0" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <Avatar>
                  <AvatarImage src="https://placehold.co/32x32.png" alt="Avatar" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Pengaturan</DropdownMenuItem>
              <DropdownMenuItem>Dukungan</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
