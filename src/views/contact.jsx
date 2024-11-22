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
                <div className="flex justify-center items-center w-[500px] h-[600px]">
                    <div className="flex flex-col items-end">
                    <h2 className="text-[120px] text-azul font-bold text-right m-0">Contact</h2>
                    <p className=" font-outfit text-[25px]">
                    Got an idea or project in mind? <br /><br />
                    </p>
                    <Contacto informarcion="laurasofiaamayacasado@gmail.com" src="icons/mail.svg" />
                    <a href="https://www.linkedin.com/in/laura-amaya-bb22282b8/"><Contacto informarcion="Laura Amaya" src="icons/linkedln.svg" /></a>
                    <a href="https://github.com/LauraAmaya08"><Contacto informarcion="LauraAmaya08" src="icons/github.svg" /></a>
                    </div>
                </div>
                <img src="icons/contact.svg" alt="Greet" className="h-[700px] w-auto"/>
        </motion.div>
    );
};


