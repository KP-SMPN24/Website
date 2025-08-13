'use server';

import { z } from 'zod';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';

const NewsSchema = z.object({
  title: z.string().min(10),
  content: z.string().min(50),
});

export async function createNews(formData: FormData) {
  const validatedFields = NewsSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const slug = validatedFields.data.title.toLowerCase().replace(/\s/g, '-');
    await prisma.newsArticle.create({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        slug: slug,
        author: 'Admin Sekolah', // Placeholder
        category: 'Berita', // Placeholder
        imageUrl: `https://placehold.co/800x600.png`, // Placeholder
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create News Article.',
    };
  }
  revalidatePath('/dashboard/berita');
}

const AchievementSchema = z.object({
    title: z.string().min(10),
    description: z.string().min(20),
    category: z.enum(['Akademik', 'Olahraga', 'Seni', 'Lainnya']),
});


export async function createAchievement(formData: FormData) {
    const validatedFields = AchievementSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.achievement.create({
            data: {
                title: validatedFields.data.title,
                description: validatedFields.data.description,
                category: validatedFields.data.category,
                imageUrl: `https://placehold.co/600x400.png`, // Placeholder
                date: new Date().toISOString(),
            },
        });
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Achievement.',
        };
    }
    revalidatePath('/dashboard/prestasi');
}


const StaffSchema = z.object({
    name: z.string().min(3),
    position: z.string().min(5),
    category: z.enum(['Pendidik', 'Staf']),
});

export async function createStaff(formData: FormData) {
    const validatedFields = StaffSchema.safeParse({
        name: formData.get('name'),
        position: formData.get('position'),
        category: formData.get('category'),
    });
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.staff.create({
            data: {
                name: validatedFields.data.name,
                position: validatedFields.data.position,
                category: validatedFields.data.category,
                imageUrl: `https://placehold.co/400x500.png`, // Placeholder
            },
        });
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Staff.',
        };
    }

    revalidatePath('/dashboard/guru-staff');
}

const SettingsSchema = z.object({
  accreditationUrl: z.string().url().optional().or(z.literal('')),
});

export async function updateSettings(formData: FormData) {
  const validatedFields = SettingsSchema.safeParse({
    accreditationUrl: formData.get('accreditationUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.setting.upsert({
        where: { key: 'accreditationUrl' },
        update: { value: validatedFields.data.accreditationUrl || '' },
        create: { key: 'accreditationUrl', value: validatedFields.data.accreditationUrl || '' },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Settings.',
    };
  }

  revalidatePath('/dashboard/pengaturan');
  revalidatePath('/profil/akreditasi');
}
