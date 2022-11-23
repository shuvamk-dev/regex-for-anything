import { Lesson } from "../utils/types";
import Introduction from "../components/Learn/Intro";

export const LESSON_HEADINGS = [
  "Introduction",
  "Basic 101",
  "Representing Sets",
  "Lookarounds",
  "All about Flags",
  "Greedy & Lazy",
];

export const LESSONS_DATA: Lesson[] = [
  {
    isCompleted: false,
    heading: "Introduction",
    nextHeading: "Basic Matchers",
    prevHeading: "kchj",
    sections: [
      {
        title: "Introduction",
        content: <Introduction />,
      },
    ],
  },
];
