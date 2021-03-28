import React, { useEffect, useState } from 'react';
import * as S from './style';
import LinkAdder from '@molecules/LinkAdder';
import ShortedLink from '@molecules/ShortedLink';
import useThisReduce from '@organisms/LinkPropmpter/reducer';

const LinkPrompter = () => {
  const links = useThisReduce([]);
  const [copiedKey, setCopiedKey] = useState(-1);

  useEffect(() => {
    links.initFromLocal();
  }, []);

  return (
    <S.Wrapper>
      <LinkAdder handler={links.addAtEnd}/>
      {links.state.map(
        (link, key) => <ShortedLink
          key={key}
          longLink={link}
          index={key}
          onCopied={setCopiedKey}
          isCopied={key == copiedKey}
          onCorrupt={() => links.removeByIndex(key)}/>
      )}
    </S.Wrapper>
  );
};

export default LinkPrompter;
