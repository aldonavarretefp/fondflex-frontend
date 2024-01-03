import { useState } from "react";
import logoImg from "./../img/FondflexLogo50x50.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    return (
      <nav className="fixed w-full flex items-center flex-col md:flex-row justify-between bg-white p-6">
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
                <Link
                  to="/"
                  className="text-accent hover:bg-accent rounded-r-lg transition-colors duration-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Pagina principal
                </Link>
                <Link to="/simular-creditos"
                  className="mt-1 text-accent hover:bg-accent rounded-r-lg transition-colors duration-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium md:mt-0 md:ml-4"
                  >
                  Simular créditos
                  </Link>
                  
                <NavLink
                  to="/elimina-tu-deuda"
                  className={({ isActive }) => ` ${isActive ? "underline" : "text-blue"} mt-1 text-accent  hover:bg-accent rounded-r-lg transition-colors duration-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium md:mt-0 md:ml-4` }
                  // className={`${(isActive:) => {} } mt-1 text-accent hover:bg-accent rounded-r-lg transition-colors duration-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium md:mt-0 md:ml-4`}
                >
                  Elimina tu deuda
                </NavLink>
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="bg-[#f6f0f0] text-accent hover:bg-accent  transition-colors duration-100 hover:text-white px-3 py-2 rounded-full text-sm font-medium"
            >
              Ingresar
            </Link>
            <a
              href="#"
              className="ml-2 bg-accent text-white hover:bg-accent transition-colors duration-100 hover:text-white px-3 py-2 rounded-full text-sm font-medium"
            >
              Regístrate
            </a>
          </div>
        </div>
      </nav>
    );
  };
  