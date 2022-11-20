import Image from "next/image";
import React from "react";
import { flagIcon } from "../../../assets/icons/icons";
import styles from "./flags.module.css";

const Flags = () => {
  return (
    <div className={`absolute-center ${styles.wrapper}`}>
      <Image src={flagIcon} alt="Flags" height={16} />
    </div>
  );
};

export default Flags;
