import styled from 'styled-components';
import { whiteHover } from '@style/reusable';

export const Wrapper = styled.button<{ round?: boolean }>`
  padding: .5em 1em;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.cyan};
  border: none;
  font-weight: bold;
  font-size: 1.1em;
  border-radius: ${({ round }) => round ? 2 : .3}em;
  
  ${whiteHover(.3)}
  &:hover {
    cursor: pointer;
  }
`;
