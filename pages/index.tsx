import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";
import AutoComplete from "../components/AutoComplete";
import Button from "../components/Button";

import EmptyStateLottie from "../assets/lottie/emptyState.json";

import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={`${styles.wrapper} bg-red`}>
      <div className={styles.topSection}>
        <div className={styles.heading}>
          <Lottie
            animationData={EmptyStateLottie}
            style={{ height: "160px" }}
            loop={true}
            className={styles.lottie}
          />
          RegEX.
        </div>

        <div className={styles.subHeading}>
          Quickly find most used Regular Expressions.
        </div>

        <AutoComplete />
      </div>

      <div className={styles.btnWrapper}>
        <Link
          target={"_blank"}
          className={styles.button}
          href="https://github.com/shuvamk/regex-for-anything"
        >
          <Button btnText="STAR ON GITHUB" />
        </Link>

        <Link href="/learn" className={styles.button}>
          <Button btnText="LEARN REGEX" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
