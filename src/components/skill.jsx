import React from "react";

export const Skill = ({nombre,src}) => {
    return(
    <div className="flex flex-col col-span-1 space-y-2 items-center justify-center">
        <img className="h-[90px] w-[90px]" src={`${src}`} alt="Icono" />
        <p className="font-outfit text-center w-[90px]">{nombre}</p>
    </div>
    )
}