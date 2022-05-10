/** @format */

import styles from "../css/AllProjects.module.css";
import Project from "./Project";
import airpods from "../assets/airpods.svg";
import useMediaQuery from "../utils/useMediaQuery";
import projects from "../utils/projects";
const AllProjects = (props) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <div className={styles.container}>
      <p className={styles.title}>Developer Projects</p>
      <div
        data-aos="zoom-out"
        data-aos-delay="500"
        data-aos-once="true"
        className={styles.innerContainer}
      >
        {projects.map((project, i) => (
          <div key={i} className={styles.projectBox}>
            <Project
              src={project.src}
              title={project.title}
              language={project.language}
              text={project.text}
              link={project.link}
            />
          </div>
        ))}
      </div>

      <p className={styles.github}>
        <a
          className={styles.linkStyling}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/joshpeng1999"
        >
          See more on my Github!
        </a>
      </p>

      <p style={{ marginTop: "50px" }} className={styles.title}>
        Music Projects
      </p>
      <img
        data-aos="zoom-out"
        data-aos-delay="500"
        data-aos-once="true"
        src={airpods}
        className={styles.airpods}
        alt={airpods}
      ></img>
      <p
        data-aos="zoom-out"
        data-aos-delay="800"
        data-aos-once="true"
        style={
          isDesktop ? { paddingBottom: "160px" } : { paddingBottom: "0px" }
        }
        className={styles.inProgress}
      >
        ...Currently in progress but stay tuned!
      </p>
    </div>
  );
};

export default AllProjects;
