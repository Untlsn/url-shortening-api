import React from 'react';
import * as S from './style';
import { ColorButtonProps } from './types';

const ColorButton = (props: ColorButtonProps) => {
  return <S.Wrapper {...props} />;
};

export default ColorButton;
