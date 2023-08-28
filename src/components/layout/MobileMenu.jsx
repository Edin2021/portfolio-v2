import { loadIcon } from "../../composables/iconLoader";
import { useGlobalContext } from "../../context";
import Nav from "../utilities/Nav";

function MobileMenu() {
  const { toggleMobileMenu, showMobileMenu } = useGlobalContext();

  const closeMobileMenu = (e) => {
    if (e.target.tagName === "A" || e.target.classList.contains('mobile-nav-bg')) toggleMobileMenu();
  };

  return (
    <>
      <button className="toggle-mobile-menu" onClick={toggleMobileMenu}>
        <img src={loadIcon[`${showMobileMenu ? "close" : "menu"}`]} alt="" />
      </button>
      <div
        className={`mobile-nav${showMobileMenu ? " active" : ""}`}
        onClick={closeMobileMenu}
      >
        <Nav />
        <a
          href="https://github.com/Edin2021"
          alt="github link"
          className="github"
          target="_blank"
          rel="noreferrer"
        >
          <div className="visually-hidden">github</div>
          <img src={loadIcon["github"]} alt="" />
        </a>
      </div>
      {showMobileMenu && (
        <div className="mobile-nav-bg" onClick={closeMobileMenu}></div>
      )}
    </>
  );
}

export default MobileMenu;
