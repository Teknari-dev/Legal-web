import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Navbar = () => {
    const { setLanguage } = useContext(LanguageContext);

    return (
        <header className="fixed top-0 left-0 w-full bg-bg2 shadow-md z-50">
            <div className="container mx-auto py-4 px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logos */}
                    <div className="flex justify-center md:justify-start items-center space-x-4 mb-4 md:mb-0">
                        <img src="/UJAT.png" alt="Logo 1" className="h-10 md:h-12" />
                        <img src="/OIP.png" alt="Logo 2" className="h-10 md:h-12" />
                        <img src="/logo1.png" alt="Logo 3" className="h-10 md:h-12" />
                    </div>
                    {/* Idiomas */}
                    <div className="flex justify-center md:justify-end items-center space-x-4">
                        <nav className="flex space-x-6">
                            <button onClick={() => setLanguage("es")} className="text-secondary hover:underline">
                                Español
                            </button>
                            <button onClick={() => setLanguage("en")} className="text-secondary hover:underline">
                                English
                            </button>
                            <button onClick={() => setLanguage("fr")} className="text-secondary hover:underline">
                                Français
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;