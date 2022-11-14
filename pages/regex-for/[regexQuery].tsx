import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { REGEX } from "../../data/regex";
import { RegexQuery } from "../../utils/types";

const RegexFor = () => {
  const [regexData, setRegexData] = useState<RegexQuery[]>();
  const router = useRouter();

  useEffect(() => {
    const regexQuery = router.query;
    console.log(router.query);
    // const data = REGEX.filter((item) =>
    //   item.query.includes(regexQuery?.toUppercase())
    // );
  }, [router]);

  return <div>RegexFor</div>;
};

export default RegexFor;
