import React, { ReactNode } from "react";
import styles from "./twoColLayout.module.css";

const TwoColLayout = (props: Props) => {
  const { rightContent, leftContent } = props;
  return (
    <div className={`max-width ${styles.wrapper}`}>
      <div className={styles.leftContent}>{leftContent}</div>
      <div className={styles.rightContent}>{rightContent}</div>
    </div>
  );
};

type Props = {
  rightContent?: ReactNode;
  leftContent: ReactNode;
};

export default TwoColLayout;
