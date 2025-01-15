export type Partner = {
    id: string;
    name: string;
    surname: string;
    birthdate: string;
    document_number: string;
    phone: string;
    photo: string;
    status: Status;
};

export enum Status {
    INACTIVE = 'inactive',
    ACTIVE = 'active',
}