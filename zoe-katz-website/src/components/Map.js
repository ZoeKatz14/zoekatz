import React, {memo} from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import './Map.css';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// The books that I have read for my "reading around the world" challenge
const finishedBooks = [
                {
                name: "Afghanistan",
                book: "A Thousand Splendid Suns",
                author: "Khaled Hosseini"
        },
        {		
                name: "Argentina",
                book: "Elena Knows",
                author: "Claudia Piñeiro"
              },
              {		
                name: "Australia",
                book: "Boy Swallows Universe",
                author: "Trent Dalton"
              },
              {		
                name: "Azerbaijan",
                book: "Ali and Nino",
                author: "Kurban Said"
              },
              {		
                name: "Belgium",
                book: "I Who Have Never Known Men",
                author: "Jacqueline Harpman"
              },
              {
                name: "Afghanistan",
                book: "A Thousand Splendid Suns",
                author: "Khaled Hosseini"
              },
              { 		
                name: "Brazil",
                book: "Near to the Wild Heart",
                author: "Clarice Lispector"
              },
              {  				
                name: "Canada",
                book: "When We Lost Our Heads",
                author: "Heather O'Neill"
              },
              { 				
                name: "Dominican Rep.",
                book: "Clap When You Land",
                author: "Elizabeth Acevedo"
              },
              { 						
                name: "Egypt",
                book: "Woman at Point Zero",
                author: "Nawal El Saadawi"
              },
              { 					
                name: "France",
                book: "The Red Notebook",
                author: "Antoine Laurain"
              },
              { 						
                name: "Ghana",
                book: "Homegoing",
                author: "Yaa Gyasi"
              },
              { 						
                name: "Greece",
                book: "The Odyssey",
                author: "Homer"
              },
              { 						
                name: "Ireland",
                book: "Normal People",
                author: "Sally Rooney"
              },
              { 						
                name: "Japan",
                book: "Heaven",
                author: "Mieko Kawakami"
              },
              { 					
                name: "South Korea",
                book: "If I Had Your Face",
                author: "Frances Cha"
              },
              { 					
                name: "Mexico",
                book: "Monstrilio",
                author: "Gerardo Sámano Córdova"
              },
              { 						
                name: "Netherlands",
                book: "The Diary of Anne Frank",
                author: "Anne Frank"
              },
              { 					
                name: "Nigeria",
                book: "Things Fall Apart",
                author: "Chinua Achebe"
              },
              { 						
                name: "Norway",
                book: "A Doll's House",
                author: "Henrik Ibsen"
              },
              { 						
                name: "Russia",
                book: "Crime and Punishment",
                author: "Fyodor Dostoevsky"
              },
              { 						
                name: "Senegal",
                book: "At Night All Blood is Black",
                author: "David Diop"
              },
              { 						
                name: "Spain",
                book: "The Shadow of the Wind",
                author: "Carlos Ruiz Zafón"
              },
              { 					
                name: "Sweden",
                book: "A Man Called Ove",
                author: "Fredrik Backman"
              },
              { 						
                name: "Switzerland",
                book: "Heidi",
                author: "Johanna Spyri"
              },
              { 						
                name: "Turkey",
                book: "The Bastard of Istanbul",
                author: "Elif Shafak"
              },
              {					
                name: "United Kingdom",
                book: "Great Expectations",
                author: "Charles Dickens"
              },
              { 						
                name: "United States of America",
                book: "Of Mice and Men",
                author: "John Steinbeck"
              },
]

const fillColor = (geo) => {
        const country = finishedBooks.find((d) => d.name === geo.properties.name);
      
        if (country) {
          return "#6E615E";
        }
      
        return "#938581";
};

const findBook = (geo) => {
        const entry = finishedBooks.find(({name}) => name === geo.properties.name);
        if (entry) {
                return geo.properties.name + ": " + entry.book + " by " + entry.author;
        }
        return geo.properties.name + ": I haven't read a book yet!";
};

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
                center={[10, 0]} 
                zoom={1} 
                minZoom={1} maxZoom={10}
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
                                        setTooltipContent(findBook(geo));
                                        // setTooltipContent(`${geo.properties.name}`);
                                }}
                                onMouseLeave={() => {
                                        setTooltipContent("");
                                }}
                                style={{
                                        default: {
                                          fill: fillColor(geo),
                                          outline: "#353535",
                                          stroke: "#C5D5E4",
                                          strokeWidth: 0.5
                                        },
                                        hover: {
                                          fill: "#4D4442",
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