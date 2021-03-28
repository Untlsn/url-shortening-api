import styled from 'styled-components';
import { PagView } from '@style/reusable';
import LogoSrc from '@assets/icons/logo.svg';


export const Wrapper = styled(PagView)`
  position: fixed;
  top: 0;
  z-index: 100;
  height: 5em;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
`;
export const Logo = styled.img.attrs({ src: LogoSrc, alt: '' })``;
