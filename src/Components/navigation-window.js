import React from 'react';
import LinkPages from './link-pages.js';
import RegBtns from './reg-btns.js';

const NavigationWindow = ({setShowNavWindow}) => {
    return (
        <>
             <section className='nav-window-layout'>
                <div className='close-window'>
                    <i onClick = {() => setShowNavWindow(false)} class="fa-solid fa-xmark"></i>
                </div>
                <div className='links'>
                    <LinkPages />
                    <RegBtns />
                </div>
            </section>
        </>
    )
}

export default NavigationWindow;