'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { db } from './firebase';
import { collection, addDoc, getDocs, doc, setDoc, query, orderBy, limit } from 'firebase/firestore';

const NewsSchema = z.object({
  title: z.string().min(10, { message: "Judul harus lebih dari 10 karakter."}),
  content: z.string().min(50, { message: "Konten harus lebih dari 50 karakter."}),
});

export async function createNews(prevState: any, formData: FormData) {
  const validatedFields = NewsSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Gagal membuat artikel baru. Mohon periksa kembali isian Anda.',
    };
  }

  try {
    const slug = validatedFields.data.title.toLowerCase().replace(/\s/g, '-');
    await addDoc(collection(db, "newsArticles"), {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        slug: slug,
        author: 'Admin Sekolah', // Placeholder
        category: 'Berita', // Placeholder
        imageUrl: `https://placehold.co/800x600.png`, // Placeholder
        date: new Date().toISOString(),
    });
  } catch (error) {
    return {
      message: 'Database Error: Gagal Membuat Artikel Berita.',
    };
  }
  revalidatePath('/dashboard/berita');
  // redirect('/dashboard/berita'); // This needs to be handled on the client side in the form
}

const AchievementSchema = z.object({
    title: z.string().min(10),
    description: z.string().min(20),
    category: z.enum(['Akademik', 'Olahraga', 'Seni', 'Lainnya']),
});

export async function createAchievement(prevState: any, formData: FormData) {
    const validatedFields = AchievementSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Gagal menyimpan prestasi. Mohon periksa kembali isian Anda.',
        };
    }

    try {
        await addDoc(collection(db, "achievements"), {
            title: validatedFields.data.title,
            description: validatedFields.data.description,
            category: validatedFields.data.category,
            imageUrl: `https://placehold.co/600x400.png`, // Placeholder
            date: new Date().toISOString(),
        });
    } catch (error) {
        return {
            message: 'Database Error: Gagal Menyimpan Prestasi.',
        };
    }
    revalidatePath('/dashboard/prestasi');
     // redirect('/dashboard/prestasi');
}

const StaffSchema = z.object({
    name: z.string().min(3),
    position: z.string().min(5),
    category: z.enum(['Pendidik', 'Staf']),
});

export async function createStaff(prevState: any, formData: FormData) {
    const validatedFields = StaffSchema.safeParse({
        name: formData.get('name'),
        position: formData.get('position'),
        category: formData.get('category'),
    });
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Gagal menyimpan data. Mohon periksa kembali isian Anda.',
        };
    }

    try {
       await addDoc(collection(db, "staff"), {
            name: validatedFields.data.name,
            position: validatedFields.data.position,
            category: validatedFields.data.category,
            imageUrl: `https://placehold.co/400x500.png`, // Placeholder
        });
    } catch (error) {
        return {
            message: 'Database Error: Gagal Menyimpan Data Staff.',
        };
    }

    revalidatePath('/dashboard/guru-staff');
    // redirect('/dashboard/guru-staff');
}

const AccreditationSchema = z.object({
  accreditationUrl: z.string().url().optional().or(z.literal('')),
});

