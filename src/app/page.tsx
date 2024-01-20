'use client'

import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/Nav'
import Prueba1 from './components/PruebaConProps'
//import Prueba2 from './components/PruebaConContext'
import { useState, useContext } from 'react'
import {ThemeContext} from './context/ThemeContextProvider';


export default function Home() {

  const {lang, darkMode, setDarkMode} = useContext(ThemeContext);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = process.env.NEXT_PUBLIC_URL;

  return (
      <main className={`${darkMode} flex min-h-screen flex-col items-center justify-between p-24`}>
        <h1>Para el test</h1>
        <p>Variable de entorno de cliente: {apiKey}</p>
        <Prueba1 name="Jorge" darkMode = {darkMode} />
        {/*<Prueba2>*/}
        <p>{lang} El estado es {darkMode}: {darkMode == 'light' ? 'Inicial': 'Moficado'}</p>
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
  )
}
