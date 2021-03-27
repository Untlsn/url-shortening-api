import React from 'react';
import type { MobileNavProps } from './types';
import { Link } from 'gatsby';
import * as S from './style';

const DesktopNav = ({ links }: MobileNavProps) => {
  return (
    <S.Wrapper>
      {links.map(
        ({ name, link}) => <Link to={link} key={name}>{name}</Link>
      )}
    </S.Wrapper>
  );
};

export default DesktopNav;
