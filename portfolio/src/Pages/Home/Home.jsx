import React from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import Hero from './Components/Hero/Hero';
import AwardWon from './Components/AwardWon/AwardWon';
import ClientVoice from './Components/ClientVoice/ClientVoice';
import Gallery from './Components/Gallery/Gallery';
import Moments from './Components/Moments/Moments';
import MyAchivements from './Components/MyAchivements/MyAchivements';
import MyHistory from './Components/MyHistory/MyHistory';
import MySkills from './Components/MySkills/MySkills';
import Tweets from './Components/Tweets/Tweets';

const Home = () => {
    return (
      <div id='home'>
        <Hero />
        <AboutMe />
        <AwardWon />
        <ClientVoice />
        <Gallery />
        <video></video>
        <Moments />
        <MyAchivements />
        <MyHistory />
        <MySkills />
        <Tweets />
      </div>
    );
  }
  
  export default Home;