import styled from 'styled-components';
import { PagView } from '@style/reusable';
import TitledTextBody from '@atoms/TitledText';
import background from '@assets/icons/bg-boost-desktop.svg';

export const Wrapper = styled(PagView)`
  padding: 0;
`;

export const ButtonWrapper = styled.div`
  height: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url("${background}") no-repeat center ${({ theme }) => theme.colors.darkViolet};
  background-size: cover;
`;

export const TitledText = styled(TitledTextBody)`
  text-align: center;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 2.5em;
    margin-bottom: 0;
    color: white;
    @media (orientation: portrait){
      font-size: 1.4em;
    }
  }
  p {
    display: none;
  }
  @media (orientation: landscape) {
    font-size: 1.3em;
  }
`;
