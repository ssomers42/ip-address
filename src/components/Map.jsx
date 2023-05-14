export const Map = ({ ipAddress }) => {
  const getLocation = async () => {
    const apiKey = 'at_FcUoYu5h9NCfBwMyuelMKPInX8nwo';
    const geoAPI = `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    const locationResponse = await fetch(geoAPI);
    const locationData = await locationResponse.json();
    console.log(locationData);
  };
  getLocation();
  return <div>Map</div>;
};
