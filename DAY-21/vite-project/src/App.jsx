import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const data = [
    {
      server: 'Linux',
      machine: [
        'Laptop',
        'Desktop'
      ]
    }, {
      server: 'Windows',
      machine: [
        'Laptop 1',
        'Desktop 1'
      ]
    }
  ]
  return (
    <>
      {
        data.map((element, index) => {
          return <div>
            <h2>{element.server}</h2>
            <ul>
              {element.machine.map((typeSystem, index) => <li>{typeSystem}</li> )}
            </ul>
          </div>
        })
      }
    </>
  )
}

export default App
