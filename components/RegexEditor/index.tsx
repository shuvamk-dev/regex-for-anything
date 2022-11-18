import {
  CompositeDecorator,
  ContentBlock,
  ContentState,
  convertFromRaw,
  Editor,
  EditorState,
} from "draft-js";
import cx from "clsx";

import React, { useRef, useState } from "react";
import "draft-js/dist/Draft.css";

import styles from "./regexEditor.module.css";

const TEXT = "My name is Shuvamk ";

const initialContent = ContentState.createFromText(TEXT);
const HandleSpan = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLSpanElement> &
    React.HTMLAttributes<HTMLSpanElement>
) => {
  return (
    <span {...props} className={styles.match}>
      {props.children}
    </span>
  );
};

const initState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: TEXT,
      type: "unstyled",
      entityRanges: [],
    },
  ],
});

const Highlight = ({ children }) => (
  <span className={styles.match}>{children}</span>
);

const RegexGround = () => {
  const [state, setState] = useState({
    regex: "",
    flags: "",
    editorState: EditorState.createEmpty(),
  });

  const [initial, setInitial] = useState({
    regex: state.regex,
    flags: state.flags,
    text: state.editorState?.getCurrentContent()?.getPlainText() || "",
  });

  const [regexInput, setRegexInput] = useState("");
  const editor = useRef(null);

  const handleRegexInput = (e) => {
    const regex = e?.currentTarget?.value || "";
    setState({
      ...state,
      regex,
      editorState: checkRegex(regex, state.editorState),
    });
  };

  const checkRegex = (regex: string | RegExp, editorState: EditorState) => {
    let rowIndex = 0;
    let matchCount = 0;

    if (!regex) {
      const content = editorState.getCurrentContent();
      return EditorState.createWithContent(content);
    }

    function findWithRegex(content: ContentBlock, callback: Function) {
      // const isMultiple = flags.includes("m");
      const isMultiple = true;
      // const isNeededMultiple = regex.startsWith("^") || regex.endsWith("$");
      const isNeededMultiple = true;

      if (!isMultiple && isNeededMultiple && rowIndex > 0) return;

      // const isGlobal = flags.includes("g");
      const isGlobal = true;

      if (!isGlobal && matchCount > 0) return;

      const text = content.getText();
      const currentRegex = new RegExp(regex, `g`);

      let matches = [...text.matchAll(currentRegex)];

      if (!isGlobal) {
        matches = matches.slice(0, 1);
      }

      if (regex && matches.length) {
        matches.forEach((match) =>
          callback(match.index, match.index + match[0].length)
        );
      }

      if (matches.length) {
        matchCount++;
      }

      rowIndex++;
    }

    function handleStrategy(content: ContentBlock, callback: Function) {
      try {
        findWithRegex(content, callback);
      } catch (err) {}
    }

    const HighlightDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: Highlight,
      },
    ]);

    return EditorState.createWithContent(
      editorState.getCurrentContent(),
      HighlightDecorator
    );
  };

  const onChangeContent = (editorState: EditorState) => {
    setState({ ...state, editorState });
  };

  return (
    <div>
      <input
        value={state.regex}
        spellCheck={false}
        onInput={handleRegexInput}
      />
      <div onClick={() => editor.current.focus()}>
        <div>
          <div>
            <Editor
              ref={editor}
              editorState={state.editorState}
              onChange={onChangeContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegexGround;
