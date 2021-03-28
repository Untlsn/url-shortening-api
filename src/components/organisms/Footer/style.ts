import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkViolet};
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (orientation: landscape) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 4em;
  }
`;
export const Image = styled.img.attrs({ alt: '' })`
  filter: brightness(100);
  margin-bottom: 2em;
`;
