const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center py-20 bg-bg1">
            <h1 className="text-8xl text-primary">LEYES.COM</h1>
            <p className="text-2xl text-secondary mt-4">¿Qué deseas aprender hoy?</p>
            <div className="mt-8 w-2/5">
                <input
                    type="text"
                    placeholder="Buscar"
                    className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
            </div>
        </section>
    );
};

export default Hero;
