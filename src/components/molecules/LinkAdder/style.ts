import styled, { css } from 'styled-components';
import StateInputText from '@atoms/StateInputText';

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  max-width: 90vw;
  min-width: calc(100vw - 10em);
  gap: 1.8em;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 2em 5em;
  border-radius: .5em;
  @media (orientation: portrait) {
    flex-direction: column;
    padding: 2em;
  }
`;
export const Input = styled(StateInputText)
  .attrs({ placeholder: 'Shorten a link here...' })<{ isError: boolean }>`
  padding: .5em 3%;
  font-size: 1.2em;
  border-radius: .3em;
  font-weight: bold;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayishViolet};
  }
  flex-grow: 4;
  ${({ isError, theme }) => isError && css`
    border: .1em solid ${theme.colors.red};
    &::placeholder {
      color: ${theme.colors.red};
    }
  `}
`;

export const ErrorPrompt = styled.div`
  font-size: .7em;
  color: ${({ theme }) => theme.colors.red};
  top: calc(50% - .5em);
  position: absolute;
`;
