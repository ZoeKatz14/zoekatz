import React, {memo} from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import './Map.css';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// To be filled with my book data at a later point
// const data = [
//         {
//           name: "Australia",
//           book: "ABC"
//         }
// ]

const mapWidth = 800;
const mapHeight = 420;

const Map=({setTooltipContent})=>{
        return (  
                <div className='map-content' data-tip="">
                <ComposableMap
                width={mapWidth}
                height={mapHeight}
                projectionConfig={{ scale: 160 }}
                >
                <ZoomableGroup 
                center={[0, 10]} 
                zoom={1.5} 
                minZoom={1.5} maxZoom={10}
                translateExtent={[
                        [0, 0],
                        [mapWidth, mapHeight]
                        ]}
                >
                        <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                geographies.map((geo) => (

                                <Geography 
                                key={geo.rsmKey} 
                                geography={geo} 
                                data-tooltip-id="my-tooltip"
                                onMouseEnter={() => {
                                        setTooltipContent(`${geo.properties.name}`);
                                }}
                                onMouseLeave={() => {
                                        setTooltipContent("");
                                }}
                                style={{
                                        default: {
                                          fill: "#8896AB",
                                          outline: "#353535",
                                          stroke: "#C5D5E4",
                                          strokeWidth: 0.5
                                        },
                                        hover: {
                                          fill: "#0EA5E9",
                                          outline: "#353535"
                                        },
                                        pressed: {
                                          fill: "#E42",
                                          outline: "#353535"
                                        }
                                      }}
                                />

                                ))
                                }
                        </Geographies>
                </ZoomableGroup>
                </ComposableMap>
                </div>
        )
    
}
export default memo(Map);    