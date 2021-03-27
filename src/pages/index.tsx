import React from 'react';
import { StyleProvider } from '@providers/all';
import Header from '@organisms/Header';
import FirstView from '@organisms/FirstView';
import LinkPrompter from '@organisms/LinkPropmpter';

const poppinsUrl = 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[poppinsUrl]}>
      <Header />
      <FirstView />
      <LinkPrompter />
    </StyleProvider>
  );
};

export default Home;
