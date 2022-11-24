import Lottie from "lottie-react";
import React from "react";
import { keyLottie } from "../../../../assets/lottie/lottie";
import RegexEditor from "../../../RegexEditor";

const CharacterSets = () => {
  return (
    <div>
      <div className={`content`}>
        These are also called character classes, imagine these square brackets
        as a container. A container for any arbitrary character.
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

export default CharacterSets;
