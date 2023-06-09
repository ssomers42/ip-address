import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet/hooks';
import locationMarker from '../assets/icon-location.svg';

export const Map = ({ ipData }) => {
  const lat = ipData ? ipData.location.lat : 34;
  const long = ipData ? ipData.location.lng : 27;

  //Updates MapContainer when ipAddress is updated
  const FlyMapOnIpUpdate = ({ center, zoom }) => {
    //MapContainer props are immutable. Use useMap hook to flyTo when the ipAddress changes
    const map = useMap();
    if (ipData) {
      map.flyTo(center, zoom);
    }
  };

  const markerIcon = L.icon({
    iconUrl: locationMarker,
    iconSize: [34.5, 42],
  });

  return (
    <div id="map">
      <MapContainer
        center={[lat, long]}
        zoom={3}
        scrollWheelZoom={true}
        style={
          window.innerWidth > 1200 ? { height: '70vh' } : { height: '60vh' }
        }
        zoomControl={false}>
        <TileLayer
          attribution={
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
          url={`https://tile.openstreetmap.org/{z}/{x}/{y}.png`}
        />
        {ipData && <Marker position={[lat, long]} icon={markerIcon} />}
        <div id="map"></div>
        <FlyMapOnIpUpdate center={[lat, long]} zoom={15} />
        {/* If on mobile, remove zoom controls. Can't adjust this on resize because mapcontainer does not repaint*/}
        {window.innerWidth > 1200 ? <ZoomControl position="topleft" /> : null}
      </MapContainer>
    </div>
  );
};
