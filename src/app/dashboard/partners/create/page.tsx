import Form from '@/app/ui/partners/create-form';
import Breadcrumbs from '@/app/ui/partners/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crear Socio',
};

export default async function Page() {

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Socios', href: '/dashboard/partners' },
          {
            label: 'Crear Socios',
            href: '/dashboard/partners/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}