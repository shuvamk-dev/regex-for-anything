import Lottie from "lottie-react";
import React from "react";
import { Lesson2Lottie } from "../../../assets/lottie/lottie";

import styles from "./basicMatchers.module.css";

const BasicMatchers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentSection}>
        <div>
          A regular expression is just a pattern of characters that we use to
          perform a search in a text. For example, the regular expression{" "}
          <span className={styles.emphasis}>the</span> means: the letter{" "}
          <span className={styles.emphasis}>t</span>, followed by the letter{" "}
          <span className={styles.emphasis}>h</span>, followed by the letter{" "}
          <span className={styles.emphasis}>e</span>.
        </div>
        <div className={styles.example}>
          &quot;the&quot; =&gt; The fat cat sat on{" "}
          <span className={styles.match}>the</span> mat.
        </div>
        <div>Test the regular expression</div>
      </div>
      <div className={styles.contentSection}>
        <div>
          The regular expression <span className={styles.emphasis}>123</span>{" "}
          matches the string <span className={styles.emphasis}>123</span>. The
          regular expression is matched against an input string by comparing
          each character in the regular expression to each character in the
          input string, one after another. Regular expressions are normally
          case-sensitive so the regular expression{" "}
          <span className={styles.emphasis}>The</span> would not match{" "}
          <span className={styles.emphasis}>the</span> string the.
        </div>
        <div className={styles.example}>
          &quot;The&quot; =&gt; <span className={styles.match}>The</span> fat
          cat sat on the mat.
        </div>
        <div>Test the regular expression</div>
      </div>
      <div className={styles.lottie}>
        <Lottie
          animationData={Lesson2Lottie}
          loop={true}
          style={{ height: "240px", width: "240px" }}
        />
      </div>
    </div>
  );
};

export default BasicMatchers;
