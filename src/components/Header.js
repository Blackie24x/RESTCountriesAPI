import React, { useContext, useEffect } from "react";
import styles from "./header.module.scss";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Store } from "../Context";
const Header = () => {
  const { setDarkMode, darkMode } = useContext(Store);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--secondary-bg", "#2e3742");
      document.documentElement.style.setProperty("--primary-bg", "#232a33");
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#fafafa"
      );
      document.documentElement.style.setProperty(
        "--secondary-text-color",
        "#e3e3e3"
      );
      document.documentElement.style.setProperty("--shadow-color", "#2e2e2e33");
    } else {
      document.documentElement.style.setProperty("--secondary-bg", "#ffffff");
      document.documentElement.style.setProperty("--primary-bg", "#fcfcfc");
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#303030"
      );
      document.documentElement.style.setProperty(
        "--secondary-text-color",
        "#5a5a5a"
      );
      document.documentElement.style.setProperty("--shadow-color", "#91919133");
    }
  }, [darkMode]);
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Where in the world?</h1>
      <div
        className={styles.header__changeMode}
        onClick={() => setDarkMode((darkMode) => !darkMode)}
      >
        <FontAwesomeIcon icon={faMoon} />{" "}
        <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </header>
  );
};

export default Header;
