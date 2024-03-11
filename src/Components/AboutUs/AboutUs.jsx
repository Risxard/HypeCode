import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCode,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import "./AboutUs.css";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  const { firstBadge, secondBadge, thirdBadge } = t("about");

  return (
    <section className="AboutUs" id="about">
      <div>
        <div className="about-us-intro">
          <div className="about-card">
            <div>
              <FontAwesomeIcon icon={faLightbulb} />
              <h3>{firstBadge.title}</h3>
              <p>{firstBadge.text}</p>
            </div>
            <hr className="vertical-dark"></hr>
          </div>
          <div className="about-card">
            <div>
              <FontAwesomeIcon icon={faCode} />
              <h3>{secondBadge.title}</h3>
              <p>{secondBadge.text}</p>
            </div>
            <hr className="vertical-dark"></hr>
          </div>
          <div className="about-card">
            <div>
              <FontAwesomeIcon icon={faUsers} />
              <h3>{thirdBadge.title}</h3>
              <p>{thirdBadge.text}</p>
            </div>
          </div>
        </div>
        <div className="section-title-container">
          <p>
            Nós somos uma software house comprometida em oferecer soluções
            digitais de qualidade. Com uma equipe diversificada e experiente,
            combinamos criatividade e tecnologia para atender às necessidades
            específicas de nossos clientes. Estamos dedicados a transformar suas
            ideias em produtos digitais eficientes e impactantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
