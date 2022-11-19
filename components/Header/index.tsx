import Link from "next/link";
import React from "react";
import {
  cheatsheetIcon,
  learnIcon,
  starIcon,
  testIcon,
} from "../../assets/icons/icons";
import Button from "../Button";
import styles from "./header.module.css";
import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  {
    id: 1,
    label: "Learn",
    icon: learnIcon,
    to: "/learn",
  },
  {
    id: 2,
    label: "Test",
    icon: testIcon,
    to: "/regex-text",
  },
  {
    id: 3,
    label: "Cheatsheet",
    icon: cheatsheetIcon,
    to: "/cheatsheet",
  },
];

const Header = () => {
  console.log(learnIcon);
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`max-width valign flex-between`}>
        <Link href="/">
          <div className={`fs-24`}>RegEx.</div>
        </Link>
        <div className={`valign`}>
          <div className={`valign`}>
            {MENU_ITEMS.map((_item) => (
              <MenuItem item={_item} key={_item.id} />
            ))}
          </div>
          <Button
            type="PRIMARY"
            btnText="Star"
            iconPathLeft={starIcon}
            iconSize={18}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
