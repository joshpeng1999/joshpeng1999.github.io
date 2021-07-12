/** @format */

import styles from "../css/Navbar.module.css";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [scrollBar, setScrollBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    console.log("simp");
    if (window.scrollY >= 80) {
      setScrollBar(true);
    } else {
      setScrollBar(false);
    }
  };

  return (
    <div
      onScroll={changeBackground}
      style={
        scrollBar
          ? { backgroundColor: "rgba(27, 24, 24, 0.7)" }
          : { opacity: 1 }
      }
      className={styles.container}
    >
      <ul className={styles.navLinks}>
        <li className={styles.spaceLinks}>
          <Link
            activeClass={styles.active}
            to="section1"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            isDynamic={true}
            className={styles.linkText}
          >
            Home
          </Link>
        </li>
        <li className={styles.spaceLinks}>
          <Link
            activeClass={styles.active}
            to="section2"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            isDynamic={true}
            className={styles.linkText}
          >
            Me
          </Link>
        </li>
        <li className={styles.spaceLinks}>
          <Link
            activeClass={styles.active}
            to="section3"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            isDynamic={true}
            className={styles.linkText}
          >
            Projects
          </Link>
        </li>
        <li className={styles.spaceLinks}>
          <Link
            activeClass={styles.active}
            to="service"
            className={styles.linkText}
            spy={false}
            smooth={true}
            isDynamic={true}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
