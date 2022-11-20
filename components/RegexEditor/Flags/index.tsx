import React, { useState } from "react";
import Image from "next/image";
import {
  flagIcon,
  notSelectedOptionIcon,
  selectedOptionIcon,
} from "../../../assets/icons/icons";
import styles from "./flags.module.css";

const FLAGS = [
  {
    id: 1,
    flag: "g",
    label: "Global",
  },
  {
    id: 2,
    flag: "m",
    label: "Multiline",
  },
  {
    id: 3,
    flag: "i",
    label: "Case insensitive",
  },
];

const Flags = (props: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const { flags, handleFlagSelection } = props;

  const toggleOptions = () => {
    return setShowOptions(!showOptions);
  };

  const setFlagOption = (
    flag: string,
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    handleFlagSelection(flag);
  };

  return (
    <div
      className={`absolute-center ${styles.wrapper}`}
      onClick={toggleOptions}
    >
      <Image src={flagIcon} alt="Flags" height={16} />
      {showOptions && (
        <div className={`${styles.optionsWrapper}`}>
          {FLAGS.map((flag) => (
            <div key={flag.id} className={`valign ${styles.option}`}>
              <Image
                src={
                  flags?.indexOf(flag.flag) > -1
                    ? selectedOptionIcon
                    : notSelectedOptionIcon
                }
                alt="CheckBox"
                onClick={(e) => setFlagOption(flag.flag, e)}
              />
              <div className={`fs-14 ${styles.label}`}>{flag.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

type Props = {
  flags: string[];
  handleFlagSelection: (flag: string) => void;
};

export default Flags;
