import React, { useState } from "react";
import { REGEX } from "../../data/regex";
import { RegexQuery } from "../../utils/types";
import styles from "./autoComplete.module.css";

const AutoComplete = () => {
  const [results, setResults] = useState<RegexQuery[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e: any) => {
    setSearchInput(e.target.value);
    const _results = REGEX.filter((_item) =>
      _item.query.includes(e.target.value)
    );
    setResults(_results);
  };

  const handleCopyToClipboard = async (item: RegexQuery) => {
    try {
      await navigator.clipboard.writeText(item.regex);
      console.log("Content copied to clipboard", item.regex);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.textInput}
          onChange={handleSearchInputChange}
          value={searchInput}
          placeholder="Search here"
        />
      </div>
      {results.length > 0 && (
        <div className={styles.resultWrapper}>
          {results.map((_result) => (
            <div key={_result.id} className={styles.resultItem}>
              <div className={styles.resultItemLeft}>
                <div>{_result.query}</div>
                <div className={styles.regex}>{_result.regex}</div>
              </div>
              <div
                onClick={() => handleCopyToClipboard(_result)}
                className={styles.copyToClipboard}
              >
                Copy to clipboard
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
