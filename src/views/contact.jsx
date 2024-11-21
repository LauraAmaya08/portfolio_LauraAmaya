import React from "react";
import { motion } from "framer-motion";
import { Contacto } from "../components/contacto";

export const Contact = () => {
    return (
        <motion.div
            className="h-[83vh] m-0 overflow-hidden flex items-start justify-evenly flex-row-reverse"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
                <div className="flex flex-col items-center w-[500px] h-[700px]">
                    <h2 className="text-7xl mt-[20%] text-azul font-bold text-right w-full">Contact</h2>
                    <p className="mt-7 font-outfit text-lg text-right">
                    Got an idea or project in mind? <br /><br />
                    </p>
                    <Contacto informarcion="laurasofiaamayacasado@gmail.com" src="icons/html.svg" />
                    <Contacto informarcion="Laura Amaya" src="icons/css.svg" />
                    <Contacto informarcion="LauraAmaya08" src="icons/react.svg" />
                </div>
                <img src="icons/contact.svg" alt="Greet" className="h-[700px] w-auto"/>
        </motion.div>
    );
};