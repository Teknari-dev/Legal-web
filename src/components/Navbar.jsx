const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-bg2 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logos */}
                <div className="flex items-center space-x-4">
                    <img src="/UJAT.png" alt="Logo 1" className="h-12" />
                    <img src="/OIP.png" alt="Logo 2" className="h-12" />
                    <img src="/logo1.png" alt="Logo 3" className="h-12" />
                </div>
                {/* Language Options */}
                <nav className="flex space-x-6">
                    <a href="#" className="text-secondary hover:underline">Español</a>
                    <a href="#" className="text-secondary hover:underline">Inglés</a>
                    <a href="#" className="text-secondary hover:underline">Francés</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
