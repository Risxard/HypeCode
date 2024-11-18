import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import "./style.css";

import brazilFlag from "./imgs/brazil.png";
import usFlag from "./imgs/united-states.png";
import { useState } from "react";

const LanguageSelector = () => {
  const [active, setActive] = useState(false);
  const { i18n, t } = useTranslation();

  const containerRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleToggleMenu = () => {
    setActive((prevActive) => !prevActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  return (
    <div className="switch-language-container" data-testid={"dropdown-lng"} ref={containerRef}>
      <span
        onClick={handleToggleMenu}
        aria-haspopup="listbox"
        aria-expanded={active}
        role="button"
      >
        <img
          src={i18n.language === "en-US" ? usFlag : brazilFlag}
          alt={`selected country is ${i18n.language}`}
        />
      </span>

      {active && (
        <ul data-testid={"dropdown-lng-list"}>
          <li
            onClick={() => {
              changeLanguage("pt-BR");
              handleToggleMenu();
            }}
            data-testid={"dropdown-btn-pt"}
          >
            <p>Português</p>
            <img src={brazilFlag} alt="brazil flag" />
          </li>
          <li
            onClick={() => {
              changeLanguage("en-US");
              handleToggleMenu();
            }}
            data-testid={"dropdown-btn-en"}
          >
            <p>English</p>
            <img src={usFlag} alt="United States flag" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
