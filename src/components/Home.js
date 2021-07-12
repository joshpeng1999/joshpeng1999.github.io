/** @format */

import styles from "../css/Home.module.css";
import HoverLogo from "./HoverLogo";
import triangle from "../assets/triangle.svg";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.placement}>
        <HoverLogo />
      </div>
      <div
        style={props.scrollBar ? { opacity: 0 } : { opacity: 1 }}
        className={styles.scrollDown}
      >
        <p className={styles.scrollDownText}>scroll down</p>
        <img alt="scroll down" className={styles.image} src={triangle}></img>
      </div>
    </div>
  );
};

export default Home;
