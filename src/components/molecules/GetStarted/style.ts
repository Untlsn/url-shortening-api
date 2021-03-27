import styled from 'styled-components';
import ColorButton from '@atoms/ColorButton';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30em;
  @media (orientation: portrait) {
    position: relative;
    left: -.3em;
    width: 95vw;
    text-align: center;
    align-items: center;
  }
`;
export const BigText = styled.div`
  font-size: 4em;
  font-weight: bold;
  line-height: 1em;
  
  @media (orientation: portrait) {
    font-size: 2.5em;
  }
`;
export const SmallText = styled.div`
  color: ${({ theme }) => theme.colors.grayishViolet};
  font-size: 1.1em;
`;
export const RoundButton = styled(ColorButton).attrs({ round: true })`
  font-size: 1.2em;
  margin-top: 1em;
`;

