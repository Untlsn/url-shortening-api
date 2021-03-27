import React from 'react';
import * as S from './style';
import GetStarted from '@molecules/GetStarted';

const FirstView = () => {
  return (
    <S.Wrapper>
      <GetStarted />
      <S.Sitter />
    </S.Wrapper>
  );
};

export default FirstView;
