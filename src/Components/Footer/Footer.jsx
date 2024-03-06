import "./Footer.css";
import { Linkedin, Instagram, Github } from "lucide-react";
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content on-dark">
          <h4>SOCIAL MEDIAS</h4>
          <ul className="footer-links">
            <li>
              <a href="">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="">
                <Github />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-badges"></div>
      </div>
    </footer>
  );
}

export default Footer;
