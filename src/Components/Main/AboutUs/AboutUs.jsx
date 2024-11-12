import "./AboutUs.css";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  const { title, text } = t("aboutUs");

  return (
    <section className="AboutUs" id="about">
      <div className="section-padding">
        <div className="max-w">
          <div className="section-title-container">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
