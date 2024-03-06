import { useTranslation } from "react-i18next";
import { useEffect } from "react"; // Import useEffect hook
import "./style.css";

import brazilFlag from "./imgs/brazil.png";
import usFlag from "./imgs/united-states.png";

const LanguageSelector = ({ languageSelector }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleToggleMenu = () => {
    const container = document.querySelector(".switch-language-container");
    container.classList.toggle("active");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const container = document.querySelector(".switch-language-container");
      if (container && !container.contains(event.target)) {
        container.classList.remove("active");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="switch-language-container">
      <img
        src={i18n.language === "en-US" ? usFlag : brazilFlag}
        alt={`selected country is ${i18n.language}`}
        onClick={handleToggleMenu}
      />
      <ul>
        <li
          onClick={() => {
            changeLanguage("pt-BR");
            handleToggleMenu();
          }}
        >
          <p>{languageSelector.pt}</p>
          <img src={brazilFlag} alt="brazil flag" />
        </li>
        <li
          onClick={() => {
            changeLanguage("en-US");
            handleToggleMenu();
          }}
        >
          <p>{languageSelector.en}</p>
          <img src={usFlag} alt="United States flag" />
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
