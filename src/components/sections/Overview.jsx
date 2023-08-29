import { overview } from "../../assets/data/overview";
import { loadIcon } from "../../composables/iconLoader";
import { useGlobalContext } from "../../context";

function Overview() {
  const { theme } = useGlobalContext();
  const handleIcon = (icon) => {
    const icons = icon.split(" ");
    const currIcon =
      icons.length > 1 ? (theme ? icons[1] : icons[0]) : icons[0];
    return currIcon;
  };
  return (
    <section className="overview">
      <h2>
        OVERVIEW <span id="overview"></span>
      </h2>
      <span className="separator"></span>
      <div className="wrapper-classes">
        {overview.map((article, i) => (
          <article key={i}>
            <h3>{article.title}</h3>
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="wrapper-icons">
              {article.icons.map((icon) => (
                <div className="icon" key={icon}>
                  <img src={loadIcon[handleIcon(icon)]} alt={icon} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <img
        src={loadIcon["pentagon"]}
        alt=""
        aria-hidden={true}
        className="bg-shape"
      />
    </section>
  );
}

export default Overview;
