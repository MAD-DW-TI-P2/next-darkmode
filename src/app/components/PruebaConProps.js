import Image from 'next/image'

export default function Prueba(props) {
  return (
    <div>
      <h1>{props.name} y {props.darkMode}</h1>
      <Image
          className={props.darkMode == 'dark-mode' ? 'aux-dark-mode' : ''}
          src="/women_icon.svg"
          alt="Women"
          width={80}
          height={27}
          priority
      />
    </div>
  )
}
