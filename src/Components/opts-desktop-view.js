import React, {useState} from 'react';
import arrowD from "../images/icon-arrow-down.svg";
import arrowU from "../images/icon-arrow-up.svg";
import Features from "./features-window";
import CompanyInfo from "./company-info-window";

const OptsDesktopView = ({}) =>{
    const [showFeatures, setShowFeatures] = useState(false);
    const [showCompanyInfo, setShowCompanyInfo] = useState(false);
    return (
        <>
            <div className='desktop-view'>
                <div className='feature-btn'>
                    <button onClick={() => setShowFeatures(prev => !prev)}>Features <img src={!showFeatures ? arrowD : arrowU}/></button>
                    {showFeatures && <Features />}
                </div>
                <div className='company-info-btn'>
                    <button onClick={() => setShowCompanyInfo(prev => !prev)}>Company <img src={!showCompanyInfo ? arrowD : arrowU}/></button>
                    {showCompanyInfo && <CompanyInfo />}
                </div>
                <button>Careers</button>
                <button>About</button>
            </div>
        </>
    )
}

export default OptsDesktopView;