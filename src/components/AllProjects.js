/** @format */

import styles from "../css/AllProjects.module.css";
import Project from "./Project";
import airpods from "../assets/airpods.svg";
import useMediaQuery from "../utils/useMediaQuery";
const AllProjects = (props) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const projects = [
    {
      src: "./stormhacks.svg",
      title: "Stormhacks 2021",
      language: "React · JavaScript · CSS",
      text: "Stormhacks is an annual 24 hour hackathon hosted by SFU Surge that usually has 300+ attendees! The main website was developed by a small group of developers using React.",
      link: "https://github.com/sfusurge/hackathon",
    },
    {
      src: "./area52.svg",
      title: "Storm Area 52",
      language: "Unity · C#",
      text: "Storm Area 52 is a local multiplayer party game about working together to break into a secret military base, collect evidence of state secrets, and escape before you’re detected",
      link: "https://github.com/sfusurge/StormArea52",
    },
    {
      src: "./dungeonDasher.svg",
      title: "Dungeon Dasher",
      language: "Java",
      text: "Dungeon Dasher is a single player game that features three unique levels about finding/clicking buttons to escape a dungeon filled with monsters and traps.",
      link: "https://github.com/joshpeng1999/Dungeon-Dasher",
    },
    {
      src: "./reversi.svg",
      title: "Reversi AI",
      language: "C++",
      text: "For a school final project, I was able to create an AI for the game Reversi using the Monte Carlo Tree Search algorithm. Can you beat my Cpu player?",
      link: "https://github.com/joshpeng1999/ReversiAI",
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