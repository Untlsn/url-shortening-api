import React from 'react';
import * as S from './style';
import Footer from '@organisms/Footer';

const LastView = () => {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.TitledText
          title='Boost your links today'
          text=''
          button/>
      </S.ButtonWrapper>
      <Footer />
    </S.Wrapper>
  );
};

export default LastView;
