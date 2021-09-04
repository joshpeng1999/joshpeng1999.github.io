/** @format */

import styles from "../css/MainPage.module.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import { useEffect, useState } from "react";
import AllProjects from "../components/AllProjects";
import Contacts from "../components/Contacts";
import useMediaQuery from "../utils/useMediaQuery";
import NavbarMobile from "../components/NavbarMobile";
import HomeMobile from "../components/HomeMobile";
import AboutMeMobile from "../components/AboutMeMobile";

const MainPage = () => {
  const [scrollBar, setScrollBar] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 600px)");

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
    <div className={styles.websiteContainer}>
      {isDesktop ? (
        <Navbar scrollBar={scrollBar} />
      ) : (
        <NavbarMobile scrollBar={scrollBar} />
      )}

      <div id="section1">
        {isDesktop ? (
          <Home scrollBar={scrollBar} />
        ) : (
          <HomeMobile scrollBar={scrollBar} />
        )}
      </div>
      <div id="section2">{isDesktop ? <AboutMe /> : <AboutMeMobile />}</div>
      <div id="section3" className={styles.projects}>
        <AllProjects />
      </div>
      <div id="section4">
        <Contacts />
      </div>
    </div>
  );
};

export default MainPage;
