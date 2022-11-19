export const setCaretPosition = (
  inputEl: HTMLInputElement | null,
  pos: number
): void => {
  if (!inputEl || !inputEl.setSelectionRange) return;

  inputEl.focus();
  inputEl.setSelectionRange(pos, pos);
};
