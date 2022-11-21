import Lottie from "lottie-react";
import React from "react";
import { IntroWarrior } from "../../../assets/lottie/lottie";
import RegexEditor from "../../RegexEditor";
import styles from "./introduction.module.css";

const Introduction = () => {
  return (
    <div>
      <div className="flex-between valign">
        <div className={styles.lottie}>
          <Lottie
            animationData={IntroWarrior}
            loop
            style={{ height: "200px", width: "240px" }}
          />
        </div>
        <div className={`content`}>
          You can be a “String Ninja”, that sounds cool, right? You’ll learn and
          master RegEx or Regular Expressions in this series of lessons. You’ll
          learn all the basics from matches, and sets to different flags that
          you can use in the RegEx. While learning about these, you’ll get to
          practice them in our own Regex Editor.
        </div>
      </div>
      <div className={`content content-gap`}>
        Let’s go on a quest, in order to become the “String Ninja” you’ll face
        numerous hurdles that you’ll have to solve with the only weapon that you
        have, “REGEX”. Don’t worry it’s quite powerful.
      </div>
      <div className="challenge-wrapper">
        <div className="challenge-question">
          Enter Begin in this editor to start your quest.
        </div>
        <div>
          <RegexEditor />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
