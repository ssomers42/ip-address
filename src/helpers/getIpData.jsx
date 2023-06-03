//takes in an ipAddress and fetches the geo API to return an ipData object
export const getIpData = async (ipAddress) => {
  console.log('getting Data');
  //Netlify requires VITE_ prefix on API key
  //Vite requires import.meta.env instead of process.env
  console.log(geoAPI);
  const apiKey = import.meta.env.VITE_API_KEY;
  const geoAPI = `https:geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;

  const ipInfoResponse = await fetch(geoAPI).catch((err) => console.log(err));
  const ipData = await ipInfoResponse.json();
  return ipData;
};
