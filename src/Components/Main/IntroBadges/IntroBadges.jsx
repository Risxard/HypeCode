import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCode, faUsers } from "@fortawesome/free-solid-svg-icons";

import "./IntroBadges.css";
import { useTranslation } from "react-i18next";

const IntroBadges = () => {
  const { t } = useTranslation();
  const { firstBadge, secondBadge, thirdBadge } = t("introBadges");

  return (
    <div className="IntroBadges max-w">
      <div className="intro-badge-item">
        <div>
          <FontAwesomeIcon icon={faLightbulb} />
          <h3>{firstBadge.title}</h3>
          <p>{firstBadge.text}</p>
        </div>
        <hr className="vertical-dark" />
      </div>
      <div className="intro-badge-item">
        <div>
          <FontAwesomeIcon icon={faCode} />
          <h3>{secondBadge.title}</h3>
          <p>{secondBadge.text}</p>
        </div>
        <hr className="vertical-dark" />
      </div>
      <div className="intro-badge-item">
        <div>
          <FontAwesomeIcon icon={faUsers} />
          <h3>{thirdBadge.title}</h3>
          <p>{thirdBadge.text}</p>
        </div>
        <hr className="vertical-dark" />
      </div>
    </div>
  );
};

export default IntroBadges;
