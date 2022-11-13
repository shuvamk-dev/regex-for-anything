import React from "react";
import AutoComplete from "../components/AutoComplete";

import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>RegEX.</div>
      <div className={styles.subHeading}>
        Quicky find most used Regular Expressions.
      </div>

      <AutoComplete />
    </div>
  );
};

export default Home;
