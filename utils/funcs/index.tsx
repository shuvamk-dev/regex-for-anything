export const setCaretPosition = (
  inputEl: HTMLInputElement | null,
  pos: number
): void => {
  if (!inputEl || !inputEl.setSelectionRange) return;

  inputEl.focus();
  inputEl.setSelectionRange(pos, pos);
};

export const copyToClipboard = async (content: string) => {
  try {
    await navigator.clipboard.writeText(content);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

export const scrollTop = () => {
  console.log("HERR");
  window.scrollTo({ top: 0, behavior: "smooth" });
};
