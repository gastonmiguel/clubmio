'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { apiFetchPost } from '../apiFetch';


const FormSchema = z.object({
    id: z.string(),
    name: z.coerce
        .number()
        .gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an partner status.',
    })
});

const CreatePartner = FormSchema.omit({ id: true });
const UpdatePartner = FormSchema.omit({ id: true });

export type State = {
    errors?: {
        name?: string[];
        status?: string[];
    };
    message?: string | null;
};

export async function createPartner(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = CreatePartner.safeParse({
        name: formData.get('name'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Partner.',
        };
    }

    // Prepare data for insertion into the database
    const { name, status } = validatedFields.data;

    await apiFetchPost('/partners', { name, status });

    revalidatePath('/dashboard/partners');
    redirect('/dashboard/partners');
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
