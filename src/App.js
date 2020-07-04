import React from 'react';
import './App.css';
import Main from './views/Main';
import Resume from './views/Resume';
import { Router } from '@reach/router';
import ParticlesBg from 'particles-bg';



function App() {
  return (
    <div>
      <ParticlesBg type="lines" bg={true} />
      <Router>
        <Main path = '/'/>
        <Resume path = '/resume'/>
      </Router>
    </div>
  );
}

export default App;
