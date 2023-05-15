import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

export const Map = ({ ipAddress, setLocation }) => {
  const [lat, setLat] = useState(32.7679);
  const [long, setLong] = useState(-117.1235);

  const getLocation = async () => {
    const apiKey = 'at_FcUoYu5h9NCfBwMyuelMKPInX8nwo';
    const geoAPI = `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;

    const locationResponse = await fetch(geoAPI);
    const locationData = await locationResponse.json();
    console.log(locationData);
  };

  return (
    <div>
      <MapContainer center={[lat, long]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
        />
        <div id="map"></div>
      </MapContainer>
    </div>
  );
};
