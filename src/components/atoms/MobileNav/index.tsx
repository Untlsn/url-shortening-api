import * as React from 'react';
import * as S from './style';
import { MobileNavProps } from './types';

const MobileNav = ({ links, show }: MobileNavProps) => {
  return (
    <S.Wrapper show={show}>
      {links.map(
        ({ link, name }) =>  <S.NavLink to={link} key={name}>{name}</S.NavLink>
      )}
    </S.Wrapper>
  );
};

export default MobileNav;
