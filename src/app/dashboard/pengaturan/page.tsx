import { SettingsForm } from './form';

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold font-headline">Pengaturan Website</h1>
        <p className="text-muted-foreground">Kelola pengaturan umum untuk website sekolah Anda.</p>
      </div>
      <SettingsForm />
    </div>
  );
}
