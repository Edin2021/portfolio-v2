import { contact } from "../../assets/data/contact";
import { loadIcon } from "../../composables/iconLoader";

function Contact() {
  const copyToClipboard = async (e) => {
    const currEl =
      e.target.tagName.toUpperCase() !== "BUTTON"
        ? e.target.parentElement
        : e.target;
    const text = "edinsikira5@gmail.com";
    console.log(currEl);
    try {
      if (currEl.classList.contains("success")) return;
      await navigator.clipboard.writeText(text);
      currEl.classList.add("success");
      setTimeout(() => {
        currEl.classList.remove("success");
      }, 3000);
    } catch (err) {
      if (currEl.classList.contains("error")) return;
      currEl.classList.add("error");
      setTimeout(() => {
        currEl.classList.remove("error");
      }, 3000);
    }
  };
  return (
    <section className="contact">
      <h2>
        CONTACT <span id="contact"></span>
      </h2>
      <span className="separator"></span>
      <div className="wrapper-classes">
        <button onClick={copyToClipboard}>
          <span className="visually-hidden">Email: edinsikira5@gmail.com</span>
          <img src={loadIcon[contact.email.name]} alt="" />
        </button>
        <a href={contact.linkedin.value} target="_blank" rel="noreferrer">
          <span className="visually-hidden">Linkedin</span>
          <img src={loadIcon[contact.linkedin.name]} alt="" />
        </a>
      </div>
      <a
        href="https://edinsikira.pages.dev/"
        target="_blank"
        rel="noreferrer"
        className="old-portfolio"
      >
        <div className="text"> Old Revision</div>{" "}
        <img src={loadIcon["flag"]} alt="" />
      </a>
    </section>
  );
}

export default Contact;
