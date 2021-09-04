/** @format */

import styles from "../css/Home.module.css";
import HoverLogo from "./HoverLogo";
import triangle from "../assets/triangle.svg";
import muteBtn from "../assets/mute.svg";
import unMuteBtn from "../assets/unmute.svg";
import G from "../assets/chords/chord1.mp3";
import Gm from "../assets/chords/chord2.mp3";
import Cm from "../assets/chords/chord3.mp3";
import F from "../assets/chords/chord4.mp3";
import Dmaj from "../assets/chords/chord5.mp3";
import { useEffect, useState } from "react";
import { Howl } from "howler";

const Home = (props) => {
  const [chordPos, setCurrPos] = useState(0);
  const [strumChords, setStrumChords] = useState([]);
  const [chordOrder] = useState([G, Dmaj, F, Gm, G, Dmaj, F, Cm]);
  const [mute, setMute] = useState(true);

  useEffect(() => {
    const processChords = [];
    chordOrder.forEach((chord) => {
      let sound = new Howl({
        src: [chord],
        html5: true,
        volume: 1,
      });
      processChords.push(sound);
    });
    setStrumChords(processChords);
  }, [chordOrder]);

  const playChords = () => {
    const newChord = strumChords[chordPos % 8];
    if (!mute) {
      newChord.play();
      setCurrPos(chordPos + 1);
    }
  };

  const allowMusic = () => {
    setMute(!mute);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.muteBtnGroup}
        style={props.scrollBar ? { opacity: 0 } : { opacity: 1 }}
      >
        <div className={styles.muteBtnText}>
          <button onClick={allowMusic} className={styles.mute}>
            {mute ? (
              <img width={"100px"} src={muteBtn} alt={muteBtn} />
            ) : (
              <img width={"100px"} src={unMuteBtn} alt={unMuteBtn} />
            )}
          </button>
          {!mute && chordPos < 1 && (
            <p className={styles.strumStrings}>{"Strum the neon strings!"}</p>
          )}
        </div>
      </div>
      <div onMouseLeave={playChords} className={styles.placement}>
        <HoverLogo />
      </div>
      <div
        style={props.scrollBar ? { opacity: 0 } : { opacity: 1 }}
        className={styles.scrollDown}
      >
        <p className={styles.scrollDownText}>scroll down</p>
        <img alt="scroll down" className={styles.image} src={triangle}></img>
      </div>
    </div>
  );
};

export default Home;
