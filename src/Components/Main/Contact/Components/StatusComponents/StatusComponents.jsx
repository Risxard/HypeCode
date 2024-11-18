import { useTranslation } from "react-i18next";
import "./style.css";

function LoadingSVG({ statusText }) {
  return (
    <>
      <svg
        data-testid="loading-svg"
        id="LOADING-SVG"
        width="115px"
        height="115px"
        viewBox="0 0 133 133"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="check-group"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <circle id="filled-circle" fill="#131316" cx="66.5" cy="66.5" r="54.5" />
          <circle id="outline" stroke="#FFFFFF" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
        </g>
      </svg>
      <h1>{statusText}</h1>
    </>
  );
}

function SuccessSVG({ statusText }) {
  return (
    <>
      <svg
        data-testid="success-svg"
        width="115px"
        height="115px"
        viewBox="0 0 133 133"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="done-check-group"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <circle id="filled-circle" fill="#07b481" cx="66.5" cy="66.5" r="54.5" />
          <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5" />
          <circle id="outline" stroke="#07b481" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
          <polyline id="check" stroke="#FFFFFF" strokeWidth="5.5" points="41 70 56 85 92 49" />
        </g>
      </svg>
      <h1>{statusText}</h1>
    </>
  );
}

function ErrorSVG({ statusText }) {
  return (
    <>
      <svg
        data-testid="error-svg"
        width="115px"
        height="115px"
        viewBox="0 0 133 133"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="done-check-group"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <circle id="filled-circle" fill="#ff0000" cx="66.5" cy="66.5" r="54.5" />
          <circle id="white-circle" fill="#ff0000" cx="66.5" cy="66.5" r="55.5" />
          <circle id="outline" stroke="#ff0000" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
          <polyline id="check" stroke="#ff0000" strokeWidth="5.5" points="41 70 56 85 92 49" />
        </g>
      </svg>
      <h1>{statusText}</h1>
    </>
  );
}

function StatusComponent({ status }) {
  const { t } = useTranslation();

  const errorText = t("contact.statusMessages.error");
  const successText = t("contact.statusMessages.success");
  const loadingText = t("contact.statusMessages.isLoading");

  return (
    <div id="LOADING-MODAL">
      <span className="loading-svg-status">
        {status === "isLoading" ? (
          <LoadingSVG statusText={loadingText} />
        ) : status === "success" ? (
          <SuccessSVG statusText={successText} />
        ) : (
          <ErrorSVG statusText={errorText} />
        )}
      </span>
    </div>
  );
}

export default StatusComponent;
