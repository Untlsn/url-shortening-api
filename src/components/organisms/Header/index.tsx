import * as React from 'react';
import * as S from './style';
import Menu from '@molecules/Menu';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo />
      <Menu />
    </S.Wrapper>
  );
};

export default Header;
