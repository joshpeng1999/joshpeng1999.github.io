/** @format */

import styles from "../css/Project.module.css";

const cowResolver = require.context("../assets/projects", false, /.*\.svg/);

const Project = (props) => {
  return (
    <div className={styles.container}>
      <img
        src={cowResolver(props.src).default}
        className={styles.imageSection}
        alt={props.src}
      />
      <div className={styles.textPadding}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.bodyText}>{props.text}</p>
        <a className={styles.btn} href={props.link}>
          <div className={styles.btnText}>Take me to the github page!</div>
        </a>
      </div>
    </div>
  );
};

export default Project;
