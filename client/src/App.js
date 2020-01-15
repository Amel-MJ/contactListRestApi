import React from 'react';
import './App.css';
import Contact from './component/contact';

import Routeur from './routeur/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact APP</h1>
        <div className="button">
        <Contact/>
        
        <Routeur/>
    
        </div>
       
      </header>
    </div>
  );
}

export default App;
