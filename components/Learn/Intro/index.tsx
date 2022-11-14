import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import ChillLottie from "../../../assets/lottie/chill.json";
import Button from "../../Button";
import styles from "./intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.introItem}>
        <div>
          <Lottie
            animationData={ChillLottie}
            style={{ height: "160px", width: "160px" }}
            loop={true}
          />
        </div>

        <div className={styles.introText}>
          A regular expression is a pattern that is matched against a subject
          string from left to right. Regular expressions are used to replace
          text within a string, validate forms, extract a substring from a
          string based on a pattern match, and so much more. The term
          &quot;regular expression&quot; is a mouthful, so you will usually find
          the term abbreviated to &quot;regex&quot; or &quot;regexp&quot;.
        </div>
      </div>

      <div className={styles.exampleWrapper}>
        <div>
          Imagine you are writing an application and you want to set the rules
          for when a user chooses their username. We want to allow the username
          to contain letters, numbers, underscores and hyphens. We also want to
          limit the number of characters in the username so it does not look
          ugly. We can use the following regular expression to validate the
          username:
        </div>
        <Image
          src={require("../images/example1.png")}
          alt="Example 1"
          className={styles.exampleImage}
        />
      </div>
    </div>
  );
};

export default Intro;
