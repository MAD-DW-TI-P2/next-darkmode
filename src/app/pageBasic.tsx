'use client'

import Image from 'next/image'
import Animation from './components/Animation'
import Link from 'next/link'
import Nav from './components/Nav'
import Prueba1 from './components/PruebaConProps'
import Prueba2 from './components/PruebaConContext'
import Prueba3 from './components/Prueba3'
import { useState, useContext } from 'react'
import { ThemeContext } from './context/ThemeContextSinProvider';


export default function Home() {

  const [darkMode, setDarkMode] = useState('light')

  const values = {
    darkMode: darkMode,
    setDarkMode: setDarkMode,
    lan: 'ES'
  }

  return (
    <ThemeContext.Provider value={values}>
        <main className={`${darkMode} flex min-h-screen flex-col items-center justify-between p-24`}>
          <Animation/>
          <h1>Para el test</h1>
          <Prueba1 name="Jorge" darkMode = {darkMode} />
          <Prueba2/>
          <Prueba3 name="Jorge" darkMode = {darkMode}/>
          <p>El estado es {darkMode}: {darkMode == 'light' ? 'Inicial': 'Moficado'}</p>
          {darkMode != 'dark-mode' ? 
            (<button onClick={ ()=> { setDarkMode('dark-mode')}}>
              <Image
                  src="/moon.svg"
                  alt="Moon"
                  width={80}
                  height={27}
                  priority
            /></button>) 
            : 
            (<button onClick={ ()=> { setDarkMode('light')}}>
              <Image
                  src="/sun.svg"
                  alt="Sun"
                  width={80}
                  height={27}
                  priority
              />
            </button>)
          }
        </main>
      </ThemeContext.Provider>
  )
}
