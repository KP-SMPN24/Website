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

const SettingsSchema = z.object({
  accreditationUrl: z.string().url().optional().or(z.literal('')),
});

export async function updateSettings(prevState: any, formData: FormData) {
  const validatedFields = SettingsSchema.safeParse({
    accreditationUrl: formData.get('accreditationUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Gagal memperbarui pengaturan.',
    };
  }

  try {
    // Use the document ID 'accreditation' to store this specific setting
    const settingRef = doc(db, 'settings', 'accreditationUrl');
    await setDoc(settingRef, { value: validatedFields.data.accreditationUrl || '' });

  } catch (error) {
    return {
      message: 'Database Error: Gagal Memperbarui Pengaturan.',
    };
  }

  revalidatePath('/dashboard/pengaturan');
  revalidatePath('/profil/akreditasi');
  
  return { message: 'Pengaturan berhasil disimpan!' };
}
