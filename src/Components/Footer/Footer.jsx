import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import i18next from "i18next";



import { useTranslation } from "react-i18next";
import { scrollTo } from "../../utils/scrollTo";

function Footer() {
  const wppPtUrl =
    "https://api.whatsapp.com/send/?phone=5527999769330&text=Tenho+interesse+em+criar+um+projeto+com+a+HypeCode.+Tem+um+horário+disponível?&type=phone_number&app_absent=0";

  const wppEnUrl =
    "https://api.whatsapp.com/send/?phone=5527999769330&text=I'm+interested+in+creating+a+project+with+HypeCode.+Do+you+have+any+available+time?&type=phone_number&app_absent=0";

  const { t } = useTranslation();
  const { home, aboutUs, portfolio, ourServices } = t("navigation");

  return (
    <footer>
      <div className="footer-social-medias">
        <ul className="social-links-list">
          <li onClick={() => scrollTo("Header")} aria-label="Home">
            <p>{home}</p>
          </li>
          <li onClick={() => scrollTo("about")} aria-label="AboutUs">
            <p>{aboutUs}</p>
          </li>
          <li onClick={() => scrollTo("ourServices")} aria-label="OurServices">
            <p>{ourServices}</p>
          </li>
          <li onClick={() => scrollTo("portfolio")} aria-label="Portfolio">
            <p>{portfolio}</p>
          </li>
        </ul>
      </div>

      <div className="footer-social-medias">
        <ul>
          <li>
            <a
              href={`https://www.instagram.com/hypecode.softh/`}
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href={`${i18next.language === "pt-BR" ? wppPtUrl : wppEnUrl}`}
              target="_blank"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a
              href={`https://github.com/HypeCodeSoftwareHouse`}
              target="_blank"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>

      <p>Copyright © 2024 All rights reserved HypeCode </p>
    </footer>
  );
}

export default Footer;
