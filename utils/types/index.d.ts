export type RegexQuery = {
  id: number;
  query: string;
  regex: string;
};

export type Section = {
  title: string;
  content: JSX.Element;
};

export type Lesson = {
  isCompleted: boolean;
  heading: string;
  nextHeading?: string;
  prevHeading?: string;
  sections: Section[];
  id: number;
};
