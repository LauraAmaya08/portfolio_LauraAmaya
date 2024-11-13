import React from "react";

export const Home = () => {
    return (
        <div className=" bg-[#F4F4F4] overflow-y-hidden h-[83vh] m-0">
            <div className="flex items-center justify-around">
                <div className="flex flex-col items-center  w-[600px]">
                    <h2 className=" h-10 text-7xl m-10 text-azul">Nice To Meet You</h2>
                    <p className="m-10 mt-20">Hi! I'm Laura Amaya, a passionate developer. Welcome to my portfolio! Here, you'll find a collection of my work where I bring my programming skills and creative approach together to solve exciting tech challenges and bring projects to life. <br /><br />
                        I’m always eager to learn new tools and programming languages, constantly pushing myself to improve and deliver efficient, scalable solutions. Let’s build something amazing!
                    </p>
                </div>
                <img src="icons/greet.svg" alt="Greet" className="h-[700px] w-auto"/>

            </div>

        </div>
    );
}
