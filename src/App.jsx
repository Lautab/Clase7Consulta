import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [poke, setPoke] = useState("")
  const api = () => {
    let n = Math.round(Math.random() * 1100)
    fetch(`https://pokeapi.co/api/v2/pokemon/${n}/`)
      .then((response) => response.json())
      .then((response) => {
        setPoke(response)
      })
  }


  useEffect(() => {
    api()
  }, [])
  console.log(poke);

  return (
    <>
      <div className='card'>
        <h3>Name: {poke.name}</h3>
        <h3>Number: {poke.id}</h3>
        <button onClick={() => { api() }}>Cargar nuevo pokemon</button>
      </div>
    </>
  )
}

export default App
