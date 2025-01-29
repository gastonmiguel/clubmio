import React from "react";

export default function InputNumber({
    name,
    placeholder,
    errors,
    icon,
    default_value = ''
}: {
    name: string,
    placeholder: string,
    errors ?: string[],
    icon : React.ReactNode,
    default_value ?: string,
}) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="mb-2 block text-sm font-medium">
                Escribe un número de documento
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                    <input
                        id={name}
                        name={name}
                        type="text"
                        placeholder={placeholder}
                        defaultValue={default_value}
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                    {icon}
                </div>
                <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
                    {errors &&
                    errors.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                        </p>
                    ))}
                </div>
            </div>
        </div>

    );
}