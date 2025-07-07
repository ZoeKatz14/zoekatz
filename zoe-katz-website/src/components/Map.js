import React from 'react';
import './Map.css';
import { ReactComponent as WorldMap} from '../world.svg';



const Map=()=>{
        return (  
                <div className='map-content'>
                <WorldMap />
                </div>
        )
    
}
export default Map;    