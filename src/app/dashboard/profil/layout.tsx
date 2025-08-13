'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const profileNavLinks = [
    { href: "/dashboard/profil/sekolah", label: "Info Sekolah" },
    { href: "/dashboard/profil/visi-misi", label: "Visi & Misi" },
    { href: "/dashboard/profil/guru-staff", label: "Guru & Staf" },
    { href: "/dashboard/profil/akreditasi", label: "Akreditasi" },
    { href: "/dashboard/profil/struktur-organisasi", label: "Struktur Organisasi" },
];

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold font-headline">Pengelolaan Profil Sekolah</h1>
                <p className="text-muted-foreground">
                    Atur semua informasi yang berkaitan dengan halaman profil website Anda.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-1/5">
                    <nav className="flex flex-row md:flex-col gap-1">
                        {profileNavLinks.map(link => (
                            <Link 
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                    "hover:bg-muted",
                                    pathname.startsWith(link.href) ? "bg-muted text-primary font-semibold" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </aside>
                <main className="flex-1 w-full md:w-4/5">
                    {children}
                </main>
            </div>
        </div>
    );
}