export async function updateAccreditation(prevState: any, formData: FormData) {
  const validatedFields = AccreditationSchema.safeParse({
    accreditationUrl: formData.get('accreditationUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Gagal memperbarui pengaturan.',
    };
  }

  try {
    const settingRef = doc(db, 'settings', 'accreditationUrl');
    await setDoc(settingRef, { value: validatedFields.data.accreditationUrl || '' }, { merge: true });

  } catch (error) {
    return {
      message: 'Database Error: Gagal Memperbarui Pengaturan.',
    };
  }

  revalidatePath('/dashboard/profil/akreditasi');
  revalidatePath('/profil/akreditasi');
  
  return { message: 'Pengaturan akreditasi berhasil disimpan!' };
}


const VisionMissionSchema = z.object({
    vision: z.string().min(20, { message: "Visi harus lebih dari 20 karakter."}),
    mission: z.string().min(50, { message: "Misi harus lebih dari 50 karakter."}),
});

export async function updateVisionMission(prevState: any, formData: FormData) {
    const validatedFields = VisionMissionSchema.safeParse({
        vision: formData.get('vision'),
        mission: formData.get('mission'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Gagal memperbarui Visi & Misi.',
        };
    }

    try {
        const settingRef = doc(db, 'settings', 'visionMission');
        await setDoc(settingRef, validatedFields.data, { merge: true });
    } catch (e) {
        return { message: 'Gagal menyimpan ke database.' };
    }

    revalidatePath('/dashboard/profil/visi-misi');
    revalidatePath('/profil/visi-misi');
    return { message: 'Visi & Misi berhasil diperbarui.' };
}


const SchoolProfileSchema = z.object({
    principalName: z.string().min(3),
    principalWelcome: z.string().min(50),
    principalImageUrl: z.string().url().optional().or(z.literal('')),
});

export async function updateSchoolProfile(prevState: any, formData: FormData) {
    const validatedFields = SchoolProfileSchema.safeParse({
        principalName: formData.get('principalName'),
        principalWelcome: formData.get('principalWelcome'),
        principalImageUrl: formData.get('principalImageUrl'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Gagal memperbarui profil sekolah.',
        };
    }

    try {
        const settingRef = doc(db, 'settings', 'schoolProfile');
        await setDoc(settingRef, validatedFields.data, { merge: true });
    } catch (e) {
        return { message: 'Gagal menyimpan profil sekolah ke database.' };
    }

    revalidatePath('/dashboard/profil/sekolah');
    revalidatePath('/profil');
    return { message: 'Profil sekolah berhasil diperbarui.' };
}

const OrgChartSchema = z.object({
  orgChartUrl: z.string().url().optional().or(z.literal('')),
});

export async function updateOrgChart(prevState: any, formData: FormData) {
  const validatedFields = OrgChartSchema.safeParse({
    orgChartUrl: formData.get('orgChartUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Gagal memperbarui struktur organisasi.',
    };
  }

  try {
    const settingRef = doc(db, 'settings', 'orgChartUrl');
    await setDoc(settingRef, { value: validatedFields.data.orgChartUrl || '' }, { merge: true });

  } catch (error) {
    return {
      message: 'Database Error: Gagal Memperbarui struktur organisasi.',
    };
  }

  revalidatePath('/dashboard/profil/struktur-organisasi');
  revalidatePath('/profil/struktur-organisasi');
  
  return { message: 'Struktur organisasi berhasil disimpan!' };
}

'use server';

import { storage } from '@/lib/firebase-admin';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createAchievement(
    prevState: { message: string | null },
    formData: FormData,
) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const date = formData.get('date') as string;
    const imageFile = formData.get('image') as File;

    if (!imageFile || imageFile.size === 0) {
        // Handle error: gambar tidak diunggah
        console.error('Gambar tidak ditemukan.');
        return { message: 'Gambar wajib diunggah.' };
    }

    let imageUrl = '';
    try {
        // 1. Proses dan unggah gambar ke Firebase Storage
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const filename = `achievements/${Date.now()}-${imageFile.name.replace(
            /\s/g,
            '_',
        )}`;

        const bucket = storage.bucket();
        const fileUpload = bucket.file(filename);

        await fileUpload.save(buffer, {
            metadata: {
                contentType: imageFile.type,
            },
        });

        // Dapatkan URL publik dari file yang diunggah
        imageUrl = fileUpload.publicUrl();
    } catch (error) {
        console.error('Gagal mengunggah file ke Firebase:', error);
        return { message: 'Gagal memproses gambar.' };
    }

    // 2. Simpan data ke database (saat ini kita hanya log)
    // Di aplikasi nyata, Anda akan memasukkan data ini ke database Anda.
    console.log('Data untuk disimpan ke database:');
    console.log({
        title,
        description,
        category,
        date,
        imageUrl, // Simpan path gambar ini
    });

    // 3. Revalidate path dan redirect
    revalidatePath('/dashboard/prestasi'); // Memperbarui cache halaman daftar prestasi
    redirect('/dashboard/prestasi'); // Arahkan pengguna kembali ke halaman daftar
}
