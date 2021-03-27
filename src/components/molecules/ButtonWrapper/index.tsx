import React from 'react';
import * as S from './style';
import TextButton from '@atoms/TextButton';
import ColorButton from '@atoms/ColorButton';

const ButtonWrapper = ({ dirty }: { dirty?: boolean }) => {
  return (
    <S.ButtonWrapper>
      <TextButton dirty={dirty}>Login</TextButton>
      <ColorButton round>Sing Up</ColorButton>
    </S.ButtonWrapper>
  );
};

export default ButtonWrapper;
