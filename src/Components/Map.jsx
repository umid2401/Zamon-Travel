import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import "../Styles/Map.scss";


export default function Map() {
  
  const position = [41.2936, 69.2401];
  const position2 = [37, 65];

  
  const customIcon = new Icon({
    iconUrl: "Images/place.png",
    iconSize: [40, 40],
    
    // iconAnchor: [1, 1],
    popupAnchor: [-0, -76]
  });

  return (
    <section className="map-component">
      
      <div className="maps" >
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Chilonzor-9 25</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           
           
          />
          <Marker position={position} icon={customIcon} >
            <Popup position={position2}>Marhamat joylashuvimiz bilan tanishing!!</Popup>
          </Marker>
        </MapContainer>
      
      </div>
    </section>
  );
}
