'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createAchievement } from '@/lib/actions';

const initialState: { message: string | null } = {
    message: null,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" form="achievement-form" disabled={pending}>
            {pending ? 'Menyimpan...' : 'Simpan'}
        </Button>
    );
}

export function AchievementForm() {
    const [state, formAction] = useFormState(createAchievement, initialState);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Detail Prestasi</CardTitle>
                <CardDescription>
                    Isi detail prestasi yang akan ditambahkan ke galeri.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="achievement-form"
                    action={formAction}
                    className="grid gap-6"
                >
                    <div className="grid gap-3">
                        <Label htmlFor="title">Judul Prestasi</Label>
                        <Input
                            id="title"
                            type="text"
                            className="w-full"
                            placeholder="Contoh: Juara 1 Lomba Cerdas Cermat"
                            name="title"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Deskripsi</Label>
                        <Textarea
                            id="description"
                            placeholder="Deskripsi singkat mengenai prestasi..."
                            name="description"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="category">Kategori</Label>
                            <Select name="category">
                                <SelectTrigger
                                    id="category"
                                    aria-label="Pilih Kategori"
                                >
                                    <SelectValue placeholder="Pilih Kategori" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Akademik">
                                        Akademik
                                    </SelectItem>
                                    <SelectItem value="Olahraga">
                                        Olahraga
                                    </SelectItem>
                                    <SelectItem value="Seni">Seni</SelectItem>
                                    <SelectItem value="Lainnya">
                                        Lainnya
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="date">Tanggal</Label>
                            <Input
                                id="date"
                                name="date"
                                type="date"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="image">Gambar</Label>
                        <Input
                            id="image"
                            name="image"
                            type="file"
                            className="w-full"
                            accept="image/*"
                        />
                        <p className="text-xs text-muted-foreground">
                            Unggah gambar untuk prestasi.
                        </p>
                    </div>
                    {state?.message && (
                        <p
                            aria-live="polite"
                            className="text-sm font-medium text-destructive"
                        >
                            {state.message}
                        </p>
                    )}
                </form>
            </CardContent>
            <CardFooter className="justify-end gap-2">
                <Button variant="outline" type="button">
                    Batal
                </Button>
                <SubmitButton />
            </CardFooter>
        </Card>
    );
}
