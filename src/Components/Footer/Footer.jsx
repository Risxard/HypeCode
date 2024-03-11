import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import i18next from "i18next";

import { scrollTo } from "../../functions/scrollTo/scrollTo";

import { useTranslation } from "react-i18next";

function Footer() {
  const wppPtUrl =
    "https://api.whatsapp.com/send/?phone=15551234567&text=Tenho+interesse+em+criar+um+projeto+com+a+HypeCode.+Tem+um+horário+disponível?&type=phone_number&app_absent=0";

  const wppEnUrl =
    "https://api.whatsapp.com/send/?phone=15551234567&text=I'm+interested+in+creating+a+project+with+HypeCode.+Do+you+have+any+available+time?&type=phone_number&app_absent=0";


  const { t } = useTranslation();
  const { home, aboutUs, portfolio, contact } = t("navigation");

  const handleScrollTo = (ref) => {
    const idToScroll = document.getElementById(ref);
    if (idToScroll) {
      scrollTo(idToScroll);
    }
  };

  return (
    <footer>
      <div className="footer-social-medias">
        <ul>
          <li onClick={() => handleScrollTo("home")}>
            <p>{home}</p>
          </li>
          <li onClick={() => handleScrollTo("about")}>
            <p>{aboutUs}</p>
          </li>
          <li onClick={() => handleScrollTo("ourServices")}>
            <p>{portfolio}</p>
          </li>
          <li onClick={() => handleScrollTo("contact")}>
            <p>{contact}</p>
          </li>
        </ul>
      </div>

      <div className="footer-social-medias">
        <ul>
          <li>
            <a
              href={`https://www.instagram.com/emersonsv.theone/`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href={`${i18next.language === "pt-BR" ? wppPtUrl : wppEnUrl}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href={`https://github.com/Risxard`} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>

      <p>Copyright © 2024 All right reserved HypeCode </p>
    </footer>
  );
}

export default Footer;
