import React, { useState } from 'react';
import * as S from './style';
import ColorButton from '@atoms/ColorButton';
import useBoolState from '@hooks/useBoolState';

const LinkAdder = ({ handler }: { handler: (value: string) => void }) => {
  const [inputText, setInputText] = useState('');
  const [isError, changeError] = useBoolState();

  return (
    <S.Wrapper
      onSubmit={(ev) => {
        ev.preventDefault();
        if(inputText) {
          handler(inputText);
          setInputText('');
          changeError(false);
        }
        else {
          changeError(true);
        }
      }}>
      <S.Input
        value={inputText}
        onChange={setInputText}
        isError={isError}/>
      {isError && <S.ErrorPrompt>Please add a link</S.ErrorPrompt>}
      <ColorButton>Shorten It!</ColorButton>
    </S.Wrapper>
  );
};

export default LinkAdder;
