'use client';

import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Image src="/clubmio.webp" alt="ClubMio Logo" width={40} height={40} />
                        <h1 className="text-2xl font-bold text-gray-800">ClubMio</h1>
                    </div>
                    <button
                        onClick={() => window.location.href = '/dashboard'}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Ingresar
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-grow">
                <section className="bg-blue-50 py-16">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                            ¡Moderniza tu club con ClubMio!
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-700 mb-8">
                            La herramienta que ayuda a los clubes de barrio a gestionar sus actividades de manera profesional y sencilla.
                        </p>
                        <button
                            onClick={() => alert('Formulario de contacto en desarrollo')}
                            className="bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700 transition"
                        >
                            Contáctanos
                        </button>
                    </div>
                </section>

                {/* Collaborative Message */}
                <section className="py-8 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-xl text-gray-700 font-medium">
                            Esta plataforma está en constante evolución y creemos que, entre todos, podemos hacerla aún mejor. ¡Tu participación es clave para crecer juntos!
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
                            ¿Por qué elegir ClubMio?
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Gestión Económica</h4>
                                <p className="text-gray-600">
                                    Sistema diseñado para ser accesible a clubes sin fines de lucro.
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Fácil de Usar</h4>
                                <p className="text-gray-600">
                                    Interfaz intuitiva para que todos puedan usarla sin complicaciones.
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Optimiza Recursos</h4>
                                <p className="text-gray-600">
                                    Reduce el tiempo y costos administrativos en tu club.
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Futuro Seguro</h4>
                                <p className="text-gray-600">
                                    Planea crecer junto a nosotros con opciones avanzadas en el futuro.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-blue-600 py-16 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold mb-6">¡Es tu oportunidad de modernizar tu club!</h3>
                        <p className="text-lg mb-8">
                            Únete ahora y forma parte de la comunidad que está transformando los clubes de barrio.
                        </p>
                        <button
                            onClick={() => alert('Formulario de contacto en desarrollo')}
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow hover:bg-gray-200 transition"
                        >
                            Contáctanos
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-200 py-8">
                <div className="container mx-auto px-6 text-center space-y-4">
                    <p className="text-sm">
                        © 2025 ClubMio. Todos los derechos reservados.
                    </p>
                    <p className="text-sm">
                        Diseñado para empoderar a los clubes de barrio.
                    </p>
                </div>
            </footer>
        </div>
    );
}
