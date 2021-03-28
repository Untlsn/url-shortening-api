import React from 'react';
import * as S from './style';
import logo from '@assets/icons/logo.svg';
import LittleList from '@molecules/LittleList';
import Contacts from '@molecules/Contacts';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Image src={logo} />
      <LittleList
        title='Features'
        list={[
          'Link Shortening',
          'Branded Links',
          'Analytics',
        ]} />
      <LittleList
        title='Resources'
        list={[
          'Blog',
          'Developers',
          'Support',
        ]} />
      <LittleList
        title='Company'
        list={[
          'About',
          'Our Team',
          'Careers',
          'Contact',
        ]} />
      <Contacts />
    </S.Wrapper>
  );
};

export default Footer;
