import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import data from "../data/data.json";
import { useLocation } from "react-router-dom";
import Footer from '../components/Footer';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { LanguageContext } from "../components/LanguageContext";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [includeStructure, setIncludeStructure] = useState(true);
    const [includeCriteria, setIncludeCriteria] = useState(true);
    const location = useLocation();
    const { language, translate } = useContext(LanguageContext);

    const handleSearch = (term = searchTerm) => {
        const query = new URLSearchParams(location.search);
        const includeStructure = query.get("structure") === "true";
        const includeCriteria = query.get("criteria") === "true";

        const results = data.filter(item => {
            const matchesKeywords = item.keywords.some(keyword =>
                keyword.toLowerCase().includes(term.toLowerCase())
            );
            const matchesTitle = item.titulo[language].toLowerCase().includes(term.toLowerCase());
            const matchesStructure = includeStructure && item.estructura[language].toLowerCase().includes(term.toLowerCase());
            const matchesCriteria = includeCriteria && item.criterios[language].some(criterio =>
                criterio.toLowerCase().includes(term.toLowerCase())
            );

            return matchesKeywords || matchesTitle || matchesStructure || matchesCriteria;
        });

        setFilteredResults(results);
    };

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const searchQuery = query.get("q");
        const includeStructure = query.get("structure") === "true";
        const includeCriteria = query.get("criteria") === "true";

        if (searchQuery) {
            setSearchTerm(searchQuery);
            setIncludeStructure(includeStructure);
            setIncludeCriteria(includeCriteria);
            handleSearch(searchQuery);
        }
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow md:mt-24 mt-36 bg-bg2 pb-12">
                <div className="flex flex-col items-center justify-center mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="flex w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder={translate("home.searchPlaceholder")}
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                onClick={() => handleSearch()}
                                className="px-6 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark focus:outline-none"
                            >
                                {translate("home.searchButton")}
                            </button>
                        </div>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={includeStructure}
                                    onChange={(e) => setIncludeStructure(e.target.checked)}
                                    className="form-checkbox text-primary"
                                />
                                <span className="text-secondary">{translate("search.structures")}</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={includeCriteria}
                                    onChange={(e) => setIncludeCriteria(e.target.checked)}
                                    className="form-checkbox text-primary"
                                />
                                <span className="text-secondary">{translate("search.criteria")}</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] px-6">
                    <div className="lg:h-full h-auto flex flex-col mb-6 px-auto lg:pr-4">
                        <h2 className="text-xl text-primary mb-6 text-center py-2 bg-bg1">
                            {translate("search.results")}
                        </h2>
                        <ul className="space-y-4 p-4 bg-bg1 h-full">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((result, index) => (
                                    <li key={index} className="text-secondary text-base">
                                        {result.titulo[language]}
                                    </li>
                                ))
                            ) : (
                                <p className="text-secondary text-center">
                                    {translate("search.noResults")}
                                </p>
                            )}
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-6">
                        {includeStructure && (
                            <div>
                                <h2 className="text-xl text-primary mb-6 bg-bg1 px-4 py-2 sm:text-left text-center">
                                    {translate("search.structures")}
                                </h2>
                                <ul className="space-y-6 bg-bg1 p-4">
                                    {filteredResults.length > 0 ? (
                                        filteredResults.map((result, index) => (
                                            <li key={index} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                                <p className="text-primary sm:hidden">
                                                    {result.titulo[language]}
                                                </p>
                                                <div className="flex flex-row sm:space-y-0 space-x-4">
                                                    <a
                                                        href={result.esp}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:text-primary-dark transition flex flex-col items-center"
                                                        title="Documento en español"
                                                    >
                                                        <GlobeAltIcon className="w-8 h-8" />
                                                        <span className="text-sm mt-1">ES</span>
                                                    </a>
                                                    <a
                                                        href={result.fr}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:text-primary-dark transition flex flex-col items-center"
                                                        title="Documento en francés"
                                                    >
                                                        <GlobeAltIcon className="w-8 h-8" />
                                                        <span className="text-sm mt-1">FR</span>
                                                    </a>
                                                    <a
                                                        href={result.ing}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:text-primary-dark transition flex flex-col items-center"
                                                        title="Documento en inglés"
                                                    >
                                                        <GlobeAltIcon className="w-8 h-8" />
                                                        <span className="text-sm mt-1">EN</span>
                                                    </a>
                                                </div>
                                                <div className="flex-1">
                                                    <p className=" text-primary hidden sm:block">
                                                        {result.titulo[language]}
                                                    </p>
                                                    <span className="text-secondary">
                                                        {result.estructura[language]}
                                                    </span>
                                                </div>
                                            </li>
                                        ))
                                    ) : (
                                        <p className="text-secondary text-center">
                                            {translate("search.noResults")}
                                        </p>
                                    )}
                                </ul>
                            </div>
                        )}
                        {includeCriteria && (
                            <div>
                                <h2 className="text-xl text-primary mb-6 bg-bg1 px-4 py-2 sm:text-left text-center">
                                    {translate("search.criteria")}
                                </h2>
                                <ul className="space-y-6 bg-bg1 p-4">
                                    {filteredResults.length > 0 ? (
                                        filteredResults.map((result, index) => (
                                            <li className="flex flex-col space-y-2 sm:space-x-6" key={index}>
                                                <p className="text-primary text-center sm:text-start">
                                                    {result.titulo[language]}
                                                </p>
                                                <ul className="text-sm text-secondary mt-1 list-disc pl-6">
                                                    {result.criterios[language].map((criterio, idx) => (
                                                        <li key={idx}>{criterio}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))
                                    ) : (
                                        <p className="text-secondary text-center">
                                            {translate("search.noResults")}
                                        </p>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SearchPage;