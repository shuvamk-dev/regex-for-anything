import Lottie from "lottie-react";
import React from "react";
import { Lesson4Lottie } from "../../../assets/lottie/lottie";

import styles from "./theFullStop.module.css";

const TheFullStop = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          character <span className={styles.emphasis}>.</span> matches any
          single character. It will not match return or newline characters. For
          example, the regular expression{" "}
          <span className={styles.emphasis}>.ar</span> means: any character,
          followed by the letter <span className={styles.emphasis}>a</span>,
          followed by the letter <span className={styles.emphasis}>r</span>.
        </div>
        <div className={styles.example}>
          &quot;.ar&quot; =&gt; The{" "}
          <span className={styles.match}>car par</span>
          ked in the <span className={styles.match}>gar</span>age.
        </div>
        <div>Test the regular expression</div>
      </div>
      <div>
        <Lottie
          animationData={Lesson4Lottie}
          style={{ height: "180px", width: "200px" }}
          loop={true}
        />
      </div>
    </div>
  );
};

export default TheFullStop;
