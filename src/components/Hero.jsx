const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center py-10 px-4 bg-bg1">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary">LEYES.COM</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-secondary mt-4">¿Qué deseas aprender hoy?</p>
            <div className="mt-8 w-full sm:w-2/3 lg:w-2/5">
                <input
                    type="text"
                    placeholder="Buscar"
                    className="w-full sm:w-2/3 px-4 py-2 border border-bg1 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-secondary" />
                    <span className="ml-2 text-gray-800">Estructura</span>
                </label>
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-secondary" />
                    <span className="ml-2 text-gray-800">Criterios</span>
                </label>
            </div>
        </section>
    );
};

export default Hero;
