import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [dato, setDato] = useState(null);

  const api = () => {
    let n = Math.round(Math.random() * 1100)
    fetch(`https://pokeapi.co/api/v2/pokemon/${n}/`)
      .then((response) => response.json())
      .then((data) => {
        setDato(data)
        console.log(dato);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      })
  }

  useEffect(() => {
    api()}, [])

return (
  <>
    <div className='card'>
      <img src="" alt="" />
      <h1></h1>
      <h2></h2>
    </div>
  </>
)
}

export default App
