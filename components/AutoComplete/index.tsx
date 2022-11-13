import Image from "next/image";
import React, { useState } from "react";
import { REGEX } from "../../data/regex";
import { RegexQuery } from "../../utils/types";
import EmptyState from "../EmptyState";
import styles from "./autoComplete.module.css";
import ResultItem from "./ResultItem";

const AutoComplete = () => {
  const [results, setResults] = useState<RegexQuery[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e: any) => {
    setSearchInput(e.target.value);
    getFiltredResults(e.target.value);
  };

  const getFiltredResults = (query: string) => {
    const _results = REGEX.filter((_item) =>
      _item.query.includes(query.toUpperCase())
    );
    setResults(_results);
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
        <div className={styles.searchIconWrapper}>
          <Image
            src={require("../../assets/icons/search.svg")}
            alt="Copy"
            height={20}
            className={styles.searchIcon}
          />
        </div>
      </div>
      {searchInput.length > 0 && (
        <div className={styles.resultWrapper}>
          {results.length > 0 ? (
            results.map((_result) => (
              <ResultItem result={_result} key={_result.id} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
