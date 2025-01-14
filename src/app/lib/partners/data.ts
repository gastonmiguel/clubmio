import { apiFetchFiltered, apiFetchPages, apiFetchGet } from '../apiFetch';
import {
    PartnerForm,
    PartnersTable,
} from './definitions';


export async function fetchLatestPartners() {
    const latestPartners: PartnersTable[] = await apiFetchGet('/partners/upcoming-birthdays');
    return latestPartners;

}

//const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPartners(
    query: string,
    currentPage: number,
) {
    // const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    // if (query === '') query = '?';

    // query += `&offset=${offset}&limit=${ITEMS_PER_PAGE}`;

    const partners: PartnersTable[] = await apiFetchFiltered('/partners', query, currentPage);
    return partners;

}

export async function fetchPartnersPages(query: string) {
    const totalPages = apiFetchPages('/partners', query);
    return totalPages;
}

export async function fetchPartnerById(id: string) {
    const parnert: PartnerForm = await apiFetchGet(`/partners/${id}`);
    return parnert;
}
