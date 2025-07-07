import React from 'react';
import './Pages.css';

const NotFoundPage = () => {
  return (
    <div className='page'>
      <header>
        <h1>not found</h1>
      </header>
      <main className='body'>
        <p>The page you are looking for does not exist. Try clicking on the navigation bar above.</p>      
        </main>
    </div>
  );
}

export default NotFoundPage;