import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

import TwoColLayout from "../../components/TwoColLayout";
import { LESSON_HEADINGS } from "../../data/lessons";
import { useAppSelector } from "../../redux/hooks";
import { Lesson } from "../../utils/types";

import styles from "./learn.module.css";

const Learn = () => {
  const [currentLesson, setCurrentLesson] = useState<Lesson>();

  const lessons = useAppSelector((state) => state.Lessons.lessonsData);

  useEffect(() => {
    getCurrentLesson(lessons);
  }, [lessons]);

  const getCurrentLesson = (lessons: Lesson[]) => {
    const lesson = lessons.filter((lesson) => lesson.isCompleted !== true);
    setCurrentLesson(lesson[0]);
  };

  const getLeftContent = () => {
    return (
      <>
        {currentLesson?.sections.map((section) => (
          <div key={section.title} className={styles.sectionWrapper}>
            <div className={`${styles.sectionHeading} fs-40`}>
              {section.title}
            </div>
            {section.content}
          </div>
        ))}

        <div className={styles.btnWrapper}>
          {currentLesson?.nextHeading && (
            <Button type="PRIMARY" btnText={currentLesson?.nextHeading} />
          )}
          {currentLesson?.prevHeading && (
            <Button type="SECONDARY" btnText={currentLesson?.prevHeading} />
          )}
        </div>
      </>
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
