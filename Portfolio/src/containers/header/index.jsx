import React from 'react';
import Foto from '../../assets/images/imagePerfil.JPG';
import {MyFoto, MyHeader, MyIcon, MyButton} from './style';
import { Icon } from "@iconify/react";
import Button from 'react-bootstrap/Button';

function header(){
    return(
        <MyHeader>
            <div className='conteudo'>
                <div className='left'>
                    <div className='text'>
                        <h2>Olá, me chamo </h2><h1><strong>Carlos Eduardo Bueno</strong></h1>
                        <p>
                            Sou estudante de Ciência da Computação
                        </p>
                    </div>
                    <ul className='Links'>
                        <li>
                             <MyIcon Icon icon="mdi:github" width="50" height="50"  onClick={() => window.open('https://github.com/CarlosBueno98101', '_blank')} />
                        </li>
                        <li>
                             <MyIcon Icon icon="mdi:instagram" width="50" height="50" onClick={() => window.open('https://www.instagram.com/ocarlosbueno/', '_blank')} />
                        </li>
                        <li>
                             <MyIcon Icon icon="mdi:linkedin" width="50" height="50" onClick={() => window.open('https://www.linkedin.com/in/carlos-bueno-2740662a3/', '_blank')} />
                        </li>
                        <li>
                             <MyIcon Icon icon="mdi:email" width="50" height="50" onClick={() => window.location.href = "#contato"}/>
                        </li>
                    </ul>
                    <MyButton onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/CarlosEduardo_Bueno_Currículo.pdf';
                        link.download = 'Curriculo_CarlosBueno.pdf';
                        document.body.appendChild(link); //  Firefox
                        link.click();
                        document.body.removeChild(link);
                        }}>
                        <span>Currículo</span>
                        <MyIcon Icon icon="mdi:download" width="20" height="20"/>
                    </MyButton>
                </div>
                    
                <div className='right'>
                    <MyFoto>
                        <div className='imagePessoal'>
                            <img src={Foto} alt="foto" />
                        </div>
                    </MyFoto>  
                </div>
            </div>
        </MyHeader>
    );
}

export default header;

