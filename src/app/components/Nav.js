import Link from 'next/link'
 
function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/invitation/1">Invitación 1</Link>
      </li>
    </ul>
  )
}
 
export default Nav