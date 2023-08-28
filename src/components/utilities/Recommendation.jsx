import { loadIcon } from "../../composables/iconLoader";

function Recommendation({ recommendations }) {
  return (
    <>
      <div className="quotation-mark">
        <img src={loadIcon["quotes"]} alt="" />
        <span className="separator"></span>
      </div>
      <div className="recommendations">
        {recommendations.map((recommendation, i) => (
          <div key={i}>
            <i className="text">{recommendation.text}</i>
            <span className="person">
              -{" "}
              <a
                href={recommendation.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {recommendation.person}
              </a>{" "}
              <img src={loadIcon["dot"]} alt="" /> {recommendation.role}
            </span>
          </div>
        ))}
      </div>
      <div className="quotation-mark">
        <span className="separator"></span>
        <img src={loadIcon["quotes"]} alt="" />
      </div>
    </>
  );
}

export default Recommendation;
