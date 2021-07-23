/** @format */

import styles from "../css/NavbarMobile.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import Burger from "./Burger";

const NavbarMobile = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      style={
        props.scrollBar
          ? { backgroundColor: "rgba(27, 24, 24, 0.7)" }
          : { opacity: 1 }
      }
      className={styles.container}
    >
      <Burger open={open} setOpen={setOpen} />
      {open && (
        <ul className={styles.navLinks}>
          <li className={styles.spaceLinks} data-aos="fade-down">
            <Link
              activeClass={styles.active}
              to="section1"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              isDynamic={true}
              className={styles.linkText}
            >
              Home
            </Link>
          </li>
          <li
            className={styles.spaceLinks}
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <Link
              activeClass={styles.active}
              to="section2"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              isDynamic={true}
              className={styles.linkText}
            >
              Me
            </Link>
          </li>
          <li
            className={styles.spaceLinks}
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <Link
              activeClass={styles.active}
              to="section3"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              isDynamic={true}
              className={styles.linkText}
            >
              Projects
            </Link>
          </li>
          <li
            className={styles.spaceLinks}
            data-aos="fade-down"
            data-aos-delay="450"
          >
            <Link
              activeClass={styles.active}
              to="section4"
              className={styles.linkText}
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              isDynamic={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarMobile;
