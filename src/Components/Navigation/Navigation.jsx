import "./Navigation.css";
import { useTranslation } from "react-i18next";
import HCLogo from "../VectorComponents/HCLogo";

import { AlignJustify } from "lucide-react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import HamMenuModal from "../Modal/HamMenuModal/HamMenuModal";
import { useState } from "react";

import { scrollTo } from "../../functions/scrollTo/scrollTo";

function Navigation() {
  const [modal, setModal] = useState(false);

  const { t } = useTranslation();
  const { aboutUs, portfolio, contact, ourServices, languageSelector } =
    t("navigation");

  const handleToggleMenu = () => {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  };


  return (
    <nav className={`${modal ? "active" : ""} max-w`}>
      <span className="logo">
        <HCLogo />
      </span>

      <ul>
        <li onClick={() => scrollTo("about")}>{aboutUs}</li>
        <li onClick={() => scrollTo("ourServices")}>{ourServices}</li>
        <li onClick={() => scrollTo("portfolio")}>{portfolio}</li>
        <li onClick={() => scrollTo("contact")}>{contact}</li>
        <li>
          {/* <LanguageSelector languageSelector={languageSelector} /> */}
        </li>
      </ul>

      <span
        className={`ham-menu ${modal ? "active" : ""}`}
        onClick={() => handleToggleMenu()}
      >
        <AlignJustify />
      </span>

      {modal ? <HamMenuModal handleCb={handleToggleMenu} /> : ""}
    </nav>
  );
}

export default Navigation;
