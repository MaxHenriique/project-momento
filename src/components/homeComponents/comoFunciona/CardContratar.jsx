import './CardContratar.css';
import logo from '../../../img/logoIcon.png';
import { FaCheck } from "react-icons/fa";

function CardContratar({tipo, preco, avista, checkItem }) {
    return(
        <div>
            <div className="cardContainer">
                <img src={logo} />
                <h2>{tipo}</h2>
                <p className='preco'>10x<span>R${preco}</span></p>
                <p className='avista'>à vista R$ {avista}</p>
                
                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Acesso permanente aos cursos de tecnologia</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Exercícios e desafios para fixação</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Suporte individualizado</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Certificados</p>
                </div>

                <div className='items'>
                    <FaCheck className={checkItem}/>
                    <p>Mentoria com profissionais da área</p>
                </div>

                <button type='button' className='btnContratar'>Contratar Plano</button>
            </div>
        </div>
    )
};

export default CardContratar; 