import Image from 'next/image';
import { UpdatePartner } from '@/app/ui/partners/buttons';
import ParnetStatus from '@/app/ui/partners/status';
import { dateSmall, imageUrl } from '@/app/lib/utils';
import { fetchFilteredPartners } from '@/app/lib/partners/data';
import { dateOnlyYear } from '@/app/lib/utils';
import { CakeIcon } from '@heroicons/react/24/outline';

export default async function PartnersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const partners = await fetchFilteredPartners(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {partners?.map((partner) => (
              <div
                key={partner.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={imageUrl(partner.photo)}
                        className="mr-2 rounded-full"
                        width={100}
                        height={100}
                        alt={`${partner.name}'s profile picture`}
                      />
                      <p>{partner.name} <br></br> {partner.surname}</p>
                    </div>
                  </div>
                  <ParnetStatus status={partner.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-bold">
                      {dateOnlyYear(partner.birthdate)}
                    </p>
                    <p className="text-sm text-gray-500 inline-flex mr-5"><CakeIcon className="w-4" /><span>{dateSmall(partner.birthdate)}</span></p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdatePartner id={partner.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Socio
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Documento
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha de nacimiento
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {partners?.map((partner) => (
                <tr
                  key={partner.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={imageUrl(partner.photo)}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${partner.name}'s profile picture`}
                      />
                      <p>{partner.name} {partner.surname}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {partner.document_number}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {partner.birthdate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ParnetStatus status={partner.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdatePartner id={partner.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
