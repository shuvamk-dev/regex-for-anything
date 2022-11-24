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
    id: 1,
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
    id: 2,
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
    id: 3,
    isCompleted: false,
    heading: "Meta Characters",
    nextHeading: "Character Sets",
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
    ],
  },
  {
    id: 4,
    isCompleted: false,
    heading: "Meta Characters",
    prevHeading: "Basic Matchers",
    sections: [
      {
        title: "Character Sets []",
        content: <CharacterSets />,
      },
      {
        title: "Negated Character Sets",
        content: <CharacterSets />,
      },
    ],
  },
];
