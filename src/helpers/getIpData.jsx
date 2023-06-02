//takes in an ipAddress and fetches the geo API to return an ipData object
export const getIpData = async (ipAddress) => {
  console.log('getting Data');
  const apiKey = 'at_NsfVfrenlLysqQebqudLCC7btBeK8';
  const geoAPI = ipAddress
    ? `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
    : `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  const ipInfoResponse = await fetch(geoAPI);
  const ipData = await ipInfoResponse.json();
  return ipData;
};
