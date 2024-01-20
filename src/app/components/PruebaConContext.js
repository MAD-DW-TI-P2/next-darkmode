import Image from 'next/image'
import { ThemeContext } from '../context/ThemeContextSinProvider';
import { useContext } from 'react';

export default function PruebaConContext() {

  const { lan, darkMode} = useContext(ThemeContext);

  return (
    <div>
      <h1>Context en idioma {lan}</h1>
      <Image
          className={darkMode == 'dark-mode' ? 'aux-dark-mode' : ''}
          src="/women_icon.svg"
          alt="Women"
          width={80}
          height={27}
          priority></Image>
    </div>
  )
}
