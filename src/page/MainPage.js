/** @format */

import styles from "../css/MainPage.module.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div id="section1">
        <Home />
      </div>
      <div id="section2">
        <AboutMe />
      </div>
      <div
        id="section3"
        style={{ backgroundColor: "blue", height: "1200px" }}
      ></div>
      <div
        id="section4"
        style={{ backgroundColor: "green", height: "1200px" }}
      ></div>
    </div>
  );
};

export default MainPage;
