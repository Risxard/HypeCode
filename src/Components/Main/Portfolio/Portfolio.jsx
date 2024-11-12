import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Portfolio.css";

const Portfolio = ({ projects = [] }) => {
  const [latestProjects, setLatestProjects] = useState([]);
  const { t, i18n } = useTranslation();
  const { title, text } = t("portfolio");

  useEffect(() => {
    const filteredProjects = projects.filter(
      (project) => project.latestProject === true
    );
    setLatestProjects(filteredProjects);
  }, [projects]);

  return (
    <section className="portfolio-container" id="portfolio">
      <div className="portf-inner-section max-w section-padding">
        <div className="section-title-container">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="projects-container">
          <div className="latest-projects">
            <ul>
              {latestProjects.map((card) => (
                <li key={card.id || card.projectUrl}>
                  <a href={card.projectUrl} target="_blank">
                    <div className="portfolio-card-image-container">
                      <img
                        src={card.projectImage.url}
                        alt={card.projectTitleEn || "Project Image"}
                        loading="lazy"
                      />
                      <div className="card-body">
                        <span>
                          <p>
                            {i18n.language === "pt-BR"
                              ? "Ir para Página"
                              : "Go to link"}
                          </p>
                          <ExternalLink />
                        </span>
                      </div>
                    </div>
                    <div className="portfolio-card-title-container">
                      <h2>
                        {i18n.language === "pt-BR"
                          ? card.projectTitlePt
                          : card.projectTitleEn}
                      </h2>
                      <p>
                        {i18n.language === "pt-BR"
                          ? card.projectDescriptionPt
                          : card.projectDescriptionEn}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
