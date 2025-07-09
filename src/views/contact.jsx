import React from "react";
import { motion } from "framer-motion";
import { Contacto } from "../components/contacto";

export const Contact = () => {
    return (
        <motion.div
            className="min-h-screen w-full m-0 px-6 md:px-20 py-10 flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            {/* Imagen */}
            <img
                src="icons/contact.svg"
                alt="Contact illustration"
                className="h-[250px] md:h-[500px] 2xl:h-[650px] w-auto"
            />

            {/* Contenido de texto + contactos */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-xl">
                <h2 className="text-5xl md:text-7xl 2xl:text-8xl text-azul font-bold mb-6">
                    Contact
                </h2>
                <p className="font-outfit text-sm md:text-base 2xl:text-lg mb-6">
                    Got an idea or project in mind? <br /><br />
                </p>
                <Contacto informarcion="laurasofiaamayacasado@gmail.com" src="icons/mail.svg" />
                <a href="https://www.linkedin.com/in/laura-amaya-bb22282b8/" target="_blank" rel="noopener noreferrer">
                    <Contacto informarcion="Laura Amaya" src="icons/linkedln.svg" />
                </a>
                <a href="https://github.com/LauraAmaya08" target="_blank" rel="noopener noreferrer">
                    <Contacto informarcion="LauraAmaya08" src="icons/github.svg" />
                </a>
            </div>
        </motion.div>
    );
};
