import React from "react";

import { useState } from "react";
import logoImg from "./../img/FondflexLogo50x50.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center flex-col md:flex-row justify-between bg-white-500 p-6">
      <div className="flex flex-row items-center justify-between w-full md:w-5">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logoImg} alt="Fondflex" />
            </div>
          </div>
          {/* Hamburger Menu */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center px-3 py-2 border rounded text-accent border-accent"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
      </div>
      {/* Navbar Links */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } w-full flex-grow md:flex md:items-center md:w-auto md:mx-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {/* Navigation Links */}
          <div
            className={`md:flex items-center ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col mt-4 md:flex-row md:mt-0 md:ml-10 md:items-baseline">
              <a
                href="#"
                className="text-[#fb7014] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Pagina principal
              </a>
              <a
                href="#"
                className="mt-1 text-[#fb7014] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium md:mt-0 md:ml-4"
              >
                Simular inversiones
              </a>
              <a
                href="#"
                className="mt-1 text-[#fb7014] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium md:mt-0 md:ml-4"
              >
                Simular créditos
              </a>
              <a
                href="#"
                className="mt-1 text-[#fb7014] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium md:mt-0 md:ml-4"
              >
                Elimina tu deuda
              </a>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="bg-[#f6f0f0] text-[#fb7014] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full text-sm font-medium"
          >
            Ingresar
          </a>
          <a
            href="#"
            className="ml-2 bg-[#fb7014] text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full text-sm font-medium"
          >
            Regístrate
          </a>
        </div>
      </div>
    </nav>
  );
};

const Principal = () => {
  return <Navbar />;
};

export default Principal;
