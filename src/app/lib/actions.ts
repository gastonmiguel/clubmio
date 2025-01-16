'use server';

import { redirect } from "next/navigation";
import { apiFetch } from "./apiFetch";
import { z } from "zod";
import { cookies } from 'next/headers'

const FormSchema = z.object({
    email: z.string().min(1, 'El email es requerido.'),
    password: z.string().min(8, 'El password debe tener al menos 8 caracteres.'),
});

export type StateLogin = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    message?: string | null;
    redirectToDashboard?: boolean
};

const AuthenticateUser = FormSchema.omit({});

export async function authenticate(
    state: StateLogin,
    formData: FormData,
): Promise<StateLogin> {
    const validatedFields = AuthenticateUser.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            ...state,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Login.',
        };
    }

    const { email, password } = validatedFields.data;

    try {
        const response = await apiFetch('/login', 'POST', {
            email,
            password,
        });

        if (response.token) {
            const cookieStore = await cookies();
            cookieStore.set('token', response.token);

            return { ...state, message: 'Acceso correcto', redirectToDashboard: true };
        }

        return { ...state, message: response.message || 'Login failed.' };
    } catch (error) {
        return {
            ...state,
            message:
                error instanceof Error ? error.message : 'An unexpected error occurred.',
        };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('token');
    redirect('/login');
}

