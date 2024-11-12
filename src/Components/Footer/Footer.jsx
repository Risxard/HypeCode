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
    "https://api.whatsapp.com/send/?phone=5527999769330&text=Tenho+interesse+em+criar+um+projeto+com+a+HypeCode.+Tem+um+horário+disponível?&type=phone_number&app_absent=0";

  const wppEnUrl =
    "https://api.whatsapp.com/send/?phone=5527999769330&text=I'm+interested+in+creating+a+project+with+HypeCode.+Do+you+have+any+available+time?&type=phone_number&app_absent=0";

  const { t } = useTranslation();
  const { home, aboutUs, portfolio, ourServices } = t("navigation");

  return (
    <footer>
      <div className="footer-social-medias">
        <ul>
          <li onClick={() => scrollTo("Header")}>
            <p>{home}</p>
          </li>
          <li onClick={() => scrollTo("about")}>
            <p>{aboutUs}</p>
          </li>
          <li onClick={() => scrollTo("ourServices")}>
            <p>{ourServices}</p>
          </li>

          <li onClick={() => scrollTo("portfolio")}>
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
            <a
              href={`https://github.com/HypeCodeSoftwareHouse`}
              target="_blank"
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
