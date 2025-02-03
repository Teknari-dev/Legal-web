import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import data from "../data/data.json"; // Importamos el JSON
import { useLocation } from "react-router-dom";
import Footer from '../components/Footer';
import { GlobeAltIcon } from '@heroicons/react/24/outline'; // Importar el ícono de globo

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const location = useLocation();

    // Función para filtrar los resultados
    const handleSearch = (term = searchTerm) => {
        const results = data.filter(item =>
            item.keywords.some(keyword =>
                keyword.toLowerCase().includes(term.toLowerCase()) // Busca coincidencias parciales en keywords
            ) ||
            item.titulo.toLowerCase().includes(term.toLowerCase()) || // Busca coincidencias parciales en el título
            item.estructura.toLowerCase().includes(term.toLowerCase()) || // Busca coincidencias parciales en la estructura
            item.criterios.some(criterio => // Busca coincidencias parciales en los criterios
                criterio.toLowerCase().includes(term.toLowerCase())
            )
        );
        setFilteredResults(results);
    };

    // Si hay un término de búsqueda en la URL, aplicamos el filtro automáticamente
    useEffect(() => {
        const query = new URLSearchParams(location.search).get("q");
        if (query) {
            setSearchTerm(query);
            handleSearch(query);
        }
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Contenido Principal */}
            <main className="flex-grow md:mt-24 mt-36 bg-bg2 pb-12">
                {/* Filtros y Búsqueda */}
                <div className="flex flex-col items-center justify-center mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        {/* Barra de búsqueda */}
                        <div className="flex w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder="Buscar"
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                onClick={() => handleSearch()}
                                className="px-6 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark focus:outline-none"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contenedor Principal */}
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] px-6">
                    {/* Resultados */}
                    <div className="lg:h-full h-auto flex flex-col mb-6 px-auto lg:pr-4">
                        <h2 className="text-xl text-primary mb-6 text-center py-2 bg-bg1">Resultados</h2>
                        <ul className="space-y-4 p-4 bg-bg1 h-full">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((result, index) => (
                                    <li key={index} className="text-secondary text-base">
                                        {result.titulo}
                                    </li>
                                ))
                            ) : (
                                <p className="text-secondary text-center">No se encontraron resultados.</p>
                            )}
                        </ul>
                    </div>

                    {/* Estructuras y Criterios */}
                    <div className="flex flex-col space-y-12">
                        {/* Estructuras */}
                        <div>
                            <h2 className="text-xl text-primary mb-6 bg-bg1 px-4 py-2 sm:text-left text-center">Estructuras</h2>
                            <ul className="space-y-6 bg-bg1 p-4">
                                {filteredResults.length > 0 ? (
                                    filteredResults.map((result, index) => (
                                        <li key={index} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                            {/* Título en la parte de estructuras */}
                                            <p className="text-primary sm:hidden">
                                                {result.titulo}
                                            </p>

                                            {/* Tres íconos para los documentos en español, francés e inglés */}
                                            <div className="flex flex-row sm:space-y-0 space-x-4">
                                                <a
                                                    href={result.esp}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-primary-dark transition flex flex-col items-center"
                                                    title="Documento en español"
                                                >
                                                    <GlobeAltIcon className="w-8 h-8" />
                                                    <span className="text-sm mt-1">ES</span>
                                                </a>
                                                <a
                                                    href={result.fr}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-primary-dark transition flex flex-col items-center"
                                                    title="Documento en francés"
                                                >
                                                    <GlobeAltIcon className="w-8 h-8" />
                                                    <span className="text-sm mt-1">FR</span>
                                                </a>
                                                <a
                                                    href={result.ing}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-primary-dark transition flex flex-col items-center"
                                                    title="Documento en inglés"
                                                >
                                                    <GlobeAltIcon className="w-8 h-8" />
                                                    <span className="text-sm mt-1">EN</span>
                                                </a>
                                            </div>

                                            {/* Estructura y título (visible en pantallas grandes) */}
                                            <div className="flex-1">
                                                <p className=" text-primary hidden sm:block">
                                                    {result.titulo}
                                                </p>
                                                <span className="text-secondary">
                                                    {result.estructura}
                                                </span>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-secondary text-center">No se encontraron estructuras.</p>
                                )}
                            </ul>
                        </div>

                        {/* Criterios */}
                        <div>
                            <h2 className="text-xl text-primary mb-6 bg-bg1 px-4 py-2 sm:text-left text-center">Criterios</h2>
                            <ul className="space-y-6 bg-bg1 p-4">
                                {filteredResults.length > 0 ? (
                                    filteredResults.map((result, index) => (
                                        <li className="flex flex-col space-y-2 sm:space-x-6" key={index}>
                                            <p className="text-primary text-center sm:text-start">
                                                {result.titulo}
                                            </p>
                                            <ul className="text-sm text-secondary mt-1 list-disc pl-6">
                                                {result.criterios.map((criterio, idx) => (
                                                    <li key={idx}>{criterio}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-secondary text-center">No se encontraron criterios.</p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default SearchPage;