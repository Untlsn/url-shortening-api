import styled, { css } from 'styled-components';

export const Hamburger = styled.div.attrs({
  gap: '.4em'
})<{ gap?: string, clicked: boolean }>`
  position: relative;
  margin-right: 5vw;
  transition: background-color 1s;
  
  &, &::before, &::after {
    height: .1em;
    width: 1.5em;
    background-color: ${({ theme }) => theme.colors.black};
  }
  &::after, &::before {
    content: '';
    position: absolute;
    transition: transform 1s;
  }
  &::before {
    top: ${({ gap }) => gap};
  }
  &::after {
    bottom: ${({ gap }) => gap};
  }
  
  ${({ clicked }) => onHamburgerClick(clicked)}
`;

const onHamburgerClick = (bool: boolean) => bool
  ? css`
    background-color: transparent !important;
    &::before {
      transform: translateY(-.4em) rotate(45deg);
    }
    &::after {
      transform: translateY(.4em) rotate(-45deg);
    }
  ` : css``;
