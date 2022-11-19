import React, { ReactNode } from "react";
import styles from "../regexEditor.module.css";

const MatchedText = ({ children }: Props) => {
  return <span className={styles.match}>{children}</span>;
};

type Props = {
  children: ReactNode;
};

export default MatchedText;
