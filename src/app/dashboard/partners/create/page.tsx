import Form from '@/app/ui/partners/create-form';
import Breadcrumbs from '@/app/ui/partners/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoice Create',
};


export default async function Page() {


  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Partners', href: '/dashboard/partners' },
          {
            label: 'Create Partners',
            href: '/dashboard/partners/create',
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}