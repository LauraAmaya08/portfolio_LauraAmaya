import React from "react";

export const Skill = ({nombre,src}) => {
    return(
    <div>
        <img src={`./${src}`} alt="Icono" />
        <p>{nombre}</p>
    </div>
    )
}