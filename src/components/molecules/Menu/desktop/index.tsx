import * as React from 'react';
import DesktopNav from '@atoms/DesktopNav';
import LinkData from '@interfaces/LinkData';

const MenuDesktop = ({ links }: { links: LinkData[] }) => {
  return (
    <>
      <DesktopNav links={links} />
    </>
  );
};

export default MenuDesktop;
