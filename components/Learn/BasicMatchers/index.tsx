import Lottie from "lottie-react";
import React from "react";
import { IntroWarrior } from "../../../assets/lottie/lottie";
import RegexEditor from "../../RegexEditor";

const BasicMatchers = () => {
  return (
    <div>
      <div className={`content`}>
        Have you ever used Ctrl + F or Cmd + F and searched for something in a
        doc or some text? You can do literally the same with RegEx. If there’s a
        string “I like Pokemon” and you want to search for any occurrence of
        “Poke” in this text then you just have to write Poke and with Regex,
        you’ll be able to find one or all such occurrences.
      </div>

      <div className={`content content-gap`}>
        Keep in mind that RegEx is case sensitive by default so for “I like
        Pokemon” poke will not give any result whereas Poke will match with “I
        like Pokemon”.
      </div>
      <div className="challenge-wrapper">
        <div className="valign">
          <Lottie
            animationData={IntroWarrior}
            loop
            style={{ width: "240px" }}
          />
          <div className="challenge-question">
            In the first challenge, you found a crate and there’s a scroll with
            a message, you have to find the key in it. Use your Regex editor and
            you’ll be good to go.
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

export default BasicMatchers;
