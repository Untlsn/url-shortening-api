import * as React from 'react';
import MenuDesktop from './desktop';
import MenuMobile from './mobile';
import { links } from './data';
import useBoolState from '@hooks/useBoolState';
import isMobile from '@helpers/isMobile';

const Menu = () => {
  const [isVertical, changeOrientation] = useBoolState(isMobile());
  React.useEffect(() => {
    const resize = () => changeOrientation(isMobile());
    window.addEventListener('resize', resize);
  }, []);

  return isVertical
    ? <MenuMobile links={links}/>
    : <MenuDesktop links={links}/>;
};

export default Menu;
