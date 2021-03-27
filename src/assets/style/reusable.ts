import styled, { css } from 'styled-components';

export const PagView = styled.div`
  padding: 0 1em;
  width: 100vw;
  
  @media (orientation: landscape) {
    padding: 0 10em;
  }
`;

export const whiteHover = (opacity: number, time = .2) => css`
  position: relative;
  &::before {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background-color: white;
    opacity: 0;
    transition: opacity ${time}s;
  }
  &:hover::before {
    opacity: ${opacity};
  }
`;
