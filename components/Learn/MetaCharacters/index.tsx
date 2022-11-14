import React from "react";
import Lottie from "lottie-react";

import styles from "./metaCharacters.module.css";

import CalmLottie from "../../../assets/lottie/calm.json";

const META_CHARACTERS: { char: string; description: string }[] = [
  {
    char: ".",
    description: "Period matches any single character except a line break.",
  },
  {
    char: "[ ]",
    description:
      "Character class. Matches any character contained between the square brackets.",
  },
  {
    char: "[^ ]",
    description:
      "Negated character class. Matches any character that is not contained between the square brackets",
  },
  {
    char: "*",
    description: "Matches 0 or more repetitions of the preceding symbol.",
  },
  {
    char: "+",
    description: "Matches 1 or more repetitions of the preceding symbol.",
  },
  {
    char: "?",
    description: "Makes the preceding symbol optional.",
  },
  {
    char: "{n,m}",
    description:
      "Braces. Matches at least 'n' but not more than 'm' repetitions of the preceding symbol.",
  },
  {
    char: "(xyz)",
    description:
      "Character group. Matches the characters xyz in that exact order.",
  },
  {
    char: "|",
    description:
      "Alternation. Matches either the characters before or the characters after the symbol.",
  },
  {
    char: "\\",
    description:
      "Escapes the next character. This allows you to match reserved characters [ ] ( ) { } . * + ? ^ $  |",
  },
  {
    char: "^",
    description: "Matches the beginning of the input.",
  },
  {
    char: "$",
    description: "Matches the end of the input.",
  },
];

const MetaCharacters = () => {
  return (
    <div>
      <div className={styles.topInfo}>
        <div>
          Meta characters are the building blocks of regular expressions. Meta
          characters do not stand for themselves but instead are interpreted in
          some special way. Some meta characters have a special meaning and are
          written inside square brackets. The meta characters are as follows:
        </div>
        <div>
          <Lottie
            animationData={CalmLottie}
            style={{ height: "180px", width: "200px" }}
            loop={true}
          />
        </div>
      </div>
      <div>
        <table className={styles.table}>
          <tr>
            <th className={styles.tableHeading}>Meta Character</th>
            <th className={styles.tableHeading}>Description</th>
          </tr>
          {META_CHARACTERS.map((row, i) => (
            <tr key={i} className={styles.tableRow}>
              <td className={styles.tableData}>{row.char}</td>
              <td className={styles.tableData}>{row.description}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MetaCharacters;
