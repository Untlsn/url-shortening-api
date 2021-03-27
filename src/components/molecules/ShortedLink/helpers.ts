export const onButtonClick = (shortLink: string, changeIsCopied: (force: boolean) => void) => () => {
  navigator.clipboard.writeText(shortLink);
  changeIsCopied(true);
};
