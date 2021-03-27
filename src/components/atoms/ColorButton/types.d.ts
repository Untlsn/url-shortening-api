import { MouseEvent } from 'react';

export interface ColorButtonProps {
  children: string
  className?: string
  round?: boolean
  onClick(ev: MouseEvent<HTMLButtonElement>): void
}
