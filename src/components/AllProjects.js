/** @format */

import styles from "../css/AllProjects.module.css";
import Project from "./Project";
import airpods from "../assets/airpods.svg";
import useMediaQuery from "../utils/useMediaQuery";
const AllProjects = (props) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const projects = [
    {
      src: "./area52.svg",
      title: "Storm Area 52",
      text: "Storm Area 52 is a local multiplayer party game about working together to break into a secret military base, collect evidence of state secrets, and escape before you’re detected",
      link: "https://github.com/sfusurge/StormArea52",
    },
    {
      src: "./area52.svg",
      title: "Storm Area 52",
      text: "Storm Area 52 is a local multiplayer party game about working together to break into a secret military base, collect evidence of state secrets, and escape before you’re detected",
      link: "https://github.com/sfusurge/StormArea52",
    },
    {
      src: "./area52.svg",
      title: "Storm Area 52",
      text: "Storm Area 52 is a local multiplayer party game about working together to break into a secret military base, collect evidence of state secrets, and escape before you’re detected",
      link: "https://github.com/sfusurge/StormArea52",
    },
    {
      src: "./area52.svg",
      title: "Storm Area 52",
      text: "Storm Area 52 is a local multiplayer party game about working together to break into a secret military base, collect evidence of state secrets, and escape before you’re detected",
      link: "https://github.com/sfusurge/StormArea52",
    },
  ];

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
          <div className={styles.projectBox}>
            <Project
              src={project.src}
              title={project.title}
              text={project.text}
              link={project.link}
            />
          </div>
        ))}
      </div>

      <p className={styles.github}>
        <a
          className={styles.linkStyling}
          href="https://github.com/JoshuaPeng1999"
        >
          See more on my Github!
        </a>
      </p>

      <p style={{ marginTop: "50px" }} className={styles.title}>
        Music Projects
      </p>
      <img src={airpods} className={styles.airpods} alt={airpods}></img>
      <p
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
