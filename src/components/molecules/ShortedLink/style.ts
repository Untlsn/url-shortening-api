import styled from 'styled-components';
import ColorButton from '@atoms/ColorButton';

export const Href = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  max-width: 90vw;
  min-width: calc(100vw - 10em);
  padding: 1em 3em;
  border-radius: .5em;
  background-color: white;
  position: relative;
  align-items: center;

  @media (orientation: landscape) {
    grid-template-columns: 5fr 3fr;
  }
  @media (orientation: portrait) {
    grid-template-rows: 1.2fr 2fr;
    padding: 1em;
    &::before {
      content: '';
      display: block;
      background-color: ${({ theme }) => theme.colors.gray};
      width: 100%;
      height: 2px;
      position: absolute;
      top: 33%;
    }
  }
`;
export const LeftWrapper = styled.div`
  text-align: right;
  display: flex;
  gap: .5em;
  @media (orientation: portrait) {
    text-align: left;
    flex-direction: column;
  }
`;
export const ShortLink = styled(Href)`
  color: ${({ theme }) => theme.colors.cyan};
`;
export const Button = styled(ColorButton)<{ isCopied: boolean }>`
  background-color: ${({ isCopied, theme }) => isCopied && theme.colors.darkViolet};
  @media (orientation: portrait) {
    transform: scaleY(.9);
  }
`;
