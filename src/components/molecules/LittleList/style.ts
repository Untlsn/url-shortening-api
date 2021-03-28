import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: .9em;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.grayishViolet};
  
  display: flex;
  flex-direction: column;
  gap: .7em;
`;
