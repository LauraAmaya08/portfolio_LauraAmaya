import React from "react";
import { motion } from "framer-motion"; 
import { Certification } from "../components/certificacion";

export const Certifications = () => {

    const cerfitications = [
        {
            title: "Tecnica Laboral en Programacion de Software",
            institution: "Campuslands",
            year: 2024
        },
        {
            title: "Tecnica en Sistemas",
            institution: "Servicio Nacional de Aprendizaje",
            year: 2023
        }
    ]

    return (
        <motion.div
            className="h-[83vh] w-[100vw] px-20 m-0 overflow-hidden flex justify-between items-center"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            <div className="w-[50vw]">
                <h2 className="text-7xl m-10 text-azul font-bold text-center">Certifications</h2>
            </div>
            <div className="h-[100%] w-[50vw] flex flex-col justify-evenly">
                {cerfitications.map((certification, index) => {
                    return (<Certification key={index} title={certification.title} institution={certification.institution} year={certification.year} />)
                })}
            </div>
        </motion.div>
    );
}