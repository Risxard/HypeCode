import "./Portfolio.css";
import React from "react";

import mockup1 from "./mockups/mockup1.jpg";
import mockup2 from "./mockups/mockup2.jpg";

import { Link } from "react-router-dom";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

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
      "https://freemockupzone.com/wp-content/uploads/2022/08/Free-Laptop-Placing-on-Sofa-Website-Mockup.jpg",
    card_url: "https://www.hypercode.com.br/card1",
  },
  {
    id: "2",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC08zW5n6wJpjZ0yBMT7ghhPBa74BUHZOmpw&usqp=CAU",
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
      "https://zippypixels.com/wp-content/uploads/2015/11/perspecitve-website-mockup-3-slides-top-view.jpg",
    card_url: "https://www.hypercode.com.br/card4",
  },
  {
    id: "5",
    img_url:
      "https://www.mockupworld.co/wp-content/uploads/2017/05/free-showcasing-header-mockup.jpg",
    card_url: "https://www.hypercode.com.br/card5",
  },
  {
    id: "6",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyubWoqBK9C4-mG73ZCi9fZLUaDhxs8P9L2noJvseROq9QxizikwpJZhdRRU7NSYlzxhg&usqp=CAU",
    card_url: "https://www.hypercode.com.br/card6",
  },
  {
    id: "7",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyoxnlUSxuYq6TtqYQ2blpYqksHy0Y7eVvmIV5RLDF3MaGuZyCmhXb-rAmO7_EWYYGXXg&usqp=CAU",
    card_url: "https://www.hypercode.com.br/card7",
  },
  {
    id: "8",
    img_url:
      "https://i0.wp.com/365webresources.com/wp-content/uploads/2018/05/Clean-Website-Showcase-Mockup.png?fit=880%2C503&ssl=1",
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
  const [selectedDot, setSelectedDot] = useState(0);

  return (
    <div className="portfolio-container" id="ourServices">
      <div className="title-portfolio">
        <h2>Check out our latest works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quaerat.
        </p>
      </div>

      <div className="projects-container">
        <div className="latest-projects">
          <ul>
            {latestCards.map((card, index) => {
              return (
                <li key={index}>
                  <Link to={"https://www.hypecode/"} target="blank">
                    <div className="portfolio-card-image-container">
                      <img src={card.img_url} alt="CARD IMAGE" loading="lazy"/>
                      <div className="card-body">
                        <span>
                          <p>Go to link</p>
                          <ExternalLink />
                        </span>
                      </div>
                    </div>
                    <div className="portoflio-card-title-container">
                      <h2>{card.title}</h2>
                      <p>{card.resume}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="slider-container-portoflio">
          <div className="carousel-cards">
            {cards.map(
              (card, index) =>
                index % 4 === 0 && (
                  <ul
                    key={index / 4}
                    className={`card-page${
                      index / 4 === selectedDot ? " active" : ""
                    }`}
                  >
                    {cards.slice(index, index + 4).map((card, i) => (
                      <CardComponent
                        key={i}
                        img_url={card.img_url}
                        card_url={card.card_url}
                      />
                    ))}
                  </ul>
                )
            )}
          </div>

          <div className="carousel-control-container">
            {Array(Math.ceil(cards.length / 4))
              .fill()
              .map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    className="input"
                    name="option"
                    id={`option${index + 1}`}
                    onClick={() => setSelectedDot(index)}
                    defaultChecked={selectedDot}
                  />
                  <label
                    htmlFor={`option${index + 1}`}
                    className={`${selectedDot === index ? "active" : ""}`}
                  ></label>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
