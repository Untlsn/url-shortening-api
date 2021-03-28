import React from 'react';
import * as S from './style';
import LinkPrompter from '@organisms/LinkPropmpter';
import IconData from '@molecules/IconData';
import * as Icons from '@assets/icons/iconDataIcons';

const SecondView = () => {
  const numGap = 7;
  return (
    <S.Wrapper>
      <LinkPrompter />
      <S.TitledText
        title='advanced statistics'
        text='Track how your links are performing across the web with our advanced statistics dashboard'/>
      <S.SomeData>
        <IconData
          iconSrc={Icons.iconBrandRecognition}
          title='brand recognition'
          text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content" />
        <IconData
          topGap={numGap}
          iconSrc={Icons.iconDetailedRecords}
          title='detailed records'
          text='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.' />
        <IconData
          topGap={numGap*2}
          iconSrc={Icons.iconFullyCustomizable}
          title='fully customizable'
          text='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.' />
      </S.SomeData>
    </S.Wrapper>
  );
};

export default SecondView;
