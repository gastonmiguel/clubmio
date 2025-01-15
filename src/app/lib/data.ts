import { apiFetch } from './apiFetch';

const ITEMS_PER_PAGE = 6;

export async function fetchFiltered(
    controller: string,
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const queryParams = `?query=${encodeURIComponent(query)}&offset=${offset}&limit=${ITEMS_PER_PAGE}`;
    const url = `${controller}${queryParams}`
    const parnerts = await apiFetch(url);
    return parnerts;
}

export async function fetchPages(
    controller: string,
    query: string
) {
    const queryParams = `?query=${encodeURIComponent(query)}`;
    const url = `${controller}/pages${queryParams}`
    const response = await apiFetch(url);
    return response.totalPages;
}

export async function fetchById(
    controller: string,
    id: string
) {
    const url = `${controller}/${id}`;
    const parnert = await apiFetch(url);
    return parnert;
}

export async function fecthUpcomingBirthdays(
    controller: string
) {
    const url = `${controller}/upcoming-birthdays`;
    const partnersBirthdays = await apiFetch(url);
    return partnersBirthdays;
}
