import './Cursos.css'
import fireIcon from '../../../img/3DFire.png' ;
import CardCurso from './CardCursos';
import JsLogo from '../../../img/Jslogo.png';
import HtmlLogo from '../../../img/htmllogo.png';
import ReactLogo from '../../../img/reactlogo.png';
import jsVerde from '../../../img/jsLogoVerde.png';
import jsBlue from '../../../img/jsBlue.png';
import htmlBlue from '../../../img/htmlBlue.png';

import reactBlue from '../../../img/reactBlue.png';

function Cursos(){
    return(
        <div className='contCursosGeral' id='cursos'>
            <div className='containerCursos'>
                <div className='boxTituloCursos'>
                    <div className='tituloSecaoCursos'> _Categoria_de_Cursos_ </div>
                    <img src={fireIcon} alt="Imagem 3D de um emoji de fogo" className='iconFire'/> 
                </div>
            </div>
            <div className='containerListaCurso'>
                <div className='boxListagem'>
                    
                    <h3 className='tituloListas'> Front-End </h3>

                    <div className='carrosselCursos'>
                        <CardCurso Categoria="FrontEnd" 
                        logotipo={HtmlLogo}
                        NomeCurso="_Html_Css" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação. " />

                        <CardCurso Categoria="FrontEnd" 
                        logotipo={JsLogo}
                        NomeCurso="_Javascript_Typescript" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        
                        <CardCurso Categoria="FrontEnd" 
                        logotipo={ReactLogo}
                        NomeCurso="_Javascript_Typescript" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        <CardCurso Categoria="FrontEnd" 
                        logotipo={ReactLogo}
                        NomeCurso="_UI_UX" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />
                        
                    </div>


                </div>

                <div className='boxListagem'>
                    <h3 className='tituloListas'> Back-End </h3>
                    
                    <div className='carrosselCursos'>
                        <CardCurso Categoria="BackEnd" 
                        logotipo={jsVerde}
                        NomeCurso="_Html_Css" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação. " />

                        <CardCurso Categoria="BackEnd" 
                        logotipo={jsVerde}
                        NomeCurso="_Javascript_Typescript" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        
                        <CardCurso Categoria="BackEnd" 
                        logotipo={jsVerde}
                        NomeCurso="_Javascript_Typescript" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        <CardCurso Categoria="BackEnd" 
                        logotipo={jsVerde}
                        NomeCurso="_UI_UX" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />
                        
                    </div>
                </div>

            </div>
            <div className='boxListagem infraCont'>
                    <h3 className='tituloListas'> Infraestrutura </h3>
                    <div className='carrosselCursos'>
                        <CardCurso Categoria="infra" 
                        logotipo={htmlBlue}
                        NomeCurso="_Html_Css" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação. " />

                        <CardCurso Categoria="infra" 
                        logotipo={jsBlue}
                        NomeCurso="_Javascript_Typescript" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        
                        <CardCurso Categoria="infra" 
                        logotipo={reactBlue}
                        NomeCurso="_Javascript_Typescript" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        <CardCurso Categoria="infra" 
                        logotipo={reactBlue}
                        NomeCurso="_UI_UX" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />
                        
                    </div>
                </div>
        </div>
    )
}

export default Cursos