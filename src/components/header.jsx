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
        <div className="flex justify-between items-center flex-row-reverse h-[75vh] w-[80vw]">
          <ul className="flex flex-col w-[25%]">
            <li className="border-b-[1px] border-white text-right">
              <button
                onClick={() => {
                  navigate("/about");
                  setAbierto(!abierto);
                }}
                className="text-white text-2xl mt-10 font-outfit p-2"
              >
                About
              </button>
            </li>
            <li className="border-b-[1px] border-white text-right">
              <button
                onClick={() => {
                  navigate("/services");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit pb-2"
              >
                Services
              </button>
            </li>
            <li className="border-b-[1px] border-white text-right">
              <button
                onClick={() => {
                  navigate("/projects");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit p-2"
              >
                Projects
              </button>
            </li>
            <li className="border-b-[1px] border-white text-right">
              <button
                onClick={() => {
                  navigate("/certifications");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit p-2"
              >
                Certifications
              </button>
            </li>
            <li className="border-b-[1px] border-white text-right">
              <button
                onClick={() => {
                  navigate("/contact");
                  setAbierto(false);
                }}
                className="text-white text-2xl mt-10 font-outfit p-2"
              >
                Contact
              </button>
            </li>
          </ul>
          <p className="text-white text-3xl mt-10 font-bold pl-3">
            What you're seeing here is just the beginning..
          </p>
        </div>
        <div className="absolute h-[250px] bottom-0 w-full overflow-hidden left-1/2 transform -translate-x-1/2">
      <img src="icons/searching.svg" alt="Searching.." className="h-[380px] w-full"
  />
</div>
      </motion.div>
    </div>
  );
};
