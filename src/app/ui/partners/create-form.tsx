'use client';

import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  DocumentIcon,
  PhoneIcon,
  CameraIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createPartner, State } from '@/app/lib/partners/actions';
import { useActionState } from 'react';
import { Status } from '@/app/lib/partners/definitions';
import Waiting from '../waiting';
import InputText from "@/app/ui/forms/input-text";
import InputNumber from "@/app/ui/forms/input-number";

export default function Form() {

  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(createPartner, initialState);

  if (isPending) {
    return <Waiting />
  }

  const userIcon = <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />;
  const documentIcon = <DocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />;


  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        <InputText name={'name'} placeholder={'Ingresa un nombre'} errors={ state.errors?.name } icon={ userIcon } />
        <InputText name={'surname'} placeholder={'Ingresa un apellido'} errors={ state.errors?.surname } icon={ userIcon } />


  <div className="mb-4">
    <label htmlFor="birthdate" className="mb-2 block text-sm font-medium">
            Escribe una fecha de nacimiento
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                placeholder="Ingresa una fecha de nacimiento"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="birthdate-error" aria-live="polite" aria-atomic="true">
              {state.errors?.birthdate &&
                state.errors.birthdate.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <InputNumber name={'document_number'} placeholder={'ingresa un número de documento'} icon={ documentIcon } />

        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Escribe un número de teléfono
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ingresa un número de teléfono"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              {state.errors?.phone &&
                state.errors.phone.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="mb-2 block text-sm font-medium">
            Sube una foto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                capture="environment"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CameraIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Estado del socio
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="active"
                  name="status"
                  type="radio"
                  value={Status.ACTIVE}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="active"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Activo <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="inactive"
                  name="status"
                  type="radio"
                  value={Status.INACTIVE}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="inactive"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Inactivo <ClockIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>
      </div>
      <div id="success-error" aria-live="polite" aria-atomic="true">
        {state.message && (
          <p className="mt-2 text-sm text-red-500">
            {state.message}
          </p>
        )}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/partners"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  );
}
