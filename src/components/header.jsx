import React from "react";
import {Link,useNavigate} from "react-router-dom";
import { useState } from 'react';

export const Header = () => {
    return (
    <div>
        <div>
            <Link to= "/"><img src="/images/logo.png" alt="Logo"/></Link>
            <Menu/>
        </div>
        
    </div>
    );
}


const Menu = () =>  {
    const [abierto, setAbierto] = useState(false);
    const navigate = useNavigate();
    const interactuarMenu = () => {
        setAbierto(!abierto);
    };    
    return (
    <div>
        <button onClick={interactuarMenu}>Menú <img src="icons/menu.svg" alt="Icono" /> </button>
        {abierto && (
        <ul>
        <button onClick={()=>{navigate('/about')}}>About</button>
        <button onClick={()=>{navigate('/services')}}>Services</button>
        <button onClick={()=>{navigate('/projects')}}>Projects</button>
        <button onClick={()=>{navigate('/certifications')}}>Certifications</button>
        <button onClick={()=>{navigate('/contact')}}>Contact</button>
        </ul>
    )}
    </div>
    );
}



