'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Organization } from '@/app/lib/definitions';
import { imageUrl } from '@/app/lib/utils';

export default function AcmeLogo() {
  const [organization, setOrganization] = useState<Organization | null>(null);

  useEffect(() => {
    const org = localStorage.getItem('organization');
    if (org) {
      setOrganization(JSON.parse(org));
    }
  }, []);

  return (
    <div className="flex items-center text-white">
      {organization?.logo && (
        <Image
          src={imageUrl(organization.logo)}
          alt={organization.name || 'Logo'}
          width={50}
          height={50}
          className="mr-2"
        />
      )}
      <span className="sr-only text-xl font-bold">{organization?.name || 'Acme'}</span>
    </div>
  );
}
