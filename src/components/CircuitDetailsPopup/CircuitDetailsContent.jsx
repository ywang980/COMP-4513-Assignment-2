import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CircuitDetailsContent = ({ Name, Location, Country, url }) => {
  const position = [51.505, -0.09]; // Coordinates for the map

  return (
    <>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Name: </span>{Name}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Location: </span>{Location}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Country: </span>{Country}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Website: </span><a href={url}>{url}</a></p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <div style={{ width: '500px', height: '500px', border: '1px solid black', padding: '10px' }}>
          {/* Content of first div */}
          <img src='./f1_v2.png'></img>
        </div>
        <div style={{ width: '500px', height: '500px', border: '1px solid black', padding: '10px' }}>

        </div>
      </div>
    </>
  );
};

export default CircuitDetailsContent;
