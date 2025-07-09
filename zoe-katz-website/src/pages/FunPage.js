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
        <div>
          <Map setTooltipContent={setContent}/>
          <Tooltip id="my-tooltip">{content}</Tooltip>
          {/* To show up on the page under the map as well: {content} */}
        </div>
       <p> You can pan and zoom on the map above! To pan, drag your mouse. To zoom, scroll up or down. 
          <br></br>When you hover over a country, you can see its name. </p>      
       </main>
    </div>
  );
}

export default FunPage;
