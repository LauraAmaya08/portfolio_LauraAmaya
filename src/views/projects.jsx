import React from "react";
import { Project } from "../components/project"
import { motion } from "framer-motion"; 

export const Projects = () => {

    const projects = [
        {
            title: "Enchanted Garden",
            description: "MySQL Database",
            image: "/images/project1.jpg"
        },
        {
            title: "Enchanted Garden",
            description: "MySQL Database",
            image: "/images/project1.jpg"
        },
        {
            title: "Enchanted Garden",
            description: "MySQL Database",
            image: "/images/project1.jpg"
        },
        {
            title: "Enchanted Garden",
            description: "MySQL Database",
            image: "/images/project1.jpg"
        },
        {
            title: "Enchanted Garden",
            description: "MySQL Database",
            image: "/images/project1.jpg"
        }
    ]
    
    return(
        <motion.div
            className="h-[83vh] w-[100vw] px-10 m-0 overflow-hidden flex flex-col items-end"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            <h2 className="text-7xl m-10 text-azul font-bold">Projects</h2>
            <div className="h-[30vh] w-[100%] flex overflow-x-scroll gap-10 mt-10">
                {projects.map((project, index) =>
                    <Project key={index} title={project.title} description={project.description} image={project.image} />)}
            </div>
        </motion.div>
    )
}