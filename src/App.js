import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png'
import Axios from 'axios'
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #eee;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.35);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.35);
    border-radius: 8px;
    background-color: #fff;
    margin: 10px;
    width: 300px;
`

const CardsContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
`

function renderCard({ name, img, level }) {
  return (
    <Card style={{ flexDirection: 'row', display: 'flex', padding: '10px' }}>

      <div style={{ width: '40%', margin: 'auto' }}>
        <img src={img} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <div style={{ width: '60%' }}>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </Card>
  )
}

function App() {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      let { data } = await Axios.get('https://digimon-api.herokuapp.com/api/digimon')
      setDigimons(data)
    }
    callApi()
  });

  const renderList = () => {
    return digimons.map((digimon) =>
      <div>
        {renderCard(digimon)}
      </div>
    )
  }

  return (
    <div>
      <div style={{ width: '20%', margin: 'auto' }}>
        <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <CardsContainer>
        {renderList()}
      </CardsContainer>
    </div>
  )
}

export default App;
