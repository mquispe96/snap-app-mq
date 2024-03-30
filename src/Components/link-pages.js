import React from 'react';
import OptsDesktopView from './opts-desktop-view';
import OptsMobileView from './opts-mobile-view';

const LinkPages = ({}) => {
    return (
        <>
            <section className='link-pages'>
                <OptsDesktopView />
                <OptsMobileView />
            </section>
        </>
    )
}

export default LinkPages;