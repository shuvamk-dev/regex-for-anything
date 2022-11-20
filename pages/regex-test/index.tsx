import React from "react";
import RegexEditor from "../../components/RegexEditor";
import styles from "./regexTest.module.css";

const RegexTest = () => {
  return (
    <div className={`max-width ${styles.wrapper}`}>
      <RegexEditor />
    </div>
  );
};

export default RegexTest;
