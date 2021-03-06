/** @format */

import styles from "../css/HomeMobile.module.css";
import logoMobile from "../assets/logoMobile.png";
import linesMobile from "../assets/lines.svg";
import joshShadow from "../assets/joshShadow.png";

const HomeMobile = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.lines} src={linesMobile} alt={linesMobile}></img>
      <img src={logoMobile} className={styles.logo} alt={logoMobile}></img>

      <div className={styles.aboutMe}>
        <p className={styles.bigHello}>Hello!</p>
        <p className={styles.myName}>I'm Josh.</p>
        <img src={joshShadow} alt={joshShadow} className={styles.joshPic} />
      </div>
    </div>
  );
};

export default HomeMobile;
