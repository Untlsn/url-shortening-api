import * as React from 'react';
import DesktopNav from '@atoms/DesktopNav';
import LinkData from '@interfaces/LinkData';
import ButtonWrapper from '@molecules/ButtonWrapper';

const MenuDesktop = ({ links }: { links: LinkData[] }) => {
  return (
    <>
      <DesktopNav links={links} />
      <ButtonWrapper dirty/>
    </>
  );
};

export default MenuDesktop;
