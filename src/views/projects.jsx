import React from "react";
import { Project } from "../components/project"
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const projects = [
        {
            title: "Enchanted Garden",
            description: "MySQL Database for the administration of a farm, creation of 100 queries, events, functions, procedures and triggers.",
            image: "../../public/images/Captura desde 2024-11-22 17-34-20.png",
            technologies: [
                ""
            ],
            enlace: "https://github.com/LauraAmaya08/MySQLII_proyecto_LauraAmaya"
        },
        {
            title: "Glow Glam",
            description: "A makeup and skincare responsive e-commerce site with detailed product views and an interactive shopping cart.",
            image: "../../public/images/Captura desde 2024-11-22 19-58-03.png",
            enlace: "https://github.com/LauraAmaya08/GlowGlam_funcional"
        },
        {
            title: "Progresso",
            description: "A website built with JavaScript that allows users to effortlessly organize, track, and manage their entertainment resources, offering a smooth and interactive experience.",
            image: "../../public/images/Diseño sin título.png",
            enlace: "https://github.com/LauraAmaya08/Proyecto_JavaScript_AmayaLaura"
        }
    ]
    
    return(
        <motion.div
            className="h-[83vh] w-[100vw] px-20 m-0 overflow-hidden flex flex-col items-end"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            <h2 className="text-7xl m-10 text-azul font-bold">Projects</h2>
            <div className=" w-[100%] mt-10">
                <Slider 
                    {...settings}
                >
                    {projects.map((project, index) =>
                        <Project key={index} title={project.title} description={project.description} image={project.image} enlace={project.enlace}/>
                    )}
                </Slider>
            </div>
            
        </motion.div>
    )
}