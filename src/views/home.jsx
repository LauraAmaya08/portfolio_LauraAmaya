import React from "react";
import { motion } from "framer-motion"; 

export const Home = () => {
    return (
        <motion.div
            className="h-[83vh] m-0 overflow-hidden"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            <div className="flex items-center md:justify-evenly 2xl:justify-around">
                <div className="flex flex-col items-center md:w-[500px] 2xl:w-[600px]">
                    <h2 className="md:text-6xl 2xl:text-7xl m-10 text-azul font-bold">Nice To Meet You</h2>
                    <p className="m-10 mt-0 font-outfit md:text-base 2xl:text-lg">
                        Hi! I'm Laura Amaya, a passionate developer. Welcome to my portfolio! Here, you'll find a collection of my work where I bring my programming skills and creative approach together to solve exciting tech challenges and bring projects to life. <br /><br />
                        I’m always eager to learn new tools and programming languages, constantly pushing myself to improve and deliver efficient, scalable solutions.<br /><br />
                        Let’s build something amazing!
                    </p>
                </div>
                <img src="icons/greet.svg" alt="Greet" className="md:h-[500px] 2xl:h-[700px] w-auto"/>
            </div>
        </motion.div>
    );
};