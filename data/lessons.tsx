import { Lesson } from "../utils/types";
import Introduction from "../components/Learn/Intro";
import BasicMatchers from "../components/Learn/BasicMatchers";
import MetaCharcters from "../components/Learn/MetaCharacters";
import DotCharacter from "../components/Learn/MetaCharacters/DotCharacter";
import CharacterSets from "../components/Learn/MetaCharacters/CharacterSets";

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
  {
    isCompleted: false,
    heading: "Meta Characters",
    prevHeading: "Basic Matchers",
    sections: [
      {
        title: "Meta Characters",
        content: <MetaCharcters />,
      },
      {
        title: "Dot. Character",
        content: <DotCharacter />,
      },
      {
        title: "Character Sets []",
        content: <CharacterSets />,
      },
    ],
  },
];
