/** @format */

import styles from "../css/Contacts.module.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import constructionCow from "../assets/constructionCow.svg";
import useMediaQuery from "../utils/useMediaQuery";
import laifu from "../assets/laifu.svg";
import resume from "../assets/pdf/Joshua_Peng_CV.pdf";

const Contacts = (props) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const socials = [
    { src: mail, msg: "joshua_peng@sfu.ca", link: "mailto:joshua_peng@sfu.ca" },
    {
      src: linkedin,
      msg: "linkedin.com/in/joshuapeng1999",
      link: "https://www.linkedin.com/in/joshuapeng1999/",
    },
    {
      src: github,
      msg: "github.com/joshpeng1999",
      link: "https://github.com/joshpeng1999",
    },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.title}>Let's work together!</p>
      <p className={styles.bodyText}>
        Feel free to{" "}
        <a
          className={styles.links}
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          check out my resume
        </a>{" "}
        and my other links:
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        className={
          isDesktop ? styles.socialsContainer : styles.socialsContainerMobile
        }
      >
        {socials.map((icon, i) => (
          <div key={i} className={styles.socialGroup}>
            <a
              className={styles.iconLink}
              href={icon.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon.src} alt={icon.src} />
            </a>
            {isDesktop && (
              <a
                className={styles.iconLink}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
              >
                <p className={styles.socialsText}>{icon.msg}</p>
              </a>
            )}
          </div>
        ))}
      </div>
      <img
        data-aos="flip-left"
        data-aos-delay="800"
        data-aos-once="true"
        className={styles.constructionCow}
        src={constructionCow}
        alt={constructionCow}
      ></img>
      <div className={styles.footer}>
        <span className={styles.lines} />
        <img src={laifu} className={styles.laifu} alt={laifu}></img>
        <span className={styles.lines} />
      </div>
    </div>
  );
};

export default Contacts;
