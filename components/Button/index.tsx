import Image from "next/image";
import React from "react";

import styles from "./button.module.css";

const Button = (props: any) => {
  const { btnText, onClick, iconPathLeft, type, iconPathRight, iconSize } =
    props;

  const getClassName = () => {
    switch (type) {
      case "PRIMARY":
        return `${styles.primaryBtn} ${styles.button} valign`;
      case "SECONDARY":
        return `${styles.secondaryBtn} ${styles.button} valign`;
    }
  };

  return (
    <div onClick={onClick} className={getClassName()}>
      {iconPathLeft && (
        <Image
          src={iconPathLeft}
          alt={btnText}
          height={iconSize}
          width={iconSize}
        />
      )}
      <div className={styles.btnText}>{btnText}</div>
      {iconPathRight && (
        <Image
          src={iconPathRight}
          alt={btnText}
          height={iconSize}
          width={iconSize}
        />
      )}
    </div>
  );
};

export default Button;
