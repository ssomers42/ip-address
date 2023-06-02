//takes in an ipAddress and fetches the geo API to return an ipData object
export const getIpData = async (ipAddress) => {
  console.log('getting Data');
  const apiKey = 'at_TAgc8qfjNVNSO8AMMtu2QIWkp516F';
  const geoAPI = ipAddress
    ? `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
    : `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  const ipInfoResponse = await fetch(geoAPI).catch((err) => console.log(err));
  const ipData = await ipInfoResponse.json();
  return ipData;
};
