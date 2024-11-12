import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import FormComponent from "./Components/FormComponent/FormComponent";

function Contact() {
  const { t } = useTranslation();
  const { contactIntro } = t("contact");

  const wppPtUrl =
    "https://api.whatsapp.com/send/?phone=5527999769330&text=Tenho+interesse+em+criar+um+projeto+com+a+HypeCode.+Tem+um+horário+disponível?&type=phone_number&app_absent=0";

  const wppEnUrl =
    "https://api.whatsapp.com/send/?phone=5527999769330&text=I'm+interested+in+creating+a+project+with+HypeCode.+Do+you+have+any+available+time?&type=phone_number&app_absent=0";

  return (
    <section className="contact max-w section-padding" id="contact">
      <div className="info--get-in-touch">
        <div className="get-in-toutch-text">
          <h2>{contactIntro.title}</h2>
          <p>{contactIntro.text}</p>
        </div>

        <div className="adress-container">
          <p>
            {contactIntro.cityName}
            <br />
            {contactIntro.LocationName}
          </p>
        </div>

        <div className="get-in-touch-contact">
          <span>
            <FontAwesomeIcon icon={faPhoneFlip} target="_blank" />
            <a href="tel: +5527 99976-9330">
              <p>(+55 ) 27 99976-9330</p>
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faWhatsapp} />
            <a
              href={`${i18next.language === "pt-BR" ? wppPtUrl : wppEnUrl}`}
              target="_blank"
            >
              <p>(+55 ) 27 99976-9330</p>
            </a>
          </span>

          <span>
            <FontAwesomeIcon icon={faEnvelope} target="_blank" />
            <a href="mailto: contato@hypecode.com.br">
              contato@hypecode.com.br
            </a>
          </span>
        </div>
      </div>

      <FormComponent />
    </section>
  );
}

export default Contact;
