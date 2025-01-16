import Form from '@/app/ui/partners/edit-form';
import Breadcrumbs from '@/app/ui/partners/breadcrumbs';
import { fetchById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Partner } from '@/app/lib/partners/definitions';

export const metadata: Metadata = {
    title: 'Editar Socio',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [partner] = await Promise.all([
        fetchById('/partners', id) as Promise<Partner>,
    ]);
    if (!partner) {
        notFound();
    }
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Socios', href: '/dashboard/partners' },
                    {
                        label: 'Editar',
                        href: `/dashboard/partners/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form partner={partner} />
        </main>
    );
}