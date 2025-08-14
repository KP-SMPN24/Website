import { SettingsForm } from './form';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { Setting } from '@/lib/types';


async function getAllSettings(): Promise<Setting[]> {
    const settingsCollection = collection(db, 'settings');
    const settingsSnapshot = await getDocs(settingsCollection);
    return settingsSnapshot.docs.map(doc => ({ id: doc.id, value: doc.data().value } as Setting));
}


export default async function SettingsPage() {
  const settings = await getAllSettings();
  
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
