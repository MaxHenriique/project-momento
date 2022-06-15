import { useState } from 'react';
import './SlideVideo.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Apresentacao from './Apresentacao';
import aline from '../../../img/aline.png';
import felype from '../../../img/felype.png';
import carlos from '../../../img/carlos.png';
import lucca from '../../../img/lucca.png';
import leo from '../../../img/leonardo.png';
import gabi from '../../../img/gabi.png';
import rapha from '../../../img/rapha.png';



function SlideVideo(){

    const [scrollSlide, setScrollSlide] = useState(0);
    const alineMovie = 'https://rr2---sn-bg0eznle.c.drive.google.com/videoplayback?expire=1655315523&ei=AuSpYpzyM7_Au7APrr-x4AQ&ip=2804:431:cfcb:70e0:5101:eebb:75c4:70cc&cp=QVRKV0RfVFVQRFhPOllNSHJqWmx2S0J0LThZTXZsNHU4cXJsb25MUm9GQVJIc3YwaDJJNHhfT0o&id=7d4306e06d3e3cd3&itag=22&source=webdrive&requiressl=yes&mh=1_&mm=32&mn=sn-bg0eznle&ms=su&mv=m&mvi=2&pl=48&ttl=transient&susc=dr&driveid=1n5nvlXa1ddjQ42C1K_AqgkLDrs975q7i&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=36.989&lmt=1655210026041319&mt=1655300928&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgIZ09bLyOt1_N2SqppVwcRtdtvZ75A8v-p62Z4LCdw0YCIQDyZDnQB79-f7yNSGSFeJI7YTQpX-SLjDO_BGjBq4-Vtw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAMhCqUvoS_Rrtbp_Sw9ysPCM7InWnCgOZzj79pQ8bbn9AiEAxI1iFjkjcKUdVHS4Lg0dg76xPZHbhaTiUezY_s-8K5w=&cpn=UndF8iFdNPH-xJin&c=WEB_EMBEDDED_PLAYER&cver=1.20220612.00.00';
    const felypeMovie = "https://rr1---sn-bg0eznek.c.drive.google.com/videoplayback?expire=1655316010&ei=6uWpYvCHFeDsu7AP15C80AY&ip=2804:431:cfcb:70e0:5101:eebb:75c4:70cc&cp=QVRKV0RfVVBPQVhPOllNSHNlWWl2S0J0LThaSHVpNHU4cXJscGlLT29GQVJIc3c1ZzlJNHhfT0o&id=f679783322a5d395&itag=22&source=webdrive&requiressl=yes&mh=yc&mm=32&mn=sn-bg0eznek&ms=su&mv=m&mvi=1&pl=48&ttl=transient&susc=dr&driveid=1gdndSKwGSlwCqfIIoGBI_cPa9O7tzKOc&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=123.158&lmt=1655265209450016&mt=1655301170&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgC3gkxTwyac81sIRieFJaEZQlkm72W76D0K6bYmeZpvoCIHOXJ6cIe9X7YNLEGFP3XbhuAuHrKXh6lEdqhVIdcULP&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAJCZFVqHnZQ_qWojV7978OyTmk0jY539fUIKxmPK1iNlAiEAjHVpudVBhZYeQD6jhl47FWTC1ayvFhjwgY1OmjU81S4=&cpn=3axjITQXT_vaQS7D&c=WEB_EMBEDDED_PLAYER&cver=1.20220612.00.00";
    const carlosMovie = "https://rr3---sn-bg0eznlz.c.drive.google.com/videoplayback?expire=1655316078&ei=LuapYunpNafu1bYPiNGbWA&ip=2804:431:cfcb:70e0:5101:eebb:75c4:70cc&cp=QVRKV0RfVVBVSVhPOllNSHNlRXF2S0J0LThaSGFxNHU4cXJscGlRV29GQVJIc3c1bTdJNHhfT0o&id=b66ca48bd6b79ac2&itag=22&source=webdrive&requiressl=yes&mh=Nj&mm=32&mn=sn-bg0eznlz&ms=su&mv=m&mvi=3&pl=48&ttl=transient&susc=dr&driveid=1g4Juj-e46MjSEOJLRBzOXMAgJhJZKs-F&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=41.424&lmt=1655260793672925&mt=1655301170&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAMP7neQaShRfOki4to6B18P2vpt8a6hs3yNsEhGE1SKoAiBCh0vO4GxvZwomo9f7BxEuo6HxEd9QV5R4MSJv-0rh2Q==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAL8FzOD-4pSsDYkc4Hbh7iJU9R0Abw3mCLvdu7Lx9YLgAiEApFtHAjNY-5s5oz9QfmZtjh-fWymtVTnS9I60Nc6uEGU=&cpn=SW_e2IcdO4t1kLP-&c=WEB_EMBEDDED_PLAYER&cver=1.20220612.00.00";
    const luccaMovie = "https://rr4---sn-bg07dnk6.c.drive.google.com/videoplayback?expire=1655316160&ei=gOapYqunM_7Zu7APoM-H-Ak&ip=2804:431:cfcb:70e0:5101:eebb:75c4:70cc&cp=QVRKV0RfVVFUQVhPOllNSHNmRGl2S0J0LThaSXppNHU4cXJscGpQT29GQVJIc3c2bDlJNHhfT0o&id=0ab55b8dd1ad9490&itag=22&source=webdrive&requiressl=yes&mh=8S&mm=32&mn=sn-bg07dnk6&ms=su&mv=m&mvi=4&pl=48&ttl=transient&susc=dr&driveid=16ubWT9gRMYAtyx4_2atT0wDWLEZa6Kfs&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=125.016&lmt=1655209970446423&mt=1655301409&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgUlhOF0YI5UWY9uM8nFJT5OQODYpT-voalTN0fzRuPlwCIGvqvhMSpJbMQvTgyPDCjVokomLevnGyXxUvYZQWSyBa&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhANK2WnNxCY-lHb5fN1HDxzFX9AUEaw-RTm2v0Y558sfkAiA_bivXbn9qvAlQ-y0L-_fW88sjy6SW-HfENC7lwxXMjg==&cpn=u-r28hcCjRuz8e_s&c=WEB_EMBEDDED_PLAYER&cver=1.20220612.00.00";
    const leoMovie = "https://rr3---sn-bg0eznlz.c.drive.google.com/videoplayback?expire=1655316221&ei=veapYrDqDq27u7APqs6SqAo&ip=2804:431:cfcb:70e0:5101:eebb:75c4:70cc&cp=QVRKV0RfVVJQQlhPOllNSHNnWmp2S0J0LThaSnZqNHU4cXJscGtMUG9GQVJIc3c3aDBJNHhfT0o&id=4f430414f0cff985&itag=22&source=webdrive&requiressl=yes&mh=_b&mm=32&mn=sn-bg0eznlz&ms=su&mv=m&mvi=3&pl=48&ttl=transient&susc=dr&driveid=1h-E8Dt1nBN-BLgw2fMsp3fjcyH-LDnVB&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=84.427&lmt=1655265230653177&mt=1655301409&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAN3JT-Qj9puhU5t8D-lTfQznXe_IEnSTSFKnJT9GCE5nAiEAs4XA4VLV3zTxP03kMAX6YBIgLxMleVtAOtBPBpEdyOQ=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhALrBKN7es1WP_MQLUhUiAEdUVxEpXGheTAitdSpl_0tfAiA_FSHpWCIannXEERVkGtnaIGLrrCbWvJCsPs2w70JDsg==&cpn=zL-SR9ewcTiaz1bI&c=WEB_EMBEDDED_PLAYER&cver=1.20220612.00.00";
    const gabiMovie = "https://rr1---sn-bg0eznls.c.drive.google.com/videoplayback?expire=1655316290&ei=AuepYuPpNdC04QScqJGgBA&ip=191.23.37.45&cp=QVRKV0RfVVJXQVhPOllNSHNnR2l2S0J0LThaSmNpNHU4cXJscGtTT29GQVJIc3c3bzlJNHhfT0o&id=b191836c5c061793&itag=22&source=webdrive&requiressl=yes&mh=aC&mm=32&mn=sn-bg0eznls&ms=su&mv=u&mvi=1&pl=24&ttl=transient&susc=dr&driveid=19kN5tT4nirq6kV7F5W4o3W056lDB6Dqt&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=171.061&lmt=1655237920082448&mt=1655300613&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgZhoSnlt5nmzYgJy1mR05183huC-FUQpEquCIdS6VJJcCIF4W8dl0il2gCSW-B_9jlIVaHjT6-m3q3LMRqEUqnoik&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgZ6_bvZZRfqif2BsANqktUeHqKp0HZUPKTl0CWiPmCjUCID6dObAXKwdI1RQBv2Onh-4axyGEOPxdkkrvmscn0EPS&cpn=zy9pLIUwdZmt6hs4&c=WEB_EMBEDDED_PLAYER&cver=1.20220612.00.00";
    const raphaMovie = "https://rr3---sn-bg0eznlz.c.drive.google.com/videoplayback?expire=1655316329&ei=KeepYsqtHKWYsAKrsINw&ip=191.23.37.45&cp=QVRKV0RfVVNQSlhPOllNSHNoWnJ2S0J0LThaS3ZyNHU4cXJscGxMWG9GQVJIc3c4aDhJNHhfT0o&id=151021ccb1648d10&itag=22&source=webdrive&requiressl=yes&mh=tF&mm=32&mn=sn-bg0eznlz&ms=su&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=12KXZdwbhYjMjDtmcXVBCMlWDQH2O3YIn&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=46.857&lmt=1655210065149745&mt=1655300613&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgFCuAGBqhjoZNOdRGtD3-ytFxZFMBOjdGdjrysafNrCcCIQCTzVXHhtJMj8OayAOndXlwEnMUaXxc0R-IfcynBBeoPA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgM8buvINm50h1SjffBnXeWzjI7D-JWfToS6dAZ5f9ZJgCIFh-qcYD-WfXb-2xKsacEPud4tRGGlkFmklwyYTzN6lN&cpn=be3MxaY_-8IZOE-l&c=WEB_EMBEDDED_PLAYER&cver=1.20220612.00.00";


    const handleLeftArrow = () => {
        let scrollX = scrollSlide + 2340;
        
        if(scrollX > 0 ){
            scrollX = 0
        }

        setScrollSlide(scrollX);
    }

    const handleRightArrow = () => {
        let scrollX = scrollSlide - 2340;
       
        if(scrollX < -14040) {
            scrollX = -14040
        }

        setScrollSlide(scrollX)
    }




    return(
        <div>
            <div className='contVideo'>
                <div className='slideVideos'>
                  <div className='slideItems' style={{
                    marginLeft: scrollSlide,
                    width: 1170
                  }}>
                        <Apresentacao 
                            hard="Front End"
                            nome="Aline Gallo "
                            funcao="DB Developer"
                            avatar={aline}
                            movie={alineMovie}
                            soft="Apresentação"
                            textOne="Essa é uma soft skill que também é um subtópico da capacidade de comunicação. No caso, consiste na habilidade de apresentar adequadamente o fruto de seu trabalho, suas conclusões e recomendações, explicar conceitos."
                            textTwo="De pouco adianta deter o conhecimento do universo da programação ou do banco de dados, se esse conteúdo fica trancado dentro da sua caixa craniana."
                            />

                            <Apresentacao 
                            hard="Front End"
                            nome="Felype Nunes"
                            funcao="Dev IA"
                            avatar={felype}
                            movie={felypeMovie}
                            soft="Comunicação"
                            textOne="Para melhor desenvolver a comunicação, procure entender a pessoa que está do outro lado da 
                            conversa e sutilmente molde uma mensagem para que seja absorvida da melhor maneira por ela."
                            textTwo="É importante desenvolver, também, a escuta e respeitar o espaço de fala do outro, prestando atenção 
                            e absorvendo o que é dito antes de pensar diretamente no que você vai responder."
                            />

                            <Apresentacao 
                            hard="Back End"
                            nome="Carlos Gabriel"
                            funcao="Dev Backend"
                            avatar={carlos}
                            movie={carlosMovie}
                            soft="Flexibilidade"
                            textOne="Cada vez mais o mercado exige que os profissionais saibam se reinventar. Novas demandas surgem a cada dia, tanto para futuros desafios quanto para cargos já em vigência. "
                            textTwo="Para ser um talento de destaque, é necessário mostrar essa versatilidade tanto no currículo quanto na sua rotina empresarial e emocional."
                            />

                            <Apresentacao 
                            hard="Front End"
                            nome="Lucca Macedo"
                            funcao="Dev Backend"
                            avatar={lucca}
                            movie={luccaMovie}
                            soft="Criatividade"
                            textOne="Criatividade é algo que não se aprende em curso ou faculdade, mas que você precisa. Pensar fora da caixa exige conhecimento, obviamente. É preciso conhecer as regras para poder quebrá-las e ir além. "
                            textTwo="Mas também é preciso coragem e admitir que deixar a imaginação fluir pode ser uma solução mais rápida que uma visitinha ao StackOverflow."
                            />

                            <Apresentacao 
                            hard="Back End"
                            nome="Leonardo Lima"
                            funcao="Figurante"
                            avatar={leo}
                            movie={leoMovie}
                            soft="Olhar crítico"
                            textOne="Certamente, você já ouviu falar nesse termo, mas pode não ter certeza sobre o que é pensamento crítico de fato. Existem várias definições mas, na maioria das vezes, envolve o processo de analisar os fatos para formar um julgamento."
                            textTwo="Ser capaz de tomar decisões assertivas com base em uma abordagem objetiva, precisa e justa é uma habilidade valiosa. Seja no meio acadêmico, pessoal ou profissional. Nesse último meio, torna-se ainda mais importante."
                            />

                            <Apresentacao 
                            hard="Banco de dados"
                            nome="Gabriela"
                            funcao="Dev FrontEnd"
                            soft="Organização"
                            avatar={gabi}
                            movie={gabiMovie}
                            textOne="Fundamental para aumento da eficiência e qualidade do trabalho. Ser um profissional organizado faz com que haja economia de tempo, pois as informações são encontradas de forma mais rápida. "
                            textTwo="Além disso, você diminui sua suscetibilidade aos erros relacionados à desatenção. Dessa forma, o profissional passa uma imagem de maior competência, podendo influenciar de maneira positiva os colegas."
                            />

                            <Apresentacao 
                            hard="Segurança da informação"
                            nome="Raphael"
                            funcao="Dev FrontEnd"
                            soft="Segurança"
                            avatar={rapha}
                            movie={raphaMovie}
                            textOne="Possuir fortes instintos de pesquisa e escrita é um ativo inestimável que cada analista de segurança da informação deve ter. Essa habilidade é útil quando os especialistas executam a criação e aplicação de políticas. "
                            textTwo="Networking vai muito além do lado técnico. Esse skill envolve o aproveitamento de suas habilidades sociais e de comunicação para expandir seus contatos profissionais e se conectar, o que é fundamental no desenvolvimento de sua carreira."
                            />
                  </div>
                    
                    
                    
                </div>

                <div className='navgation'>
                    <FaAngleLeft className='iconNavgation' onClick={handleLeftArrow}/>
                    <FaAngleRight className='iconNavgation' onClick={handleRightArrow}/>
                </div>

                
            </div>



        </div>
    )
};

export default SlideVideo