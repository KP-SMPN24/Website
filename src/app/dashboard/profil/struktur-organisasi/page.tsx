import { OrgChartForm } from './form';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { Setting } from '@/lib/types';


async function getAllSettings(): Promise<Setting[]> {
    try {
        const settingsCollection = collection(db, 'settings');
        const settingsSnapshot = await getDocs(settingsCollection);
        return settingsSnapshot.docs.map(doc => ({ id: doc.id, value: doc.data().value } as Setting));
    } catch (error) {
        console.error("Failed to fetch settings for org chart, returning empty.", error);
        return [];
    }
}


export default async function OrgChartPage() {
  const settings = await getAllSettings();
  
  return <OrgChartForm settings={settings} />;
}
