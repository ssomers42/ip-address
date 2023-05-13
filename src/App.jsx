import './styles/App.css';
import { Header } from './components/Header';
import { ResultsContainer } from './components/ResultsContainer';
import { Map } from './components/Map';
import { useState } from 'react';

function App() {
  const [IP, setIP] = useState('');
  return (
    <>
      <Header></Header>
      <ResultsContainer></ResultsContainer>
      <Map></Map>
    </>
  );
}

export default App;
