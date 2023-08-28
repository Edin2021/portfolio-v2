import Recommendation from "../utilities/Recommendation";
import { loadIcon } from "../../composables/iconLoader";
import { experience } from "../../assets/data/experience";

function Experience() {
  return (
    <section className="experience">
      <h2>
        Experience<span id="experience"></span>
      </h2>
      <span className="separator"></span>
      {experience.map((item, i) => (
        <section className="tile-wrapper" key={i}>
          <section className="tile">
            <aside>
              <div className="recommendations-desktop">
                <Recommendation recommendations={item.recommendations} />
              </div>
            </aside>
            <article>
              <h3>
                <a href={item.company.siteUrl} target="_blank" rel="noreferrer">
                  <b>{item.company.name},</b>
                </a>{" "}
                {item.company.location} - <i> {item.company.role}</i>
              </h3>
              <div className="period">{item.company.period}</div>
              <section className="about">
                <h4>
                  <span className="separator"></span>
                  About
                </h4>
                <p>{item.about.paragraph}</p>
                <ul>
                  {item.about.duties.map((duty, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: duty }}></li>
                  ))}
                </ul>
              </section>
            </article>
            <div className="recommendations-mobile">
              <Recommendation recommendations={item.recommendations} />
            </div>
            <div className="bg-shape">
              <img src={loadIcon["hexagon"]} alt="" />
            </div>
          </section>
        </section>
      ))}
    </section>
  );
}

export default Experience;
