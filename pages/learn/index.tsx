import React, { useState } from "react";
import { LESSONS } from "../../common/constants/learn";
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

  const getLeftContent = () => {
    return getCurrentLesson();
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
            <div>Quest Progress</div>
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
