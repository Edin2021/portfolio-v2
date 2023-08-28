import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { navigation } from "../../assets/data/navigation";

function Nav() {
  const history = useHistory();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    scrollToTop();

    // Remove the hash from the URL
    history.replace("/");
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    history.replace("/");
    scrollToTop();
  }, []);

  return (
    <nav>
      {navigation.map((item) =>
        item === "HOME" ? (
          <a href="#HOME" onClick={handleHomeClick} key={item}>
            {item}
          </a>
        ) : (
          <a href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        )
      )}
    </nav>
  );
}

export default Nav;
