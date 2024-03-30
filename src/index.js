import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import logo  from "./images/logo.svg";
import Navigation from './Components/navigation.js';
import MainContent from './Components/main-content';
import NavigationWindow from './Components/navigation-window.js';

export default function App() {
  const [showNavWindow, setShowNavWindow] = useState(false);
  return (
    <>
      <section className='top-bar'>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <div className='nav-bar'>
          <Navigation />
        </div>
        <div className='nav-window'>
          <i onClick = {() => setShowNavWindow(true)} className="fa-solid fa-bars"></i>
        </div>
      </section>
      {showNavWindow && <NavigationWindow setShowNavWindow = {setShowNavWindow}/>}
      <MainContent />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);