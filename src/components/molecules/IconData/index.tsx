import React from 'react';
import * as S from './style';
import { IconDataProps } from './types';

const IconData = ({ iconSrc, topGap = 0, ...textProps }: IconDataProps) => {
  return (
    <S.Wrapper topGap={topGap}>
      <S.Icon src={iconSrc} />
      <S.TitledText {...textProps} />
    </S.Wrapper>
  );
};

export default IconData;
