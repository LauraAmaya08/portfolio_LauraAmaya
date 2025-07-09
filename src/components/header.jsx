import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="bg-[#F4F4F4] px-4 py-2 sm:px-8 md:px-16 lg:px-20">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-auto h-[130px] ml-4 md:ml-20"
          />
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
      <button
        onClick={interactuarMenu}
        className="w-20 mr-4 md:mr-20 z-50 relative"
      >
        <img src="icons/menu.svg" alt="Icono" className="h-10" />
      </button>

      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: abierto ? 1 : 0, x: abierto ? 0 : "-100%" }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 h-screen w-full bg-[#001F3F]  z-40 flex flex-col overflow-y-auto transition-all duration-300 ${
          abierto ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Botón cerrar */}
        <button
          onClick={interactuarMenu}
          className="absolute top-6 right-6 z-50"
        >
          <img src="icons/exit.svg" alt="Cerrar" className="h-10" />
        </button>

        {/* Contenido del menú */}
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center w-full px-6 md:px-20 pt-24 gap-10 flex-grow">
          <ul className="flex flex-col w-full md:w-[25%] md:items-end">
            {["about", "projects", "certifications", "contact"].map(
              (ruta, idx) => (
                <li
                  key={ruta}
                  className="border-b border-white text-right w-full"
                >
                  <button
                    onClick={() => {
                      navigate(`/${ruta}`);
                      setAbierto(false);
                    }}
                    className="text-white text-2xl mt-10 font-outfit p-2 w-full text-right"
                  >
                    {ruta.charAt(0).toUpperCase() + ruta.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>

          <p className="text-white text-3xl font-bold text-left md:text-right">
            What you're seeing here is just the beginning..
          </p>
        </div>

        {/* Imagen inferior */}
        <div className="w-full flex justify-center mt-10 mb-6 pointer-events-none">
          <img
            src="icons/searching.svg"
            alt="Searching.."
            className="h-[150px] w-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};
