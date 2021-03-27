import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: .7em;
  
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;
