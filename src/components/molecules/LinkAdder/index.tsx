import React, { useState } from 'react';
import * as S from './style';
import ColorButton from '@atoms/ColorButton';

const LinkAdder = ({ handler }: { handler: (value: string) => void }) => {
  const [inputText, setInputText] = useState('');

  return (
    <S.Wrapper
      onSubmit={(ev) => {
        if(inputText) {
          handler(inputText);
          setInputText('');
        }
        ev.preventDefault();
      }}>
      <S.Input
        value={inputText}
        onChange={setInputText} />
      <ColorButton>Shorten It!</ColorButton>
    </S.Wrapper>
  );
};

export default LinkAdder;
