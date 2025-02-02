import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Hero (ocupa el espacio restante) */}

            <Hero />


            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;