import Lottie from "lottie-react";
import Link from "next/link";
import React, { useState } from "react";
import { LESSONS } from "../../common/constants/learn";
import Button from "../../components/Button";
import BasicMatchers from "../../components/Learn/BasicMatchers";
import CharacterSets from "../../components/Learn/CharacterSets";
import Intro from "../../components/Learn/Intro";
import MetaCharacters from "../../components/Learn/MetaCharacters";
import Repetitions from "../../components/Learn/Repetitions";
import TheFullStop from "../../components/Learn/TheFullStop";
import TwoColLayout from "../../components/TwoColLayout";
import { LESSON_HEADINGS } from "../../data/lessons";

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
      case 4:
        return <TheFullStop />;
      case 5:
        return <CharacterSets />;
      case 6:
        return <Repetitions />;
    }
  };

  const showNextLesson = () => {
    setCurrentLesson(currentLesson + 1);
  };

  const showPreviousLesson = () => {
    setCurrentLesson(currentLesson - 1);
  };

  const getLeftContent = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.innerContent}>
          <div className={styles.headingWrapper}>
            <div className={styles.lessonHeading}>
              Lesson {currentLesson}: {LESSONS[currentLesson - 1]?.heading}
            </div>
          </div>

          <div className={styles.lessonWrapper}>
            <div className={styles.lessonContent}>{getCurrentLesson()}</div>
          </div>
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
            {currentLesson === LESSONS.length ? (
              <div>
                <Button btnText={`Star on Github`} onClick={showNextLesson} />
              </div>
            ) : (
              <div>
                <Button
                  btnText={`Next: ${LESSONS[currentLesson]?.heading}`}
                  onClick={showNextLesson}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const getRightContent = () => {
    return (
      <div className={styles.rightWrapper}>
        <div>
          {LESSON_HEADINGS.map((lesson) => (
            <div
              key={lesson}
              className={`${
                lesson === LESSONS[currentLesson - 1].heading
                  ? styles.activeLesson
                  : styles.lessonName
              }`}
            >
              {lesson}
            </div>
          ))}
        </div>
        <div className={`${styles.progressWrapper} fs-14`}>
          <div className={``}>
            <div>Questions Completed:</div>
            <div>10/36</div>
          </div>
          <progress id="file" value="32" max="100" />
        </div>
      </div>
    );
  };

  return (
    <TwoColLayout
      leftContent={getLeftContent()}
      rightContent={getRightContent()}
    />
  );
};

export default Learn;
