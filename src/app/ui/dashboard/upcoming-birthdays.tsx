import { CakeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fecthUpcomingBirthdays } from '@/app/lib/data';
import { imageUrl } from '@/app/lib/utils';
import { dateSmall } from '@/app/lib/utils';
import { Partner } from '@/app/lib/partners/definitions';

export default async function UpcomingBirthdays() {
    const partnersBirthdays: Partner[] = await fecthUpcomingBirthdays('/partners');
    return (
        <div className="flex w-full flex-col md:col-span-4">
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

                <div className="flex items-center pb-2 pt-2">
                    <CakeIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Proximos cumpleaños</h3>
                </div>

                {<div className="bg-white px-6">
                    {partnersBirthdays.map((partner, i) => {
                        return (
                            <div
                                key={partner.id}
                                className={clsx(
                                    'flex flex-row items-center justify-between py-4',
                                    {
                                        'border-t': i !== 0,
                                    },
                                )}
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={imageUrl(partner.photo)}
                                        alt={`${partner.name}'s profile picture`}
                                        className="mr-4 rounded-full"
                                        width={60}
                                        height={60}
                                    />
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold md:text-base">
                                            {partner.name}
                                        </p>
                                        <p className="truncate text-sm font-semibold md:text-base">
                                            {partner.surname}
                                        </p>
                                        <p className="hidden text-sm text-gray-500 sm:block">
                                            {partner.surname}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                                >
                                    {dateSmall(partner.birthdate)}
                                </p>
                            </div>
                        );
                    })}
                </div>}

            </div>
        </div>
    );
}
