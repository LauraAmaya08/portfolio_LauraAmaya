import React from "react";
import { motion } from "framer-motion";
import useVisibilidad from "../components/visibilidad";
import { Skill } from "../components/skill";

export const About = () => {
    return(
        <motion.div
                className="h-[100%] m-0 px-4"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
            <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-evenly">
                <div className="flex flex-col max-w-xl">
                    <h2 className="text-4xl md:text-6xl 2xl:text-7xl p-4 text-azul font-bold text-lef">About Me</h2>
                    <p className="font-outfit text-sm md:text-base 2xl:text-lg px-4 md:px-10">I focus on creating simple, effective solutions, always looking for the most efficient way to tackle problems and improve processes. My leadership, resourcefulness, and creative problem-solving skills help me deliver agile solutions in different situation. <br /> <br />
                    I enjoy working with teams, sharing ideas, and learning from others to take projects to the next level. I'm always looking for ways to improve, adapt quickly, and keep innovating.
                    <br /> <br />
                    If you're looking for someone who can keep up with the pace, solve problems fast, and lead projects with clarity, I'm ready to collaborate!
                    </p>
                </div>
                <img src="images/1000007025_dfc68f9555c53e8a2a2beac3ad5486f5-3_7_2024, 9_22_09 p.m..jpg" alt="Me" className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] 2xl:w-[600px] 2xl:h-[600px] rounded-full object-cover mt-6 md:mt-0"/>
            </div>
            <br />
            <MissionVision/>
            <br />
            <Tech/>
        </motion.div>
    )
}


const MissionVision = () => {
    const visible = useVisibilidad("mission-vision");
    return (
        <motion.div
        className="flex flex-col items-center justify-evenly gap-8 p-4 py-10"
        initial={{ opacity: 0, scale: 1 }}
        animate={{opacity: visible ? 1 : 0, scale: visible ? 1 : 1 }}
        transition={{ duration: 1 }}
        id="mission-vision" 
        >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-20 items-start">
            <div className="flex flex-col max-w-md items-center my-6 md:my-0">
                <h2 className="text-4xl md:text-6xl text-azul font-bold text-center">Vision</h2>
                <p className="text-center text-sm md:text-xl mt-4 font-outfit">
                Create a positive impact through dynamic technological solutions that simplify daily life and processes, fostering a world where digital innovation drives personal and social growth.
                </p>
            </div>
            <div className="flex flex-col max-w-md items-center my-6 md:my-0">
                <h2 className="text-4xl md:text-6xl text-azul font-bold text-center">Mission</h2>
                <p className="text-center text-sm md:text-xl mt-4 font-outfit">
                Develop tools that blend leadership and collaboration to tackle technological challenges, from projects that empower emerging countries to initiatives that build trust in artificial intelligence as a force for positive change.
                </p>
            </div>
            </div>
            <div className="rrelative w-full flex justify-center mt-10 md:mt-0">
            <img src="icons/visionMission.svg" alt="Vision Mission" className="h-[250px] w-auto" />
            </div>
        </motion.div>
    )
}

const Tech = () => {
    const visible = useVisibilidad("tech");
    return (
        <motion.div
        className="flex flex-col items-center text-center px-4 py-10"
        initial={{ opacity: 0, scale: 1 }}
        animate={{opacity: visible ? 1 : 0, scale: visible ? 1 : 1 }}
        transition={{ duration: 1 }}
        id="tech" 
        >
            <h2 className="text-4xl md:text-6xl text-azul font-bold mt-6">Skills</h2>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10 w-full">
            <div>
                <h3 className="font-bold text-xl mb-4 text-center">Frontend</h3>
                <div className="grid grid-cols-3 gap-4 w-[280px] md:w-[400px]">
                    <Skill nombre="HTML" src="icons/html.svg" />
                    <Skill nombre="CSS" src="icons/css.svg" />
                    <Skill nombre="React" src="icons/react.svg" />
                    <Skill nombre="JavaScript" src="icons/js.svg" />
                    <Skill nombre="Tailwind" src="icons/tailwind.svg" />
                    <Skill nombre="Angular" src="icons/angular.svg" />
                </div>
                </div>
                <div className="mb-4">
                <h4 className="font-bold text-xl mb-4 text-center">Backend</h4>
                <div className="grid grid-cols-3 gap-4 w-[280px] md:w-[400px]">
                    <Skill nombre="Java" src="icons/java.svg" />
                    <Skill nombre="Python" src="icons/python.svg" />
                    <Skill nombre="PostgresSQL" src="icons/postgress.svg" />
                    <Skill nombre="Spring" src="icons/spring.svg" />
                    <Skill nombre="MySQL" src="icons/mysql.svg" />
                </div>
                </div>
            </div>
        </motion.div>
    )
}