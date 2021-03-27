import styled from 'styled-components';
import ColorButton from '@atoms/ColorButton';

const Link = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90vw;
  min-width: calc(100vw - 10em);
  padding: 1em 3em;
  border-radius: .5em;
  background-color: white;
`;
export const LongLink = styled(Link)`
  flex-grow: 3;
`;
export const LeftWrapper = styled.div`
  flex-grow: 1;
  text-align: right;
`;
export const ShortLink = styled(Link)`
  margin-right: 1em;
  color: ${({ theme }) => theme.colors.cyan};
`;
export const Button = styled(ColorButton)<{ isCopied: boolean }>`
  background-color: ${({ isCopied, theme }) => isCopied && theme.colors.darkViolet};
`;
