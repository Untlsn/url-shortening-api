import React from 'react';
import { StyleProvider } from '@providers/all';
import Header from '@organisms/Header';
import FirstView from '@organisms/FirstView';
import SecondView from '@organisms/SecondView';
import LastView from '../components/organisms/LastView';

const poppinsUrl = 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[poppinsUrl]}>
      <Header />
      <FirstView />
      <SecondView />
      <LastView />
    </StyleProvider>
  );
};

export default Home;
