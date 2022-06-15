import './Inicio.css'
import Button from '../../button/Button';
import SobreMomentoInfos from '../../sobreMomentoInfos/SobreMomentoInfos';
import iconAltoFalante from '../../../img/EmojiAltoFalante.png'; 
import iconBeca from '../../../img/EmojiBeca.png';
import {Link} from 'react-router-dom';


function Inicio(){
    return(
        <div>
            <div className='boxInicio'>
                <div className='box'>
                    <div>
                        <div className='emoji'></div>
                        <p className='subtitulo'> Bem Vindo! </p>
                    </div>
                    <h2 className='titulo'> Neves Stop To Learn </h2>
                    <p className='textoApresentacao'> Somos uma empresa de Tecnologia que proporciona cursos e mentorias online com valores acessíveis para pessoas de baixa renda</p>
                </div>

                <div>
                    <div className='imagemLado'></div>
                </div>
            </div>

            <div className='EfeitoDeLuz'> </div>
            <div className='boxSobreMomento' id='sobreMomento'>
                <div className='boxSobreTextoPrincipal'>
                    
                    <h2 className='tituloSobre'> Sobre a momento </h2>
                    <p>Somos uma empresa de Tecnologia que proporciona cursos e mentorias online com valores acessíveis para pessoas de baixa renda. </p>    
                    
                    <Link to="/nossaequipe">
                        <Button 
                        texto="Conheça a nossa equipe" 
                        classe="btnAzul lg"/>
                    </Link>

                </div>
                <div className='infosLado'> 
                    <SobreMomentoInfos  
                    icon={iconBeca}
                    subtitulo="_Cursos:"
                    texto="São para formação efetiva de devs, com muitas atividades práticas e teoria de qualidade."
                    />

                    <SobreMomentoInfos 
                    icon={iconAltoFalante}
                    subtitulo="_Mentorias:"
                    texto="Nossos mentores e mentoras são qualificados e tem experiência na área, prontos para te ajudar na matéria e no ingresso ao mercado de trabalho"
                    />

                    {/* componente responsável pelas informações de lado aqui */}
                </div>
            </div>
        </div>
    )
}

export default Inicio;