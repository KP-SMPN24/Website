import { SettingsForm } from './form';
import prisma from '@/lib/prisma';

export default async function SettingsPage() {
  const settings = await prisma.setting.findMany();
  
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold font-headline">Pengaturan Website</h1>
        <p className="text-muted-foreground">Kelola pengaturan umum untuk website sekolah Anda.</p>
      </div>
      <SettingsForm settings={settings} />
    </div>
  );
}
