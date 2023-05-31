import './styles/App.css';
import { Header } from './components/Header';
import { ResultsContainer } from './components/ResultsContainer';
import { Map } from './components/Map';
import { useState } from 'react';

function App() {
  const [ipAddress, setIpAddress] = useState(null);
  const [ipInfo, setIpInfo] = useState(null);

  const onIpChange = (ipInfo) => {
    setIpAddress((existingIp) => existingIp ?? ipInfo.ip);
    setIpInfo(ipInfo);
  };

  return (
    <>
      <Header handleIpChange={(ip) => setIpAddress(ip)}></Header>
      <ResultsContainer
        ipAddress={ipAddress}
        ipInfo={ipInfo}></ResultsContainer>
      <Map ipAddress={ipAddress} onIpChange={onIpChange}></Map>
    </>
  );
}

export default App;
