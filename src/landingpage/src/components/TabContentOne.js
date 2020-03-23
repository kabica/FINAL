import React from 'react';
import styled from 'styled-components';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
import { generateMedia } from 'styled-media-query';
import division from '../images/division.png';
import overwatch from '../images/overwatch.png';
import rainbow from '../images/rainbow.png';
import '../css/TabsNav.css';
// import Particles from 'react-particles-js'
// import '../pages/particles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 100,
  duration: 1000
})

function TabContentOne() {
  return (
    <TabContentContainer className="page">
      
      <section className="main-section" data-aos="fade-up">
        <h1>Gametrax</h1>
        <p>Gametrax is the newest network of community run gaming stats sites in the world. We're a very small team that loves building stuff for the gaming community, and we realized that we can serve the community better by opening up our knowledge and capability through a well thought out gaming stats API for developers. Some of the hardest work we do is getting access to stats in the first place, and we recognize this is a significant barrier for many developers. It's only through our determination that we're able to get the data when others cannot. We don't believe in hoarding that knowledge, and this API allows us to provide the community with safe and reliable APIs so we can all enjoy stats and continue creating. Our game support currently includes an Apex Legends stats API, a CSGO stats API, a Division 2 stats API and an Overwatch stats API. We're working hard to expand this list as fast as we can, and you can expect many more of the titles we support across Tracker Network to land in this API soon..</p>
      </section>

      <main className="container">
        <section className="card">
          <img src={overwatch} alt="overwatch" data-aos="fade-right" />
          <div data-aos="fade-left"> 
            <h3>Interface one</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </section>

        <section className="card">
          <img src={division} alt="division" data-aos="fade-right" />
          <div data-aos="fade-left">
            <h3>Interface one</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </section>


        <section className="card">
          <div data-aos="fade-right">
            <h3>Interface one</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <img src={rainbow} alt="rainbow" data-aos="fade-left" />
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