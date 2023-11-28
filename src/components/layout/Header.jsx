/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { loadIcon } from "../../composables/iconLoader";
import { useGlobalContext } from "../../context";
import Nav from "../utilities/Nav";

function Header() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const { toggleTheme, theme } = useGlobalContext();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 10 && !headerScrolled) {
      setHeaderScrolled(true);
    } else if (scrollPosition < 10) {
      setHeaderScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="header-center">
          <a
            href="https://github.com/Edin2021"
            alt="github link"
            className="github magnet"
            target="_blank"
            rel="noreferrer"
          >
            <div className="visually-hidden">github</div>
            <div className="wrapper-image">
              <img src={loadIcon["github"]} alt="" />
              <div className="bg-div"></div>
            </div>
          </a>

          <div className={`desktop-nav${headerScrolled ? " scrolled" : ""}`}>
            <Nav />
          </div>

          <div className="theme-buttons">
            <button
              className={`change-theme-button magnet ${theme ? "active" : ""}`}
              onClick={toggleTheme}
            >
              <div className="visually-hidden">change theme switch</div>
              <div className="wrapper-image">
                <img
                  src={loadIcon["themeButtonOuter"]}
                  alt="change theme button"
                  className="outer"
                />
                <img
                  src={loadIcon["themeButtonInner"]}
                  alt="change theme button"
                  className="inner"
                />
                <div className="bg-div"></div>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
