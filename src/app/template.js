import Nav from './components/Nav'

export default function Template({ children }) {
    return (
        <>
            <Nav/>
            <p>Hola Mundo</p>
            {children}
            <footer>Footer</footer>
        </>
    )
}