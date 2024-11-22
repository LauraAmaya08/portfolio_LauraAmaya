import React from "react";

export const Contacto = ({informarcion,src}) => {
    return(
    <div className="flex flex-row-reverse gap-2 justify-center">
        <img className="h-[30px] w-[20px]" src={`${src}`} alt="Icono" />
        <p className="font-outfit text-center text-[20px]">{informarcion}</p>
    </div>
    )
}