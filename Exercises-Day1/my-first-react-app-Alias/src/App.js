import React from 'react';
import './App.css';
import ListTravel from "./component/List-Travel"
import Israel from './images/Jerusalem.jpeg'
import France from './images/Grenoble.jpg'
import Italie from './images/Rome.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListTravel name ="Jerusalem (Israel)" image={Israel} link="https://goo.gl/maps/jdFEmuLaWmJbiMH7A"></ListTravel>
        <ListTravel name ="Grenoble (France)" image={France} link="https://goo.gl/maps/qaHeP29s5apeQJWs7"></ListTravel>
        <ListTravel name ="Rome (Italie)" image={Italie} link="https://goo.gl/maps/vUH12s9VoP5jQWsS8"></ListTravel>
      </header>
    </div>
  );
}

export default App;
