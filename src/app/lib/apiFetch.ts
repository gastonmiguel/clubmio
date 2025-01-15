'use server';

const ITEMS_PER_PAGE = 6;
const API_URL = process.env.API_SERVER_URL;
const token = "54|HfmTBCvB2NhCEpvSMvBjFhZKBeY7F5wY8NC4bELR9f6f000e";

export async function apiFetch(
    endpoint: string,
    method: string = 'GET',
    body: object | null = null,
    additionalParams: Record<string, any> = {}
) {
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,
        ...additionalParams.headers,
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });

        if (response.status === 401) {
            window.location.href = '/login';
            return;
        }

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error("Failed to fetch data: " + error.message);
        } else {
            throw new Error("Failed to fetch data: " + String(error));
        }
    }
}


export async function apiFetchPost(page: string, body: object, method: string = 'POST') {

    try {

        const uri = `${API_URL}${page}`;
        const response = await fetch(uri, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        return response;
    } catch (error) {
        throw new Error("Failed to POST api." + error);
    }
}