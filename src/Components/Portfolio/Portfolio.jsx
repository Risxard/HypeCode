import "./Portfolio.css";
import React, { useEffect, useState, useRef } from "react";

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
      "https://unblast.com/wp-content/uploads/2019/09/Hotel-Building-Logo-Mockup.jpg",
    title: "Grand Hotel O'Connor",
    resume: "Lorem, ipsum dolor sit amet consectetur?",
  },
];

const cards = [
  {
    id: "1",
    img_url:
      "https://cdn.dribbble.com/users/2130422/screenshots/6465086/workwithus_dribbble_4x.png",
    card_url: "https://www.hypercode.com.br/card1",
    card_type: "des"
  },
  {
    id: "2",
    img_url:
      "https://img.freepik.com/premium-psd/website-instant-showcase-mockup-isolated_359791-363.jpg",
    card_url: "https://www.hypercode.com.br/card2",
    card_type: "dev"
  },
  {
    id: "3",
    img_url:
      "https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-208.jpg",
    card_url: "https://www.hypercode.com.br/card3",
    card_type: "dev"
  },
  {
    id: "cardsNumber",
    img_url:
      "https://visme.co/blog/wp-content/uploads/2022/10/How-to-Create-a-Website-Mockup-Thumbnail.jpg",
    card_url: "https://www.hypercode.com.br/cardcardsNumber",
    card_type: "dev"
  },
  {
    id: "5",
    img_url:
      "https://img.freepik.com/free-psd/logo-mockup-circular-hang-sign_145275-194.jpg",
    card_url: "https://www.hypercode.com.br/card5",
    card_type: "des"
  },
  {
    id: "6",
    img_url:
      "https://mockups-design.com/wp-content/uploads/2022/11/Square_Sign_Mockup.jpg",
    card_url: "https://www.hypercode.com.br/card6",
  },
  {
    id: "7",
    img_url:
      "https://criativo.design/wp-content/uploads/2022/03/free-outdoor-street-poster-mockup-1.jpg",
    card_url: "https://www.hypercode.com.br/card7",
    card_type: "des"
  },
  {
    id: "8",
    img_url:
      "https://i0.wp.com/365webresources.com/wp-content/uploads/2018/05/Clean-Website-Showcase-Mockup.png?fit=880%2C503&ssl=1",
    card_url: "https://www.hypercode.com.br/card8",
    card_type: "dev"
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
      "https://www.pixpine.com/wp-content/uploads/2022/02/free-Urban-Vertical-Poster-Mockup-1.jpg",
    card_url: "https://www.hypercode.com.br/card6",
    card_type: "dev"
  },
  {
    id: "7",
    img_url:
      "https://i0.wp.com/graphicforfree.com/wp-content/uploads/2023/06/Wall-Poster-Mockup.jpg",
    card_url: "https://www.hypercode.com.br/card7",
    card_type: "des"
  },
];

function CardComponent({ img_url, card_url }) {
  return (
    <li className="card">
      <Link to={card_url} target="_blank" rel="noopener noreferrer">
        <img src={img_url} alt="Card" loading="lazy" />
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
  const [cardsNumber, setCardsNumber] = useState(3);
  const [filter, setSelectedFilter] = useState(1);
  const [filteredCards, setFilteredCards] = useState(cards);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setCardsNumber(2);
      }
      if (window.innerWidth > 700 && window.innerWidth < 1400) {
        setCardsNumber(3);
      }
      if (window.innerWidth > 1400) {
        setCardsNumber(4);
      }
      if (window.innerWidth < 480) {
        setCardsNumber(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (cardsRef.current) {
        const scrollPosition = cardsRef.current.scrollLeft;
        const cardWidth = cardsRef.current.firstChild.offsetWidth;
        const selectedIndex = Math.round(scrollPosition / cardWidth);
        setSelectedDot(selectedIndex);
      }
    };

    if (cardsRef.current) {
      cardsRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  
  const handleRadioClick = (index) => {
    setSelectedDot(index);
    if (cardsRef.current) {
      const cardWidth = cardsRef.current.firstChild.offsetWidth;
      const scrollAmount = index * cardWidth;
      cardsRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    const handleFilter = () => {
      if (filter === 1) {
        setFilteredCards(cards);
      } else if (filter === 2) {
        const filtered = cards.filter((card) => card.card_type === "des");
        setFilteredCards(filtered);
      } else if (filter === 3) {
        const filtered = cards.filter((card) => card.card_type === "dev");
        setFilteredCards(filtered);
      }
    };
  
    handleFilter();
  }, [filter]);







  return (
    <section className="portfolio-container" id="portfolio">
      <div className="section-title-container">
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
                      <img src={card.img_url} alt="CARD IMAGE" loading="lazy" />
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

        <div className="filter-carousel">
          <span onClick={(() => setSelectedFilter(1))} className={filter === 1 ? "active" : ""}>All</span>
          <span onClick={(() => setSelectedFilter(2))} className={filter === 2 ? "active" : ""} >Design</span>
          <span onClick={(() => setSelectedFilter(3))} className={filter === 3 ? "active" : ""}>Development</span>
        </div>

        <div className="slider-container-portoflio">
          <div ref={cardsRef} className="carousel-cards">
            {filteredCards.map(
              (card, index) =>
                index % cardsNumber === 0 && (
                  <ul
                    key={index / cardsNumber}
                    className={`card-page${
                      index / cardsNumber === selectedDot ? " active" : ""
                    }`}
                  >
                    {filteredCards.slice(index, index + cardsNumber).map((card, i) => (
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
            {Array(Math.ceil(filteredCards.length / cardsNumber))
              .fill()
              .map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    className="input"
                    name="option"
                    id={`option${index + 1}`}
                    onClick={() => handleRadioClick(index)}
                    defaultChecked={selectedDot === index}
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
    </section>
  );
};

export default Portfolio;
