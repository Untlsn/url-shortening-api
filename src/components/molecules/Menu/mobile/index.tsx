import * as React from 'react';
import * as S from './style';
import MobileNav from '@molecules/MobileNav';
import LinkData from '@interfaces/LinkData';
import useBoolState from '@hooks/useBoolState';

const MenuMobile = ({ links }: { links: LinkData[] }) => {
  const [clicked, changeClicked] = useBoolState();
  return (
    <S.Wrapper>
      <S.Hamburger clicked={clicked} onClick={() => changeClicked()}/>
      <MobileNav links={links} show={clicked}/>
    </S.Wrapper>
  );
};

export default MenuMobile;
