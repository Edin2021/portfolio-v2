import resume from "../../assets/resume.pdf";

function Banner() {
  return (
    <section className="banner">
      <h1>
        Hi, I’m <br /> Edin <br /> Sikira
      </h1>
      <p>A front-end developer based in Bosnia and Herzegovina</p>
      <a
        href={resume}
        download="EdinSikiraResume"
        className="resume-button magnet"
      >
        <div className="bg-div"></div>
        <dir className="text">Resume</dir>
      </a>
    </section>
  );
}

export default Banner;
