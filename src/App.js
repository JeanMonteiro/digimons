import React from 'react';
import './App.css';
import Card from './shared/components/card/card'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <div style={{ width: '25%', margin: 'auto'}}>
        <img src={logo} alt="Logo" style={{maxWidth: '100%', height: 'auto'}} />
      </div>
      <Card>
        <p>HelloWorld</p>
      </Card>
    </div>
  );
}

export default App;
