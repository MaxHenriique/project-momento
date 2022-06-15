import './Apresentacao.css';

function Apresentacao({hard, nome, funcao, soft, textOne, textTwo, avatar, movie}){
    return(
        <div>
            <div className='contCardVideo'>
                <h2 className='title'>{hard}</h2>

                <div className='video'>
                    <video width="950" height="450" controls>
                        <source src={movie} type="video/mp4"  width="950"/>
                    </video>
                    
                    <div className='person'>
                        <div className='avatarPerson'>
                            <img src={avatar} />
                        </div>
                        <p>{nome} - {funcao}</p>
                    </div>
                </div>

                <div className='softSkills'>
                    <div className='softTitle'>
                        <p>Soft Skills mais valorizadas </p>
                        <button type='button' className='btnSoft'>{soft}</button>
                    </div>

                    <div className='textOne'>
                        <p> {textOne} </p>
                    </div>

                    <div className='textTwo'>
                        <p> {textTwo} </p>
                    </div>

                </div>

                
                
                
            </div>
        </div>
    )
};

export default Apresentacao;