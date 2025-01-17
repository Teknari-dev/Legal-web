import Navbar from "../components/Navbar";

const SearchPage = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Contenido Principal */}
            <main className="md:mt-24 mt-36 bg-bg2 pb-12">
                {/* Filtros y Búsqueda */}
                <div className="flex flex-col items-center justify-center mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        {/* Checkboxes */}
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox text-secondary" />
                            <span className="ml-2 text-gray-800">Estructura</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox text-secondary" />
                            <span className="ml-2 text-gray-800">Criterios</span>
                        </label>

                        {/* Barra de búsqueda */}
                        <div className="flex w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder="Buscar"
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                            <button
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
                            <li className="text-secondary text-base">Lorem Lorem Ipsum es simplemente</li>
                            <li className="text-secondary">Lorem Ipsum ha sido el texto lorem</li>
                            <li className="text-secondary">Lorem Lorem Ipsum es simplemente</li>
                            <li className="text-secondary">Lorem Ipsum ha sido el texto lorem</li>
                        </ul>
                    </div>

                    {/* Estructuras y Criterios */}
                    <div className="flex flex-col space-y-12">
                        {/* Estructuras */}
                        <div>
                            <h2 className="text-xl text-primary mb-6 bg-bg1 px-4 py-2 sm:text-left text-center">Estructuras</h2>
                            <ul className="space-y-6 bg-bg1 p-4">
                                <li className="flex items-center space-x-6">
                                    <img
                                        src="/estructura1.png"
                                        alt="Estructura 1"
                                        className="w-32 h-32 object-cover border border-gray-300 rounded-md"
                                    />
                                    <span className="text-secondary">
                                        Estructura: Derecho a la dignidad
                                    </span>
                                </li>
                                <li className="flex items-center space-x-6">
                                    <img
                                        src="/estructura2.png"
                                        alt="Estructura 2"
                                        className="w-32 h-32 object-cover border border-gray-300 rounded-md"
                                    />
                                    <span className="text-secondary">
                                        Estructura: Derecho de las personas discapacitadas
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Criterios */}
                        <div>
                            <h2 className="text-xl text-primary mb-6 bg-bg1 px-4 py-2 sm:text-left text-center">Criterios</h2>
                            <ul className="space-y-6 bg-bg1 p-4">
                                <li>
                                    <p className="text-primary">
                                        Observación: CAT-GC-3 Implementación del artículo 14 por los Estados Partes, Parr. 12
                                    </p>
                                    <p className="text-sm text-secondary mt-1">
                                        [Que tal vez nunca recupere plenamente su situación anterior, incluidos su dignidad,
                                        salud y autonomía].
                                    </p>
                                </li>
                                <li>
                                    <p className="text-primary">
                                        Observación: CAT-GC-3 Implementación del artículo 14 por los Estados Partes, Parr. 16
                                    </p>
                                    <p className="text-sm text-secondary mt-1">
                                        [O decisión judicial que restablezca la dignidad o reputación y los derechos
                                        de la víctima].
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SearchPage;
