'use server';

const ITEMS_PER_PAGE = 6;
const API_URL = process.env.API_SERVER_URL;
const token = "54|HfmTBCvB2NhCEpvSMvBjFhZKBeY7F5wY8NC4bELR9f6f000e";

export async function apiFetchGet(page: string) {

    try {
        const response = await fetch(
            `${API_URL}${page}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error("Failed to fetch data." + error);
    }
}


export async function apiFetchFiltered(page: string, query: string, currentPage: number) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const response = await fetch(
            `${API_URL}${page}?query=${encodeURIComponent(query)}&offset=${offset}&limit=${ITEMS_PER_PAGE}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error("Failed to fetch data." + error);
    }
}

export async function apiFetchPages(page: string, query: string) {

    try {
        const response = await fetch(
            `${API_URL}${page}/pages?query=${encodeURIComponent(query)}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Error al obtener el número total de páginas: ${response.statusText}`);
        }

        const { totalPages } = await response.json();

        const total = Math.ceil(totalPages / ITEMS_PER_PAGE);

        return total;

    } catch (error) {
        throw new Error('Failed to fetch total number of pages.' + error);
    }
}

export async function apiFetchById(page: string, id: string) {

    if (!id || id === "0") {
        return null;
    }

    try {
        const response = await fetch(`${API_URL}${page}/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Error al obtener elemento por ID: ${response.statusText}`);
        }

        const element = await response.json();
        return element;
    } catch (error) {
        throw new Error("Failed to fetch element by ID." + error);
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