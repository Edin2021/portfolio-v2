/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { overview } from "../../assets/data/overview";
import { loadIcon } from "../../composables/iconLoader";
import { useGlobalContext } from "../../context";
import Modal from "../utilities/Modal";
import { modals } from "../../assets/data/modals";
import { iconModeSwitcher } from "../../helpers/utils";

function Overview() {
  const { theme } = useGlobalContext();

  const [modal, setModal] = useState(modals.technologies);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setModal(modals.technologies);
  }, [modals]);

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
                <div className="icon" key={icon} title={icon.split(" ")[0]}>
                  <img
                    src={loadIcon[iconModeSwitcher(icon, theme)]}
                    alt={icon}
                  />
                </div>
              ))}
              {article.title.toLowerCase() === "technologies" && (
                <button className="show-more magnet" onClick={openModal}>
                  {" "}
                  <div className="bg-div"></div>
                  <dir className="text">Show more</dir>
                </button>
              )}
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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        classes="modal-technologies"
      >
        <div className="bg-icons">
          <img src={loadIcon["toolBox"]} alt="" />{" "}
          <img src={loadIcon["toolKit1"]} alt="" />{" "}
          <img src={loadIcon["toolKit2"]} alt="" />{" "}
        </div>
        <span className="separator"></span>
        {modal.articles.map((article) => (
          <article key={article.title}>
            <h3>{article.title}</h3>
            <ul>
              {article.points.map((point, i) => (
                <li key={i}>
                  <b>{point.bolding}</b> <p>{point.text}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
        <span className="separator"></span>
        <div className="wrapper-icons">
          {modal.icons.map((icon) => (
            <div className="icon" key={icon}>
              <img src={loadIcon[iconModeSwitcher(icon, theme)]} alt="" />
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}

export default Overview;
