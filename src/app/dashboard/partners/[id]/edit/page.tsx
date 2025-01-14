import Form from '@/app/ui/partners/edit-form';
import Breadcrumbs from '@/app/ui/partners/breadcrumbs';
import { fetchPartnerById } from '@/app/lib/partners/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Invoice Edit',
};


export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [partner] = await Promise.all([
        fetchPartnerById(id),
    ]);
    if (!partner) {
        notFound();
    }
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form partner={partner} />
        </main>
    );
}