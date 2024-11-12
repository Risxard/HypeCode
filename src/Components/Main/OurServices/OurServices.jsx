import "./OurServices.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLaptopCode,
  faCode,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const OurServices = () => {

  const { t } = useTranslation();
  const { title, card1, card2, card3 } = t("ourServices");

  return (
    <section className="our-services section-padding" id="ourServices">
      <div className="section-title-container">
        <h2>{title}</h2>

      </div>
      <div className="row max-w">
        <div className="service-card">
          <div>
            <FontAwesomeIcon icon={faLaptopCode} />
            <h2>
              {card1.title1} <br />
              <strong>{card1.title2}</strong>
            </h2>
            <p>{card1.text}</p>
          </div>
        </div>

        <div className="service-card">
          <div>
            <FontAwesomeIcon icon={faCode} />
            <h2>
              {card2.title1} <br />
              <strong>{card2.title2}</strong>
            </h2>
            <p>{card2.text}</p>
          </div>
        </div>

        <div className="service-card">
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <h2>
              {card3.title1} <br />
              <strong>{card3.title2}</strong>
            </h2>
            <p>{card3.text}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;