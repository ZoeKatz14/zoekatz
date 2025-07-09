import React, { useState } from 'react';
import './Pages.css';
import Map from '../components/Map.js';
import {Tooltip} from 'react-tooltip';

const FunPage = () => {
  const [content, setContent] = useState("");
  return (
    <div className='page'>
      <header>
        <h1>reading around the world</h1>
      </header>
      <main>
        <div className="world-map">
          <Map setTooltipContent={setContent}/>
          <Tooltip id="my-tooltip" className="book-tooltip">{content}</Tooltip>
          {/* To show up on the page under the map as well: {content} */}
        </div>
       <p> These are the books I have currently finished in my pursuit to read a book from every country around the world.
          <br></br> Hover over the dark brown countries to see what book I read. 
          <br></br> 
          <br></br>p.s. You can pan and zoom! To pan, drag your mouse. To zoom, scroll up or down.    
        </p> 
       </main>
    </div>
  );
}

export default FunPage;
