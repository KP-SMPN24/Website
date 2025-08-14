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
