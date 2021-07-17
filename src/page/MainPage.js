/** @format */

import styles from "../css/MainPage.module.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import { useEffect, useState } from "react";
import AllProjects from "../components/AllProjects";

const MainPage = () => {
  const [scrollBar, setScrollBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollBar(true);
    } else {
      setScrollBar(false);
    }
  };
  return (
    <div>
      <Navbar scrollBar={scrollBar} />
      <div id="section1">
        <Home scrollBar={scrollBar} />
      </div>
      <div id="section2">
        <AboutMe />
      </div>
      <div id="section3" className={styles.projects}>
        <AllProjects />
      </div>
      <div
        id="section4"
        style={{ backgroundColor: "green", height: "1200px" }}
      ></div>
    </div>
  );
};

export default MainPage;
