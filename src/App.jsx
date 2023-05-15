import './styles/App.css';
import { Header } from './components/Header';
import { ResultsContainer } from './components/ResultsContainer';
import { Map } from './components/Map';
import { useState } from 'react';

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');

  return (
    <>
      <Header setIpAddress={setIpAddress}></Header>
      <ResultsContainer ipAddress={ipAddress}></ResultsContainer>
      <Map ipAddress={ipAddress}></Map>
    </>
  );
}

export default App;
