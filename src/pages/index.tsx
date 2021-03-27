import React from 'react';
import { StyleProvider } from '@providers/all';

const poppinsUrl = 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[poppinsUrl]}>
      <div>Hello World!</div>
    </StyleProvider>
  );
};

export default Home;
