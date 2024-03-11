import { useEffect, useRef,useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { scrollTo } from "../../functions/scrollTo/scrollTo";

import DoubleArrowDown from "../../Components/Svgs/DoubleArrowDown/DoubleArrowDown";
import AboutUs from "../../Components/AboutUs/AboutUs";
import BroCode from "../../Components/Svgs/BroCode";
import Portfolio from "../../Components/Portfolio/Portfolio";

import "./home.css";
import Contact from "../../Components/Contact/Contact";
import OurServices from "../../Components/OurServices/OurServices";

function Home() {
  const [showButton, setShowButton] = useState(true);

  const mainRef = useRef();
  const { t } = useTranslation();
  const { heroH4, heroH1, heroP, heroBtn1 } = t("header");

  const handleScrollTo = (ref) => {
    const idToScroll = document.getElementById(ref)
    if (idToScroll) {
      scrollTo(idToScroll);
    }
  };

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

  return (
    <div className="home" id="home">
      <header className="header-main">
        <span className="background-tags" />
        <div className="info-header-container">
          <div>
            <p>
              <Trans i18nKey={heroH4} components={{ 1: <strong /> }} />
            </p>
            <h1>
              <Trans i18nKey={heroH1} components={{ 2: <br /> }} />
            </h1>
          </div>
          <p>{heroP}</p>

          <button className="btn" role="button" onClick={() => handleScrollTo("contact")}>
            {heroBtn1}
          </button>
        </div>

        <div className="bro-code-container">
          <BroCode />
        </div>

        {showButton && (
          <div className="btn-down-container">
            <span
              className="btn-to-down"
              onClick={() => handleScrollTo("about")}
            >
              <DoubleArrowDown />
            </span>
          </div>
        )}
      </header>

      <main ref={mainRef}>
        <AboutUs />
        <OurServices/>
        <Portfolio />
        <Contact/>
      </main>
    </div>
  );
}

export default Home;
