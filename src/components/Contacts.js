/** @format */

import styles from "../css/Contacts.module.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import constructionCow from "../assets/constructionCow.svg";
import useMediaQuery from "../utils/useMediaQuery";
import laifu from "../assets/laifu.svg";

const Contacts = (props) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const socials = [
    { src: mail, msg: "jpa95@sfu.ca", link: "mailto:jpa95@sfu.ca" },
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
        <a className={styles.links} href="google.ca">
          check out my resume
        </a>{" "}
        and my other links:
      </p>
      <div
        className={
          isDesktop ? styles.socialsContainer : styles.socialsContainerMobile
        }
      >
        {socials.map((icon, i) => (
          <div className={styles.socialGroup}>
            <a className={styles.iconLink} href={icon.link}>
              <img src={icon.src} alt={icon.src} />
            </a>
            {isDesktop && (
              <a className={styles.iconLink} href={icon.link}>
                <p className={styles.socialsText}>{icon.msg}</p>
              </a>
            )}
          </div>
        ))}
      </div>
      <img
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
