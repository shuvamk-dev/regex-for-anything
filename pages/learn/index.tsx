import Lottie from "lottie-react";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../../components/Button";
import BasicMatchers from "../../components/Learn/BasicMatchers";
import Intro from "../../components/Learn/Intro";
import styles from "./learn.module.css";

const Learn = () => {
  const [currentLesson, setCurrentLesson] = useState(1);

  const getCurrentLesson = () => {
    switch (currentLesson) {
      case 1:
        return <Intro />;
      case 2:
        return <BasicMatchers />;
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
          <div className={styles.lessonHeading}>Lesson 1: Introduction</div>
          <div className={styles.lessonContent}>{getCurrentLesson()}</div>
          <div className={styles.buttonWrapper}>
            <div>
              <Button
                btnText="Next: Basic Matchers"
                onClick={showPreviousLesson}
              />
            </div>
            <div>
              <Button btnText="Next: Basic Matchers" onClick={showNextLesson} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
