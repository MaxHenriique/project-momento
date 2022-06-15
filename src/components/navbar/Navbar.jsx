import './Navbar.css'
import { Link } from 'react-router-dom' 
import logo from '../../img/Union.png';

function Navbar(){
    return (
        <div className="boxNavbar">
            <div>
                <Link to="/" className='logoCont'>
                    <img src={logo} />
                    <h2 className="nomeLogotipo">Momento</h2>
                </Link>
            </div>

            <div>
                <ul className='navBarLinks'>
                    <li className='link'><a href='#sobreMomento'>O que é o momento</a></li>
                    <li className='link'><a href='#cursos'>Cursos</a></li>
                    <Link to="/nossaequipe" className='link'>Conheça a nossa equipe</Link>
                </ul>
            </div>  

            <div>
                <button className='buttonCadastro'>Criar uma conta</button>
                <button className='buttonCadastro'>Entrar</button>
                
            </div>
        </div>
    )
};

export default Navbar;