/** @format */

/** @format */

import styles from "../css/AboutMe.module.css";
import joshShadow from "../assets/joshShadow.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CowText from "./CowText";

const AboutMe = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div
          data-aos-once="true"
          data-aos="fade-down"
          className={styles.textGroup}
        >
          <p className={styles.bigHello}>Hello!</p>
          <p className={styles.myName}>I'm Josh.</p>
        </div>
        <img
          data-aos="zoom-out"
          data-aos-delay="250"
          data-aos-once="true"
          src={joshShadow}
          alt={joshShadow}
          className={styles.joshPic}
        />
      </div>
      <CowText />
    </div>
  );
};

export default AboutMe;
