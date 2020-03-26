import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import division from '../images/division.png';
import overwatch from '../images/overwatch.png';
import rainbow from '../images/rainbow.png';
import '../css/TabsNav.css';
import './tabcomponent.css';
import '../css/TabsNav.css';
import gamexxx from '../images/gamexxx.png';
import spotify from '../images/spotify.png';
import youtube from '../images/youtube.png';
import tracker from '../images/tracker.png';
import './Home.css'


// import Particles from 'react-particles-js'
// import '../pages/particles.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//   offset: 100,
//   duration: 1000
// })

function TabContentOne() {
  return (
    <TabContentContainer className="page">

      <section className="main-section" data-aos="fade-up">
        <img id="gamexxx" src={gamexxx} alt="gametrax" />
        <p className='maininfo'>Gametrax is the newest network of community run gaming stats sites in the world. We're a small team that loves building applications for the gaming community, and we realized that we can serve the community better by opening up our knowledge and capability through a well thought out gaming stats API. Some of the hardest work we do is getting access to stats in the first place, and we recognize this is a significant barrier for many developers. It's only through our determination that we're able to get the data when others cannot. We don't believe in hoarding that knowledge, and this API allows us to provide the community with safe and reliable APIs so we can all enjoy stats and continue creating. Our game support currently includes stats for Splitgate, CS:GO, Division 2 and Overwatch. We're working hard to expand this list as fast as we can, and you can expect many more titles to be supported in the near future.</p>
      </section>

      <main className="container">
        <section className="card">
          <img src={overwatch} id="overwatch" alt="overwatch" data-aos="fade-right" />
          <div data-aos="fade-left">
            <img id="tracker" src={tracker} alt="tracker logo" />
            <p className='info'>You can track your games stats, find professional players and streamers, and follow new games on our discovery page! We track your stats on Xbox, Playstation, Steam, Nintendo Switch, Origin, Uplay, Battle.net, and Epic Games! We are constantly looking to add more games and platforms to our selection. You'll be able to see live updates of your match history, see all your season stats, and how you rank in the world. Make sure to check out all our features on your profile page.</p>
          </div>
        </section>

        <section className="card2">
          <img src={division} id="division" alt="division" data-aos="fade-right" />
          <div data-aos="fade-left">
            <img id="spotify" src={spotify} alt="spotify logo" />
            <p className='info2'>Gametrax isn't only for tracking! It is the only site out there that allows users to not only add friends, search games or track stats, but also search for your favourite Spotify albums and playlists and showcase them on your profile for your friends to see.</p>
          </div>
        </section>


        <section className="card3">
          <img src={rainbow} id="rainbow" alt="rainbow" data-aos="fade-left" />
          <div data-aos="fade-right">
            <img id="youtube" src={youtube} alt="youtube logo" />
            <p className='info3'>Gametrax also allows you to search for your favourite videos and tutorials from some of your favourite youtube content creators and add it to your profile to share it with your friends.</p>
          </div>
        </section>
      </main>

      {/* <div>
        <img src={widowmaker} alt="widowmaker" data-aos="fade-right"/>
        <img src={division} alt="division" data-aos="fade-left"/>
      </div> */}
    </TabContentContainer>
  );
}

export default TabContentOne;

//Media
const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px'
});

// Main Content Container
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);
  .container {
    margin: 0 10%;
  }
  .title {
    margin-top: 2rem;
    ${customMedia.lessThan('smDesktop')`
    font-size: 1.5rem;
    line-height: 1;
  `}
  }
  // img {
  //   width: 100%;
  // }
  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: 100%;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    `}
  }
`;