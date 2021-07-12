/** @format */

import styles from "../css/Home.module.css";
import HoverLogo from "./HoverLogo";
import triangle from "../assets/triangle.svg";
import Navbar from "./Navbar";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.placement}>
        <HoverLogo />
      </div>
      <div className={styles.scrollDown}>
        <p className={styles.scrollDownText}>scroll down</p>
        <img alt="scroll down" className={styles.image} src={triangle}></img>
      </div>
    </div>
  );
};

export default Home;
