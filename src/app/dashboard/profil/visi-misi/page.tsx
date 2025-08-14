import { VisionMissionForm } from './form';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { VisionMission } from '@/lib/types';


async function getVisionMission(): Promise<VisionMission | null> {
    try {
        const docRef = doc(db, "settings", "visionMission");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data() as VisionMission;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Failed to fetch vision/mission for dashboard, returning null.", error);
        return null;
    }
}

export default async function VisionMissionPage() {
  const data = await getVisionMission();
  
  return <VisionMissionForm data={data} />;
}
