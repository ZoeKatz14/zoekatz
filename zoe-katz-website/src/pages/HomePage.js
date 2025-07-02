import React from 'react';
import './Pages.css';
import headshot from '../images/headshot.png';

const HomePage = () => {
  return (
    <div className='page'>
      <header>
        <h1>about me</h1>
      </header>
      <main className='body'>
        <img src={headshot} alt="Zoe Katz in Istanbul" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </main>
    </div>
  );
}

export default HomePage;