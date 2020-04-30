import React from 'react';
import Alert from './components/myComponent'
import Checkbox from './components/checkbox'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Checkbox>
          <Alert></Alert>
        </Checkbox>
      </header>
    </div>
  );
}

export default App;

