import Lottie from "lottie-react";
import React from "react";
import { Lesson5Lottie } from "../../../assets/lottie/lottie";
import styles from "../learn.module.css";

const CharacterSets = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentSection}>
        <div>
          Character sets are also called character classes. Square brackets are
          used to specify character sets. Use a hyphen inside a character set to
          specify the characters&apos; range. The order of the character range
          inside the square brackets doesn&apos;t matter. For example, the
          regular expression <span className={styles.emphasis}>[Tt]he</span>{" "}
          means: an uppercase <span className={styles.emphasis}>T</span> or
          lowercase <span className={styles.emphasis}>t</span>, followed by the
          letter <span className={styles.emphasis}>h</span>, followed by the
          letter <span className={styles.emphasis}>e</span>.
        </div>
        <div className={styles.example}>
          &quot;[Tt]he&quot; =&gt; <span className={styles.match}>The</span> car
          parked in <span className={styles.match}>the</span> garage.
        </div>
        <div>Test the regular expression</div>
      </div>
      <div className={styles.contentSection}>
        <div>
          A period inside a character set, however, means a literal period. The
          regular expression <span className={styles.emphasis}>ar[.]</span>{" "}
          means: a lowercase character{" "}
          <span className={styles.emphasis}>a</span>, followed by the letter{" "}
          <span className={styles.emphasis}>r</span>, followed by a period{" "}
          <span className={styles.emphasis}>.</span> character.
        </div>
        <div className={styles.example}>
          &quot;ar[.]&quot; =&gt; A garage is a good place to park a c
          <span className={styles.match}>ar</span>.
        </div>
        <div>Test the regular expression</div>
      </div>
      <div className={styles.subHeadingWrapper}>
        <div>Lesson 5.1 Negated Character Sets</div>
        <Lottie
          animationData={Lesson5Lottie}
          loop={true}
          style={{ height: "150px", width: "150px" }}
        />
      </div>
      <div className={styles.contentSection}>
        <div>
          In general, the caret symbol represents the start of the string, but
          when it is typed after the opening square bracket it negates the
          character set. For example, the regular expression{" "}
          <span className={styles.emphasis}>[^c]ar</span> means: any character
          except <span className={styles.emphasis}>c</span>, followed by the
          character <span className={styles.emphasis}>a</span>, followed by the
          letter <span className={styles.emphasis}>r</span>.
        </div>
        <div className={styles.example}>
          &quot;[^c]ar&quot; =&gt; The car{" "}
          <span className={styles.match}>par</span>ked in the{" "}
          <span className={styles.match}>gar</span>age.
        </div>
        <div>Test the regular expression</div>
      </div>
    </div>
  );
};

export default CharacterSets;
