import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../Locales/En/translation.json";
import translationRU from "../Locales/Ru/translation.json";
import translationARM from "../Locales/Arm/translation.json";

const savedLanguage = localStorage.getItem("i18nLanguage") || "en";

const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
	arm: {
		translation: translationARM,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: savedLanguage,
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
