import { SchoolProfileForm } from './form';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { SchoolProfile } from '@/lib/types';


async function getSchoolProfile(): Promise<SchoolProfile | null> {
    const docRef = doc(db, "settings", "schoolProfile");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as SchoolProfile;
    } else {
        return null;
    }
}

export default async function SchoolProfilePage() {
  const profile = await getSchoolProfile();
  
  return <SchoolProfileForm profile={profile} />;
}
