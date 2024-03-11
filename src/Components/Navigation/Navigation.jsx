import "./Navigation.css";
import { useTranslation } from "react-i18next";
import HCLogo from "../Svgs/HCLogo";

import { AlignJustify } from "lucide-react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import HamMenuModal from "../Modal/HamMenuModal/HamMenuModal";
import { useState } from "react";

import { scrollTo } from "../../functions/scrollTo/scrollTo";

function Navigation() {
  const [modal, setModal] = useState(false);

  const { t } = useTranslation();
  const { home, aboutUs, portfolio, contact, ourServices, languageSelector } =
    t("navigation");

  const handleToggleMenu = () => {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const handleScrollTo = (ref) => {
    const idToScroll = document.getElementById(ref);
    if (idToScroll) {
      scrollTo(idToScroll);
    }
  };

  return (
    <nav className={`${modal ? "active" : ""}`}>
      <span className="logo">
        <HCLogo />
      </span>

      <ul>
        <li>{home}</li>
        <li onClick={() => handleScrollTo("about")}>{aboutUs}</li>
        <li onClick={() => handleScrollTo("about")}>{ourServices}</li>
        <li onClick={() => handleScrollTo("portfolio")}>{portfolio}</li>
        <li onClick={() => handleScrollTo("contact")}>{contact}</li>
        <li>
          <LanguageSelector languageSelector={languageSelector} />
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
