const Menu = ({ isOpen, closeMenu }) => {
    return (
        <div
            className={`fixed top-0 right-0 w-64 h-full bg-white transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
                } shadow-lg z-50`}
        >
            <div className="p-4">
                {/* Botón para cerrar */}
                <button
                    onClick={closeMenu}
                    className="text-secondary text-xl font-bold hover:underline mb-4"
                >
                    Cerrar
                </button>

                {/* Barra de búsqueda */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                </div>

                {/* Filtros */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-primary mb-4">Filtros</h2>
                    <div className="flex flex-col space-y-4">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox text-secondary" />
                            <span className="ml-2 text-secondary">Estructura</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox text-secondary" />
                            <span className="ml-2 text-secondary">Criterios</span>
                        </label>
                    </div>
                </div>

                {/* Lista de leyes */}
                <div>
                    <h2 className="text-lg font-semibold text-primary mb-4">Lista de leyes</h2>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="#"
                                className="text-secondary hover:text-gray-800 hover:underline"
                            >
                                Derechos humanos e igualdad
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-secondary hover:text-gray-800 hover:underline"
                            >
                                Derechos humanos de libertades
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-secondary hover:text-gray-800 hover:underline"
                            >
                                Derechos humanos de procesales
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-secondary hover:text-gray-800 hover:underline"
                            >
                                Derechos humanos sociales
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-secondary hover:text-gray-800 hover:underline"
                            >
                                Derechos humanos colectivos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;
