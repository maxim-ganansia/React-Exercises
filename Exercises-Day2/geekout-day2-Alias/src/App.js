import React from 'react';
import Myform from './components/myForm';
import Userlist from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Myform>
          <Userlist></Userlist>
        </Myform>
      </header>
    </div>
  );
}

export default App;
