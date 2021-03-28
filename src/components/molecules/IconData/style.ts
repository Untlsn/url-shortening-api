import styled from 'styled-components';
import TitledTextBody from '@atoms/TitledText';

export const Wrapper = styled.div<{ topGap: number }>`
  background-color: #fff;
  font-size: .7em;
  padding: 0 2em 1em;
  position: relative;
  z-index: 10;

  margin-top: 5em;
  @media (orientation: landscape) {
    margin-top: ${({ topGap }) => topGap}em;
  }
`;

export const TitledText = styled(TitledTextBody)`
  text-align: left;
  font-size: .8em;
  padding: 0 1em;

  h1 {
    font-size: 2.5em;
    text-transform: capitalize;
    margin: auto 0;
  }

  p {
    font-size: 1.5em;
  }
  @media (orientation: portrait) {
    p {
      font-size: 2em;
    }
    text-align: center;
  }
`;
export const Icon = styled.div<{ src: string }>`
  position: relative;
  height: 7em;
  width: 7em;
  top: -3.5em;
  left: 2em;
  @media (orientation: portrait) {
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: 1.3em;
  }
  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &::before {
    background-color: ${({ theme }) => theme.colors.veryDarkBlue};
    border-radius: 100%;
    height: 100%;
    width:  100%;
  }
  &::after {
    background: url("${({ src }) => src}") no-repeat center;
    background-size: cover;
    height: 50%;
    width:  50%;
  }
`;
