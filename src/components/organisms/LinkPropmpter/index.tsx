import React, { useState } from 'react';
import * as S from './style';
import LinkAdder from '@molecules/LinkAdder';
import ShortedLink from '@molecules/ShortedLink';
import useAddState from '@hooks/useAddState';

const LinkPrompter = () => {
  const [links, setNewLink] = useAddState<string>();
  const [copiedKey, setCopiedKey] = useState(-1);
  return (
    <S.Wrapper>
      <LinkAdder handler={setNewLink}/>
      {links.map(
        (link, key) => <ShortedLink
          key={key}
          longLink={link}
          index={key}
          onCopied={setCopiedKey}
          isCopied={key == copiedKey}/>
      )}
    </S.Wrapper>
  );
};

export default LinkPrompter;
