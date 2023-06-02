import './styles/App.css';
import { Header } from './components/Header';
import { ResultsContainer } from './components/ResultsContainer';
import { Map } from './components/Map';
import { useState } from 'react';

function App() {
  const [ipData, setIpData] = useState();

  return (
    <>
      <Header
        handleIpChange={(ipData) => setIpData(ipData)}
        ipData={ipData}></Header>
      {ipData && <ResultsContainer ipData={ipData}></ResultsContainer>}
      <Map ipData={ipData}></Map>
    </>
  );
}

export default App;
