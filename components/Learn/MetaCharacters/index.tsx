import React from "react";
import RegexEditor from "../../RegexEditor";

const MetaCharcters = () => {
  return (
    <div>
      <div className={`content`}>
        These are some really powerful characters that you can use for search
        criteria and text manipulations. In the following example you can see a
        lot of extra characters other than normal alphabets are being used, all
        these are Meta Characters and let’s start learning these.
      </div>

      <div className="challenge-wrapper">
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

export default MetaCharcters;
