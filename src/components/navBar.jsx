import { Link } from "react-router-dom";

const navBar = () => {
    return (
        <nav className="navbar">
            <ul>

               
                <li><Link to='/'>Entrar</Link></li>
                <img src="vite.svg" alt="logo da pagina" />
                <li><Link to='/signin'>Cadastre-se</Link></li>
            </ul>
        </nav>
    )
}

export default navBar