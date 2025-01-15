import { lusitana } from '@/app/ui/fonts';

export default function Waiting() {
    return (
        <div className={`${lusitana.className} flex items-center justify-center bg-gray-100`}>
            <div className="absolute top-1/3 text-center">
                <div className="flex justify-center items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="mt-6 text-lg font-medium text-gray-700 ">
                    Aguarde un momento por favor...
                </p>
            </div>
        </div>
    );
}
