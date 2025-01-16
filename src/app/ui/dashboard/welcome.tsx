'use client';

import { useEffect, useState } from 'react';
import { Organization } from '@/app/lib/definitions';
import Image from 'next/image';
import { imageUrl } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';

export default function Welcome() {
    const [organization, setOrganization] = useState<Organization | null>(null);

    useEffect(() => {
        const org = localStorage.getItem('organization');
        if (org) {
            setOrganization(JSON.parse(org));
        }
    }, []);

    return (
        <div className="flex w-full flex-col md:col-span-4">
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
            <div className="bg-white shadow-xl p-8 flex flex-col items-center">
                    {/* Logo de la organización */}
                    <div className="flex justify-center mb-6">
                        <div className="w-26 h-26 overflow-hidden border-4">
                            <Image
                                src={imageUrl(organization?.logo || '')} // Usa el logo de la organización desde localStorage
                                alt="Logo de la organización"
                                width={100}
                                height={100}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Nombre de la organización */}
                    <h1 className={`${lusitana.className} text-3xl font-bold text-center text-gray-800 mb-4`}>
                        {organization?.name || ''}
                    </h1>

                    {/* Mensaje de bienvenida */}
                    <p className="text-gray-600 text-center text-lg">
                        ¡Bienvenido al panel de administración de {organization?.name || ''}!
                    </p>
                </div>

            </div>
        </div>
    );
}
