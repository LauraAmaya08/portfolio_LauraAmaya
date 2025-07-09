import React from "react";
import { motion } from "framer-motion"; 

export const Home = () => {
    return (
        <motion.div
            className=" m-0 overflow-hidden px-6"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 ">
                <div className="flex flex-col items-center md:items-start md:max-w-lg 2xl:max-w-xl">
                    <h2 className="text-4xl md:text-6xl 2xl:text-7xl text-azul font-bold text-center md:text-left mb-6">Nice To Meet You</h2>
                    <p className="text-sm md:text-base 2xl:text-lg font-outfit text-center md:text-left mb-4">
                        Hi! I'm Laura Amaya, a passionate developer. Welcome to my portfolio! Here, you'll find a collection of my work where I bring my programming skills and creative approach together to solve exciting tech challenges and bring projects to life. <br /><br />
                        I’m always eager to learn new tools and programming languages, constantly pushing myself to improve and deliver efficient, scalable solutions.<br /><br />
                        Let’s build something amazing!
                    </p>
                </div>
                <img src="icons/greet.svg" alt="Greet" className="h-[250px] md:h-[400px] 2xl:h-[550px] w-auto"/>
            </div>
        </motion.div>
    );
};