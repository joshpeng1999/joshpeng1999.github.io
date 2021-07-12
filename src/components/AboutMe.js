/** @format */

import styles from "../css/AboutMe.module.css";
import joshShadow from "../assets/joshShadow.png";

const AboutMe = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.textGroup}>
          <p className={styles.bigHello}>Hello!</p>
          <p className={styles.myName}>I'm Josh.</p>
        </div>
        <img src={joshShadow} alt={joshShadow} className={styles.joshPic} />
      </div>
    </div>
  );
};

export default AboutMe;
