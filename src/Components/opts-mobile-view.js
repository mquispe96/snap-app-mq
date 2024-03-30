import React, {useState} from 'react';
import arrowD from "../images/icon-arrow-down.svg";
import arrowU from "../images/icon-arrow-up.svg";
import FeaturesContent from './features-content';
import CompanyInfoContent from './company-info-content';

const OptsMobileView = () => {
    const [showFeatures, setShowFeatures] = useState(false);
    const [showCompanyInfo, setShowCompanyInfo] = useState(false);
    return (
        <>
            <div className='mobile-view'>
                <button onClick={() => setShowFeatures(prev => !prev)}>Features <img src={!showFeatures ? arrowD : arrowU}/></button>
                <div className='mobile-features' style={{height: showFeatures ? '100%' : '0', display: showFeatures ? 'grid' : 'none'}}>
                    <FeaturesContent />
                </div>
                <button onClick={() => setShowCompanyInfo(prev => !prev)}>Company <img src={!showCompanyInfo ? arrowD : arrowU}/></button>
                <div className='mobile-company-info' style={{height: showCompanyInfo ? '100%' : '0'}}>
                    <CompanyInfoContent />
                </div>
                <button>Careers</button>
                <button>About</button>
            </div>
        </>
    )
}

export default OptsMobileView;