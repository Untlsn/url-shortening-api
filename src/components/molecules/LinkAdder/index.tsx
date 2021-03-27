import React, { useState } from 'react';
import * as S from './style';
import ColorButton from '@atoms/ColorButton';

const LinkAdder = () => {
  const [inputText, setInputText] = useState('');

  return (
    <S.Wrapper>
      <S.Input
        value={inputText}
        onChange={setInputText} />
      <ColorButton>Shorten It!</ColorButton>
    </S.Wrapper>
  );
};

export default LinkAdder;
