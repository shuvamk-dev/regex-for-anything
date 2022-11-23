import { Lesson } from "../utils/types";
import Introduction from "../components/Learn/Intro";
import BasicMatchers from "../components/Learn/BasicMatchers";

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
    sections: [
      {
        title: "Introduction",
        content: <Introduction />,
      },
    ],
  },
  {
    isCompleted: false,
    heading: "Basic Matchers",
    prevHeading: "Introduction",
    nextHeading: "Meta Characters",
    sections: [
      {
        title: "Basic Matchers",
        content: <BasicMatchers />,
      },
    ],
  },
];
