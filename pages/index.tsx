import React from "react";
import AutoComplete from "../components/AutoComplete";
import Button from "../components/Button";

import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <div className={styles.heading}>RegEX.</div>
        <div className={styles.subHeading}>
          Quickly find most used Regular Expressions.
        </div>

        <AutoComplete />
      </div>

      <div className={styles.btnWrapper}>
        <div className={styles.button}>
          <Button btnText="STAR ON GITHUB" />
        </div>
        <div className={styles.button}>
          <Button btnText="LEARN REGEX" />
        </div>
      </div>
    </div>
  );
};

export default Home;
