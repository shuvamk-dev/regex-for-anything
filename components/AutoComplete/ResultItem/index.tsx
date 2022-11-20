import React from "react";
import Image from "next/image";
import { copyToClipboard } from "../../../utils/funcs";
import { RegexQuery } from "../../../utils/types";

import styles from "./resultItem.module.css";

const ResultItem = (props: { result: RegexQuery }) => {
  const { result } = props;

  return (
    <div key={result.id} className={styles.resultItem}>
      <div className={styles.resultItemLeft}>
        <div>{result.query}</div>
        <div className={styles.regex}>{result.regex}</div>
      </div>
      <div
        onClick={() => copyToClipboard(result.regex)}
        className={styles.copyToClipboard}
      >
        <Image
          src={require("../../../assets/icons/copy.svg")}
          alt="Copy"
          height={20}
        />
      </div>
    </div>
  );
};

export default ResultItem;
