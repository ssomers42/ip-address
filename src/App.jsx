import './styles/App.css';
import { Header } from './components/Header';
import { Map } from './components/Map';
import { useState } from 'react';

function App() {
  const [ipData, setIpData] = useState();

  return (
    <>
      <Header
        handleIpChange={(ipData) => setIpData(ipData)}
        ipData={ipData}></Header>
      <Map ipData={ipData}></Map>
    </>
  );
}

export default App;
