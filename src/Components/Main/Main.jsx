import { useEffect, useRef, useState } from "react";

import "./Main.css";
import Contact from "./Contact/Contact";

import Portfolio from "./Portfolio/Portfolio";
import AboutUs from "./AboutUs/AboutUs";

import OurServices from "./OurServices/OurServices";
import IntroBadges from "./IntroBadges/IntroBadges";

function Main() {
  const mainRef = useRef();

  return (
    <main ref={mainRef} id="main">
      <IntroBadges />
      <AboutUs />
      <OurServices />
      <Portfolio/>
      <Contact />
    </main>
  );
}

export default Main;
