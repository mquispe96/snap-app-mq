import React from 'react';
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";


const SocialLinks = () => {
    return (
        <>
            <div className='social-links'>
                <img src={databiz}/>
                <img src={audiophile}/>
                <img src={meet}/>
                <img src={maker}/>
            </div>
        </>
    )
}

export default SocialLinks;