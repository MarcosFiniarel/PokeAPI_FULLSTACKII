import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Card } from 'react-bootstrap';

// https://pokeapi.co/api/v2/pokemon/lucario

function App() {

  const [pokemon, setPokemon] = useState([])

  const buscarPokemon = async () => {
    
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/lucario"
    )

    const data = await response.json()

    setPokemon(data)

    console.log(data)

  }

  useEffect(() => {
    buscarPokemon()
  }, [])

  return (
    <>
       <div className="contenedor">

        <Card className="carta-pokemon">

        <Card.Body>

          <div className="cabecera">

            <Card.Title>{pokemon?.name}</Card.Title>

            <span>N°{pokemon?.id}</span>

          </div>

          <div className="marco-imagen">

            <Card.Img

              src={pokemon?.sprites?.front_default}

              alt={pokemon?.name}

            />

          </div>

          <p className="tipo">

            {pokemon?.types?.map((tipo) => tipo.type.name).join(' / ')}

          </p>

          <div className="estadisticas">

            {pokemon?.stats?.map((stat) => (

              <div className="estadistica" key={stat.stat.name}>

                <span>{stat.stat.name}</span>

                <strong>{stat.base_stat}</strong>

              </div>

            ))}

          </div>

        </Card.Body>

        </Card>

      </div>
    </>
  )
}

export default App
