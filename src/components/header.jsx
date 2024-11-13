import React from "react";
import {Link,useNavigate} from "react-router-dom";
import { useState } from 'react';

export const Header = () => {
    return (
    <div className="bg-[#F4F4F4] p-4 h-">
        <div className="flex items-center justify-between h-full">
            <Link to= "/"><img src="/images/logo.png" alt="Logo" className="w-auto h-[130px]"/></Link>
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
        <button onClick={interactuarMenu} className= "flex justify-between items-center w-20 mr-20" >Menú <img src="icons/menu.svg" alt="Icono" className="h-[30px]" /> </button >
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

