import React, { useEffect, useState } from "react";
import { nextIcon, prevIcon } from "../../assets/icons/icons";
import Button from "../../components/Button";

import TwoColLayout from "../../components/TwoColLayout";
import { LESSON_HEADINGS } from "../../data/lessons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  markLessonAsComplete,
  markLessonAsIncomplete,
} from "../../redux/slices/learn";
import { scrollTop } from "../../utils/funcs";
import { Lesson } from "../../utils/types";

import styles from "./learn.module.css";

const Learn = () => {
  const [currentLesson, setCurrentLesson] = useState<Lesson>();

  const lessons = useAppSelector((state) => state.Lessons.lessonsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCurrentLesson(lessons);
    setTimeout(() => {
      scrollTop();
    }, 1);
  }, [lessons]);

  const getCurrentLesson = (lessons: Lesson[]) => {
    const lesson = lessons.filter((lesson) => lesson.isCompleted !== true);
    setCurrentLesson(lesson[0]);
  };

  const markLessonComplete = () => {
    dispatch(markLessonAsComplete(currentLesson!));
  };

  const markLessonIncomplete = () => {
    dispatch(markLessonAsIncomplete(currentLesson!));
  };

  const getLeftContent = () => {
    return (
      <div className={styles.leftWrapper}>
        {currentLesson?.sections.map((section) => (
          <div className={styles.sectionWrapper} key={section.title}>
            <div className={`${styles.sectionHeading} fs-40`}>
              {section.title}
            </div>
            {section.content}
          </div>
        ))}

        <div className={styles.btnWrapper}>
          {currentLesson?.nextHeading && (
            <Button
              type="PRIMARY"
              btnText={currentLesson?.nextHeading}
              onClick={markLessonComplete}
              iconPathRight={nextIcon}
              iconSize={18}
            />
          )}
          {currentLesson?.prevHeading && (
            <Button
              type="SECONDARY"
              btnText={currentLesson?.prevHeading}
              onClick={markLessonIncomplete}
              iconSize={18}
              iconPathLeft={prevIcon}
            />
          )}
        </div>
      </div>
    );
  };

  const getRightContent = () => {
    return (
      <div className={styles.rightWrapper}>
        <div>
          {LESSON_HEADINGS.map((lesson) => (
            <div key={lesson} className={`${styles.lessonName}`}>
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
