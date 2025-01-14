export type Partner = {
    id: string;
    name: string;
    surname: string;
    photo: string;
    birthdate: string;
    status: Status.ACTIVE | Status.INACTIVE;
};

export type LatestPartner = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    birthdate: string;
};

export type PartnersTable = {
    id: string;
    name: string;
    surname: string;
    photo: string;
    birthdate: string;
    status: Status.ACTIVE | Status.INACTIVE;
};

export type PartnerForm = {
    id: string;
    name: string;
    surname: string;
    photo: string;
    birthdate: string;
    status: Status.ACTIVE | Status.INACTIVE;
};

export enum Status {
    INACTIVE = 'inactive',
    ACTIVE = 'active',
}
