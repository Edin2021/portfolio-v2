import { useState } from "react";
import { loadIcon } from "../../composables/iconLoader";

function Project({ project, i }) {
  const [showReadMore, setShowReadMore] = useState(false);

  function extractPoints(inputString) {
    const pointsArray = inputString.split(",").map((point) => point.trim());
    return pointsArray;
  }
  
  return (
    <section className="project">
      <div className={`wrapper-section ${showReadMore ? "active" : ""}`}>
        <h3>
          <div className="separator"></div>
          {project.title}
        </h3>
        {project.description.map((paragraph, i) => (
          <p key={i} className={i === 1 ? "read-more-text" : ""}>
            {paragraph}
          </p>
        ))}
        <div className="read-more">
          <ul>
            {extractPoints(project.accomplishments).map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
        <button
          className="read-more-button"
          onClick={() => setShowReadMore(!showReadMore)}
        >
          {showReadMore ? "Show less" : "Read more..."}
        </button>
        <div className="wrapper-links">
          <div className="link">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="magnet"
            >
              Live Link
            </a>
          </div>
          <span className="separator"></span>
          <div className="link">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="magnet"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper-section">
        <div className="wrapper-image">
          <img src={project.image} alt={project.title} width="150px" />
        </div>
        <ul>
          {extractPoints(project.accomplishments).map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="wrapper-icons">
        {project.technologies.map((icon) => (
          <div className="icon" key={icon} title={icon}>
            <img src={loadIcon[icon]} alt={icon} />
          </div>
        ))}
      </div>
      <div className="bg-shape">
        <img src={loadIcon["pentagon"]} alt="" />
      </div>
    </section>
  );
}

export default Project;
