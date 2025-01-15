'use server';

import { z } from 'zod';
import { startTransition } from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { apiFetchPost } from '../apiFetch';
import { Status } from './definitions';
import multer from 'multer';

const FormSchema = z.object({
    id: z.string(),
    name: z.string().min(1, 'El nombre es requerido.'),
    surname: z.string().min(1, 'El apellido es requerido.'),
    birthdate: z.string().min(1, 'La fecha de nacimiento es requerida.'),
    document_number: z.string().min(1, 'El número de documento es requerido.'),
    phone: z.string().min(1, 'El teléfono es requerido.'),
    status: z.enum([Status.ACTIVE, Status.INACTIVE], {
        invalid_type_error: 'Please select an partner status.',
    })
});

const CreatePartner = FormSchema.omit({ id: true });
const UpdatePartner = FormSchema.omit({ id: true });

export type State = {
    errors?: {
        name?: string[];
        surname?: string[];
        birthdate?: string[];
        document_number?: string[];
        phone?: string[];
        status?: string[];
    };
    message?: string | null;
};

const upload = multer({ storage: multer.memoryStorage() });
const handlePhotoUpload = async (photo_file : any) => {
    if (photo_file instanceof File) {
        const buffer = await photo_file.arrayBuffer();
        return Buffer.from(buffer).toString('base64') || '';
    }
    return null;
};

export async function createPartner(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = CreatePartner.safeParse({
        name: formData.get('name'),
        surname: formData.get('surname'),
        birthdate: formData.get('birthdate'),
        document_number: formData.get('document_number'),
        phone: formData.get('phone'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Partner.',
        };
    }

    const { name, surname, birthdate, document_number, phone, status } = validatedFields.data;

    const photo_file = formData.get('photo') || null;

    const photo = await handlePhotoUpload(photo_file);

    apiFetchPost('/partners', {
        name,
        surname,
        birthdate,
        document_number,
        phone,
        photo,
        status
    });
    
    revalidatePath('/dashboard/partners');
    redirect('/dashboard/partners');


    // if (photo_file instanceof File) {
    //     photo_file.arrayBuffer().then((buffer) => {
    //         let photo = Buffer.from(buffer).toString('base64') || '';

    //         apiFetchPost('/partners', {
    //             name,
    //             surname,
    //             birthdate,
    //             document_number,
    //             phone,
    //             photo,
    //             status
    //         });
            
    //         revalidatePath('/dashboard/partners');
    //         redirect('/dashboard/partners');
    //     })
    // } else {
    //     await apiFetchPost('/partners', {
    //         name,
    //         surname,
    //         birthdate,
    //         document_number,
    //         phone,
    //         status
    //     });
    // }

    // revalidatePath('/dashboard/partners');
    // redirect('/dashboard/partners');
}

export async function updatePartner(
    id: string,
    prevState: State,
    formData: FormData,
) {

    const validatedFields = UpdatePartner.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Partner.',
        };
    }

    const { name, status } = validatedFields.data;

    await apiFetchPost(`/partners/${id}`, { name, status }, 'PUT');

    revalidatePath('/dashboard/partners');
    redirect('/dashboard/partners');
}

export async function deletePartner(id: string): Promise<void> {
    await apiFetchPost(`/partners/${id}`, {}, 'DELETE');
    revalidatePath('/dashboard/partners');
}
