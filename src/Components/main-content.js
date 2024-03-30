import React from 'react';
import heroDesktop from "../images/image-hero-desktop.png";
import heroMobile from "../images/image-hero-mobile.png";
import SocialLinks from './social-links';

const MainContent = () => {
    return (
        <>
        <main className='content'>
            <section className='text'>
                <div className='text__header'>
                    <h1>Make remote work</h1>
                </div>
                <div className='text__paragraph'>
                    <p>Get your team ins sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                </div>
                <div className='learn-more-btn'>
                    <button>Learn More</button>
                </div>
                <SocialLinks />
            </section>
            <section className='visual'>
                <img src={heroDesktop} className='desktop'/>
                <img src={heroMobile} className='mobile'/>
            </section>
        </main>
        </>
    )
}

export default MainContent;