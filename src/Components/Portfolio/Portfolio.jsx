import "./Portfolio.css";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";


const latestCards = [
  {
    id: "1",
    img_url:
      "https://mockups-design.com/wp-content/uploads/2022/11/Street_Citylight_Mockup.jpg",
    title: "Weather Break",
    resume: "Lorem, ipsum dolor sit.",
  },
  {
    id: "2",
    img_url:
      "https://img.freepik.com/premium-psd/modern-design-office-front-desk-wall-mockup_197944-149.jpg",
    title: "Grand Hotel O'Connor",
    resume: "Lorem, ipsum dolor sit amet consectetur?",
  },
];

const cards = [
  {
    id: "1",
    img_url:
      "https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg",
    card_url: "https://www.hypercode.com.br/card1",
  },
  {
    id: "2",
    img_url:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d9da7186671043.5da0631cea32e.png",
    card_url: "https://www.hypercode.com.br/card2",
  },
  {
    id: "3",
    img_url:
      "https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-208.jpg",
    card_url: "https://www.hypercode.com.br/card3",
  },
  {
    id: "4",
    img_url:
      "https://img.freepik.com/premium-psd/website-instant-showcase-mockup-isolated_359791-328.jpg",
    card_url: "https://www.hypercode.com.br/card4",
  },
  {
    id: "5",
    img_url:
      "https://i.pinimg.com/1200x/8f/67/6f/8f676f986d1d9e4e1fbd5699d56c3199.jpg",
    card_url: "https://www.hypercode.com.br/card5",
  },
  {
    id: "6",
    img_url:
      "https://miro.medium.com/v2/resize:fit:1400/0*HZZrSYhmFsITWBC8.jpg",
    card_url: "https://www.hypercode.com.br/card6",
  },
  {
    id: "7",
    img_url:
      "https://freebiesmockup.com/wp-content/uploads/2022/11/Free-Multi-Device-Website-Mockup-2.jpg",
    card_url: "https://www.hypercode.com.br/card7",
  },
  {
    id: "8",
    img_url:
      "https://img.freepik.com/free-psd/website-template-laptop-screen_53876-57297.jpg",
    card_url: "https://www.hypercode.com.br/card8",
  },
  {
    id: "5",
    img_url:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d9da7186671043.5da0631cea32e.png",
    card_url: "https://www.hypercode.com.br/card5",
  },
  {
    id: "6",
    img_url:
      "https://uizard.io/blog/content/images/2023/07/1.-business-web-mobile-cover.png",
    card_url: "https://www.hypercode.com.br/card6",
  },
  {
    id: "7",
    img_url:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/57118352733587.591af4ae74b9c.jpg",
    card_url: "https://www.hypercode.com.br/card7",
  },
  {
    id: "8",
    img_url:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e11adc55513591.598816e34c497.jpg",
    card_url: "https://www.hypercode.com.br/card8",
  },
];

function CardComponent({ img_url, card_url }) {
  return (
    <li className="card">
      <Link to={card_url} target="_blank" rel="noopener noreferrer">
        <img src={img_url} alt="Card" loading="lazy"/>
        <div className="card-body">
          <span>
            <p>Go to link</p>
            <ExternalLink />
          </span>
        </div>
      </Link>
    </li>
  );
}

const Portfolio = () => {

  return (
    <div className="portfolio-container" id="ourServices">

    </div>
  );
};

export default Portfolio;
