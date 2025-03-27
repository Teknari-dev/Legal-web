import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import search from "../data/search.json";
import { useLocation } from "react-router-dom";
import Footer from '../components/Footer';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { LanguageContext } from "../components/LanguageContext";

// Función para normalizar texto (eliminar acentos)
const normalizeText = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Componente para resaltar el texto con la palabra clave correspondiente
const HighlightKeyword = ({ text, keywordToHighlight }) => {
  if (!keywordToHighlight || !text) return text;
  
  // Normalizar la palabra clave y preparar patrones para búsqueda
  const normalizedKeyword = normalizeText(keywordToHighlight);
  
  // Patrones alternativos para diferentes formas de la palabra (singular/plural)
  let patterns = [keywordToHighlight];
  
  // Casos especiales
  if (normalizedKeyword.toLowerCase() === "indigenas" || normalizedKeyword.toLowerCase() === "indigena") {
    patterns = ["indígena", "indígenas", "Indígena", "Indígenas", "indigena", "indigenas"];
  } else if (normalizedKeyword.toLowerCase() === "derechos humanos") {
    patterns = ["derechos humanos", "Derechos Humanos", "derechos humano", "Derechos Humano"];
  } else if (normalizedKeyword.toLowerCase() === "discriminacion") {
    patterns = ["discriminación", "Discriminación", "discriminacion", "Discriminacion"];
  }
  
  // Dividir el texto una vez y luego procesar
  let result = [];
  let lastIndex = 0;
  
  // Crear un RegExp combinado con todos los patrones
  const combinedPattern = patterns.map(p => p.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  const regex = new RegExp(`\\b(${combinedPattern})\\b`, 'gi');
  
  // Encontrar todas las coincidencias
  let match;
  while ((match = regex.exec(text)) !== null) {
    // Añadir el texto anterior a la coincidencia
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }
    
    // Añadir la coincidencia resaltada
    result.push(
      <span key={match.index} className="bg-yellow-200 font-medium">
        {match[0]}
      </span>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Añadir el resto del texto
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }
  
  return result;
};

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [matchedKeywords, setMatchedKeywords] = useState([]);
    const location = useLocation();
    const { language, translate } = useContext(LanguageContext);
    
    const handleSearch = (term = searchTerm) => {
        const results = [];
        const resultKeywords = [];
        
        if (!term.trim()) {
            setFilteredResults([]);
            setMatchedKeywords([]);
            return;
        }
        
        const searchTermLower = normalizeText(term.toLowerCase());
        
        // Recorrer todas las keywords del JSON
        Object.keys(search).forEach(keyword => {
            console.log(`Comparando '${keyword}' con '${term}'`);
            
            // Normalizar la keyword para comparación sin acentos
            const normalizedKeyword = normalizeText(keyword.toLowerCase());
            const keywordMatches = normalizedKeyword.includes(searchTermLower) || 
                                  searchTermLower.includes(normalizedKeyword);
            
            if (keywordMatches) {
                console.log(`Coincidencia encontrada con keyword: ${keyword}`);
                // Si la keyword coincide, agregar todas las listas y registrar la keyword
                search[keyword].forEach(item => {
                    results.push(item);
                    resultKeywords.push(keyword); // Guardar la keyword que coincidió
                });
            }
        });
        
        // Eliminar duplicados preservando la asociación con keywords
        const uniqueResults = [];
        const uniqueKeywords = [];
        const seen = new Set();
        
        results.forEach((item, index) => {
            const itemStr = JSON.stringify(item);
            if (!seen.has(itemStr)) {
                seen.add(itemStr);
                uniqueResults.push(item);
                uniqueKeywords.push(resultKeywords[index]);
            }
        });
        
        console.log("Resultados:", uniqueResults);
        console.log("Keywords coincidentes:", uniqueKeywords);
        
        setFilteredResults(uniqueResults);
        setMatchedKeywords(uniqueKeywords);
    };
    
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const searchQuery = query.get("q");
        if (searchQuery) {
            setSearchTerm(searchQuery);
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
                                        {result[0]}
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
                        <div>
                            <h2 className="text-xl text-primary mb-6 bg-bg1 px-4 py-2 sm:text-left text-center">
                                Resultados
                            </h2>
                            <ul className="space-y-6 bg-bg1 p-4">
                                {filteredResults.length > 0 ? (
                                    filteredResults.map((result, index) => (
                                        <li key={index} className="flex flex-col space-y-4">
                                            {/* Primera fila con información básica */}
                                            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                                <p className="text-primary sm:hidden">
                                                    {result[0]}
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
                                                    <p className="text-primary hidden sm:block">
                                                        {result[0]}
                                                    </p>
                                                    <span className="text-secondary mr-3">
                                                        {result[1]}
                                                    </span>
                                                    <span className="text-primary">
                                                        {(() => {
                                                            if (result[2] && result[3]) {
                                                                return `${result[2]} - ${result[3]}`;
                                                            } else if (result[2]) {
                                                                return result[2];
                                                            } else if (result[3]) {
                                                                return result[3];
                                                            } else {
                                                                return "";
                                                            }
                                                        })()}
                                                    </span>
                                                </div>
                                                <span className="text-secondary">
                                                    {result[5]}
                                                </span>
                                            </div>
                                            
                                            {/* Texto largo con resaltado de la palabra clave correspondiente */}
                                            <div className="mt-2 text-gray-700 bg-gray-50 p-4 rounded">
                                                <p className="whitespace-pre-line text-sm">
                                                    <HighlightKeyword 
                                                        text={result[7]} 
                                                        keywordToHighlight={matchedKeywords[index] || ""} 
                                                    />
                                                </p>
                                            </div>
                                            
                                            {/* Separador entre resultados */}
                                            {index < filteredResults.length - 1 && (
                                                <div className="border-b border-gray-200 my-2"></div>
                                            )}
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-secondary text-center">
                                        {translate("search.noResults")}
                                    </p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SearchPage;