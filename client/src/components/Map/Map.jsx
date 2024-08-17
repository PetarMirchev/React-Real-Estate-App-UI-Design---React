import React from 'react';
import './map.scss';
import { MapContainer, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Pin from '../Pin/Pin';



const Map = ({items}) => {

  return (
    // !import to not be put in <div> box to work!!!!
         <MapContainer center={[30.2672, -97.7431]} zoom={4} scrollWheelZoom={false} className='map'>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          {items.map( (item) => (
            <Pin item={item} key={item.id} />
          ))}
        </MapContainer>
  )
}

export default Map