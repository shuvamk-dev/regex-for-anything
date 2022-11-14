import Lottie from "lottie-react";
import Link from "next/link";
import React, { useState } from "react";
import { LESSONS } from "../../common/constants/learn";
import Button from "../../components/Button";
import BasicMatchers from "../../components/Learn/BasicMatchers";
import Intro from "../../components/Learn/Intro";
import MetaCharacters from "../../components/Learn/MetaCharacters";

import styles from "./learn.module.css";

const Learn = () => {
  const [currentLesson, setCurrentLesson] = useState<number>(1);

  const getCurrentLesson = () => {
    switch (currentLesson) {
      case 1:
        return <Intro />;
      case 2:
        return <BasicMatchers />;
      case 3:
        return <MetaCharacters />;
    }
  };

  const showNextLesson = () => {
    setCurrentLesson(currentLesson + 1);
  };

  const showPreviousLesson = () => {
    setCurrentLesson(currentLesson - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerContent}>
        <div className={styles.headingWrapper}>
          <div className={styles.heading}>LEARN REGEX</div>
          <Link href="/learn/cheatsheet" className={styles.button}>
            <Button btnText="CHEATSHEET" />
          </Link>
        </div>
        <div className={styles.lessonWrapper}>
          <div className={styles.lessonHeading}>
            Lesson {currentLesson}: {LESSONS[currentLesson - 1]?.heading}
          </div>
          <div className={styles.lessonContent}>{getCurrentLesson()}</div>
          <div className={styles.buttonWrapper}>
            <div
              className={`${
                currentLesson === 1 ? styles.hidden : styles.visible
              }`}
            >
              <Button
                btnText={`Prev: ${LESSONS[currentLesson - 2]?.heading}`}
                onClick={showPreviousLesson}
              />
            </div>
            <div
              className={`${
                currentLesson === LESSONS.length
                  ? styles.hidden
                  : styles.visible
              }`}
            >
              <Button
                btnText={`Next: ${LESSONS[currentLesson]?.heading}`}
                onClick={showNextLesson}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
