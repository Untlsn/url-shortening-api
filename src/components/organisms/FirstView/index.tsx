import React from 'react';
import * as S from './style';
import TitledText from '@atoms/TitledText';

const FirstView = () => {
  return (
    <S.Wrapper>
      <TitledText
        title='More than just shorter links'
        text='Build your brand&apos;s recognition and get detailed insights on how your links are performing'
        button/>
      <S.Sitter />
    </S.Wrapper>
  );
};

export default FirstView;
