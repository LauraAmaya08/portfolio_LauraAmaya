import React from "react";
import { motion } from "framer-motion"; 
import { Certification } from "../components/certificacion";

export const Certifications = () => {

    const cerfitications = [
        {
            title: "EF English Certificate",
            institution: "Education First",
            year: 2024,
            image: "images/AfBg_wRn_400x400.jpg"
        },
        {
            title: "Tecnica en Sistemas",
            institution: "Servicio Nacional de Aprendizaje",
            year: 2023,
            image: "images/9010.jpg"
        }
    ]

    return (
    <motion.div
    className="min-h-screen w-full px-6 md:px-20 mt-0 pt-4 flex flex-col md:flex-row items-center justify-center gap-10"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            <div className="w-full md:w-1/2 text-center">
                <h2 className="text-4xl md:text-6xl 2xl:text-7xl text-azul font-bold">Certifications</h2>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6 items-center">
                {cerfitications.map((certification, index) => {
                    return (<Certification key={index} title={certification.title} institution={certification.institution} year={certification.year} image={certification.image} />)
                })}
            </div>
        </motion.div>
    );
}