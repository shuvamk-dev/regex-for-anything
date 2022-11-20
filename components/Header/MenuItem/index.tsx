import React from "react";
import Image from "next/image";
import styles from "../header.module.css";
import Link from "next/link";

const MenuItem = (props: Props) => {
  const {
    item: { icon, label, to },
  } = props;

  console.log(props.item);
  return (
    <Link href={to}>
      <div className={`valign  ${styles.menuItem}`}>
        <Image src={icon} alt={label} />
        <span className={`only-mobile`}>{label}</span>
      </div>
    </Link>
  );
};

type Props = {
  item: any;
};

export default MenuItem;
