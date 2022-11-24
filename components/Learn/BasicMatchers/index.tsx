import Lottie from "lottie-react";
import React from "react";
import { keyLottie } from "../../../assets/lottie/lottie";
import RegexEditor from "../../RegexEditor";

const BasicMatchers = () => {
  return (
    <div>
      <div className={`content`}>
        Have you ever used Ctrl + F or Cmd + F and searched for something in a
        doc or some text? You can do literally the same with RegEx. If there’s a
        string <span className="emphasis">I like Pokemon</span> and you want to
        search for any occurrence of <span className="emphasis">Poke</span> in
        this text then you just have to write{" "}
        <span className="emphasis">Poke</span> and with Regex, you’ll be able to
        find one or all such occurrences.
      </div>

      <div className={`content content-gap`}>
        Keep in mind that RegEx is case sensitive by default so for{" "}
        <span className="emphasis">I like Pokemon</span> string,{" "}
        <span className="emphasis">poke</span> will not give any result whereas{" "}
        <span className="emphasis">Poke</span> will match with{" "}
        <span className="emphasis">
          I like <span className="match">Poke</span>mon
        </span>
        .
      </div>
      <div className="challenge-wrapper">
        <div className="valign">
          <Lottie animationData={keyLottie} loop style={{ width: "240px" }} />
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
