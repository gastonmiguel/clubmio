import UpcomingBirthdays from '@/app/ui/dashboard/upcoming-birthdays';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { UpcomingBirthdaysSkeleton } from '@/app/ui/partners/skeletons';

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<UpcomingBirthdaysSkeleton />}>
                    <UpcomingBirthdays />
                </Suspense>
            </div>
        </main>
    );
}