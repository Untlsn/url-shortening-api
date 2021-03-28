import styled from 'styled-components';
import SitterSrc from '@assets/icons/illustration-working.svg';
import { PagView } from '@style/reusable';

export const Wrapper = styled(PagView)`
  display: grid;
  align-items: center;  
  height: 100vh;
  padding-top: 4em;
  padding-bottom: 3em;
  @media (orientation: portrait) {
    grid-template-rows: 1fr 1fr;
  }
  @media (orientation: landscape) {
    grid-template-columns: 2fr 1fr;
  }
`;
export const Sitter = styled.img.attrs({ src: SitterSrc, alt: '' })`
  width: 20em;
  position: relative;
  right: -2em;
  grid-row: 1;
  
  @media (orientation: landscape) {
    width: 35em;
    grid-column: 2;
    right: -8em;
  }
`;
