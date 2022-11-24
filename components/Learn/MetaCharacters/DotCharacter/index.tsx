import Lottie from "lottie-react";
import React from "react";
import { keyLottie } from "../../../../assets/lottie/lottie";
import RegexEditor from "../../../RegexEditor";

const DotCharacter = () => {
  return (
    <div>
      <div className={`content`}>
        Call it the “Period Character” or “Full Stop” it’s all the same. Potato
        Poatato - Pheebs. So if you want to select each character of the string
        individually then this is your tool, just type . in the regex and you’ll
        select each and every character of the string.
      </div>

      <div className={`content content-gap`}>
        Example, I want to count the number of characters in this string “I wish
        I had a million dollars”, you’d say we can directly get the length by
        str.length (ikr 👹) but we just have one tool that is “RegEx”, with
        regex I can do:
      </div>
      <div className="challenge-wrapper">
        <div className="valign">
          <Lottie animationData={keyLottie} loop style={{ width: "240px" }} />
          <div className="challenge-question">
            In your quest to become “String Ninja” you found an old crate with
            tons of potions which might be handy in future, just grab each and
            every element of this crate individually, I hope you know how to do
            this 😉
          </div>
        </div>
        <div>
          <RegexEditor
            textEditable={false}
            regexEditable={true}
            hideCopyOptions={true}
            hideFlagOptions={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DotCharacter;
