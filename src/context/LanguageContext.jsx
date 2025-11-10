import React, { createContext, useState, useEffect } from 'react';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const getInitialLang = () => {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.startsWith && browserLang.startsWith('fr')) {
            return 'fr';
        }
        return 'en';
    };

    const [lang, setLang] = useState(getInitialLang());
    const [translations, setTranslations] = useState(lang === 'en' ? en : fr);

    useEffect(() => {
        if (lang === 'en') {
            setTranslations(en);
        } else {
            setTranslations(fr);
        }
    }, [lang]);

    const t = (key) => {
        return key.split('.').reduce((obj, k) => {
            return obj?.[k];
        }, translations) || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};


