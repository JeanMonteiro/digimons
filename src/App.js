import React, { useState } from 'react';
import './App.css';
import Card from './shared/components/card/card'
import logo from './assets/logo.png'
import Axios from 'axios'

function renderCard({ name, img, level }) {
  return (
    <Card>
      <div style={{ flexDirection: 'row', display: 'flex', margin: '10px' }}>

        <div style={{ width: '40%', margin: 'auto' }}>
          <img src={img} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        <div style={{ width: '60%' }}>
          <h3>{name}</h3>
          <p>{level}</p>
        </div>
      </div>
    </Card>
  )
}



function App() {
  const [digimons, setDigimons] = useState([]);

  const renderList = () => {
    return digimons.map((digimon) =>
      <div>
        {renderCard(digimon)}
      </div>
    )
  }

  const callApi = async () => {
    let { data } = await Axios.get('https://digimon-api.herokuapp.com/api/digimon')
    setDigimons(data)
  }

  callApi()

  return (
    <div>
      <div style={{ width: '20%', margin: 'auto' }}>
        <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: '20px', flexWrap: 'wrap' }}>
        {renderList()}
      </div>
    </div>
  )
}

export default App;
