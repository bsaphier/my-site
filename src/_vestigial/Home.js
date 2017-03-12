import React from 'react';

import Banner from './Banner';
import Navbar from './navbarComponents';
import Header from '../containers/Header';
import ParticlesContainer from '../containers/ParticlesContainer';

const Home = ({ homePage }) => {
  return (
    <div>
      <Header id={ 'home-page' }>
        <Navbar navbar={ homePage.navbar } />
        <Banner title={ homePage.landingPage } />
      </Header>
      <ParticlesContainer />
    </div>
  );
};

export default Home;
