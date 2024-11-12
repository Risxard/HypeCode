import i18next from "i18next";
import StringToDOM from "../../Components/StringToDom/StringToDom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllProjects } from "../../lib/dato-cms";
import DoubleArrowDown from "../VectorComponents/DoubleArrowDown/DoubleArrowDown";
import BroCode from "../VectorComponents/BroCode";

import "./Header.css";
import { scrollTo } from "../../functions/scrollTo/scrollTo";

const Header = () => {
  const [showButton, setShowButton] = useState(true);
  const [cmsData, setCmsData] = useState(null);

  const { t } = useTranslation();
  const { heroBtn1 } = t("header");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getStaticProps = async () => {
    const data = await getAllProjects();

    if (data) {
      setCmsData(data);
    }
  };

  useEffect(() => {
    getStaticProps();
  }, []);

  const headerTexts = cmsData ? cmsData.allHeaderTexts[0] : [];

  return (
    <header className="header-main max-w section-padding" id="Header">
      <span className="background-tags" />
      <div className="info-header-container">
        <div>
          <>
            <StringToDOM
              textTag={"p"}
              stringToDom={
                i18next.language === "pt-BR"
                  ? headerTexts.headerSubtitlePt
                  : headerTexts.headerSubtitleEn
              }
            />
          </>
          <StringToDOM
            textTag={"h1"}
            stringToDom={
              i18next.language === "pt-BR"
                ? headerTexts.headerTitlePt
                : headerTexts.headerTitleEn
            }
          />
        </div>
        <StringToDOM
          textTag={"p"}
          stringToDom={
            i18next.language === "pt-BR"
              ? headerTexts.headerDescriptionPt
              : headerTexts.headerDescriptionEn
          }
        />

        <button
          className="btn"
          role="button"
          onClick={() => scrollTo("contact")}
        >
          {heroBtn1}
        </button>
      </div>

      <div className="bro-code-container">
        <BroCode />
      </div>

      <div className="btn-down-container">
        <button
          className={`btn-to-down ${!showButton && 'active'}`}
          onClick={() => scrollTo("main")}
        >
          <DoubleArrowDown />
        </button>
      </div>
    </header>
  );
};
export default Header;
