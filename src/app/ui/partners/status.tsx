import { Status } from '@/app/lib/partners/definitions';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function ParnetStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === Status.INACTIVE,
          'bg-green-500 text-white': status === Status.ACTIVE,
        },
      )}
    >
      {status === Status.INACTIVE ? (
        <>
          Inactive
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === Status.ACTIVE ? (
        <>
          Active
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
