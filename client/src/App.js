import React from 'react';
import './App.css';
import Contact from './component/contact';

import Modif from './component/update';
import Delete from './component/delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact APP</h1>
        <div className="button">
        <Contact/>
       
        </div>
       
      </header>
    </div>
  );
}

export default App;
