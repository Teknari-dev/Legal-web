import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-bg2 shadow-md z-50">
                <div className="container mx-auto py-4 px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Logos */}
                        <div className="flex justify-center md:justify-start items-center space-x-4 mb-4 md:mb-0">
                            <img src="/UJAT.png" alt="Logo 1" className="h-10 md:h-12" />
                            <img src="/OIP.png" alt="Logo 2" className="h-10 md:h-12" />
                            <img src="/logo1.png" alt="Logo 3" className="h-10 md:h-12" />
                        </div>
                        {/* Idiomas y Menú */}
                        <div className="flex justify-center md:justify-end items-center space-x-4">
                            <nav className="flex space-x-6">
                                <a href="#" className="text-secondary hover:underline">Español</a>
                                <a href="#" className="text-secondary hover:underline">Inglés</a>
                                <a href="#" className="text-secondary hover:underline">Francés</a>
                            </nav>
                            {/* Botón del menú hamburguesa */}
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-lg hover:bg-gray-200 focus:outline-none"
                                aria-label="Abrir menú"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-secondary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* Menú */}
            <Menu isOpen={menuOpen} closeMenu={closeMenu} />
        </>
    );
};

export default Navbar;
