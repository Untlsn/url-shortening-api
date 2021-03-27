import * as React from 'react';
import * as S from './style';
import MobileNav from '@atoms/MobileNav';
import LinkData from '@interfaces/LinkData';
import useBoolState from '@hooks/useBoolState';

const MenuMobile = ({ links }: { links: LinkData[] }) => {
  const [clicked, changeClicked] = useBoolState();
  return (
    <div>
      <S.Hamburger clicked={clicked} onClick={() => changeClicked()}/>
      <MobileNav links={links} show={clicked}/>
    </div>
  );
};

export default MenuMobile;
