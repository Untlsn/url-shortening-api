import React from 'react';
import * as S from './style';
import useBoolState from '@hooks/useBoolState';
import { ShortedLinkProps } from '@molecules/ShortedLink/types';
import * as H from './helpers';

const ShortedLink = ({ longLink, shortLink }: ShortedLinkProps) => {
  const [isCopied, changeIsCopied] = useBoolState();
  return (
    <S.Wrapper>
      <S.LongLink href={longLink}>{longLink}</S.LongLink>
      <S.LeftWrapper>
        <S.ShortLink href={shortLink}>{shortLink}</S.ShortLink>
        <S.Button onClick={H.onButtonClick(shortLink, changeIsCopied)} isCopied={isCopied}>
          {isCopied ? 'Copied!' : 'Copy'}
        </S.Button>
      </S.LeftWrapper>
    </S.Wrapper>
  );
};

export default ShortedLink;
