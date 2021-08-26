import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from '../assets/images/marker-icon.png';
import iconShadow from '../assets/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = data || [19.4267261 - 99.1718706];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      scrollWheelZoom={false}
      style={mapStyles}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter} />
    </MapContainer>
  );
};

export default Map;
