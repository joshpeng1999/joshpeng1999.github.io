/** @format */

import styles from "../css/Project.module.css";
import useMediaQuery from "../utils/useMediaQuery";
const cowResolver = require.context("../assets/projects", false, /.*\.svg/);

const Project = (props) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const isLaptop = useMediaQuery("(min-width: 1270px)");

  return (
    <div
      style={
        isDesktop
          ? isLaptop
            ? { width: "450px" }
            : { width: "380px" }
          : { width: "250px", height: "inherit" }
      }
      className={styles.container}
    >
      <img
        src={cowResolver(props.src).default}
        className={styles.imageSection}
        alt={props.src}
      />
      <div className={styles.textPadding}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.subTitle}>{props.language}</p>
        <p
          style={isDesktop ? { fontSize: "20px" } : { fontSize: "18px" }}
          className={styles.bodyText}
        >
          {props.text}
        </p>
        <a className={styles.btn} href={props.link}>
          <div className={styles.btnText}>
            {isDesktop ? "Take me to the github page!" : "Github Page"}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
