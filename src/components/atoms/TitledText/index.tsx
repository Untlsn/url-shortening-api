import React from 'react';
import * as S from './style';
import { TitledTextProps } from './types';


const TitledText = ({ button, title, text, ...props }: TitledTextProps) => {
  return (
    <S.Wrapper {...props}>
      <S.BigText>{title}</S.BigText>
      <S.SmallText>{text}</S.SmallText>
      {button && <S.RoundButton>Get Started</S.RoundButton>}
    </S.Wrapper>
  );
};

export default TitledText;
