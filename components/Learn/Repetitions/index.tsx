import Lottie from "lottie-react";
import React from "react";
import { Lesson6Lottie } from "../../../assets/lottie/lottie";
import styles from "../learn.module.css";

const Repetitions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentSection}>
        <div>
          The meta characters <span className={styles.emphasis}>+</span>,{" "}
          <span className={styles.emphasis}>*</span> or{" "}
          <span className={styles.emphasis}>?</span> are used to specify how
          many times a subpattern can occur. These meta characters act
          differently in different situations.
        </div>
      </div>
      <div className={styles.subHeadingWrapper}>
        <div>Lesson 6.1 The Star</div>
        <Lottie
          animationData={Lesson6Lottie}
          loop={true}
          style={{ height: "120px", width: "120px" }}
        />
      </div>
      <div className={styles.contentSection}>
        <div>
          The <span className={styles.emphasis}>*</span> symbol matches zero or
          more repetitions of the preceding matcher. The regular expression{" "}
          <span className={styles.emphasis}>a*</span>
          means: zero or more repetitions of the preceding lowercase character
          <span className={styles.emphasis}>a</span>. But if it appears after a
          character set or class then it finds the repetitions of the whole
          character set. For example, the regular expression{" "}
          <span className={styles.emphasis}>[a-z]*</span> means: any number of
          lowercase letters in a row.
        </div>
        <div className={styles.example}>
          &quot;[a-z]*&quot; =&gt; T
          <span className={styles.match}>he car parked in the garage</span>.
        </div>
        <div>Test the regular expression</div>
      </div>
      <div className={styles.contentSection}>
        <div>
          The <span className={styles.emphasis}>*</span> symbol matches zero or
          more repetitions of the preceding matcher. The regular expression{" "}
          <span className={styles.emphasis}>a*</span>
          means: zero or more repetitions of the preceding lowercase character
          <span className={styles.emphasis}>a</span>. But if it appears after a
          character set or class then it finds the repetitions of the whole
          character set. For example, the regular expression{" "}
          <span className={styles.emphasis}>[a-z]*</span> means: any number of
          lowercase letters in a row.
        </div>
        <div className={styles.example}>
          &quot;[a-z]*&quot; =&gt; T
          <span className={styles.match}>he car parked in the garage</span>.
        </div>
        <div>Test the regular expression</div>
      </div>
    </div>
  );
};

export default Repetitions;
