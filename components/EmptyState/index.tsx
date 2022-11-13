import React from "react";
import Lottie from "lottie-react";
import styles from "./emptyState.module.css";

import EmptyStateLottie from "../../assets/lottie/emptyState.json";
import Button from "../Button";

const EmptyState = () => {
  return (
    <div className={styles.wrapper}>
      <Lottie
        animationData={EmptyStateLottie}
        style={{ height: "160px" }}
        loop={true}
      />
      <div>Oops! Looks like we miss something, add here:</div>
      <div className={styles.button}>
        <Button btnText="GITHUB" />
      </div>
    </div>
  );
};

export default EmptyState;
