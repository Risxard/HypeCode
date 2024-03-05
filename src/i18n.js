import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import translationEN from './locales/en/translation.json'
import translationPT from './locales/pt/translation.json'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLgn: "pt-BR",
    returnObjects: true,
    resources: {
        pt: {
            translation: translationPT,
        },
        en: {
            translation: translationEN,
        }
    }
})