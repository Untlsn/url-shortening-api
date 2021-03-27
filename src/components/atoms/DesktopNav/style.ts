import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  flex-grow: 3;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.grayishViolet};
  padding-left: 3em;
  gap: 2em;
  
  a:hover {
    color: ${({ theme }) => theme.colors.veryDarkViolet};
    cursor: pointer;
  }
`;
