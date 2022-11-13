import Image from "next/image";
import React from "react";
import { RegexQuery } from "../../../utils/types";

import styles from "./resultItem.module.css";

const ResultItem = (props: { result: RegexQuery }) => {
  const { result } = props;

  const handleCopyToClipboard = async (item: RegexQuery) => {
    try {
      await navigator.clipboard.writeText(item.regex);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div key={result.id} className={styles.resultItem}>
      <div className={styles.resultItemLeft}>
        <div>{result.query}</div>
        <div className={styles.regex}>{result.regex}</div>
      </div>
      <div
        onClick={() => handleCopyToClipboard(result)}
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
