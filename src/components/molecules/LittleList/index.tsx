import React from 'react';
import * as S from './style';

const LittleList = ({ title, list }: { title: string, list: string[] }) => {
  return (
    <S.Wrapper>
      <h3>{title}</h3>
      <S.List>{list.map(
        (text) => <li key={text}>{text}</li>
      )}</S.List>
    </S.Wrapper>
  );
};

      export default LittleList;
