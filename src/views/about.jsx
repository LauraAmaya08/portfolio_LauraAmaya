import React from "react";
import { motion } from "framer-motion";
import useVisibilidad from "../components/visibilidad";
import { Skill } from "../components/skill";

export const About = () => {
    return(
        <motion.div
                className="h-[100%] m-0"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
            <div className="flex items-center flex-row-reverse justify-evenly">
                <div className="flex flex-col md:w-[500px] 2xl:w-[600px]">
                    <h2 className="md:text-6xl 2xl:text-7xl p-8 text-azul font-bold text-left">About Me</h2>
                    <p className="m-10 mt-0 font-outfit md:text-base 2xl:text-lg">I focus on creating simple, effective solutions, always looking for the most efficient way to tackle problems and improve processes. My leadership, resourcefulness, and creative problem-solving skills help me deliver agile solutions in different situation. <br /> <br />
                    I enjoy working with teams, sharing ideas, and learning from others to take projects to the next level. I'm always looking for ways to improve, adapt quickly, and keep innovating.
                    <br /> <br />
                    If you're looking for someone who can keep up with the pace, solve problems fast, and lead projects with clarity, I'm ready to collaborate!
                    </p>
                </div>
                <img src="images/1000007025_dfc68f9555c53e8a2a2beac3ad5486f5-3_7_2024, 9_22_09 p.m..jpg" alt="Me" className="md:w-[500px] md:h-[500px] 2xl:w-[600px] 2xl:h-[600px] rounded-full object-cover scale-80"/>
                <img src="icons/rest.svg" alt="Rest" className="w-[130px] h-[110px] absolute top-[15%] md:left-[32%] 2xl:left-[34%]"/>
            </div>
            <MissionVision/>
            <Tech/>
        </motion.div>
    )
}


const MissionVision = () => {
    const visible = useVisibilidad("mission-vision");
    return (
        <motion.div
        className="flex items-center flex-row-reverse justify-evenly h-[90vh]"
        initial={{ opacity: 0, scale: 1 }}
        animate={{opacity: visible ? 1 : 0, scale: visible ? 1 : 1 }}
        transition={{ duration: 1 }}
        id="mission-vision" 
        >
            <div className="flex flex-col w-[600px] items-center h-[500px]">
                <h2 className="md:text-7xl 2xl:text-8xl p-8 text-azul font-bold text-left">Vision</h2>
                <p className="m-10 mt-1 font-outfit md:text-xl 2xl:text-2xl text-center">
                Create a positive impact through dynamic technological solutions that simplify daily life and processes, fostering a world where digital innovation drives personal and social growth.
                </p>
            </div>
            <div className="flex flex-col w-[600px] items-center h-[500px]">
                <h2 className="md:text-7xl 2xl:text-8xl p-8 text-azul font-bold text-left">Mission</h2>
                <p className="m-10 mt-1 font-outfit md:text-xl 2xl:text-2xl text-center">
                Develop tools that blend leadership and collaboration to tackle technological challenges, from projects that empower emerging countries to initiatives that build trust in artificial intelligence as a force for positive change.
                </p>
            </div>
            <div className="absolute flex justify-center mt-[50vh]">
            <img src="icons/visionMission.svg" alt="Vision Mission" className="h-[250px] w-auto" />
            </div>
        </motion.div>
    )
}

const Tech = () => {
    const visible = useVisibilidad("tech");
    return (
        <motion.div
        className="flex items-center text-center flex-col h-[90vh] p-6"
        initial={{ opacity: 0, scale: 1 }}
        animate={{opacity: visible ? 1 : 0, scale: visible ? 1 : 1 }}
        transition={{ duration: 1 }}
        id="tech" 
        >
            <h2 className="md:text-7xl 2xl:text-8xl top-0 text-azul font-bold text-center">Skills</h2>
            
            <div className="flex justify-evenly h-[500px] w-full items-center mt-10">
            <div>
                <h3 className="font-bold text-xl mb-4 w-[400px] text-center">Frontend</h3>
                <div className="h-[400px] w-[400px] grid grid-cols-3">
                    <Skill nombre="HTML" src="icons/html.svg" />
                    <Skill nombre="CSS" src="icons/css.svg" />
                    <Skill nombre="React" src="icons/react.svg" />
                    <Skill nombre="JavaScript" src="icons/js.svg" />
                    <Skill nombre="Tailwind" src="icons/tailwind.svg" />
                    <Skill nombre="Angular" src="icons/angular.svg" />
                </div>
                </div>
                <div>
                <h4 className="font-bold text-xl mb-4">Backend</h4>
                <div className="h-[400px] w-[400px] grid grid-cols-3">
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