import React from "react";

export const About = () => {
    return(
        <div className="h-[100%] m-0">
            <div className="flex items-center flex-row-reverse justify-evenly">
                <div className="flex flex-col w-[600px]">
                    <h2 className="text-7xl p-8 text-azul font-bold text-left">About Me</h2>
                    <p className="m-10 mt-0 font-outfit text-lg">I focus on creating simple, effective solutions, always looking for the most efficient way to tackle problems and improve processes. My leadership, resourcefulness, and creative problem-solving skills help me deliver agile solutions in different situation. <br /> <br />
                    I enjoy working with teams, sharing ideas, and learning from others to take projects to the next level. I'm always looking for ways to improve, adapt quickly, and keep innovating.
                    <br /> <br />
                    If you're looking for someone who can keep up with the pace, solve problems fast, and lead projects with clarity, I'm ready to collaborate!
                    </p>
                </div>
                <img src="images/1000007025_dfc68f9555c53e8a2a2beac3ad5486f5-3_7_2024, 9_22_09 p.m..jpg" alt="Me" className="w-[600px] h-[600px] rounded-full object-cover scale-80"/>
                <img src="icons/rest.svg" alt="Rest" className="w-[130px] h-[110px] absolute top-[15%] left-[34%]"/>
            </div>
            <MissionVision/>
        </div>
    )
}


const MissionVision = () => {
    return (
        <div className="flex items-center flex-row-reverse justify-around mt-[10%] h-[100vh]">
            <div className="flex flex-col w-[600px] items-center">
                <h2 className="text-7xl p-8 text-azul font-bold text-left">Vision</h2>
                <p className="m-10 mt-0 font-outfit text-lg">
                Create a positive impact through dynamic technological solutions that simplify daily life and processes, fostering a world where digital innovation drives personal and social growth.
                </p>
            </div>
            <div className="flex flex-col w-[600px] items-center">
                <h2 className="text-7xl p-8 text-azul font-bold text-left">Mission</h2>
                <p className="m-10 mt-0 font-outfit text-lg">
                Develop tools that blend leadership and collaboration to tackle technological challenges, from projects that empower emerging countries to initiatives that build trust in artificial intelligence as a force for positive change.
                </p>
            </div>
        </div>
    )
}

