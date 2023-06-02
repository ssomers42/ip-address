import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet/hooks';

export const Map = ({ ipData }) => {
  const lat = ipData ? ipData.location.lat : 34;
  const long = ipData ? ipData.location.lng : 27;

  //Updates MapContainer when ipAddress is updated
  const FlyMapOnIpUpdate = ({ center, zoom }) => {
    const map = useMap();
    //MapContainer props are immutable. Use useMap hook to flyTo when the ipAddress changes
    map.flyTo(center, zoom);
  };

  window.addEventListener('resize', (e) => {
    console.log('resized');
  });

  return (
    <div id="map">
      <MapContainer
        center={[lat, long]}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: '70vh' }}>
        <TileLayer
          attribution={
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
          url={`https://tile.openstreetmap.org/{z}/{x}/{y}.png`}
        />
        <Marker position={[lat, long]} />
        <div id="map"></div>
        <FlyMapOnIpUpdate center={[lat, long]} zoom={15} />
      </MapContainer>
    </div>
  );
};
