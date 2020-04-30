import React from 'react';
import TopContent from './component/topContent'
import Sun1 from './images/Sun.png'
import Sun2 from './images/Sun2.png'
import BottomContent from './component/bottomContent'
import Leaf from './images/Leaf.png'
import Water from './images/water.png'
import Waterdrops from './images/waterdrops.png'
import Rain from './images/Rain.png'
import SunCloud from './images/Suncloud.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <TopContent image={Sun1}></TopContent>
          <BottomContent
          day="Mo" date="16.02"
          logo={Sun2}
          status="Sunny"
          temperature="19°C"
          logo2={Leaf}
          text2="4mph"
          logo3={Water}
          text3="63%"
          logo4={Waterdrops}
          text4="14%">
          </BottomContent>
          <BottomContent
          day="tu" date="17.02"
          logo={Rain}
          status="Rain"
          temperature="14°C"
          logo2={Leaf}
          text2="4mph"
          logo3={Water}
          text3="63%"
          logo4={Waterdrops}
          text4="14%">
          </BottomContent>
          <BottomContent
          day="We" date="18.02"
          logo={SunCloud}
          status="Cloudy"
          temperature="17°C"
          logo2={Leaf}
          text2="4mph"
          logo3={Water}
          text3="63%"
          logo4={Waterdrops}
          text4="14%">
          </BottomContent>
      </header>
    </div>
  );
}

export default App;
