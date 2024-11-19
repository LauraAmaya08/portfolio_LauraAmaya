import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  return (
    <div className="bg-[#F4F4F4] p-4 h-">
      <div className="flex items-center justify-between h-full">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-auto h-[130px] ml-20"
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
      <button onClick={interactuarMenu} className="w-20 mr-20">
      <img src="icons/menu.svg" alt="Icono" className="h-10" />
      </button>
      <div
        className={`${
          abierto ? "block" : "hidden"
        } absolute top-0 left-0 bg-azul h-screen w-full flex flex-col items-start p-20 z-50`}
      >
      <button onClick={interactuarMenu} className="w-20 mr-20">
      <img src="icons/exit.svg" alt="Icono" className="h-10" />
      </button>
      <div
        className={`flex justify-around items-center flex-row-reverse h-[70vh] w-[80vw]`}
      >
        <ul className="flex flex-col">
          <li>
            <button
              onClick={() => {
                navigate("/about"), setAbierto(!abierto);
              }}
              className="text-white text-lg mt-10"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/services"), setAbierto(!abierto);
              }}
              className="text-white text-lg mt-10"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/projects"), setAbierto(!abierto);
              }}
              className="text-white text-lg mt-10"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/certifications"), setAbierto(!abierto);
              }}
              className="text-white text-lg mt-10"
            >
              Certifications
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/contact"), setAbierto(!abierto);
              }}
              className="text-white text-lg mt-10"
            >
              Contact
            </button>
          </li>
        </ul>
        <p className="text-white text-lg mt-10" >
          What you're seeing here is just the beginning..
        </p>
      </div>
      </div>
    </div>
  );
};
