import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet/hooks';

export const Map = ({ ipAddress, onIpChange }) => {
  const [lat, setLat] = useState(32.7679);
  const [long, setLong] = useState(-117.1235);

  //Updates MapContainer when ipAddress is updated
  const FlyMapOnIpUpdate = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() => {
      //set flag to prevent race conditions
      let ignore = false;

      //get location
      const getLocation = async () => {
        console.log('location run');
        const apiKey = 'at_FcUoYu5h9NCfBwMyuelMKPInX8nwo';
        const geoAPI = ipAddress
          ? `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
          : `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

        const locationResponse = await fetch(geoAPI);
        const locationData = await locationResponse.json();

        //Set state inside of getLocation since it is wrapped in a useEffect
        if (!ignore) {
          setLat(locationData.location.lat);
          setLong(locationData.location.lng);

          //MapContainer props are immutable. Use useMap hook to flyTo when the ipAddress changes
          map.flyTo(center, zoom);

          onIpChange(locationData);
        }
      };
      //Running on mount w/o set IP will default to client's IP
      getLocation();

      //reset variable
      return () => {
        ignore = true;
      };
    }, [ipAddress]);
  };

  return (
    <div>
      <MapContainer
        center={[lat, long]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '80vh' }}>
        <TileLayer
          attribution={
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
          url={`https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png`}
        />
        <Marker position={[lat, long]} />
        <div id="map"></div>
        <FlyMapOnIpUpdate center={[lat, long]} zoom={15} />
      </MapContainer>
    </div>
  );
};
