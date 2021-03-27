export interface ShortedLinkProps {
  longLink: string,
  isCopied: boolean,
  index: number
  onCopied: (key: number) => void
}
