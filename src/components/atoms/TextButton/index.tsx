import React from 'react';
import * as S from './style';
import { TextButtonProps } from './types';

const TextButton = ({ children, dirty }: TextButtonProps) => {
  return (
    <S.Wrapper dirty={dirty}>
      {children}
    </S.Wrapper>
  );
};

export default TextButton;
