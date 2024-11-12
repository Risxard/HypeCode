import { useEffect, useRef, useState } from "react";

import "./Main.css";
import Contact from "./Contact/Contact";

import Portfolio from "./Portfolio/Portfolio";
import AboutUs from "./AboutUs/AboutUs";

import OurServices from "./OurServices/OurServices";
import IntroBadges from "./IntroBadges/IntroBadges";

import { getAllProjects } from "../../lib/dato-cms";

function Main() {
  const [cmsData, setCmsData] = useState(null);
  const mainRef = useRef();
  const getStaticProps = async () => {
    const data = await getAllProjects();

    if (data) {
      setCmsData(data);
    }
  };

  useEffect(() => {
    getStaticProps();
  }, []);

  const projects = cmsData ? cmsData.allProjectArticles : [];

  return (
    <main ref={mainRef} id="main">
      <IntroBadges />
      <AboutUs />
      <OurServices />
      <Portfolio projects={projects} />
      <Contact />
    </main>
  );
}

export default Main;
