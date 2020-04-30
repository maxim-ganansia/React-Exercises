import React from 'react';
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box1 name="box-parent">
          <Box2 name="box-child1">
            <Box3 name="box-child2">
              <Box4 name ="box-child3"></Box4>
              <Box4 name ="box-child4"></Box4>
            </Box3>
          </Box2>
        </Box1>

      </header>
    </div>
  );
}

export default App;



