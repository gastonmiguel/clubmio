import UpcomingBirthdays from '@/app/ui/dashboard/upcoming-birthdays';
import { Suspense } from 'react';
import { UpcomingBirthdaysSkeleton } from '@/app/ui/dashboard/skeletons';
import Welcome from '@/app/ui/dashboard/welcome';


export default async function Page() {

    return (
        <main className="mt-6">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <Welcome />
                </div>
                <div className="flex-1">
                    <Suspense fallback={<UpcomingBirthdaysSkeleton />}>
                        <UpcomingBirthdays />
                    </Suspense>
                </div>
            </div>
        </main>

    );
}