import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Hero = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const { translate } = useContext(LanguageContext);

    const handleSearch = () => {
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <section className="flex-grow flex flex-col justify-center items-center text-center py-20 px-4 bg-bg1">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary">
                {translate("home.title")}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-secondary mt-4">
                {translate("home.subtitle")}
            </p>
            <div className="mt-8 w-full sm:w-2/3 lg:w-2/5 flex flex-col space-y-4">
                <div className="flex">
                    <input
                        type="text"
                        placeholder={translate("home.searchPlaceholder")}
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        onClick={handleSearch}
                        className="px-6 py-2 bg-primary text-white font-semibold rounded-r-lg hover:bg-primary-dark focus:outline-none"
                    >
                        {translate("home.searchButton")}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;