import styled from 'styled-components';
import StateInputText from '@atoms/StateInputText';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 90vw;
  min-width: calc(100vw - 10em);
  gap: 1em;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 2em 5em;
  border-radius: .5em;
  @media (orientation: portrait) {
    flex-direction: column;
    padding: 2em;
  }
`;
export const Input = styled(StateInputText).attrs({ placeholder: 'Shorten a link here...' })`
  padding: .5em 3%;
  font-size: 1.2em;
  border-radius: .3em;
  font-weight: bold;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayishViolet};
  }
  flex-grow: 4;
`;
