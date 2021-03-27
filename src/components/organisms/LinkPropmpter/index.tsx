import React from 'react';
import * as S from './style';
import LinkAdder from '@molecules/LinkAdder';
import ShortedLink from '@molecules/ShortedLink';

const LinkPrompter = () => {
  return (
    <S.Wrapper>
      <LinkAdder />
      <ShortedLink longLink={'long!'} shortLink={'short...'} />
    </S.Wrapper>
  );
};

export default LinkPrompter;
