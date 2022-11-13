import { RegexQuery } from "../utils/types";

export const REGEX: RegexQuery[] = [
  {
    id: 1,
    query: "UPI",
    regex: "[a-zA-Z0-9\\.\\-]{2,256}\\@[a-zA-Z][a-zA-Z]{2,64}",
  },
  {
    id: 2,
    query: "PASSPORT",
    regex: "/^[A-PR-WY][1-9]ds?d{4}[1-9]$/",
  },
  {
    id: 3,
    query: "CREDIT CARDS",
    regex:
      "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})$",
  },
  {
    id: 4,
    query: "ALPHANUMERIC CHARACTERS",
    regex: "^[a-zA-Z0-9]+$",
  },
  {
    id: 5,
    query: "IP ADDRESS",
    regex:
      "/^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/",
  },
  {
    id: 6,
    query: "US SOCIAL SECURITY NUMBER",
    regex: "/^([0-9]{3}[-]*[0-9]{2}[-]*[0-9]{4})*$/",
  },
  {
    id: 7,
    query: "URL",
    regex:
      "^((http|https|ftp)://)?([[a-zA-Z0-9]-.])+(.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]/+=%&_.~?-]*)$",
  },
  {
    id: 8,
    query: "EMAIL",
    regex: "^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$",
  },
];
