import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

export const Header = () => {
  return (
    <div className="bg-[#F4F4F4] p-4">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="w-auto h-[130px] ml-20"/>
        </Link>
        <Menu />
      </div>
    </div>
  );
};

const Menu = () => {
  const [abierto, setAbierto] = useState(false);
  const navigate = useNavigate();
  
  const interactuarMenu = () => {
    setAbierto(!abierto);
  };

  return (
    <div>
      <button onClick={interactuarMenu} className="w-20 mr-20">
        <img src="icons/menu.svg" alt="Icono" className="h-10" />
      </button>

      <motion.div
        initial={{ opacity: 1, x: '-100%' }} 
        animate={{ opacity: abierto ? 1 : 0, x: abierto ? 0 : '-100%' }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 bg-azul min-h-screen w-full flex flex-col p-20 z-50 overflow-x-hidden"      >
        <button onClick={interactuarMenu} className="w-20 mr-20">
          <img src="icons/exit.svg" alt="Icono" className="h-10 absolute right-[135px] top-[60px]" />
        </button>
        <div className="flex justify-between items-center flex-row-reverse h-[80vh] w-[80vw]">
          <ul className="flex flex-col space-y-6">
            <li className="w-full border-b-2 border-white pb-2">
              <button
                onClick={() => {
                  navigate("/about");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit pb-2 text-right"
              >
                About
              </button>
            </li>
            <li className="w-full border-b-2 border-white pb-2">
              <button
                onClick={() => {
                  navigate("/services");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit pb-2 text-right"
              >
                Services
              </button>
            </li>
            <li className="w-full border-b-2 border-white pb-2">
              <button
                onClick={() => {
                  navigate("/projects");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit pb-2 text-right"
              >
                Projects
              </button>
            </li>
            <li className="w-full border-b-2 border-white pb-2">
              <button
                onClick={() => {
                  navigate("/certifications");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit pb-2 text-right"
              >
                Certifications
              </button>
            </li>
            <li className="w-full border-b-2 border-white pb-2">
              <button
                onClick={() => {
                  navigate("/contact");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit pb-2 text-right"
              >
                Contact
              </button>
            </li>
          </ul>
          <p className="text-white text-3xl mt-10 font-bold">
            What you're seeing here is just the beginning..
          </p>
        </div>
      </motion.div>
    </div>
  );
};
