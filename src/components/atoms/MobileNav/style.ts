import styled, {css} from 'styled-components';
import {Link} from 'gatsby';

export const Wrapper = styled.nav<{ show: boolean }>`
  position: absolute;
  
  top: 15vh;
  right: 0;
  left: 0;
  margin: auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: .5em;
  
  width: 90vw;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateX(100vh);
  transition: transform 1s;
  
  ${({ show }) => WrapperHide(show)}
`;
export const NavLink = styled(Link)`
  margin: .6em 0;
  font-size: 1.1em;
`;


const WrapperHide = (show: boolean) => show
  ? css`
    transform: translateX(0);
  ` : css``;
