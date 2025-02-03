import React, { createContext, useState } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

const translations = { es, en, fr };

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es"); // Idioma predeterminado: español

    const translate = (key) => {
        const keys = key.split(".");
        let value = translations[language];
        for (const k of keys) {
            value = value[k];
        }
        return value || key; // Si no encuentra la traducción, devuelve la clave
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
};