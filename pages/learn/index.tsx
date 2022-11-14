import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";
import Button from "../../components/Button";
import Intro from "../../components/Learn/Intro";
import styles from "./learn.module.css";

const Learn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerContent}>
        <div className={styles.headingWrapper}>
          <div className={styles.heading}>LEARN REGEX</div>
          <Link href="/learn/cheatsheet" className={styles.button}>
            <Button btnText="CHEATSHEET" />
          </Link>
        </div>
        <Intro />
      </div>
    </div>
  );
};

export default Learn;
