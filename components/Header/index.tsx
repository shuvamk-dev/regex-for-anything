import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
    to: "/regex-test",
  },
  {
    id: 3,
    label: "Cheatsheet",
    icon: cheatsheetIcon,
    to: "/cheatsheet",
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    getActiveTab(pathname);
  }, [pathname]);

  const getActiveTab = (pathname: string) => {
    switch (pathname) {
      case "/":
        return setActiveTab("Home");
      case "/learn":
        return setActiveTab("Learn");
      case "/regex-test":
        return setActiveTab("Test");
      case "/cheatsheet":
        return setActiveTab("Cheatsheet");
    }
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`max-width valign flex-between`}>
        <Link href="/">
          <div
            className={`fs-24 ${activeTab === "Home" ? styles.homeTab : ""}`}
          >
            RegEx.
          </div>
        </Link>
        <div className={`valign`}>
          <div className={`valign`}>
            {MENU_ITEMS.map((_item) => (
              <MenuItem
                item={_item}
                key={_item.id}
                isActive={activeTab === _item.label}
              />
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
