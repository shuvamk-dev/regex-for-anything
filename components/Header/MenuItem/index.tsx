import React from "react";
import Image from "next/image";
import styles from "../header.module.css";

const MenuItem = (props: Props) => {
  const {
    item: { icon, label },
  } = props;

  console.log(props.item);
  return (
    <div className={`valign  ${styles.menuItem}`}>
      <Image src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

type Props = {
  item: any;
};

export default MenuItem;
