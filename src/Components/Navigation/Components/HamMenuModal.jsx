import "./HamMenuModal.css";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

import HCLogo from "../assets/HCLogo";

import usFlag from "../../LanguageSelector/imgs/united-states.png";
import brazilianFlag from "../../LanguageSelector/imgs/brazil.png";
import { scrollTo } from "../../../utils/scrollTo";

function HamMenuModal({ handleCb }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleCallBack = () => {
    handleCb();
  };

  const handleScrollTo = (ref) => {
    if (ref) {
      handleCallBack();
      scrollTo(ref);
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
    <div className={`ham-menu-modal`} role="dialog">
      <div>
        <span className="logo">
          <HCLogo />
        </span>

        <div role="button" aria-label="close" className="close-ham-menu" onClick={() => handleCallBack()}>
          <X />
        </div>
      </div>

      <ul>
        <li onClick={() => handleScrollTo("Header")}>{t("navigation.home")}</li>
        <li onClick={() => handleScrollTo("about")}>
          {t("navigation.aboutUs")}
        </li>
        <li onClick={() => handleScrollTo("ourServices")}>
          {t("navigation.ourServices")}
        </li>
        <li onClick={() => handleScrollTo("portfolio")}>
          {t("navigation.portfolio")}
        </li>
        <li onClick={() => handleScrollTo("contact")}>
          {t("navigation.contact")}
        </li>

        <li className="switch-language-container">
          <div
            role="button"
            aria-label="switch-language"
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
              ? 'Português'
              : 'English'}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default HamMenuModal;
