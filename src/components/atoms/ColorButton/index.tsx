import React from 'react';
import * as S from './style';
import { ColorButtonProps } from './types';

const ColorButton = ({ children, className, round }: ColorButtonProps) => {
  return (
    <S.Wrapper className={className} round={round}>
      {children}
    </S.Wrapper>
  );
};

export default ColorButton;
