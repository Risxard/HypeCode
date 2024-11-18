import "./Navigation.css";
import { useTranslation } from "react-i18next";
import HCLogo from "./assets/HCLogo";

import { AlignJustify } from "lucide-react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import HamMenuModal from "./Components/HamMenuModal";
import { useState } from "react";
import { scrollTo } from "../../utils/scrollTo";



function Navigation() {
  const [modal, setModal] = useState(false);

  const { t } = useTranslation();
  const { home, aboutUs, portfolio, contact, ourServices } = t("navigation");

  const handleToggleMenu = () => {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <nav className={`${modal ? "active" : ""} max-w`}>
      <span className="logo" data-testid={"hc-nav-logo"}>
        <HCLogo />
      </span>

      <ul>
        <li onClick={() => scrollTo("Header")} aria-label="Home">
          {t("navigation.home")}
        </li>
        <li onClick={() => scrollTo("about")} aria-label="About Us">
          {t("navigation.aboutUs")}
        </li>
        <li onClick={() => scrollTo("ourServices")} aria-label="Our Services">
          {t("navigation.ourServices")}
        </li>
        <li onClick={() => scrollTo("portfolio")} aria-label="Portfolio">
          {t("navigation.portfolio")}
        </li>
        <li onClick={() => scrollTo("contact")} aria-label="Contact">
          {t("navigation.contact")}
        </li>
        <li aria-label="Language Selector">
          <LanguageSelector />
        </li>
      </ul>

      <span
        className={`ham-menu ${modal ? "active" : ""}`}
        onClick={() => handleToggleMenu()}
        data-testid={"ham-menu"}
      >
        <AlignJustify />
      </span>

      {modal ? <HamMenuModal handleCb={handleToggleMenu} /> : ""}
    </nav>
  );
}

export default Navigation;
