import * as React from 'react';
import * as S from './style';
import { MobileNavProps } from './types';
import ButtonWrapper from '@molecules/ButtonWrapper';

const MobileNav = ({ links, show }: MobileNavProps) => {
  return (
    <S.Wrapper show={show}>
      <S.LinksWrapper>
        {links.map(
          ({ link, name }) =>  <S.NavLink to={link} key={name}>{name}</S.NavLink>
        )}
      </S.LinksWrapper>
      <ButtonWrapper />
    </S.Wrapper>
  );
};

export default MobileNav;
