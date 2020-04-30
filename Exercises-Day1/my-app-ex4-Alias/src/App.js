import React from 'react';
import Navbar from './components/Navbar'
import LogoPhone from './Image/Logo-phone.png'
import Content from './components/Content'
import Content2 from './components/Content2'
import Image1 from './Image/Image1.png'
import Image2 from './Image/Image2.png'
import Image3 from './Image/Image3.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar name1="SERVICE" name2="WORK" name3="THE TEAM" image={LogoPhone}></Navbar>
        <Content title="SERVICE"></Content>
    <div className="middlePart">
        <Content2 image={Image1} subtitle="USER INTERFACE DESIGN" info="Wireframing Prototyping Usability Testing"></Content2>
        <Content2 image={Image2} subtitle="CONCEPT AND IDEAS" info="Conceptualization Digital Branding Product Strategy"></Content2>
        <Content2 image={Image3} subtitle="DESIGN AND BRANDING" info="Interaction Design Graphic Design Identity Design"></Content2>
    </div>  
      </header>
    </div>
  );
}

export default App;

