import React from 'react';
import * as S from './style';
import iconFacebook from '@assets/icons/icon-facebook.svg';
import iconTwitter from '@assets/icons/icon-twitter.svg';
import iconPinterest from '@assets/icons/icon-pinterest.svg';
import iconInstagram from '@assets/icons/icon-instagram.svg';

const Contacts = () => {
  return (
    <S.Wrapper>
      <S.SingleContact href='' imgSrc={iconFacebook} />
      <S.SingleContact href='' imgSrc={iconTwitter} />
      <S.SingleContact href='' imgSrc={iconPinterest} />
      <S.SingleContact href='' imgSrc={iconInstagram} />
    </S.Wrapper>
  );
};

export default Contacts;
