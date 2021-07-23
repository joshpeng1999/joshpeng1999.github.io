/** @format */
import { useState, useRef, useEffect } from "react";
import { TweenMax, Power1, Elastic, TimelineMax } from "gsap";
import styles from "../css/HoverLogo.module.css";
import eightNote from "../assets/eighthNote.svg";
import fourNote from "../assets/quarterNote.svg";
import logo from "../assets/logo.png";

const HoverLogo = (props) => {
  const image = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const eighthNote = useRef(null);
  const quarterNote = useRef(null);

  const tl = new TimelineMax();
  const tl2 = new TimelineMax();
  const tl3 = new TimelineMax();
  const noteThread = new TimelineMax();
  const quarterNoteThread = new TimelineMax();

  const [height, setHeight] = useState();
  const [connect, setConnect] = useState(false);
  const [path1, setPath1] = useState(
    "M8 205.53C483.5 -113.97 928 459.53 1452.5 224.03"
  );
  const [path2, setPath2] = useState(
    "M2 181.0296C538.5 -211.47 904 419.53 1440.5 285.03"
  );
  const [path3, setPath3] = useState(
    "M2 190.5296C517 35.5295 916 483.529 1440.5 248.03"
  );

  useEffect(() => {
    TweenMax.to(image.current, 2, {
      attr: {
        d: "M2 253.798C538.686 435.832 904.314 -172.589 1441 153.5198",
      },
      ease: Power1.easeInOut,
      stagger: 5,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(image2.current, 5, {
      attr: {
        d: "M9 280.53C420 474.499 933 -151.001 1453.5 299.03",
      },
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(image3.current, 5, {
      attr: {
        d: "M2 145.7459C445 291.499 852 -197.5 1440.5 203.246",
      },
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(eighthNote.current, 2, {
      y: "10vh",
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(quarterNote.current, 2, {
      y: "-5vh",
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const resetThreads = () => {
    setHeight();

    tl.fromTo(
      image.current,
      {
        attr: {
          d: "M2 253.798C538.686 435.832 904.314 -172.589 1441 153.5198",
        },
      },
      {
        attr: {
          d: "M8 205.53C483.5 -113.97 928 459.53 1452.5 224.03",
        },
        duration: 1,

        ease: Elastic.easeOut.config(0.8, 0.2),
      }
    ).to(image.current, 2, {
      attr: {
        d: "M2 253.798C538.686 435.832 904.314 -172.589 1441 153.5198",
      },
      ease: Power1.easeInOut,

      repeat: -1,
      yoyo: true,
    });

    tl2
      .fromTo(
        image2.current,
        {
          attr: {
            d: "M9 280.53C420 474.499 933 -151.001 1453.5 299.03",
          },
        },
        {
          attr: {
            d: "M2 181.0296C538.5 -211.47 904 419.53 1440.5 285.03",
          },
          duration: 1,

          ease: Elastic.easeOut.config(0.8, 0.4),
        }
      )
      .to(image2.current, 2, {
        attr: {
          d: "M9 280.53C420 474.499 933 -151.001 1453.5 299.03",
        },
        ease: Power1.easeInOut,

        repeat: -1,
        yoyo: true,
      });

    tl3
      .fromTo(
        image3.current,
        {
          attr: {
            d: "M2 145.7459C445 291.499 852 -197.5 1440.5 203.246",
          },
        },
        {
          attr: {
            d: "M2 190.5296C517 35.5295 916 483.529 1440.5 248.03",
          },
          duration: 1,

          ease: Elastic.easeOut.config(0.8, 0.3),
        }
      )
      .to(image3.current, 2, {
        attr: {
          d: "M2 145.7459C445 291.499 852 -197.5 1440.5 203.246",
        },
        ease: Power1.easeInOut,

        repeat: -1,
        yoyo: true,
      });

    noteThread
      .fromTo(
        eighthNote.current,
        { y: "6vh" },
        {
          y: "0",
          duration: 1,
          ease: Elastic.easeOut.config(0.8, 0.3),
        }
      )
      .to(eighthNote.current, 2, {
        y: "6vh",
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
      });

    quarterNoteThread
      .fromTo(
        quarterNote.current,
        { y: "-5vh" },
        {
          y: "0",
          duration: 1,
          ease: Elastic.easeOut.config(0.8, 0.3),
        }
      )
      .to(quarterNote.current, 2, {
        y: "-5vh",
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
      });

    setConnect(false);
  };

  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  const updateCoords = (x, y) => {
    let height = y * 1.5 - vh(40);
    setPath1(`M0,100 Q${x}, ${height} 1453.5, 100`);
    setPath2(`M0,150 Q${x}, ${height} 1453.5, 150`);
    setPath3(`M0,120 Q${x}, ${height} 1453.5, 120`);
    setHeight(height / 4);
  };

  const onMove = (event) => {
    if (!connect) {
      setConnect(true);
      TweenMax.killTweensOf(image.current);
      TweenMax.killTweensOf(image2.current);
      TweenMax.killTweensOf(image3.current);
      TweenMax.killTweensOf(eighthNote.current);
      TweenMax.killTweensOf(quarterNote.current);
      updateCoords(event.pageX, event.pageY);
    } else {
      updateCoords(event.pageX, event.pageY);
    }
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={resetThreads}
      className={styles.container}
    >
      <img alt="Josh Peng" src={logo} className={styles.logo}></img>
      <img
        ref={eighthNote}
        alt="Music Note"
        style={{ top: height }}
        src={eightNote}
        className={styles.eightNote}
      ></img>
      <img
        ref={quarterNote}
        alt="Music Note"
        style={{ top: height }}
        src={fourNote}
        className={styles.quarterNote}
      ></img>

      <svg
        className={styles.threads}
        viewBox="0 0 1454 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={image}
          d={path1}
          stroke="#3EF2E7"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          ref={image2}
          d={path2}
          stroke="#F23EEB"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          ref={image3}
          d={path3}
          stroke="#413EF2"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default HoverLogo;
