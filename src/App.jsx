import './styles/App.css';
import { Header } from './components/Header';
import { ResultsContainer } from './components/ResultsContainer';
import { Map } from './components/Map';
import { useState } from 'react';

function App() {
  
  const [ipData, setIpData] = useState({
    ip: '8.8.8.8',
    location: {
      country: 'US',
      region: 'California',
      city: 'Mountain View',
      lat: 37.40599,
      lng: -122.078514,
      postalCode: '94043',
      timezone: '-07:00',
      geonameId: 5375481,
    },
    domains: [
      '0d2.net',
      '003725.com',
      '0f6.b0094c.cn',
      '007515.com',
      '0guhi.jocose.cn',
    ],
    as: {
      asn: 15169,
      name: 'Google LLC',
      route: '8.8.8.0/24',
      domain: 'https://about.google/intl/en/',
      type: 'Content',
    },
    isp: 'Google LLC',
  });

  const onIpChange = (ipData) => {
    setIpData(ipData);
  };

  return (
    <>
      <Header
        handleIpChange={(ip) => setIpAddress(ip)}
        ipData={ipData}></Header>
      {ipData && <ResultsContainer ipData={ipData}></ResultsContainer>}
      <Map onIpChange={onIpChange}></Map>
    </>
  );
}

export default App;
