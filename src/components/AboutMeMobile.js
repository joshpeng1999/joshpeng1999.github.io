/** @format */
import styles from "../css/AboutMeMobile.module.css";
import "aos/dist/aos.css";
import cows from "../utils/descriptions";

const AboutMeMobile = (props) => {
  const cowResolver = require.context("../assets", false, /.*\.svg/);

  return (
    <div className={styles.container}>
      {cows.map((cow, i) => (
        <div
          data-aos="zoom-out"
          data-aos-delay="500"
          data-aos-once="true"
          key={i}
          className={styles.cowText}
        >
          <img src={cowResolver(cow.src).default} alt={cow.src} />
          <p style={props.extraMargin} className={styles.title}>
            {cow.title}
          </p>
          <p className={styles.comment}>{cow.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutMeMobile;
