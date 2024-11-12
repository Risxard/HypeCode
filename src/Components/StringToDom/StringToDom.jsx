import React from "react";

function StringToDOM({ stringToDom, textTag }) {
  let text;

  switch (textTag) {
    case "p":
      text = <p dangerouslySetInnerHTML={{ __html: stringToDom }} />;
      break;
    case "h1":
      text = <h1 dangerouslySetInnerHTML={{ __html: stringToDom }} />;

      break;
    case "h2":
      text = <h2 dangerouslySetInnerHTML={{ __html: stringToDom }} />;

      break;
    case "h3":
      text = <h3 dangerouslySetInnerHTML={{ __html: stringToDom }} />;

      break;
    case "h4":
      text = <h4 dangerouslySetInnerHTML={{ __html: stringToDom }} />;

      break;
    case "h5":
      text = <h5 dangerouslySetInnerHTML={{ __html: stringToDom }} />;

      break;
    case "h6":
      text = <h6 dangerouslySetInnerHTML={{ __html: stringToDom }} />;

      break;

    default:
      <div dangerouslySetInnerHTML={{ __html: stringToDom }} />;
  }

  return text;
}

export default StringToDOM;
