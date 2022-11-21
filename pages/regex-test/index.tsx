import React from "react";
import RegexEditor from "../../components/RegexEditor";
import TwoColLayout from "../../components/TwoColLayout";
import styles from "./regexTest.module.css";

const RegexTest = () => {
  const getLeftContent = () => {
    return (
      <div className={`${styles.wrapper}`}>
        <RegexEditor textEditable={true} regexEditable={true} />
      </div>
    );
  };
  return <TwoColLayout leftContent={getLeftContent()} />;
};

export default RegexTest;
