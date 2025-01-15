export default function Loading() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="mt-6 text-lg font-medium text-gray-700">
                    Aguarde un momento por favor...
                </p>
            </div>
        </div>
    );
}
