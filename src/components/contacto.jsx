import React from "react";

export const Contacto = ({informarcion,src}) => {
    return(
    <div className="flex flex-row space-x-2 justify-center">
        <img className="h-[30px] w-[20px]" src={`${src}`} alt="Icono" />
        <p className="font-outfit text-center w-[100px]">{informarcion}</p>
    </div>
    )
}