import styled from 'styled-components';

export const Wrapper = styled.button<{ dirty?: boolean }>`
  padding: .5em 1em;
  color: ${({ dirty, theme: { colors } }) => dirty ? colors.grayishViolet : colors.white};
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1.1em;

  &:hover {
    cursor: pointer;
  }
`;
