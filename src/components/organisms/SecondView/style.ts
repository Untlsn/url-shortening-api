import styled from 'styled-components';
import { PagView } from '@style/reusable';
import TitledTextBody from '@atoms/TitledText';

export const Wrapper = styled(PagView)`
  background-color: ${({ theme }) => theme.colors.gray};
  min-height: 100vh;
  @media (orientation: portrait) {
    padding-top: 3em;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const SomeData = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  position: relative;
  padding-bottom: 5em;
  &::before {
    content: '';
    position: absolute;
    display: block;
    background-color: ${({ theme }) => theme.colors.cyan};
    height: .5em;
    width: 50%;
    left: 25%;
    z-index: 5;
  }
  
  @media (orientation: portrait) {
    flex-direction: column;

    &::before {
      width: .5em;
      height: 70%;
      top: 10%;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

export const TitledText = styled(TitledTextBody)`
  font-size: .8em;
  padding: 0 1em;
  min-width: 50vw;  
  h1 {
    font-size: 3em;
    margin: auto;
    text-transform: capitalize;
  }
  p {
    font-size: 1.5em;
  }
  @media (orientation: portrait) {
    font-size: .6em;
    margin-bottom: 7em;
  }
`;
