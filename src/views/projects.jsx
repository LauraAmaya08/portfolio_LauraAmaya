import React from "react";
import { Project } from "../components/project";
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
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024, // menor a 1024px (tablets/laptops pequeñas)
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768, // menor a 768px (celulares)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
    const projects = [
        {
            title: "Enchanted Garden",
            description: "MySQL Database for the administration of a farm, creation of 100 queries, events, functions, procedures and triggers.",
            image: "/images/Captura desde 2024-11-22 17-34-20.png",
            technologies: [
                "/icons/mysql.svg"
            ],
            enlace: "https://github.com/LauraAmaya08/MySQLII_proyecto_LauraAmaya"
        },
        {
            title: "Glow Glam",
            description: "A makeup and skincare responsive e-commerce site with detailed product views and an interactive shopping cart.",
            image: "/images/Captura desde 2024-11-22 19-58-03.png",
            enlace: "https://github.com/LauraAmaya08/GlowGlam_funcional",
            technologies: [
                "/icons/js.svg",
                "/icons/css.svg",
                "/icons/html.svg",
            ],
        },
        {
            title: "Progresso",
            description: "A website built with JavaScript that allows users to effortlessly organize, track, and manage their entertainment resources, offering a smooth and interactive experience.",
            image: "/images/Diseño sin título.png",
            enlace: "https://github.com/LauraAmaya08/Proyecto_JavaScript_AmayaLaura",
            technologies: [
                "/icons/js.svg",
                "/icons/css.svg",
                "/icons/html.svg",
            ],
        }
    ];

    return (
        <motion.div
            className="min-h-screen w-full px-6 md:px-20 py-10 flex flex-col items-end"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            <h2 className="text-4xl md:text-6xl 2xl:text-7xl mb-10 text-azul font-bold">Projects</h2>
            <div className="w-full max-w-[95vw] md:max-w-[85vw] 2xl:max-w-[75vw] mt-10 mx-auto">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            enlace={project.enlace}
                            technologies={project.technologies}
                        />
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
};
