import "./Navigation.css";

import HCLogo from "../Svgs/HCLogo";

import { AlignJustify } from "lucide-react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Navigation() {
  return (
    <nav>
      <span className="logo">
        <HCLogo />
      </span>

      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Our Services</li>
        <li>Contact</li>
        <li>
          <LanguageSelector />
        </li>
      </ul>

      <AlignJustify />
    </nav>
  );
}

export default Navigation;
