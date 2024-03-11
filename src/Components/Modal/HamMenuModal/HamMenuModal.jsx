import "./HamMenuModal.css";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

import HCLogo from "../../Svgs/HCLogo";

import { scrollTo } from "../../../functions/scrollTo/scrollTo";

import usFlag from "../../LanguageSelector/imgs/united-states.png";
import brazilianFlag from "../../LanguageSelector/imgs/brazil.png";

function HamMenuModal({ handleCb }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { home, aboutUs, portfolio, contact, ourServices, languageSelector } =
    t("navigation");

  const handleCallBack = () => {
    handleCb();
  };

  const handleScrollTo = (ref) => {
    const idToScroll = document.getElementById(ref);
    if (idToScroll) {
      handleCallBack();
      scrollTo(idToScroll);
    }
  };

  const changeLanguage = () => {
    if (i18n.language === "pt-BR") {
      i18n.changeLanguage("en-US");
    } else {
      i18n.changeLanguage("pt-BR");
    }
  };

  return (
    <div className={`ham-menu-modal`}>
      <div>
        <span className="logo">
          <HCLogo />
        </span>

        <div className="close-ham-menu" onClick={() => handleCallBack()}>
          <X />
        </div>
      </div>

      <ul>
        <li onClick={() => handleScrollTo("home")}>{home}</li>
        <li onClick={() => handleScrollTo("about")}>{aboutUs}</li>
        <li onClick={() => handleScrollTo("ourServices")}>{ourServices}</li>
        <li onClick={() => handleScrollTo("portfolio")}>{portfolio}</li>
        <li onClick={() => handleScrollTo("contact")}>{contact}</li>

        <li className="switch-language-container">
          <div
            className={`switch-language ${i18n.language}`}
            onClick={() => changeLanguage()}
          >
            <span>
              {i18n.language === "pt-BR" ? (
                <img src={brazilianFlag} alt="brazilian flag" />
              ) : (
                <img src={usFlag} alt="united states flag" />
              )}
            </span>
          </div>
          <p>
            {i18n.language === "pt-BR"
              ? languageSelector.pt
              : languageSelector.en}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default HamMenuModal;
