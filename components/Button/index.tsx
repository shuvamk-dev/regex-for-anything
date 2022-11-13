import Image from "next/image";
import React from "react";

import styles from "./button.module.css";

const Button = (props: any) => {
  const { btnText, onClick, iconPath } = props;
  return (
    <div onClick={onClick} className={styles.wrapper}>
      {iconPath && <Image src={iconPath} alt={btnText} />}
      <div>{btnText}</div>
    </div>
  );
};

export default Button;
