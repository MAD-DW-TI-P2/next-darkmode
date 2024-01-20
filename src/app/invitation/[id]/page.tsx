'use client'

import { ThemeContext } from '../../context/ThemeContextProvider';
import { useContext } from 'react';

export default function Invitation({ params }: { params: { id: string } }) {
  
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <main className={`${darkMode} flex min-h-screen flex-col items-center justify-between p-24`}>
      <h1>My invitation: {params.id} y modo {darkMode}</h1>
      <div onClick={ ()=> { setDarkMode('dark-mode')}}>
        Pasar dark
      </div>
      <div onClick={()=> {setDarkMode('light')}}>
        Pasar light
      </div>
    </main>
  )
}