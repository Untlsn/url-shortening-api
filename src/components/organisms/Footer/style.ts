import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkViolet};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img.attrs({ alt: '' })`
  filter: brightness(100);
  margin-bottom: 2em;
`;
