import "./home.css";

import broCodes from "../../assets/imgs/pngs/broCodes.png";
import DoubleArrowDown from "../../Components/Svgs/DoubleArrowDown/DoubleArrowDown";
import { Trans, useTranslation } from "react-i18next";
import AboutUs from "../../Components/AboutUs/AboutUs";
import { useRef } from "react";

import { scrollTo } from "../../functions/scrollTo/scrollTo";

import BroCode from '../../Components/Svgs/BroCode'

function Home() {
  const { t } = useTranslation();

  const { heroH4, heroH1, heroP, heroBtn1, heroBtn2 } = t("header");

  const mainRef = useRef();

  const handleScrollTo = (ref) => {
    console.log('hello!')
    if (ref.current) {
      scrollTo(ref.current);
    }
  };

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
          <article>
            <p>{heroP}</p>
          </article>

          <button className="btn" data-one={heroBtn1} data-two={heroBtn2}></button>
        </div>

        <div className="bro-code-container">
          <BroCode/>
        </div>

        <div className="btn-down-container">
          <span className="btn-to-down" onClick={() => handleScrollTo(mainRef)}>
            <DoubleArrowDown />
          </span>
        </div>
      </header>

      <main id="about" ref={mainRef}>
        <AboutUs />
      </main>
    </div>
  );
}

export default Home;
