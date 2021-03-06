import React from 'react';
import classes from './BackgroundVideo.module.css';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import video from '../Videos/main1.mp4'
import images from '../images/logo.png'
// import { NavLink, Link } from 'react-router-dom';
import pc from '../images/pc.png'
import ps4 from '../images/ps4.png'
import nintendo from '../images/nintendo.png'
import xbox from '../images/xbox.png';
import './BackgroundVideo.module.css';
import './Home.css'




const BackgroundVideo = () => {

    return (

        <div className={classes.Container} >

            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <img src={images} alt="gametrax logo" />
                    <SubTitle className='subtitle'>Connect with Everyone. Track Anyone</SubTitle>

                    <a href="/signup">
                        <button type="button" className="btn btn-outline-dark">Sign Up</button>
                    </a>

                    <a href="/login">
                        <button type="button" className="btn btn-outline-dark">Sign In</button>
                    </a>

                </div>
                <span className={classes.icons_moe}>
                    <img className="pc" src={pc} alt="pc" />
                    <img className="nintendo" src={nintendo} alt="nintendo" />
                    <img className="ps4" src={ps4} alt="ps4" />
                    <img className="xbox" src={xbox} alt="xbox" />
                </span>
            </div>
        </div>
    )
}

// Media
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'
});


// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
`;


export default BackgroundVideo