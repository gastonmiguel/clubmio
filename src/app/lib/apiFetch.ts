'use server';

import { cookies } from 'next/headers';

const API_URL = process.env.API_SERVER_URL;

export async function apiFetch(
    endpoint: string,
    method: string = 'GET',
    body: object | null = null
) {

    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value || '';

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });

        if (response.status === 401) {
            throw new Error('Error: Unauthorized');
        }

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
        }
    }
}