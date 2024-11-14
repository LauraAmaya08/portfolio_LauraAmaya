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
            className="w-auto h-[130px] ml-2"
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
        className="flex justify-between items-center w-20 mr-20 p-2"
      >
        Menú
        <img src="icons/menu.svg" alt="Icono" className="h-[30px]" />
      </button>
      <ul
        className={`${
          abierto ? "block" : "hidden"
        } absolute top-0 left-0 bg-azul h-screen w-full`}
      >
        <li>
        <button
        onClick={interactuarMenu}
        className="flex justify-between items-center w-20 mr-20 p-2"
      >
        Menú
        <img src="icons/menu.svg" alt="Icono" className="h-[30px]" />
      </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/about")}
            className="text-white text-lg"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/services")}
            className="text-white text-lg"
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/projects")}
            className="text-white text-lg"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/certifications")}
            className="text-white text-lg"
          >
            Certifications
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/contact")}
            className="text-white text-lg"
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};
