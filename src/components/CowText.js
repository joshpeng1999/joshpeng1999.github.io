/** @format */

import styles from "../css/CowText.module.css";
import CowImage from "../assets/headPhoneCow.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const cowResolver = require.context("../assets", false, /.*\.svg/);

const CowText = (props) => {
  const cows = [
    {
      title: "I am a cool cow",
      text: "I like to code in things",
      padDown: { marginTop: "2vw" },
    },
    {
      title: "I am a cool cow",
      text: "I like to code in things",
      style: { marginTop: "1.5vw" },
    },
    {
      title: "I am a cool cow",
      text: "I like to code in things",
      padDown: { marginTop: "2vw" },
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.cowsRows}>
        <img
          data-aos="flip-right"
          data-aos-delay="100"
          data-aos-once="true"
          className={styles.cowImage}
          src={cowResolver("./headPhoneCow.svg").default}
          alt="./coolCow.svg"
        />
        <img
          data-aos="flip-right"
          data-aos-delay="400"
          data-aos-once="true"
          className={styles.cowImage}
          src={cowResolver("./coolCow.svg").default}
          alt="./coolCow.svg"
        />
        <img
          data-aos="flip-right"
          data-aos-delay="700"
          data-aos-once="true"
          className={styles.cowImage}
          src={cowResolver("./monocleCow.svg").default}
          alt="./coolCow.svg"
        />
      </div>
      <div className={styles.textGroup}>
        <div className={styles.cowsRows}>
          {cows.map((cow, i) => (
            <div
              data-aos="zoom-out"
              data-aos-delay="1000"
              data-aos-once="true"
              className={styles.textGroup}
            >
              <p style={props.extraMargin} className={styles.title}>
                {cow.title}
              </p>
              <p className={styles.comment}>{cow.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CowText;
