import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as H from './helpers';
import { ShortedLinkProps } from '@molecules/ShortedLink/types';

const ShortedLink = ({ longLink, isCopied, index, onCopied, onCorrupt }: ShortedLinkProps) => {
  const [shortUrl, setShortUrl] = useState('');
  useEffect(() => {
    H.shortLink(longLink)
      .then(setShortUrl)
      .catch(onCorrupt);
  }, []);
  const onButtonClick = () => {
    navigator.clipboard.writeText(shortUrl);
    onCopied(index);
  };
  return (
    <S.Wrapper>
      <S.Href href={longLink}>{H.shortString(longLink, 30)}</S.Href>
      <S.LeftWrapper>
        <S.ShortLink href={shortUrl}>{shortUrl || '. . .'}</S.ShortLink>
        <S.Button onClick={onButtonClick} isCopied={isCopied}>
          {isCopied ? 'Copied!' : 'Copy'}
        </S.Button>
      </S.LeftWrapper>
    </S.Wrapper>
  );
};

export default ShortedLink;
