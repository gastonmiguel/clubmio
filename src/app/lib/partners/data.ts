import { apiFetchFiltered, apiFetchPages, apiFetchGet } from '../apiFetch';
import {
    Partner
} from './definitions';


export async function fecthUpcomingBirthdays() {
    const partnersBirthdays: Partner[] = await apiFetchGet('/partners/upcoming-birthdays');
    return partnersBirthdays;

}

export async function fetchFilteredPartners(
    query: string,
    currentPage: number,
) {

    const partners: Partner[] = await apiFetchFiltered('/partners', query, currentPage);
    return partners;
}

export async function fetchPartnersPages(query: string) {
    const totalPages = apiFetchPages('/partners', query);
    return totalPages;
}

export async function fetchPartnerById(id: string) {
    const parnert: Partner = await apiFetchGet(`/partners/${id}`);
    return parnert;
}
