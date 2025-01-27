import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import data from "../data/data.json"; // Importamos el JSON
import { useLocation } from "react-router-dom";

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
            item.title.toLowerCase().includes(term.toLowerCase()) || // Busca coincidencias parciales en el título
            item.estructura.toLowerCase().includes(term.toLowerCase()) || // Busca coincidencias parciales en la estructura
            item.criterios.toLowerCase().includes(term.toLowerCase()) // Busca coincidencias parciales en los criterios
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
        <>
            {/* Navbar */}
            <Navbar />

            {/* Contenido Principal */}
            <main className="md:mt-24 mt-36 bg-bg2 pb-12">
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
                                        {result.title}
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
                                        <li key={index} className="flex items-center space-x-6">
                                            <img
                                                src="/estructura1.png"
                                                alt="Estructura"
                                                className="w-32 h-32 object-cover border border-gray-300 rounded-md"
                                            />
                                            <span className="text-secondary">
                                                {result.estructura}
                                            </span>
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
                                        <li key={index}>
                                            <p className="text-primary">
                                                {result.title}
                                            </p>
                                            <p className="text-sm text-secondary mt-1">
                                                {result.criterios}
                                            </p>
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
        </>
    );
};

export default SearchPage;