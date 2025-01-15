import { apiFetch } from '../apiFetch';
import {
    Partner
} from './definitions';


export async function fecthUpcomingBirthdays() {
    const url = `/partners/upcoming-birthdays`;
    const partnersBirthdays: Partner[] = await apiFetch(url);
    return partnersBirthdays;
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPartners(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const queryParams = `?query=${encodeURIComponent(query)}&offset=${offset}&limit=${ITEMS_PER_PAGE}`;
    const url = `/partners${queryParams}`
    const parnerts: Partner[] = await apiFetch(url);
    return parnerts;
}

export async function fetchPartnersPages(query: string) {
    const queryParams = `?query=${encodeURIComponent(query)}`;
    const url = `/partners/pages${queryParams}`
    const response = await apiFetch(url);
    return response.totalPages;
}

export async function fetchPartnerById(id: string) {
    const url = `/partners/${id}`;
    const parnert: Partner = await apiFetch(url);
    return parnert;
}
