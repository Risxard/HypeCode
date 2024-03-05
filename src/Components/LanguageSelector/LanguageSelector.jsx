
import { useTranslation } from "react-i18next";
import "./style.css";


import brazilFlag from './imgs/brazil.png'
import usFlag from './imgs/united-states.png'

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="switch-language-container">
      {i18n.language == "en-US" ? (
        <img
          src={usFlag}
          alt="United States flag"
          onClick={() => changeLanguage("en-US")}
        />
      ) : (
        <img
          src={brazilFlag}
          alt="brazil flag"
          onClick={() => changeLanguage("pt-BR")}
        />
      )}
    </div>
  );
};

export default LanguageSelector;
