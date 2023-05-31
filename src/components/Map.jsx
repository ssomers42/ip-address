import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet/hooks';

export const Map = ({ ipAddress }) => {
  const [lat, setLat] = useState(32.7679);
  const [long, setLong] = useState(-117.1235);

  //Updates MapContainer when ipAddress is updated
  const FlyMapOnUpdate = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() => {
      //set flag to prevent race conditions
      let ignore = false;

      //get location
      const getLocation = async () => {
        console.log('location run');
        const apiKey = 'at_FcUoYu5h9NCfBwMyuelMKPInX8nwo';
        const geoAPI = `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;

        const locationResponse = await fetch(geoAPI);
        const locationData = await locationResponse.json();

        //Have to set state inside of getLocation since it is wrapped in a useEffect
        if (!ignore) {
          setLat(locationData.location.lat);
          setLong(locationData.location.lng);

          //MapContainer props are immutable. Use useMap hook to flyTo when the ipAddress changes
          map.flyTo(center, zoom);
        }
      };
      ipAddress && getLocation();

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
        <div id="map"></div>
        <FlyMapOnUpdate center={[lat, long]} zoom={15} />
      </MapContainer>
    </div>
  );
};
